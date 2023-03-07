import * as React from 'react';
import classnames from 'classnames';
import shortid from 'shortid';
import { useEffect, useRef, useState } from 'react';
import styles from './ContextMenu.scss';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Tooltip, TooltipProps, hideTooltip, showTooltip } from '../../overlays/Tooltip/Tooltip';
import { ITextButtonProps, TextButton } from '../../buttons/TextButton/TextButton';
import { ThreeDotButton } from '../../buttons/ThreeDotButton/ThreeDotButton';
import { ArrowRightIcon, CheckmarkIcon } from '../../icons/Icons';
import useUsingMouse from '../../../common/helpers/useUsingMouse';

export interface IMenuItem {
	color?: 'red' | 'none';
	className?: string;
	content?: React.ReactNode;
	label?: string;
	onClick?: FunctionGeneric;
	enabled?: boolean;
	type?: 'normal' | 'separator' | 'checkbox';
	submenu?: IMenuItem[];
	checked?: boolean;
}

export interface IContextMenuProps extends Omit<TooltipProps, 'content' | 'useClickInsteadOfHover' | 'ref'> {
	/** className for the list items' container */
	classNameList?: string;
	/** className for an individual list item */
	classNameListItem?: string;
	/** array of menu items */
	items: IMenuItem[];
	/** whether to have background behind 3 dots - set to false for low key 3 dot dropdowns */
	noBG?: boolean;
	/** whether to have background behind 3 dots on hover only */
	bgOnHover?: boolean;
	/** Private property used to render submenus recursively, should be no need to set this */
	isSubmenu?: boolean;
	/** Private property used to render submenus recursively, should be no need to set this */
	parentMenuId?: string;
}

interface ContextMenuTextButtonProps extends ITextButtonProps {
	item: IMenuItem;
	menuToClose: string;
}

const ContextMenuTextButton = ({ item, menuToClose, ...restProps }: ContextMenuTextButtonProps) => {
	const onClickItem = (event: React.MouseEvent<HTMLElement, MouseEvent>, menuItem: IMenuItem) => {
		event.preventDefault();
		event.stopPropagation();
		if (menuItem.onClick) {
			menuItem.onClick.call(null);
			hideTooltip(menuToClose);
		}
	};

	return (
		<TextButton
			className={classnames(styles.ContextMenu_Item_TextButton, {
				[styles.ContextMenu_Item_TextButton__Red]: item.color === 'red',
				[styles.ContextMenu_Item_TextButton__Checkbox]: item.type === 'checkbox',
				[styles.ContextMenu_Item_TextButton__Checked]: item.checked && item.type === 'checkbox',
				[styles.ContextMenu_Submenu_Item_TextButton]: !!item.submenu,
			})}
			disabled={item.enabled === undefined ? false : !item.enabled}
			intent={item.color === 'red' ? 'destructive' : 'default'}
			onClick={(event) => !item.submenu && onClickItem(event, item)}
			tabIndex={-1}
			{...restProps}
		>
			{item.label}
			{item.content}
		</TextButton>
	);
};

const ContextMenu = (props: IContextMenuProps) => {
	const {
		className,
		classNameList,
		classNameListItem,
		items,
		onShow,
		onHide,
		noBG,
		bgOnHover,
		id,
		isSubmenu,
		children,
		onKeyDown,
		parentMenuId,
		...otherProps
	} = props;

	const menuId = useRef(id ?? `${'contextMenu'}-${shortid.generate()}`);

	const [isShowing, setIsShowing] = useState(false);
	const { usingMouse } = useUsingMouse();

	const triggerRef = useRef<HTMLElement | null>(null);
	const contextMenuRef = useRef<HTMLElement | null>(null);

	const [, setFocusedItemIndex] = useState(-1);
	const enabledItemsWithRefs = useRef<Array<(IMenuItem & { ref: HTMLElement }) | undefined>>([]);

	const renderItem = (item: IMenuItem, index: number) => {
		const maybeSetItemRef = (el: HTMLElement) => {
			enabledItemsWithRefs.current[index] = item.enabled === false ? undefined : { ...item, ref: el };
		};

		const parentMenu = parentMenuId ?? menuId.current;

		if (item.submenu) {
			return (
				<ContextMenu
					items={item.submenu}
					position="right-start"
					className={styles.ContextMenu__Submenu}
					popperOffsetModifier={{ offset: [-15, 15] }}
					stopPopperClickPropagation
					id={`${parentMenu}-submenu${index}`}
					isSubmenu
					parentMenuId={parentMenu}
				>
					<ContextMenuTextButton
						item={item}
						rightIcon={ArrowRightIcon}
						menuToClose={parentMenu}
						innerRef={maybeSetItemRef}
						aria-label="Open context menu submenu"
						aria-haspopup
					/>
				</ContextMenu>
			);
		}

		switch (item.type) {
			case 'separator':
				return <div className={styles.ContextMenu_Divider} />;
			case 'checkbox':
				return (
					<ContextMenuTextButton
						item={item}
						menuToClose={parentMenu}
						leftIcon={item.checked && CheckmarkIcon}
						innerRef={maybeSetItemRef}
					/>
				);
			default:
				return <ContextMenuTextButton item={item} menuToClose={parentMenu} innerRef={maybeSetItemRef} />;
		}
	};

	const content = (
		<ul className={classnames(styles.ContextMenu_Items, 'ContextMenu_Items', classNameList)} role="menu">
			{items
				.filter((item: IMenuItem) => Object.keys(item).length !== 0)
				.map((item: IMenuItem, i: number) => (
					<li
						// eslint-disable-next-line react/no-array-index-key
						key={`${menuId.current}-${i}`}
						className={classnames(styles.ContextMenu_Item, classNameListItem, item.className)}
						role={item.type !== 'separator' ? 'menuitem' : 'separator'}
					>
						{renderItem(item, i)}
					</li>
				))}
		</ul>
	);

	const handleEscapeOrTab = (e: KeyboardEvent) => {
		if (e.key === 'Escape' || e.key === 'Tab') {
			triggerRef.current?.focus();
			hideTooltip(menuId.current);
		}
	};

	useEffect(() => {
		if (isShowing) {
			document.addEventListener('keydown', handleEscapeOrTab);
		}

		return () => document.removeEventListener('keydown', handleEscapeOrTab);
	}, [isShowing]);

	const focusNextItem = () => {
		setFocusedItemIndex((prev) => {
			const arr = enabledItemsWithRefs.current;
			for (let i = prev + 1; i < arr.length; i += 1) {
				const item = arr[i];
				if (item && item.enabled !== false) {
					// The 1ms timeout handles focusing a submenu's first item after the 1ms transition open
					setTimeout(() => item.ref.focus(), 1);
					return i;
				}
			}

			return prev;
		});
	};

	const focusPreviousItem = () => {
		setFocusedItemIndex((prev) => {
			const arr = enabledItemsWithRefs.current;
			for (let i = prev - 1; i >= 0; i -= 1) {
				const item = arr[i];
				if (item && item.enabled !== false) {
					item.ref.focus();
					return i;
				}
			}

			return prev;
		});
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
		e.persist();
		onKeyDown?.(e);

		switch (e.key) {
			case 'ArrowDown':
			case 'ArrowUp':
				if (isShowing) {
					document.body.classList.remove('using-mouse');
					if (e.key === 'ArrowDown') {
						focusNextItem();
					} else {
						focusPreviousItem();
					}

					if (isSubmenu) {
						e.stopPropagation();
					}
				}
				break;
			case 'ArrowRight':
				if (isSubmenu) {
					e.stopPropagation();
					showTooltip(menuId.current);
				}
				break;
			case 'ArrowLeft':
				if (isSubmenu && !e.currentTarget.contains(e.target as Node)) {
					e.stopPropagation();
					hideTooltip(menuId.current);
					(contextMenuRef.current?.firstChild as HTMLElement)?.focus();
				}
				break;
			default:
		}
	};

	return (
		<Tooltip
			className={classnames(styles.ContextMenu, className)}
			popperVisualContainerClassName={styles.ContextMenu_PopperVisualContainer}
			onShow={() => {
				onShow?.call(null);
				setIsShowing(true);
				if (!isSubmenu) {
					triggerRef.current?.focus();
				} else if (!usingMouse) {
					focusNextItem();
				}
			}}
			onHide={() => {
				onHide?.call(null);
				setIsShowing(false);
				setFocusedItemIndex(-1);
			}}
			useClickInsteadOfHover
			id={menuId.current}
			onKeyDown={handleKeyDown}
			content={content}
			ref={contextMenuRef}
			{...otherProps}
		>
			{children ?? (
				<ThreeDotButton
					data-testid="ThreeDotButton"
					innerRef={(el) => {
						triggerRef.current = el;
					}}
					aria-label="Open context menu"
					active={isShowing}
					noBG={noBG}
					bgOnHover={bgOnHover}
					aria-haspopup
				/>
			)}
		</Tooltip>
	);
};

ContextMenu.defaultProps = {
	noAnimations: true,
	items: [],
	position: 'bottom-start',
	hideArrow: true,
	showDelay: 0,
	hideDelay: 0,
} as Partial<IContextMenuProps>;

export default ContextMenu;

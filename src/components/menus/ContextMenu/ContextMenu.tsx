import * as React from 'react';
import classnames from 'classnames';
import * as styles from './ContextMenu.scss';
import { DotsIcon } from '../../icons/Icons';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Tooltip, TooltipProps } from '../../overlays/Tooltip/Tooltip';
import { PrimaryButton } from '../../buttons/PrimaryButton/PrimaryButton';
import { TextButton } from '../../buttons/TextButton/TextButton';
import classNames from 'classnames';

export interface IMenuItem {
    color?: 'red' | 'none';
    className?: string;
    content?: React.ReactNode;
    label?: string;
    onClick?: FunctionGeneric;
    enabled?: boolean;
    type?: 'normal' | 'separator';
}

export interface IContextMenuProps extends Omit<TooltipProps, 'content'> {
    /** className for the list items' container */
    classNameList?: string;
    /** className for an individual list item */
    classNameListItem?: string;
    /** array of menu items */
    items: IMenuItem[];
	/** whether to have background behind 3 dots - set to false for low key 3 dot dropdowns */
	noBG?: boolean;
}

const ContextMenu = (props: IContextMenuProps) => {
    const { className, classNameList, classNameListItem, items, onShow, onHide, noBG, ...otherProps } = props;

    const onClickItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: IMenuItem) => {
        item.onClick?.call(null);
        event.stopPropagation();
    };

    const [isShowing, setIsShowing] = React.useState(false);

    const content = (
        <ul className={classnames(styles.ContextMenu_Items, 'ContextMenu_Items', classNameList)}>
            {items
                .filter((item: IMenuItem) => Object.keys(item).length !== 0)
                .map((item: IMenuItem, i: number) => (
                    <li key={i} className={classnames(styles.ContextMenu_Item, classNameListItem, item.className)}>
                        {item.type === 'separator' ? (
                            <div className={styles.ContextMenu_Divider}></div>
                        ) : (
                            <TextButton
                                className={item.color !== 'red' ? styles.ContextMenu_Item_TextButton : ''}
                                onClick={(event) => onClickItem(event, item)}
                                disabled={item.enabled === undefined ? false : !item.enabled}
                                intent={item.color === 'red' ? 'destructive' : 'default'}
                                style={{ flexGrow: 1, padding: '5px 0' }}
                            >
                                {item.label}
                                {item.content}
                            </TextButton>
                        )}
                    </li>
                ))}
        </ul>
    );

    return (
        <Tooltip
            className={classnames(styles.ContextMenu, className)}
            popperVisualContainerClassName={styles.ContextMenu_PopperVisualContainer}
            hideDelay={props.useClickInsteadOfHover ? 0 : 300}
            onShow={() => {
                onShow?.call(null);
                setIsShowing(true);
            }}
            onHide={() => {
                onHide?.call(null);
                setIsShowing(false);
            }}
			focusOnOpen
            {...otherProps}
            content={content}
        >
            <PrimaryButton
                aria-label="Open context menu"
                active={isShowing}
                className={classNames({
					[styles.ContextMenu_Trigger]: !noBG,
					[styles.ContextMenu_Trigger_NoBG]: noBG,
				})}
                privateOptions={{ style: { padding: '6px' }, form: noBG ? 'text' : 'fill' }}
            >
                <DotsIcon />
            </PrimaryButton>
        </Tooltip>
    );
};

ContextMenu.defaultProps = {
    forceShow: false,
    items: [],
    position: 'bottom-start',
    useClickInsteadOfHover: true,
    hideArrow: true,
    showDelay: 0,
} as Partial<IContextMenuProps>;

export default ContextMenu;

import * as React from 'react';
import classnames from 'classnames';
import * as styles from './ContextMenu.scss';
import { DotsIcon } from '../../icons/Icons';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Tooltip, TooltipProps } from '../../overlays/Tooltip/Tooltip';
import { PrimaryButton } from '../../buttons/PrimaryButton/PrimaryButton';
import { TextButton } from '../../buttons/TextButton/TextButton';

export interface IMenuItem {
    color?: 'red' | 'none';
    className?: string;
    content?: React.ReactNode;
    label?: string;
    onClick?: FunctionGeneric;
    enabled?: boolean;
    type?: 'normal' | 'separator';
}

export interface IContextMenuProps extends IReactComponentProps {
    /** className for the list items' container */
    classNameList?: string;
    /** className for an individual list item */
    classNameListItem?: string;
    /** whether to force the tooltip to show and ignore mouse events **/
    forceHover?: boolean;
    /** array of menu items */
    items: IMenuItem[];
    popperOptions?: TooltipProps;
    position?: 'top' | 'bottom';
    useClickInsteadOfHover?: boolean;
}

const ContextMenu = (props: IContextMenuProps) => {
    const {
        className,
        classNameList,
        classNameListItem,
        items,
        popperOptions,
        position,
        useClickInsteadOfHover,
        ...otherProps
    } = props;

    const { popperOffsetModifier, ...restPopperOptions } = popperOptions ?? {};

    const onClickItem = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: IMenuItem) => {
        item.onClick?.call(null);
        event.stopPropagation();
    };

    const [isShowing, setIsShowing] = React.useState(false);

    const content = (
        <ul className={classnames(styles.ContextMenu_Items, 'ContextMenu_Items', classNameList)}>
            {items.map((item: IMenuItem, i: number) => (
                <li key={i} className={classnames(styles.ContextMenu_Item, classNameListItem, item.className)}>
                    {item.type === 'separator' ? (
                        <div style={{ flexGrow: 1, padding: '10px 0' }}></div>
                    ) : (
                        <TextButton
                            className={item.color !== 'red' ? styles.ContextMenu_Item_TextButton : ''}
                            onClick={(event) => onClickItem(event, item)}
                            disabled={item.enabled === undefined ? false : !item.enabled}
                            intent={item.color === 'red' ? 'destructive' : 'default'}
                            style={{ flexGrow: 1, padding: '10px 0' }}
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
            content={content}
            popperOffsetModifier={{
                ...popperOffsetModifier,
            }}
            popperVisualContainerClassName={styles.ContextMenu_PopperVisualContainer}
            position={position === 'top' ? 'top-start' : 'bottom-start'}
            hideDelay={useClickInsteadOfHover ? 0 : 300}
            useClickInsteadOfHover={useClickInsteadOfHover}
            showDelay={0}
            hideArrow
            onShow={() => setIsShowing(true)}
            onHide={() => setIsShowing(false)}
            {...otherProps}
            {...restPopperOptions}
        >
            <PrimaryButton
				aria-label="Open context menu"
                active={isShowing}
                className={styles.ContextMenu_Trigger}
                privateOptions={{ style: { padding: '6px' } }}
            >
                <DotsIcon />
            </PrimaryButton>
        </Tooltip>
    );
};

ContextMenu.defaultProps = {
    forceHover: false,
    items: [],
    position: 'bottom',
    useClickInsteadOfHover: true,
} as Partial<IContextMenuProps>;

export default ContextMenu;

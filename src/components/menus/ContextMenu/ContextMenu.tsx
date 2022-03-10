import * as React from 'react';
import classnames from 'classnames';
import * as styles from './ContextMenu.scss';
import { DotsIcon } from '../../icons/Icons';
import { FunctionGeneric } from '../../../common/structures/Generics';
import { Tooltip, TooltipProps } from '../../overlays/Tooltip/Tooltip';
import { Button } from '../../buttons/Button/Button';
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

export interface IContextMenuProps extends Omit<TooltipProps, 'content'> {
    /** className for the list items' container */
    classNameList?: string;
    /** className for an individual list item */
    classNameListItem?: string;
    /** array of menu items */
    items: IMenuItem[];
}

const ContextMenu = (props: IContextMenuProps) => {
    const { className, classNameList, classNameListItem, items, onShow, onHide, ...otherProps } = props;

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
                                style={{ flexGrow: 1, padding: '5px 0', lineHeight: '20px' }}
                                privateOptions={{ fontWeight: 'medium' }}
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
            {...otherProps}
            content={content}
        >
            <Button
                aria-label="Open context menu"
                active={isShowing}
                className={styles.ContextMenu_Trigger}
                privateOptions={{ style: { padding: '6px' } }}
            >
                <DotsIcon />
            </Button>
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

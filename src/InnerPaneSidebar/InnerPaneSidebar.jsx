import React from 'react';
import classnames from 'classnames';

export function InnerPaneSidebar (props) {
    return <div className={classnames('InnerPaneSidebar', props.className)}>
        {props.children}
    </div>;
}

export function InnerPaneSidebarHeader (props) {
    return <div className={classnames('InnerPaneSidebarHeader', props.className)}>
        <h3>{props.title}</h3>

        {props.children ? <div className="InnerPaneSidebarHeaderButtons">{props.children}</div> : ''}
    </div>;
}

export function InnerPaneSidebarAddNew (props) {
    return <div className={classnames('InnerPaneSidebarAddNew', props.className)}>
        {props.children}
    </div>;
}

export function InnerPaneSidebarContent (props) {
    return <div className={classnames('InnerPaneSidebarContent', props.className)}>
        {props.children}
    </div>;
}

export function InnerPaneSidebarContentItem (props) {
    return <div className={classnames('InnerPaneSidebarContentItem', props.className)}>
        {props.children}
    </div>;
}
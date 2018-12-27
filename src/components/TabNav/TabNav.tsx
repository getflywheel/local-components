import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import styles from './TabNav.sass';

interface PropsI extends LocalComponentPropsI {

	tag?: string;
	itemsClassName?: string;
	aux?: React.ReactNode; // Used for adding items in the right-hand side of the TabNav such as Site Info buttons

}

export default class TabNav extends React.Component<PropsI> {

	static defaultProps: Partial<PropsI> = {
		tag: 'nav',
	};

	maybeRenderAux () {
		if (!this.props.aux) {
			return;
		}

		return (
			<div className={styles.TabNav_Aux}>
				{this.props.aux}
			</div>
		);
	}

	render () {
		const NavTag: any = this.props.tag;

		return (
			<NavTag
				className={classnames(
					styles.TabNav,
					this.props.className,
				)}
			>
				<div className={classnames(
					styles.TabNav_Items,
					this.props.itemsClassName,
				)}
			>
					{this.props.children}
				</div>

				{this.maybeRenderAux()}
			</NavTag>
		);
	}

}

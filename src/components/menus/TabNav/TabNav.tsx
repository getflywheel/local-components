import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import styles from './TabNav.sass';

interface IProps extends IReactComponentProps {
	tag?: string;
	itemsClassName?: string;
	aux?: React.ReactNode; // Used for adding items in the right-hand side of the TabNav such as Site Info buttons
}

export default class TabNav extends React.Component<IProps> {
	static defaultProps: Partial<IProps> = {
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
				id={this.props.id}
				style={this.props.style}
			>
				<div
					className={classnames(
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

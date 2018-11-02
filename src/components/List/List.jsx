import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './List.sass';
import Header from '../Header/Header';

export default class List extends Component {

	static propTypes = {
		bullets: PropTypes.bool,
		listClassName: PropTypes.string,
		listItemClassName: PropTypes.string,
		headerClass: PropTypes.string,
		headerHasDivider: PropTypes.bool,
		headerSize: PropTypes.string,
		headerTag: PropTypes.string,
		headerText: PropTypes.string,
		headerWeight: PropTypes.oneOf(['300', '400', '500', '700', '900']),
		tag: PropTypes.string,
	};

	static defaultProps = {
		bullets: true,
		headerSize: 's',
		headerTag: 'div',
		headerWeight: '500',
		tag: 'ul',
	};

	render () {
		const ListTag = this.props.tag;

		return (
			<div
				className={classnames(
					styles.List_Container,
					this.props.className,
				)}
			>
				{this.props.headerText && (
					<Header
						className={classnames(
							styles.List_Header,
							this.props.headerClass,
							{
								[styles.List_Header__Divider]: this.props.headerHasDivider,
							}
						)}
						size={this.props.headerSize}
						tag={this.props.headerTag}
						weight={this.props.headerWeight}
					>
						{this.props.headerText}
					</Header>
				)}
				<ListTag
					className={classnames(
						styles.List,
						this.props.listClassName,
						{
							[styles.List__BulletsHidden]: !this.props.bullets,
						}
					)}
				>
					{React.Children.map(this.props.children, (child) => (
						<li
							className={classnames(
								styles.List_Item,
								this.props.listItemClassName,
							)}
						>
							{React.cloneElement(child, {

							})}
						</li>
					))}
				</ListTag>
			</div>
		);
	}

}

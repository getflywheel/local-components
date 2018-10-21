import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Header.sass';

export default class Header extends Component {

	static propTypes = {
		tag: PropTypes.string,
		size: PropTypes.oneOf(['xl', 'l', 'm', 's', 'xs']),
	};

	static defaultProps = {
		tag: 'span',
		size: 'm',
	};

	render() {
		const HeaderTag = this.props.tag;

		return (
			<HeaderTag
				className={classnames(
					styles.Header,
					this.props.className,
					{
						[styles.Header__SizeXL]: this.props.size === 'xl',
						[styles.Header__SizeL]: this.props.size === 'l',
						[styles.Header__SizeM]: this.props.size === 'm',
						[styles.Header__SizeS]: this.props.size === 's',
						[styles.Header__SizeXS]: this.props.size === 'xs',
					}
				)}
			>
				{this.props.children}
			</HeaderTag>
		);
	}

}

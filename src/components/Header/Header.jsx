import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Header.sass';

export default class Header extends Component {

	static propTypes = {
		onClick: PropTypes.func,
		size: PropTypes.oneOf(['xl', 'l', 'm', 's', 'xs']),
		tag: PropTypes.string,
		weight: PropTypes.oneOf(['300', '400', '500', '700', '900']),
	};

	static defaultProps = {
		tag: 'div',
		size: 'm',
		weight: '500',
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
						[styles.Header__Weight300]: this.props.weight === '300',
						[styles.Header__Weight400]: this.props.weight === '400',
						[styles.Header__Weight500]: this.props.weight === '500',
						[styles.Header__Weight700]: this.props.weight === '700',
						[styles.Header__Weight900]: this.props.weight === '900',
					}
				)}
				onClick={this.props.onClick}
			>
				{this.props.children}
			</HeaderTag>
		);
	}

}

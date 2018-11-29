import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Header.sass';

export default class Header extends Component {

	static propTypes = {
		fontSize: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
		fontWeight: PropTypes.oneOf(['300', '400', '500', '700', '900']),
		onClick: PropTypes.func,
		tag: PropTypes.string,
	};

	static defaultProps = {
		fontSize: 'm',
		fontWeight: '500',
		tag: 'div',
	};

	render() {
		const HeaderTag = this.props.tag;

		return (
			<HeaderTag
				className={classnames(
					styles.Header,
					this.props.className,
					{
						[styles.Header__FontSizeXS]: this.props.fontSize === 'xs',
						[styles.Header__FontSizeS]: this.props.fontSize === 's',
						[styles.Header__FontSizeM]: this.props.fontSize === 'm',
						[styles.Header__FontSizeL]: this.props.fontSize === 'l',
						[styles.Header__FontSizeXL]: this.props.fontSize === 'xl',
						[styles.Header__FontWeight300]: this.props.fontWeight === '300',
						[styles.Header__FontWeight400]: this.props.fontWeight === '400',
						[styles.Header__FontWeight500]: this.props.fontWeight === '500',
						[styles.Header__FontWeight700]: this.props.fontWeight === '700',
						[styles.Header__FontWeight900]: this.props.fontWeight === '900',
					}
				)}
				onClick={this.props.onClick}
			>
				{this.props.children}
			</HeaderTag>
		);
	}

}

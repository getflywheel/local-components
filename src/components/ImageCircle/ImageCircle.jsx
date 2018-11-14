import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ImageCircle.sass';

export default class ImageCircle extends Component {

	static propTypes = {
		size: PropTypes.oneOf(['m', 's']),
		square: PropTypes.bool,
		src: PropTypes.string.isRequired,
		tag: PropTypes.string,
	};

	static defaultProps = {
		size: 'm',
		square: false,
		tag: 'div',
	};

	render() {
		const ContainerTag = this.props.tag;

		return (
			<ContainerTag
				className={classnames(
					styles.ImageCircleContainer,
					this.props.className,
					{
						[styles.ImageCircleContainer__SizeSmall]: this.props.size === 's',
					}
				)}
			>
				<img
					className={classnames(
						styles.ImageCircle,
						{
							[styles.ImageCircleContainer__Square]: this.props.square,
						}
					)}
					src={this.props.src}
				/>
			</ContainerTag>
		);
	}

}

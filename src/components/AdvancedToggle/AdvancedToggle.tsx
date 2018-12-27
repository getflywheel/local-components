import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import styles from './AdvancedToggle.sass';
import CaretSVG from '../../svg/caret.svg';

interface PropsI extends LocalComponentPropsI {

	headingText?: string,

}

interface StateI {

	advancedOpen: boolean;

}

export default class AdvancedToggle extends React.Component<PropsI, StateI> {

	static defaultProps: Partial<PropsI> = {
		headingText: 'Advanced Options',
	};

	constructor (props: PropsI) {
		super(props);

		this.state = {
			advancedOpen: false,
		};

		this.toggleAdvanced = this.toggleAdvanced.bind(this);
	}

	toggleAdvanced () {
		this.setState({
			advancedOpen: !this.state.advancedOpen,
		});
	}

	render () {
		return (
			<div
				className={classnames(
					styles.AdvancedToggle,
					this.props.className,
					{
						[styles.AdvancedToggle__isOpen]: this.state.advancedOpen,
					}
				)}
			>
				<span
					className={styles.Toggle}
					onClick={this.toggleAdvanced}
				>
					<span>
						{this.props.headingText}
						<svg>{CaretSVG}</svg>
					</span>
				</span>

				<div className={styles.Content}>
					{this.props.children}
				</div>
			</div>
		);
	}

}

import * as React from 'react';
import CaretSVG from '../../svg/caret.svg';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import * as styles from './AdvancedToggle.sass';

interface AdvancedToggleProps {
	headingText: string,
}

interface AdvancedToggleState {
	advancedOpen: boolean;
}

export default class AdvancedToggle extends React.Component<AdvancedToggleProps & LocalComponentPropsI, AdvancedToggleState> {

	static defaultProps = {
		headingText: 'Advanced Options',
	};

	constructor (props: AdvancedToggleProps) {
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
						<CaretSVG />
					</span>
				</span>

				<div className={styles.Content}>
					{this.props.children}
				</div>
			</div>
		);
	}

}

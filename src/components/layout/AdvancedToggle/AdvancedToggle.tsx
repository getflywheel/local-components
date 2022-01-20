import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './AdvancedToggle.sass';
import CaretSVG from '../../../svg/caret.svg';

interface IProps extends IReactComponentProps {
	headingText?: string;
}

interface IState {
	advancedOpen: boolean;
}

export default class AdvancedToggle extends React.Component<IProps, IState> {
	static defaultProps: Partial<IProps> = {
		headingText: 'Advanced options',
	};

	constructor (props: IProps) {
		super(props);

		this.state = {
			advancedOpen: false,
		};

		this.toggleAdvanced = this.toggleAdvanced.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	toggleAdvanced () {
		this.setState({
			advancedOpen: !this.state.advancedOpen,
		});
	}

	onKeyDown (event: any) {
		if (event.key === 'Enter' || event.key === ' '){
			this.toggleAdvanced();
		}
	}

	render () {
		return (
			<div
				className={classnames(
					styles.AdvancedToggle,
					this.props.className,
					{
						[styles.AdvancedToggle__isOpen]: this.state.advancedOpen,
					},
				)}
				id={this.props.id}
				style={this.props.style}
			>
				<span
					tabIndex={0}
					className={styles.Toggle}
					onClick={this.toggleAdvanced}
					onKeyDown={this.onKeyDown}
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

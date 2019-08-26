import * as React from 'react';
import classnames from 'classnames';
import * as styles from './Button.scss';
import { Container } from '../Container';
import ILocalContainerProps from '../../common/structures/ILocalContainerProps';
import Handler from '../../common/structures/Handler';

export enum ButtonPropEmphasis {
	primary = 'primary',
	secondary = 'secondary',
	text = 'text',
}

export enum ButtonPropSize {
	s = 's',
	m = 'm',
	l = 'l',
}

export enum ButtonPropIntent {
	danger = 'danger',
	none = 'none',
}

interface IProps extends ILocalContainerProps {
	disabled?: boolean;
	/** The hierarchical importance of the button within the given context (e.g. only one primary button should exist at any given time). */
	emphasis?: ButtonPropEmphasis | keyof typeof ButtonPropEmphasis; // to allow string literal for enum, the key must match the value and 'keyof typeof' used
	/** The purpose of the buttons which then modifies the styles of the given `emphasis` in the appropriate ways. */
	intent?: ButtonPropIntent | keyof typeof ButtonPropIntent;
	onClick?: Handler;
	/** The size of the button that may result in height, width, and font-size changes. */
	size?: ButtonPropSize | keyof typeof ButtonPropSize;
	/** The html element tag used for the button. */
	tag?: string;
	/** The default behavior of the button. */
	type?: 'button' | 'submit' | 'reset';
}

/* todo - crum: stateless function */
export default class Button extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		disabled: false,
		emphasis: ButtonPropEmphasis.secondary,
		intent: ButtonPropIntent.none,
		size: ButtonPropSize.m,
		tag: 'button',
	};

	render () {
		const Tag: any = this.props.tag;

		return (
			<Container {...this.props.container}>
				<Tag
					className={classnames(
						styles.Button,
						'Button',
						this.props.className,
						{
							[styles.Button__Emphasis_Primary]: this.props.emphasis === ButtonPropEmphasis.primary,
							[styles.Button__Emphasis_Secondary]: this.props.emphasis === ButtonPropEmphasis.secondary,
							[styles.Button__Emphasis_Text]: this.props.emphasis === ButtonPropEmphasis.text,
							[styles.Button__Intent_Danger]: this.props.intent === ButtonPropIntent.danger,
							[styles.Button__Size_Large]: this.props.size === ButtonPropSize.l,
							[styles.Button__Size_Medium]: this.props.size === ButtonPropSize.m,
							[styles.Button__Size_Small]: this.props.size === ButtonPropSize.s,
						},
					)}
					disabled={this.props.disabled}
					onClick={this.props.onClick}
					type={this.props.type}
					{...this.props}
				>
					{this.props.children}
				</Tag>
			</Container>
		);
	}

}

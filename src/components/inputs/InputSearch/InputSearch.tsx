import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './InputSearch.sass';
import SearchSVG from '../../../svg/search';
import ObjectUtils from '../../../utils/object-utils';
import { FunctionGeneric } from '../../../common/structures/Generics';

const excludeProps = {
	className: true,
	containerClassName: true,
	onChange: true,
	placeholder: true,
	value: true,
};

interface IProps extends IReactComponentProps {

	className?: string;
	containerClassName?: string;
	onChange?: FunctionGeneric;
	placeholder?: string;
	value?: string | number;

}

interface IState {

	value: string | number | undefined;

}

export default class InputSearch extends React.Component<IProps, IState> {

	static defaultProps: Partial<IProps> = {
		value: '',
	};

	constructor (props: IProps) {
		super(props);

		this.state = {
			value: props.value, // set to the props initial value
		};
	}

	onChangeInternal = (event: any) => {
		this.setState({
			value: event.target.value,
		});

		this.props.onChange && this.props.onChange.call(this, event);
	}

	render () {
		const undeclaredProps = ObjectUtils.omitPropsInObject(this.props, excludeProps, true);

		return (
			<div
				className={classnames(
					this.props.containerClassName,
					styles.InputSearch_Container,
				)}
			>
				<SearchSVG className={styles.InputSearch_Icon} />
				<input
					className={classnames(
						styles.InputSearch,
						this.props.className,
					)}
					onChange={event => this.onChangeInternal(event)}
					placeholder={this.props.placeholder}
					type="text"
					value={this.state.value}
					{...undeclaredProps}
				/>
			</div>
		);
	}

}

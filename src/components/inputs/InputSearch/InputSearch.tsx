import * as React from 'react';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';
import classnames from 'classnames';
import * as styles from './InputSearch.sass';
import SearchSVG from '../../../svg/search.svg';
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

export default class InputSearch extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		value: '',
	};

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
					onChange={this.props.onChange}
					placeholder={this.props.placeholder}
					type="text"
					value={this.props.value}
					{...undeclaredProps}
				/>
			</div>
		);
	}

}

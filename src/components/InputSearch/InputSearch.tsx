import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './InputSearch.sass';
import SearchSVG from '../../svg/search.svg';
import ObjectUtils from '../../utils/object-utils';

export default class InputSearch extends React.Component {

	static propTypes = {
		className: PropTypes.string,
		containerClassName: PropTypes.string,
		onChange: PropTypes.func,
		placeholder: PropTypes.string,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	};

	static defaultProps = {
		value: '',
	};

	constructor (props) {
		super(props);

		this.state = {
			value: props.value, // set to the props initial value
		};
	}

	onChangeInternal = (event) => {
		this.setState({
			value: event.target.value // update value
		});

		this.props.onChange && this.props.onChange.call(this, event);
	};

	render () {
		const undeclaredProps = ObjectUtils.omitPropsInObject(this.props, InputSearch.propTypes, true);

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

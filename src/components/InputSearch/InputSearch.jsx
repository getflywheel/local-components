import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './InputSearch.sass';
import SearchSVG from '../../svg/search.svg';

export default class InputSearch extends Component {

	static propTypes = {
		className: PropTypes.string,
		containerClassName: PropTypes.string,
		placeholder: PropTypes.string,
		onChange: PropTypes.func,
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

		this.props.onChange && this.props.onChange.apply(this, event);
	};

	render () {
		const {
			className,
			containerClassName,
			placeholder,
			...props
		} = this.props;

		// delete these props to avoid conflicts and errors resulting from directly applying all props via `{...props}`
		delete props.className;
		delete props.containerClassName;
		delete props.onChange;
		delete props.placeholder;
		delete props.value;

		return (
			<div
				className={classnames(
					containerClassName,
					styles.InputSearch_Container,
				)}
			>
				<SearchSVG className={styles.InputSearch_Icon} />
				<input
					className={classnames(
						styles.InputSearch,
						className,
					)}
					onChange={event => this.onChangeInternal(event)}
					placeholder={placeholder}
					type="text"
					value={this.state.value}
					{...props}
				/>
			</div>
		);
	}

}

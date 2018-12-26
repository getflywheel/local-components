import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloseBigSVG from '../../svg/close--big.svg';
import styles from './Close.sass';

export default class Close extends React.Component {

	static propTypes = {
		onClick: PropTypes.func.isRequired,
	};

	render () {
		return (
			<span
				className={classnames(
					styles.Close,
					'Close', // this also needs to be globally accessible so other component styles can reference it
				)}
				onClick={this.props.onClick}
			>
				<CloseBigSVG />
			</span>
		);
	}

}

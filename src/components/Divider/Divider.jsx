import React from 'react';
import classnames from 'classnames';
import styles from './Divider.sass';

export default function Divider (props) {

	return <div
		className={classnames(
			styles.Divider,
			props.className,
		)}
		onClick={props.onClick}
	/>;

}

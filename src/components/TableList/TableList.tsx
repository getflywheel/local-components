import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './TableList.sass';

class TableList extends React.Component {
	static propTypes = {
		stripes: PropTypes.bool,
	};

	render () {
		return (
			<ul
				className={classnames(
					styles.TableList,
					'TableList', // this also needs to be globally accessible so other component styles can reference it
					this.props.className,
					{
						[styles.Form]: this.props.form,
						[styles.TableList__NoStripes]: this.props.stripes === false,
					}
				)}
			>
				{this.props.children}
			</ul>
		);
	}
}

class TableListRow extends React.Component {
	render () {
		return (
			<li
				className={classnames(
					styles.TableListRow,
					'TableListRow', // this also needs to be globally accessible so other component styles can reference it
					this.props.className,
				)}
			>
				{this.props.label && <strong>{this.props.label}</strong>}

				<div>
					{
						this.props.selectable && typeof this.props.children !== 'object' ?
							<input
								type="text"
								readOnly
								value={this.props.children}
							/>
							: this.props.children
					}
				</div>
			</li>
		);
	}
}

TableListRow.propTypes = {
	selectable: PropTypes.bool,
	form: PropTypes.bool,
};

export { TableList, TableListRow };

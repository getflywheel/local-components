import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class TableList extends Component {
	render () {
		return (
			<ul className={classnames({ 'TableList': true, 'Form': this.props.form }, this.props.className)}>
				{this.props.children}
			</ul>
		);
	}
}

class TableListRow extends Component {
	render () {
		return (
			<li className={classnames('TableListRow', this.props.className)}>
				{this.props.label && <strong>{this.props.label}</strong>}

				<div>
					{
						this.props.selectable && typeof this.props.children !== 'object' ?
							<input type="text" readOnly value={this.props.children} />
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

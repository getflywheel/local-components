import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Markdown.sass';
import ReactMarkdown from 'react-markdown';
import MarkdownCodeBlock from './MarkdownCodeBlock';

export default class Markdown extends Component {

	static propTypes = {
		src: PropTypes.string,
	};

	render () {
		return (
			<ReactMarkdown
				className={styles.Markdown}
				escapeHtml={true}
				skipHtml={true}
				source={this.props.src}
				renderers={{
					code: MarkdownCodeBlock
				}}
			/>
		);
	}

}

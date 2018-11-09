import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Markdown.sass';
import ReactMarkdown from 'react-markdown';
import apache from 'highlight.js/lib/languages/apache';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import nginx from 'highlight.js/lib/languages/nginx';
import php from 'highlight.js/lib/languages/php';
import shell from 'highlight.js/lib/languages/shell';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import Lowlight from 'react-lowlight';
import shallowCompare from 'react-addons-shallow-compare';

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

class MarkdownCodeBlock extends Component {

	static propTypes = {
		value: PropTypes.string,
		language: PropTypes.string,
		inline: PropTypes.bool,
	};

	languagesEnabled = {
		'apache': apache,
		'bash': bash,
		'css': css,
		'javascript': js,
		'json': json,
		'nginx': nginx,
		'php': php,
		'shell': shell,
		'sql': sql,
		'typescript': typescript,
		'xml': xml,
	};

	constructor (props) {
		super(props);

		for(const langName in this.languagesEnabled) {
			Lowlight.registerLanguage(langName, this.languagesEnabled[langName]);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	};

	render () {
		const lang = this.languagesEnabled[this.props.language] ? this.props.language : 'bash';

		return (
			<Lowlight
				className={styles.Lowlight}
				language={lang}
				value={this.props.value}
				inline={this.props.inline}
			/>
		);
	}

}

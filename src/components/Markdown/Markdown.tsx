import React from 'react';
import styles from './Markdown.sass';
import ReactMarkdown from 'react-markdown';
import Lowlight from 'react-lowlight';
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
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';

interface PropsI extends LocalComponentPropsI {

	src?: string,

}

export default class Markdown extends React.Component<PropsI> {

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

interface MarkdownCodeBlockPropsI extends LocalComponentPropsI {

	value: string;
	language: string;
	inline: boolean;

}

class MarkdownCodeBlock extends React.PureComponent<MarkdownCodeBlockPropsI> {

	private readonly __languagesEnabled: {[key: string]: any} = {
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

	constructor (props: MarkdownCodeBlockPropsI) {
		super(props);

		for(const langName in this.__languagesEnabled) {
			Lowlight.registerLanguage(langName, this.__languagesEnabled[langName]);
		}
	}

	render () {
		const lang = this.__languagesEnabled[this.props.language] ? this.props.language : 'bash';

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

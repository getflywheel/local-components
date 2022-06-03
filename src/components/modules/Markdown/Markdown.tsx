import * as React from 'react';
import styles from './Markdown.sass';
import ReactMarkdown from 'react-markdown';
import * as Lowlight from 'react-lowlight';
import * as apache from 'highlight.js/lib/languages/apache';
import * as bash from 'highlight.js/lib/languages/bash';
import * as css from 'highlight.js/lib/languages/css';
import * as js from 'highlight.js/lib/languages/javascript';
import * as json from 'highlight.js/lib/languages/json';
import * as nginx from 'highlight.js/lib/languages/nginx';
import * as php from 'highlight.js/lib/languages/php';
import * as shell from 'highlight.js/lib/languages/shell';
import * as sql from 'highlight.js/lib/languages/sql';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as xml from 'highlight.js/lib/languages/xml'
import classnames from 'classnames';
import IReactComponentProps from '../../../common/structures/IReactComponentProps';

interface IProps extends IReactComponentProps {
	src?: string;
}

export default class Markdown extends React.Component<IProps> {
	render () {
		return (
			<ReactMarkdown
				className={classnames(
					styles.Markdown,
					this.props.className,
				)}
				escapeHtml={true}
				renderers={{
					code: MarkdownCodeBlock,
				}}
				skipHtml={true}
				source={this.props.src}
			/>
		);
	}
}

interface IMarkdownCodeBlockProps extends IReactComponentProps {
	value: string;
	language: string;
	inline: boolean;
}

class MarkdownCodeBlock extends React.PureComponent<IMarkdownCodeBlockProps> {
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

	constructor (props: IMarkdownCodeBlockProps) {
		super(props);

		for (const langName in this.__languagesEnabled) {
			if (this.__languagesEnabled.hasOwnProperty(langName)) {
				Lowlight.registerLanguage(langName, this.__languagesEnabled[langName]);
			}
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

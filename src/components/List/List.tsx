import * as React from 'react';
import classnames from 'classnames';
import * as styles from './List.sass';
import IReactComponentProps from '../../common/structures/IReactComponentProps';
import { Title } from '../text/Title/Title';

const fontSizeContentClassMixin = (props: {[key: string]: any}) => ({
	[styles.__FontSizeXS_Content]: props.listItemFontSize === 'xs',
	[styles.__FontSizeS_Content]: props.listItemFontSize === 's',
	[styles.__FontSizeM_Content]: props.listItemFontSize === 'm',
	[styles.__FontSizeL_Content]: props.listItemFontSize === 'l',
	[styles.__FontSizeXL_Content]: props.listItemFontSize === 'xl',
});

const fontWeightClassMixin = (props: {[key: string]: any}) => ({
	[styles.__FontWeight300Light]: props.listItemFontWeight === '300',
	[styles.__FontWeight400Normal]: props.listItemFontWeight === '400',
	[styles.__FontWeight500Medium]: props.listItemFontWeight === '500',
	[styles.__FontWeight700Bold]: props.listItemFontWeight === '700',
	[styles.__FontWeight900Heavy]: props.listItemFontWeight === '900',
});

interface IProps extends IReactComponentProps {

	bullets?: boolean;
	headerClass?: string;
	headerHasDivider?: boolean;
	headerTag?: string;
	headerText?: string;
	listClassName?: string;
	listItemClassName?: string;
	listItemFontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	listItemFontWeight?: '300' | '400' | '500' | '700' | '900';
	listItemWrapElement?: boolean;
	tag?: string;

}

export default class List extends React.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		bullets: true,
		headerTag: 'div',
		tag: 'ul',
	};

	generateListItemClassNames (child?: React.ReactElement<any>) {
		return classnames(
			child && child.props.className,
			styles.List_Item,
			this.props.listItemClassName,
			fontSizeContentClassMixin(this.props),
			fontWeightClassMixin(this.props),
		);
	}

	render () {
		const ListTag: any = this.props.tag;

		return (
			<div
				className={classnames(
					styles.List_Container,
					this.props.className,
				)}
			>
				{this.props.headerText && (
					<Title
						className={classnames(
							styles.List_Header,
							this.props.headerClass,
							{
								[styles.List_Header__Divider]: this.props.headerHasDivider,
							},
						)}
						size="s"
						tag={this.props.headerTag}
					>
						{this.props.headerText}
					</Title>
				)}
				<ListTag
					className={classnames(
						styles.List,
						this.props.listClassName,
						{
							[styles.List__BulletsHidden]: !this.props.bullets,
						},
					)}
				>
					{React.Children.map(this.props.children, (child: any) => {
						if (!child) {
							return;
						}

						if (child.type === 'li' || !this.props.listItemWrapElement) {
							return React.cloneElement(child, {className: this.generateListItemClassNames(child)});
						}

						return (
							<li className={this.generateListItemClassNames()}>
								{React.cloneElement(child, {})}
							</li>
						);
					})}
				</ListTag>
			</div>
		);
	}

}

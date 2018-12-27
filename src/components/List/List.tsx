import React from 'react';
import classnames from 'classnames';
import styles from './List.sass';
import Header from '../Header/Header';
import ReactComponentPropsI from '../../common/structures/ReactComponentPropsI';

const fontSizeContentClassMixin = (styles2: {[key: string]: any}, props: {[key: string]: any}) => ({
	[styles2.__FontSizeXS_Content]: props.listItemFontSize === 'xs',
	[styles2.__FontSizeS_Content]: props.listItemFontSize === 's',
	[styles2.__FontSizeM_Content]: props.listItemFontSize === 'm',
	[styles2.__FontSizeL_Content]: props.listItemFontSize === 'l',
	[styles2.__FontSizeXL_Content]: props.listItemFontSize === 'xl',
});

const fontWeightClassMixin = (styles2: {[key: string]: any}, props: {[key: string]: any}) => ({
	[styles2.__FontWeight300Light]: props.listItemFontWeight === '300',
	[styles2.__FontWeight400Normal]: props.listItemFontWeight === '400',
	[styles2.__FontWeight500Medium]: props.listItemFontWeight === '500',
	[styles2.__FontWeight700Bold]: props.listItemFontWeight === '700',
	[styles2.__FontWeight900Heavy]: props.listItemFontWeight === '900',
});

interface PropsI extends ReactComponentPropsI {

	bullets?: boolean;
	headerClass?: string;
	headerFontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	headerHasDivider?: boolean;
	headerTag?: string;
	headerText?: string;
	headerWeight?: '300' | '400' | '500' | '700' | '900';
	listClassName?: string;
	listItemClassName?: string;
	listItemFontSize?: 'xs' | 's' | 'm' | 'l' | 'xl';
	listItemFontWeight?: '300' | '400' | '500' | '700' | '900';
	listItemWrapElement?: boolean;
	tag?: string;

}

export default class List extends React.Component<PropsI> {

	static defaultProps: Partial<PropsI> = {
		bullets: true,
		headerFontSize: 's',
		headerTag: 'div',
		headerWeight: '500',
		listItemWrapElement: true,
		tag: 'ul',
	};

	generateListItemClassNames (child?: React.ReactElement<any>) {
		return classnames(
			child && child.props.className,
			styles.List_Item,
			this.props.listItemClassName,
			fontSizeContentClassMixin(styles, this.props),
			fontWeightClassMixin(styles, this.props),
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
					<Header
						className={classnames(
							styles.List_Header,
							this.props.headerClass,
							{
								[styles.List_Header__Divider]: this.props.headerHasDivider,
							},
						)}
						fontSize={this.props.headerFontSize}
						fontWeight={this.props.headerWeight}
						tag={this.props.headerTag}
					>
						{this.props.headerText}
					</Header>
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

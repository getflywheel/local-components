import React, { ComponentType } from 'react';
import ReactComponentPropsI from '../../structures/ReactComponentPropsI';
import classnames from 'classnames';
import styles from './withMargin.scss';
import { generateMarginClassnames } from './withMargin.utils';

interface PropsI extends ReactComponentPropsI {

	margin: string; // todo - crum: these can actually be `string | null | undefined'
	marginBottom: string;
	marginLeft: string;
	marginRight: string;
	marginTop: string;

}

// todo - crum: export from index.js. can I do this? how will styles be scoped? does it require a class? or can it take a function?
const withMargin = (marginOptions: any, offsetMarginOptions: any, selectorPrefix: string) =>
	(WrappedComponent: ComponentType<ReactComponentPropsI>) =>
{
	class Margin extends React.PureComponent<PropsI | any> {

		render () {
			return (
				<WrappedComponent
					className={classnames(
						generateMarginClassnames(
							[
								['margin', marginOptions],
								['margin', this.props.margin],
								['margin-top', this.props.marginTop],
								['margin-right', this.props.marginRight],
								['margin-bottom', this.props.marginBottom],
								['margin-left', this.props.marginLeft],
							],
							selectorPrefix,
							'withMargin',
							styles,
							WrappedComponent,
						),
					)}
					{...this.props}
				/>
			);
		}

	}

	return Margin;

};

export default withMargin;

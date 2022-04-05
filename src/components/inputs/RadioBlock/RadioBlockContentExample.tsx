import * as React from 'react';
import { Button } from '../../buttons/Button/Button';
import Card from '../../modules/Card/Card';
import * as styles from './RadioBlockContentExample.scss';

interface BlueprintCardProps {
	blueprintName: string;
	lastModified: string;
}

const BlueprintCard = (props: BlueprintCardProps) => {
	const { blueprintName, lastModified } = props;

	const renderFooter = (): any => (
		<Button
			onClick={(event: React.MouseEvent) => {
				event.stopPropagation();
				console.log('showing details...');
			}}
		>
			Show details
		</Button>
	);

	return (
		<Card
			className={styles.SavedBlueprintCard}
			contentTitle={blueprintName}
			contentTitleClassName={styles.SavedBlueprintCard_Title}
			contentSub={`Last modified: ${lastModified}`}
			footerClassName={styles.SavedBlueprintCard_Footer}
			footer={renderFooter()}
		/>
	);
};

const blueprints = [
	{
		name: 'adamperry',
		lastModified: '3/29/2022',
	},
	{
		name: 'marlee.net',
		lastModified: '4/4/2022',
	},
	{
		name: 'Starship Wingnut',
		lastModified: '4/4/2022',
	},
	{
		name: 'yazmin.org',
		lastModified: '4/4/2022',
	},
];

interface IBlueprint {
	name: string;
	lastModified: string;
}

const radioBlockOptions = blueprints.reduce(
	(options, blueprint: IBlueprint) => ({
		...options,
		[blueprint.name]: {
			content: <BlueprintCard blueprintName={blueprint.name} lastModified={blueprint.lastModified} />,
			style: {
				textAlign: 'unset',
				margin: '5px 30px 5px 30px',
				boxShadow: 'none',
				borderRadius: '4px',
			},
		},
	}),
	{}
);

export default radioBlockOptions;

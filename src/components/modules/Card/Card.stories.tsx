import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import { Button } from '../../buttons/Button/Button';

const meta: Meta<typeof Card> = {
	component: Card,
	title: 'Modules/Card',
	argTypes: {
		headerBackgroundColor: { control: 'color' },
		headerOnClick: { action: 'clicked' },
		onClick: { action: 'clicked' },
	},
};

export default meta;
type Story = StoryObj<typeof Card>;

const loremContent =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sit officia nisi, ad aspernatur laboriosam esse? Sit blanditiis ad consequatur perspiciatis velit, nobis magnam incidunt quae, quisquam voluptate deserunt maxime!';

export const Default: Story = {
	args: {
		headerBackgroundColor: '#51bb7b',
		headerIconPath:
			'https://cdn1.iconfinder.com/data/icons/black-white-social-media/32/Trulia_social_media_logo-128.png',
		headerIconMaxHeight: '50px',
		contentTitle: 'Admin System',
		contentSub: 'by Developer',
		contentDescription:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod.',
		footer: (
			<>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SimpleGray_Heart.svg/128px-SimpleGray_Heart.svg.png"
						width="20px"
						height="20px"
					/>
					<span style={{ marginLeft: '5px' }}>10 likes</span>
				</div>
				<div style={{ marginLeft: 'auto' }}>
					<Button>Share</Button>
				</div>
			</>
		),
	},
};

export const Truncation: Story = {
	args: {
		contentTitle: 'This is a really long title that can easily get cut off or wrap to the next line',
		contentTitleTruncate: true,
		contentSub: 'by Super-Duper-Long-User-Name-That-Just-Everyones-Life-Miserable',
		contentSubTruncate: true,
		contentDescription:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc quam, bibendum quis augue porttitor, scelerisque pretium lorem. Ut quis ex bibendum justo feugiat euismod.',
		contentDescriptionTruncate: true,
		contentDescriptionTruncateLines: 2,
		contentDescriptionTruncateEllipsis: (
			<span>
				{' '}
				... <a>Read more</a>{' '}
			</span>
		),
		footer: (
			<>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SimpleGray_Heart.svg/128px-SimpleGray_Heart.svg.png"
						width="20px"
						height="20px"
					/>
					<span style={{ marginLeft: '5px' }}>10 likes</span>
				</div>
				<div style={{ marginLeft: 'auto' }}>
					<Button>Share</Button>
				</div>
			</>
		),
	},
};

export const SimpleContent: Story = {
	args: {
		content: `Content: ${loremContent}`,
	},
};

export const SimpleChildren: Story = {
	args: {
		children: <div>{loremContent}</div>,
	},
};

export const SimpleContentAndChildren: Story = {
	args: {
		...SimpleContent.args,
		...SimpleChildren.args,
	},
};

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContextMenu, { IContextMenuProps, IMenuItem } from './ContextMenu';

const mockOnClick = jest.fn();

const menuItems: IMenuItem[] = [
	{
		label: 'View site',
		enabled: true,
		onClick: () => {
			mockOnClick();
		},
	},
	{
		label: 'Admin dashboard',
		enabled: false,
		onClick: () => {
			mockOnClick();
		},
	},
	{
		label: 'Reveal in Finder',
		onClick: () => {
			mockOnClick();
		},
	},
	{
		label: 'Open site shell',
		onClick: () => {
			mockOnClick();
		},
	},
];

const renderContextMenu = (props: IContextMenuProps = { items: menuItems }) => {
	return render(<ContextMenu items={props.items} />);
};

const openContextMenu = () => userEvent.click(screen.getByRole('button', { name: /open context menu/i }));

describe('ContextMenu', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	it('displays correctly', () => {
		renderContextMenu();
		expect(screen.getByRole('button', { name: /open context menu/i })).toBeInTheDocument();
	});

	it('displays the context menu correctly on click', async () => {
		renderContextMenu();
		openContextMenu();
		expect(await screen.findAllByRole('button')).toHaveLength(5);
		expect(screen.getByRole('button', { name: menuItems[0].label! })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: menuItems[1].label! })).toHaveAttribute('disabled');
		expect(screen.getByRole('button', { name: menuItems[3].label! })).not.toHaveAttribute('disabled');
	});

	it('calls the click handlers of the menu items on click', async () => {
		renderContextMenu();
		openContextMenu();
		expect(await screen.findAllByRole('button')).toHaveLength(5);
		menuItems.forEach((item) => userEvent.click(screen.getByRole('button', { name: item.label })));
		expect(mockOnClick).toHaveBeenCalledTimes(3);
	});
});

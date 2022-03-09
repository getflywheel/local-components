import * as React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip, TooltipProps } from './Tooltip';

const mockOnShow = jest.fn();
const mockOnHide = jest.fn();

const contentText = 'Tooltip content';
const content = <>{contentText}</>;
const triggerText = 'Tooltip trigger';
const trigger = <div>{triggerText}</div>;

const renderTooltip = (props?: TooltipProps) => {
    return render(<>
		<Tooltip position="right" content={content} showDelay={0} hideDelay={0} {...props}>
			{trigger}
		</Tooltip>
	</>);
};

describe('Tooltip', () => {
	afterEach(() => {
        jest.resetAllMocks();
    });

    test('renders correctly', () => {
        renderTooltip();
        expect(screen.getByText(triggerText)).toBeInTheDocument();
    });

	test('renders popper correctly on hover', async () => {
        renderTooltip({ onHide: mockOnHide, onShow: mockOnShow });

		userEvent.hover(screen.getByText(triggerText));
		expect(await screen.findByText(contentText)).toBeInTheDocument();
		expect(mockOnShow).toHaveBeenCalledTimes(1);
		expect(mockOnHide).not.toHaveBeenCalled();
	
		userEvent.unhover(screen.getByText(triggerText));
		expect(screen.queryByText(contentText)).not.toBeInTheDocument();
		expect(mockOnShow).toHaveBeenCalledTimes(1);
		expect(mockOnHide).toHaveBeenCalledTimes(1);
    });

	test('renders popper correctly immediately when forceShow is true', async () => {
        renderTooltip({ forceShow: true });
        expect(await screen.findByText(contentText)).toBeInTheDocument();
    });

	test('doesn\'t render popper when hideTooltip is true', () => {
        const { unmount } = renderTooltip({ hideTooltip: true });
		userEvent.hover(screen.getByText(triggerText));
        expect(screen.queryByText(contentText)).not.toBeInTheDocument();
		unmount();

		renderTooltip({ hideTooltip: true, forceShow: true});
		userEvent.hover(screen.getByText(triggerText));
        expect(screen.queryByText(contentText)).not.toBeInTheDocument(); 
    });

	test('shows the tooltip on click instead of hover when useClickInsteadOfHover is true', async () => {
        renderTooltip({ useClickInsteadOfHover: true });
		userEvent.hover(screen.getByText(triggerText));
        expect(screen.queryByText(contentText)).not.toBeInTheDocument();
		userEvent.unhover(screen.getByText(triggerText));

		userEvent.click(screen.getByText(triggerText));
		expect(await screen.findByText(contentText)).toBeInTheDocument();
    });
});

import React from 'react';
import { Button } from '../../buttons/Button/Button';
import ToastContainer from './ToastContainer';
import toast from '../Toast/Toast';
import { TextButton } from '../../buttons/TextButton/TextButton';
import { AnnouncementIcon } from '../../icons/Icons';

const ToastContainerExample = () => {
	const showSuccessToast = () => toast({ content: 'Site pushed to Flywheel!', autoClose: 5000 });
	const showWarningToast = () => toast({ content: 'Site import failed.', autoClose: 5000, type: 'error' });
	const showCTAToast = () =>
		toast({
			content: (
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<AnnouncementIcon greenFill style={{ margin: '0px 10px 3px 0px' }} />
						New Local version available!{' '}
					</div>
					<TextButton onClick={() => console.log('Learn more Clicked')} privateOptions={{ padding: 'none' }}>
						Learn more
					</TextButton>
				</div>
			),
			autoClose: false,
			type: 'cta',
		});

	return (
		<div style={{ overflow: 'hidden' }}>
			<div style={{ height: '600px', position: 'relative' }}>
				<Button container={{ marginBottom: '10' }} onClick={showSuccessToast}>
					Pop a success toast
				</Button>
				<Button container={{ marginBottom: '10' }} onClick={showWarningToast}>
					Pop a warning toast
				</Button>
				<Button container={{ marginBottom: '10' }} onClick={showCTAToast}>
					Pop a CTA toast
				</Button>
				<ToastContainer className="testClassName" style={{ position: 'absolute' }} />
			</div>
		</div>
	);
};

export default ToastContainerExample;

import React from 'react';
import Announcement from '../../../svg/announcement.svg';
import withIconSvg from '../helpers/withIconSvg';

const AnnouncementIcon: React.FC = (props) => {
	return <Announcement {...props} />;
};

export default withIconSvg(AnnouncementIcon, true, { tags: ['announcement', 'new', 'tada', 'horn', 'party'] });

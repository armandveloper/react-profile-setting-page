import React from 'react';
import TabViewHeader from '../TabViewHeader/TabViewHeader';
import UserInformation from '../UserInformation/UserInformation';

function TabView() {
	return (
		<div className="tab-view">
			<TabViewHeader />
			<UserInformation />
		</div>
	);
}

export default TabView;

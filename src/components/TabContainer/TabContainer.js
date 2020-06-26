import React, { useState } from 'react';
import Tab from '../Tab/Tab';
import { tabsData } from '../../data';

function TabContainer() {
	const [tabSelected, setSelected] = useState('1');
	return (
		<div>
			{tabsData.map((tab) => (
				<Tab
					key={tab.id}
					title={tab.title}
					description={tab.description}
					id={tab.id}
					selected={tabSelected}
					setSelected={setSelected}
				/>
			))}
		</div>
	);
}

export default TabContainer;

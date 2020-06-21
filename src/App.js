import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
	return (
		<div className="frame">
			<Sidebar />
			<Content />
		</div>
	);
}

export default App;

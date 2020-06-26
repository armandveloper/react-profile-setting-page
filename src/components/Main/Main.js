import React from 'react';
import styles from './Main.module.css';
import TabContainer from '../TabContainer/TabContainer';
import TabView from '../TabView/TabView';

function Main() {
	return (
		<main className={styles.main}>
			<TabContainer />
			<TabView />
		</main>
	);
}

export default Main;

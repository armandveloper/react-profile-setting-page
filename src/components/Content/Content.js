import React from 'react';
import styles from './Content.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function Content() {
	return (
		<div className={styles.content}>
			<Header userName="Tonmoy Karmoker" />
			<Main />
		</div>
	);
}

export default Content;

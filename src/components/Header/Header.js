import React from 'react';
import styles from './Header.module.css';
import SearchBar from '../SearchBar/SearchBar';
import HeaderActions from '../HeaderActions/HeaderActions';

function Header({ userName }) {
	return (
		<header className={styles.appHeader}>
			<SearchBar />
			<HeaderActions userName={userName} />
		</header>
	);
}

export default Header;

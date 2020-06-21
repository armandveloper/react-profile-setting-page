import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.css';

function SearchBar() {
	return (
		<div className={styles.searchBar}>
			<input
				className={styles.input}
				type="text"
				placeholder="Search Anything"
				aria-label="Buscar en tu perfil"
			/>
			<button
				type="submit"
				title="Buscar"
				className={styles.searchButton}
			>
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</div>
	);
}

export default SearchBar;

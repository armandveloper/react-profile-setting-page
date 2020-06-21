import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBriefcase,
	faUser,
	faThLarge,
	faBookmark,
	faCog,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<h1 className={styles.navBrand}>weblance</h1>
			<span className={styles.navBrandMini}>w</span>
			<nav className={styles.nav}>
				<a href="!#" className={styles.navItem}>
					<FontAwesomeIcon icon={faBriefcase} />
					<span className={styles.itemLabel}>My Job Feed</span>
				</a>
				<a
					href="!#"
					className={`${styles.navItem} ${styles.navItemSelected}`}
				>
					<FontAwesomeIcon icon={faUser} />
					<span className={styles.itemLabel}>Profile</span>
				</a>
				<a href="!#" className={styles.navItem}>
					<FontAwesomeIcon icon={faThLarge} />
					<span className={styles.itemLabel}>Dashboard</span>
				</a>
				<a href="!#" className={styles.navItem}>
					<FontAwesomeIcon icon={faBookmark} />
					<span className={styles.itemLabel}>Saved Jobs</span>
				</a>
				<a href="!#" className={styles.navItem}>
					<FontAwesomeIcon icon={faCog} />
					<span className={styles.itemLabel}>Settings</span>
				</a>
			</nav>
		</aside>
	);
}

export default Sidebar;

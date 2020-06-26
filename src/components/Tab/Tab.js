import React from 'react';
import styles from './Tab.module.css';

function Tab({ title, description, setSelected, selected, id }) {
	const classes =
		selected === id ? `${styles.tab} ${styles.tabSelected}` : styles.tab;
	return (
		<div className={classes} onClick={() => setSelected(id)}>
			<h4 className={styles.tabTitle}>{title}</h4>
			<p className={styles.tabDescription}>{description}</p>
		</div>
	);
}

export default Tab;

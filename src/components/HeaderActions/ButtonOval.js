import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderActions.module.css';

function ButtonOval({ icon, title }) {
	return (
		<button type="button" title={title} className={styles.buttonOval}>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
}

export default ButtonOval;

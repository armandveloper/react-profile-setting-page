import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBell,
	faEnvelope,
	faUser,
	faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderActions.module.css';
import ButtonOval from './ButtonOval';

function HeaderActions({ userName }) {
	return (
		<div className={styles.headerActions}>
			<ButtonOval icon={faBell} title="Notificaciones" />
			<ButtonOval icon={faEnvelope} title="Mensajes" />
			<ButtonOval icon={faUser} title="Cuenta" />
			<span className={styles.ball}></span>
			<span className={styles.username}>{userName}</span>
			<button
				className={styles.buttonMore}
				type="button"
				title="Más opciones"
			>
				<FontAwesomeIcon icon={faEllipsisH} />
			</button>
		</div>
	);
}

export default HeaderActions;

import React from 'react';
import styles from './TabViewHeader.module.css';
import avatar from '../../assets/img/profile-image.jpg';

function TabViewHeader() {
	return (
		<div className={styles.tabViewHeader}>
			<div className={styles.headerLeft}>
				<img src={avatar} alt="" className={styles.avatar} />
				<div>
					<p className={styles.title}>Upload a New Photo</p>
					<p className={styles.filename}>profile-image.jpg</p>
				</div>
			</div>
			<div>
				<input
					type="file"
					name="profile-image"
					id="profile-image"
					className={styles.hidden}
				/>
				<label htmlFor="profile-image" className={styles.buttonUpload}>
					Update
				</label>
			</div>
		</div>
	);
}

export default TabViewHeader;

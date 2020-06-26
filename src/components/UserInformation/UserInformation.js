import React, { useState } from 'react';
import styles from './UserInformation.module.css';

function UserInformation() {
	const [name, setName] = useState('Tonmoy Karmoker');
	const [email, setEmail] = useState('tonmoydedesigner@gmail.com');
	const [address, setAddress] = useState(
		'190 Upor Bazar, Natore Sadar, Natore'
	);
	const [city, setCity] = useState('Natore');
	const [state, setState] = useState('Rajshahi');
	const [zipCode, setZipCode] = useState('6400');
	const [country, setCountry] = useState('Bangladesh');

	return (
		<section className={styles.userInformation}>
			<h2 className={styles.title}>Change User Information here</h2>
			<form
				action="#"
				method="POST"
				className={`${styles.form} ${styles.grid}`}
			>
				<div className={styles.formGroup}>
					<label htmlFor="name">Full Name*</label>
					<input
						className={styles.formControl}
						type="text"
						name="name"
						id="name"
						value={name}
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="email">Email Address*</label>
					<input
						className={styles.formControl}
						type="email"
						name="email"
						id="email"
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="address">Address*</label>
					<input
						className={styles.formControl}
						type="text"
						name="address"
						id="address"
						value={address}
						required
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="city">City</label>
					<input
						className={styles.formControl}
						type="text"
						name="city"
						id="city"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="state">State/Province</label>
					<input
						className={styles.formControl}
						type="text"
						name="state"
						id="state"
						value={state}
						onChange={(e) => setState(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="zip-code">Zip Code</label>
					<input
						className={styles.formControl}
						type="text"
						name="zip-code"
						id="zip-code"
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="country">Country</label>
					<input
						className={styles.formControl}
						type="text"
						name="country"
						id="country"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					value="Update Information"
					className={styles.button}
				/>
			</form>
		</section>
	);
}

export default UserInformation;

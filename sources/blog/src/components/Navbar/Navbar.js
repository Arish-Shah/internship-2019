import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import avatar from '../../assets/avatar.jpg';

function Navbar() {
	return (
		<div className={styles.Navbar}>
			<div className={styles.Logo}>
				<Link to="/compose">
					<img src={avatar} alt="Will-Shake" />
				</Link>
			</div>
			<div className={styles.Brand}>
				<Link to="/">
					<h1>William Shakespeare</h1>
				</Link>
				<small>All's well that ends well</small>
			</div>
		</div>
	);
}

export default Navbar;

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Remarkable } from 'remarkable';

import styles from './Read.module.css';

function Read({ blogs, match }) {
	blogs = JSON.parse(localStorage.getItem('data')) || blogs;
	const link = match.params.link;
	const index = blogs.findIndex(blog => blog.link === link);
	const { title, description, content, date, len } = blogs[index];

	const getRawMarkup = () => {
		const md = new Remarkable();
		return { __html: md.render(content) };
	};

	return (
		<div className={styles.Read}>
			<h1>{title}</h1>
			<p className={styles.Information}>
				{date} &middot; {len}
			</p>
			<div className={styles.Bar}>
				<strong>{description}</strong>
			</div>
			<div
				className={styles.Content}
				dangerouslySetInnerHTML={getRawMarkup()}
			></div>
			<footer className={styles.Footer}>William Shakespeare</footer>
		</div>
	);
}

export default withRouter(Read);

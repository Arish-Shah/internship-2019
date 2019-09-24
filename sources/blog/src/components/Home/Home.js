import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home({ blogs }) {
	return (
		<div className={styles.Home}>
			{blogs.map((blog, index) => (
				<Blog
					key={index}
					link={blog.link}
					title={blog.title}
					description={blog.description}
					date={blog.date}
					len={blog.len}
				/>
			))}
		</div>
	);
}

function Blog({ link, title, description, date, len }) {
	return (
		<div className={styles.Blog}>
			<div className={styles.Title}>
				<h1>
					<Link to={`/${link}`}>{title}</Link>
				</h1>
				<span>new</span>
			</div>
			<div className={styles.Information}>
				<small>
					{date} &middot; {len}
				</small>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Home;

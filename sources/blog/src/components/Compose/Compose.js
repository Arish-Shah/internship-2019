import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Compose.module.css';

function Compose({ history, blogs, setBlogs }) {
	const handleForm = event => {
		event.preventDefault();
		let title = event.target[0].value.trim();
		let description = event.target[1].value.trim();
		let content = event.target[2].value.trim();

		if (title === '' || description === '' || content === '') return;

		let link = generateLink(title);
		let date = getDate(new Date());
		let len = computeLen(content);

		const confirm = window.confirm('Have you proof read your Blog?');

		if (confirm) {
			const updatedBlogs = [...blogs];
			updatedBlogs.unshift({ title, link, description, content, date, len });
			setBlogs(updatedBlogs);
			localStorage.setItem('data', JSON.stringify(updatedBlogs));
			history.push('/');
		}
	};

	const computeLen = content => {
		const words = content.split(' ');
		const len = parseInt(words.length / 25);
		const cups = len / 5 + 1;
		return `${len} min read ${'☕'.repeat(cups)}`;
	};

	const getDate = date => {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		const day = date.getDate();
		const monthIndex = date.getMonth();
		const year = date.getFullYear();

		return day + ' ' + monthNames[monthIndex] + ' ' + year;
	};

	const generateLink = title => {
		let tempArray = title.split(' ');
		tempArray = tempArray.map(ele => ele.toLowerCase());
		tempArray = tempArray.filter(ele => ele !== '');
		return tempArray.join('-');
	};

	return (
		<div className={styles.Compose}>
			<h1>Compose Blog</h1>
			<form onSubmit={handleForm} className={styles.Form}>
				<input type="text" placeholder="Title of the Blog" />
				<input type="text" placeholder="Description" />
				<textarea placeholder="Content (Use Markdown)"></textarea>
				<button type="submit">Post</button>
				<button type="reset">Clear</button>
			</form>
		</div>
	);
}

export default withRouter(Compose);

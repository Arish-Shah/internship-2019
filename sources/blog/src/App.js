import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Read from './components/Read/Read';
import Compose from './components/Compose/Compose';
import { data } from './data';

function App() {
	const [blogs, setBlogs] = useState(data);

	useEffect(() => {
		if (localStorage.getItem('data')) {
			setBlogs(JSON.parse(localStorage.getItem('data')));
		} else localStorage.setItem('data', JSON.stringify(data));
	}, []);

	return (
		<div className="App">
			<Route path="/" component={Navbar} />
			<Switch>
				<Route path="/" exact render={() => <Home blogs={blogs} />} />
				<Route
					path="/compose"
					exact
					render={() => <Compose blogs={blogs} setBlogs={setBlogs} />}
				/>
				<Route path="/:link" exact render={() => <Read blogs={blogs} />} />
			</Switch>
		</div>
	);
}

export default App;

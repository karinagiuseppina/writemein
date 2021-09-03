import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import "../styles/home.scss";
import Firebase from "./component/firebase.js";

//create your first component
const App = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [username, setUsername] = useState("");
	const [currentItem, setCurrentItem] = useState("");

	function handleChangeUser(e) {
		setUsername(e.target.value);
	}

	function handleChangeCurrent(e) {
		setCurrentItem(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		const itemsRef = firebase.database().ref("items");
		const item = {
			title: currentItem,
			user: username
		};
		itemsRef.push(item);
		setUsername("");
		setCurrentItem("");
	}

	return (
		<div className="app">
			<header>
				<div className="wrapper">
					<h1>Fun Food Friends</h1>
				</div>
			</header>
			<div className="container">
				<section className="add-item">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="username"
							placeholder="What's your name?"
							onChange={handleChangeUser}
							value={username}
						/>
						<input
							type="text"
							name="currentItem"
							placeholder="What are you bringing?"
							onChange={handleChangeCurrent}
							value={currentItem}
						/>

						<button>Add Item</button>
					</form>
				</section>
				<section className="display-item">
					<div className="wrapper">
						<ul />
					</div>
				</section>
			</div>
		</div>
	);
};

export default injectContext(App);

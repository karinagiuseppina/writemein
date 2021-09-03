import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import firebase from "firebase/app";

export const Home = () => {
	const firebaseApp = firebase.apps[0];
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
			<div>
				<h1>React & Firebase</h1>
				<h2>By @farazamiruddin</h2>
				<code>
					<pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
				</code>
			</div>
		</div>
	);
};

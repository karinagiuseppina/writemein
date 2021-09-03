// src/firebase.js
import firebase from "firebase";

const FirebaseConfig = () => {
	const config = {
		apiKey: "AIzaSyCrj0v7MEfDYh1hYJY8oqMS5QtH9y3BCNU",
		authDomain: "pruebas-dcda9.firebaseapp.com",
		projectId: "pruebas-dcda9",
		storageBucket: "pruebas-dcda9.appspot.com",
		messagingSenderId: "883550791745",
		appId: "1:883550791745:web:a83969d3f572a0957efec0",
		measurementId: "G-EF0W5BTRGL"
	};
	firebase.initializeApp(config);
};
export default FirebaseConfig;

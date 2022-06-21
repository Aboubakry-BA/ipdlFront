// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "ipdl-esp.firebaseapp.com",
	databaseURL: "https://ipdl-esp-default-rtdb.firebaseio.com",
	projectId: "ipdl-esp",
	storageBucket: "ipdl-esp.appspot.com",
	messagingSenderId: "718064641468",
	appId: "1:718064641468:web:fc675a5a409636ee3d37b9",
	measurementId: "G-ZDWHT0Q0W3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

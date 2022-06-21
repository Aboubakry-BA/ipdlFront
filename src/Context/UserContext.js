import { createContext, useState, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const [currentUser, setCurrentUser] = useState();
	const [loadingData, setLoadingData] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setCurrentUser(currentUser);
			setLoadingData(false);
		});

		return unsubscribe;
	}, []);

	return (
		<UserContext.Provider value={{ signup, currentUser, signin }}>
			{!loadingData && props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;

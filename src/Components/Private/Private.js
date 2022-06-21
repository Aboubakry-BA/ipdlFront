import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Outlet, /*useLocation,*/ Navigate } from "react-router-dom";

function Private() {
	const { currentUser } = useContext(UserContext);

	if (!currentUser) {
		return <Navigate to="/" />;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
}

export default Private;

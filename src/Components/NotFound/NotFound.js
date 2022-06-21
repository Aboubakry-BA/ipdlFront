import React from "react";
import img404 from "./404.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	return (
		<div
			style={{
				width: "70%",
				height: "69vh",
				margin: "auto",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<img src={img404} alt="NotFound" />
			<button onClick={() => navigate("/")}>Retourner à l'accueil</button>
		</div>
	);
}

export default NotFound;

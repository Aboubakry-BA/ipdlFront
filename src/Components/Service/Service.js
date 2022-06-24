import React from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";

function Service() {
	const params = useParams();

	return (
		<>
			<Navbar />
			<div style={{ minHeight: "69vh" }}>
				<h2>Rubrique {params.title}</h2>
			</div>
		</>
	);
}

export default Service;

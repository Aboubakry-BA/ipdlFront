import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousels from "../Carousels/Carousels";
import Prestations from "../Prestations/Prestations";
import ClientPrest from "../ClientPrest/ClientPrest";
import CCMarche from "../CCMarche/CCMarche";

function Home() {
	return (
		<>
			<Navbar />
			<Carousels />
			<Prestations />
			<ClientPrest />
			<CCMarche />
		</>
	);
}

export default Home;

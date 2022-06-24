import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousels from "../Carousels/Carousels";
import Services from "../Services/Services";
import ClientPrest from "../ClientPrest/ClientPrest";
import CCMarche from "../CCMarche/CCMarche";

function Home() {
	return (
		<>
			<Navbar />
			<Carousels />
			<Services />
			<ClientPrest />
			<CCMarche />
		</>
	);
}

export default Home;

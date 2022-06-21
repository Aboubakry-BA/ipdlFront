import React from "react";
import Carousels from "../Carousels/Carousels";
import Services from "../Services/Services";
import ClientPrest from "../ClientPrest/ClientPrest";
import CCMarche from "../CCMarche/CCMarche";

function Home() {
	return (
		<>
			<Carousels />
			<Services />
			<ClientPrest />
			<CCMarche />
		</>
	);
}

export default Home;

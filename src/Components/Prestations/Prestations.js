import React from "react";
import "./Prestations.css";
import Grid from "@mui/material/Grid";
import { /*Link,*/ NavLink } from "react-router-dom";

function Prestations() {
	return (
		<>
			<div id="container">
				<h3>Les Prestations: Que cherchez vous ?</h3>
				<Grid container spacing={1}>
					{services.map((service) => (
						<Grid
							xs={6}
							sm={4}
							md={3}
							item={true}
							key={service.title}
							sx={{
								width: "290px",
								height: "150px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								marginTop: "10px",
								alignItems: "center",
								boxShadow: "0px 0px 3px 3px rgb(23 23 23 / 3%)",
								":hover": {
									boxShadow:
										"0px 0px 3px 3px rgb(23 23 23 / 10%)",
									color: "#00A591",
								},
							}}
						>
							<NavLink to={`/prestation/${service.title}`}>
								<img
									src={service.img}
									alt={service.title}
									width="45px"
									height="45px"
								/>
								<h6>{service.title}</h6>
							</NavLink>
						</Grid>
					))}
				</Grid>
			</div>
		</>
	);
}
const services = [
	{
		img: "/images/traiteur.png",
		title: "Traiteur",
	},
	{
		img: "/images/deco.png",
		title: "Decoration",
	},
	{
		img: "/images/salle.png",
		title: "Salle Polyvalente",
	},
	{
		img: "/images/habillement.png",
		title: "Habillement-Accessoires",
	},
	{
		img: "/images/fleur.png",
		title: "Fleuriste",
	},
	{
		img: "/images/video-cam.png",
		title: "Photo-Video",
	},
	{
		img: "/images/maquillage.png",
		title: "Maquillage-Coiffure",
	},
	{
		img: "/images/location-voiture.png",
		title: "Location de voiture",
	},
	{
		img: "/images/dj.png",
		title: "Animation DJ",
	},
	{
		img: "/images/location-materiel.png",
		title: "Location Matériel",
	},
	{
		img: "/images/boisson.png",
		title: "Fournisseur de boisson",
	},
	{
		img: "/images/maitre-ceremonie.png",
		title: "Maitre de cérémonie",
	},
	{
		img: "/images/securite.png",
		title: "Agent de sécurite",
	},
	{
		img: "/images/weeding-planner.png",
		title: "Agence événementiel",
	},
	{
		img: "/images/bar-restau.png",
		title: "Restaurant-Bar",
	},
	{
		img: "/images/hotel.png",
		title: "Hotel",
	},
];

export default Prestations;

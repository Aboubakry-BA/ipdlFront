import React, { useState, useContext } from "react";
import "./ClientPrest.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

function ClientPrest() {
	const [open, setOpen] = useState(false);
	const [toggle, setToggle] = useState(false);

	const navigate = useNavigate();
	const { currentUser } = useContext(UserContext);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleToggle = () => {
		setToggle(!toggle);
	};

	let toggleContenu;
	let toggleInscrire;

	if (toggle) {
		toggleContenu = <SignIn func={handleToggle} />;
	} else {
		toggleContenu = <SignUp func={handleToggle} />;
	}

	if (!currentUser) {
		toggleInscrire = (
			<Button
				onClick={handleClickOpen}
				variant="contained"
				style={{
					background: "#EF7766",
					width: "70%",
					padding: "10px",
				}}
				endIcon={<LoginIcon />}
			>
				<strong>Je m'inscris</strong>
			</Button>
		);
	} else {
		toggleInscrire = (
			<Button
				onClick={() => navigate("/private/dashboard")}
				variant="contained"
				style={{
					background: "#EF7766",
					width: "70%",
					padding: "10px",
				}}
				endIcon={<LoginIcon />}
			>
				<strong>Je m'inscris</strong>
			</Button>
		);
	}

	return (
		<div id="clientPrest">
			<div id="client">
				<div>
					<h2>Je suis Client !</h2>
					<p>
						En quelques clics, pour mes Evénéments, Cérémonies:
						Mariage, Baptême, Cocktail, Seminaire, Déjeuné
						entreprise...
						<br />
						Je trouve les Partenaires où Services qu'il me faut:
						<br /> Traiteur, Décoratrice, Maquillage-Coiffure,
						Fleuriste, Photo-Vidéo, Hotel, Restaurant...
					</p>
					<Button
						variant="contained"
						style={{
							background: "#00A591",
							width: "70%",
							padding: "10px",
						}}
						endIcon={<SearchIcon />}
					>
						<strong>Je cherhe</strong>
					</Button>
				</div>
			</div>
			<div id="prest">
				<div>
					<h2>Je suis Prestataire !</h2>
					<p>
						Je deviens plus <strong>accessible</strong> et{" "}
						<strong>visible</strong> <br /> en me référençant dans
						le 1 <sup>er</sup> site d'annonce de l'événementielle au
						Sénégal. <br /> Je poste mes annonces{" "}
						<em> GRATUITEMENT</em>.
					</p>
					{toggleInscrire}
				</div>
			</div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent>{toggleContenu}</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						fermer
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ClientPrest;

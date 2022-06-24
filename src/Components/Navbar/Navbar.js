import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "./se.jpg";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import { UserContext } from "../../Context/UserContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

function Navbar() {
	const [open, setOpen] = useState(false);
	const [toggle, setToggle] = useState(true);

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

	const handleLogOut = async () => {
		try {
			await signOut(auth);
			navigate("/");
		} catch {
			alert("Erreur lors de la déconnexion");
		}
	};

	let toggleButton;
	let publierAnnonce;
	let publierAnnonce2;

	if (currentUser) {
		toggleButton = (
			<div id="logout">
				<IconButton
					title="Deconnexion"
					onClick={handleLogOut}
					style={{ color: "#00A591" }}
				>
					<LogoutIcon />
				</IconButton>
			</div>
		);
		publierAnnonce = (
			<Button
				onClick={() => navigate("/private/dashboard")}
				variant="contained"
				size="large"
				style={{
					background: "#00A591",
					borderRadius: "20px",
					textTransform: "initial",
					fontFamily: "Montserrat, sans-serif",
				}}
				startIcon={<AddIcon />}
			>
				Publier une annonce
			</Button>
		);
		publierAnnonce2 = (
			<IconButton
				title="Publier Annonce"
				onClick={() => navigate("/private/dashboard")}
				style={{ background: "#00A591", color: "#fff" }}
			>
				<AddIcon />
			</IconButton>
		);
	} else {
		toggleButton = (
			<IconButton
				title="Inscription/Connexion"
				onClick={handleClickOpen}
				style={{ color: "#00A591" }}
			>
				<LoginIcon />
			</IconButton>
		);
		publierAnnonce = (
			<Button
				onClick={handleClickOpen}
				variant="contained"
				size="large"
				style={{
					background: "#00A591",
					borderRadius: "20px",
					textTransform: "initial",
					fontFamily: "Montserrat, sans-serif",
				}}
				startIcon={<AddIcon />}
			>
				Publier une annonce
			</Button>
		);
		publierAnnonce2 = (
			<IconButton
				title="Publier Annonce"
				onClick={handleClickOpen}
				style={{ background: "#00A591", color: "#fff" }}
			>
				<AddIcon />
			</IconButton>
		);
	}

	let toggleContenu;

	if (toggle) {
		toggleContenu = <SignIn func={handleToggle} />;
	} else {
		toggleContenu = <SignUp func={handleToggle} />;
	}

	return (
		<nav>
			<Link to="/" id="logo">
				<p>
					<img src={logo} width="70px" height="70px" alt="logo" />
				</p>
				<h4>SenEvents</h4>
			</Link>
			<div id="liens">
				<NavLink
					to="/"
					style={({ isActive }) =>
						isActive ? { color: "#00A591" } : { color: "black" }
					}
				>
					Accueil
				</NavLink>
				<NavLink
					to="/contact"
					style={({ isActive }) =>
						isActive ? { color: "#00A591" } : { color: "black" }
					}
				>
					Contacts
				</NavLink>
				<NavLink
					to="/apropos"
					style={({ isActive }) =>
						isActive ? { color: "#00A591" } : { color: "black" }
					}
				>
					A Propos
				</NavLink>
			</div>
			<div id="connexion">
				{toggleButton}
				<div id="add1">{publierAnnonce}</div>
				<div id="add2">
					{publierAnnonce2}
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
					<Button
						onClick={handleClose}
						sx={{ color: "#00A591" }}
						autoFocus
					>
						fermer
					</Button>
				</DialogActions>
			</Dialog>
		</nav>
	);
}

export default Navbar;

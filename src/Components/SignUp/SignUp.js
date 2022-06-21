import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignUp(props) {
	const [validation, setValidation] = useState("");
	const { signup } = useContext(UserContext);
	const formRef = useRef();
	const navigate = useNavigate();
	// console.log(signup);
	const handleSignUp = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		// console.log({
		// 	email: data.get("email"),
		// 	password: data.get("password"),
		// 	repeatPassword: data.get("repeat"),
		// });

		if ((data.get("password").length || data.get("repeat").length) < 6) {
			setValidation("6 caractères minimum pour le mot de passe !");
			return;
		} else if (data.get("password") !== data.get("repeat")) {
			setValidation("Les mots de passe ne correspondent pas !");
			return;
		}

		try {
			await signup(data.get("email"), data.get("password"));
			setValidation("Inscription réussie !");
			formRef.current.reset();
			navigate("/private/dashboard");
		} catch (error) {
			console.log(error);
			if (error.code === "auth/invalid-email") {
				setValidation("Email invalide !");
			} else if (error.code === "auth/email-already-in-use") {
				setValidation("Email déjà utilisé !");
			}
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Formulaire d'inscription
					</Typography>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<p style={{ color: "red" }}>{validation}</p>
					<Box
						ref={formRef}
						component="form"
						method="post"
						sx={{ mt: 3 }}
						onSubmit={handleSignUp}
					>
						<Grid container spacing={2}>
							{/* <Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid> */}
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									type="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="repeat"
									label="Repeat Password"
									type="password"
									id="repeat"
									autoComplete="new-password"
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{
								mt: 3,
								mb: 2,
								background: "#00A591",
								":hover": {
									background: "#00A591",
								},
							}}
						>
							S'incrire
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link
									onClick={props.func}
									variant="body2"
									sx={{
										cursor: "pointer",
										color: "black",
										textDecoration: "none",
									}}
								>
									Vous avez un compte? Se Connecter !
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

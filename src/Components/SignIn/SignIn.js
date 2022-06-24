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

export default function SignIn(props) {
	const [validation, setValidation] = useState("");
	const { signin } = useContext(UserContext);
	const formRef = useRef();
	const navigate = useNavigate();
	// console.log(signin);

	const handleSignIn = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		// console.log({
		// 	email: data.get("email"),
		// 	password: data.get("password"),
		// });

		try {
			await signin(data.get("email"), data.get("password"));
			setValidation("Connexion réussie !");
			formRef.current.reset();
			navigate("/private/dashboard");
		} catch {
			setValidation("Email et/ou mot de passe incorrect(s) !");
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
						Formulaire de connexion
					</Typography>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<p style={{ color: "red" }}>{validation}</p>
					<Box
						ref={formRef}
						component="form"
						method="post"
						sx={{ mt: 1 }}
						onSubmit={handleSignIn}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
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
							Se connecter
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
									Pas de compte ? S'Inscrire !
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

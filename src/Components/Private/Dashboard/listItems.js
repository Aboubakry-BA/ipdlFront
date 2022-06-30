import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CampaignIcon from "@mui/icons-material/Campaign";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

export const mainListItems = (
	<React.Fragment>
		<ListSubheader component="div">Principal</ListSubheader>
		<ListItemButton>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Tableau de bord" />
		</ListItemButton>
		<Divider />
		<ListSubheader component="div">Vos Annonces</ListSubheader>
		<ListItemButton>
			<ListItemIcon>
				<CampaignIcon />
			</ListItemIcon>
			<ListItemText primary="Annonces" />
		</ListItemButton>
		<ListItemButton>
			<ListItemIcon>
				<FavoriteBorderIcon />
			</ListItemIcon>
			<ListItemText primary="Annonces favorites" />
		</ListItemButton>
		<Divider />
		<ListSubheader component="div">Feedbacks</ListSubheader>
		<ListItemButton>
			<ListItemIcon>
				<StarBorderIcon />
			</ListItemIcon>
			<ListItemText primary="Avis" />
		</ListItemButton>
		<Divider />
		<ListSubheader component="div">Transactions</ListSubheader>
		<ListItemButton>
			<ListItemIcon>
				<LibraryBooksIcon />
			</ListItemIcon>
			<ListItemText primary="Factures" />
		</ListItemButton>
	</React.Fragment>
);

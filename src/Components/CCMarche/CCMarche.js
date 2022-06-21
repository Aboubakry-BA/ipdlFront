import React from "react";
import "./CCMarche.css";
import IconButton from "@mui/material/IconButton";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function CCMarche() {
  return (
    <div id="titre">
      <h2>Comment ça marche ?</h2>
      <p>SenEvents c'est tout simple et puissant.</p>
      <div id="icon">
        <div className="icon">
          <IconButton
            sx={{
              color: "#fff",
              background: "#00A591",
              width: "100px",
              height: "100px",
              ":hover": { background: "#fff", color: "#00A591" },
            }}
          >
            <PermIdentityIcon
              sx={{
                width: "40px",
                height: "40px",
                ":hover": { color: "#00A591" },
              }}
            />
          </IconButton>
          <h3>Créez un compte</h3>
          <p>
            Commencez par créer votre compte pour accéder à toutes nos
            fonctionnalités : c'est GRATUIT!
          </p>
        </div>
        <div className="icon">
          <IconButton
            sx={{
              color: "#fff",
              background: "#00A591",
              width: "100px",
              height: "100px",
              ":hover": { background: "#fff", color: "#00A591" },
            }}
          >
            <NotificationsNoneIcon
              sx={{
                width: "40px",
                height: "40px",
                ":hover": { color: "#00A591" },
              }}
            />
          </IconButton>
          <h3>Postez votre annonce</h3>
          <p>
            Maintenant que vous êtes inscris, détaillez votre profil et créez
            votre première annonce !
          </p>
        </div>
        <div className="icon">
          <IconButton
            sx={{
              color: "#fff",
              background: "#00A591",
              width: "100px",
              height: "100px",
              ":hover": { background: "#fff", color: "#00A591" },
            }}
          >
            <DiamondOutlinedIcon
              sx={{
                width: "40px",
                height: "40px",
                ":hover": { color: "#00A591" },
              }}
            />
          </IconButton>
          <h3>Vous êtes maintenant visible</h3>
          <p>
            Votre annonce est déjà en ligne ! Il ne reste plus qu’à attendre
            d’être contacté par les clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CCMarche;

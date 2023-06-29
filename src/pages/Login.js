import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { authorizationUrl, clientId, redirectUri, scopes } from "./StorageUrl";
import { setItem } from "./TokenCreate";

export default function Login() {
  // const handleAuthentication = async () => {
  //   await axios
  //     .post("https://accounts.google.com/o/oauth2/v2/auth", {
  //       params: {
  //         response_type: "token",
  //         client_id: { clientId },
  //         redirect_uri: { redirectUri },
  //         scope: { scopes },
  //       },
  //     })
  //     .then((response) => {
  //       setItem("access_token", response.data.access_token);
  //       window.location.reload();
  //     })
  //     .catch((error) => console.error("Authentication error:", error));
  // };

  const handleAuthentication = ()=>{
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`;
    window.location.href=authUrl;
  }

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={handleAuthentication}
        style={{ marginLeft: "10px" }}
      >
        Authanticate Me 🚀{" "}
      </Button>
    </div>
  );
}

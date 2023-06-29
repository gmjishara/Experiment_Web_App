import "./App.css";
import Home from "./pages/Home";
import "./pages/style.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import paths from "./pages/paths";
import { RemoveItem, setItem } from "./pages/TokenCreate";
import { getItem } from "./pages/TokenCreate";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Login from "./pages/Login";

export default function App() {
  const [dashboard, setDashboard] = useState(
    getItem("access_token") ? true : false
  );

  const token = window.location.hash?.substring(1);

  useEffect(() => {
    if (token.includes("token")) {
      const realToken = token.match(/access_token=([^&]+)/)[1];
      const expiresTime = token.match(/expires_in=([^&]+)/)[1];
      setItem("access_token", realToken);
      setItem("expires_in", expiresTime);
      setInterval(() => {
        RemoveItem("access_token");
        window.location.reload();
      }, getItem('expires_in') * 1000);
      setDashboard(true);
    }
  }, [token]);

  const navStyle = {
    textDecoration: "none",
    fontSize: "1.5rem",
  };

  const logOut = () => {
    RemoveItem("access_token");
    window.location.reload();
  };

  return (
    <div className="main">
      {dashboard ? (
        <>
          <Button
            variant="contained"
            color="error"
            style={{ margin: "0 0 10px 0" }}
            onClick={logOut}
          >
            Logout
          </Button>
          <Box style={{ display: "flex", gap: "75px", width: "100%" }}>
            <Box
              style={{
                width: "15vw",
                height: "90vh",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                marginLeft: "30px",
                borderRadius: "15px",
              }}
            >
              <NavLink
                exact
                to="/dashboard"
                style={navStyle}
                activeClassName="active"
              >
                Dashboard
              </NavLink>
              <NavLink
                exact
                to="/courses"
                style={navStyle}
                activeClassName="active"
              >
                Courses
              </NavLink>
              <NavLink
                exact
                to="/students"
                style={navStyle}
                activeClassName="active"
              >
                Students
              </NavLink>
            </Box>
            <Box
              style={{
                width: "75vw",
                height: "90vh",
                border: "1px solid black",
                borderRadius: "15px",
              }}
            >
              <Routes>
                <Route exact path="*" element={<Navigate to="/dashboard" />} />
                {paths.map((route) => (
                  <Route path={route.path} element={route.component} />
                ))}
              </Routes>
            </Box>
          </Box>
        </>
      ) : (
        <Routes>
          <Route exact path="*" element={<Navigate to="/login" />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

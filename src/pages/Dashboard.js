import React, { useEffect, useState } from "react";
import instance from "./AxiosOrders";
import { Box, Button } from "@mui/material";
import { getItem } from "./TokenCreate";
import axios from "axios";

export default function Dashboard() {
  const accessToken = getItem("access_token");
  const [course, setCourse] = useState({});
  const [msg, setMsg] = useState("Welcome Message");

  const createCourse = () => {
    const request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://classroom.googleapis.com/v1/courses/423837096535",
      true
    );
    request.setRequestHeader("Authorization", "Bearer " + accessToken);
    request.send();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          console.log("The request was successful");
          setMsg("The request was successful!");
          setCourse(JSON.parse(request.response));
        } else {
          console.log("The request failed");
          setMsg("The request failed");
        }
      }
    });
  };

  useEffect(createCourse, [accessToken]);

  const headingStyles = { position: "absolute", left: "30%", top: "5%" };
  const divStyles = {
    position: "absolute",
    left: "35%",
    top: "15%",
    fontSize: "20px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "relative",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={createCourse}
        style={{ margin: "300px auto" }}
      >
        Create
      </Button>

      <h1 style={headingStyles}>{msg}</h1>
      <div style={divStyles}>
        <h4>
          Id:
          <span
            style={{ marginLeft: "10px", color: "green", fontSize: "15px" }}
          >
            {course.id}
          </span>
        </h4>
        <h4>
          Name:
          <span
            style={{ marginLeft: "10px", color: "green", fontSize: "15px" }}
          >
            {course.name}
          </span>
        </h4>
        <h4>
          Section:
          <span
            style={{ marginLeft: "10px", color: "green", fontSize: "15px" }}
          >
            {course.section}
          </span>
        </h4>
      </div>
    </div>
  );
}

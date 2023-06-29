import React from "react";


export default function Home() {
  const CLIENT_ID =
    "419959836304-ksj5n8j3qvvqcbu0i5csfp5q1r5h6q9i.apps.googleusercontent.com";
    const CLIENT_SECRET ="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"
  const REDIRECT_URL = "http://localhost:3000";
  const SCOPES = "https://www.googleapis.com/auth/classroom.courses";

  // const auth = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
  // const authorize =()=>{
  //   const authUrl = auth.generateAuthUrl({scope:SCOPES})
  //   window.location.href = authUrl;
  // };

  return (
    <div>
      <button >
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front text"> Click me</span>
      </button>
    </div>
  );
}

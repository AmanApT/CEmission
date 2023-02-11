import { TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase";

const Signup = ({ setToggleAuth, setLoggedUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(email);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoggedUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  return (
    <div className="loginAuth">
      <div className="loginDialog">
        <h1 className="loginTitle">CREATE ACCOUNT</h1>
        <div className="authInput">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            id="custom-css-outlined-input"
          />
        </div>

        <div className="authInput">
          <TextField
            type="password"
            label="Password"
            id="custom-css-outlined-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="authButton" onClick={handleClick}>
          SIGN UP
        </button>
        <div>
          <h4 style={{ display: "inline", fontWeight: "500" }}>
            Already have an account?{" "}
          </h4>
          <h4
            onClick={() => setToggleAuth(false)}
            style={{ display: "inline", color: "#165A4A", fontWeight: "700" }}
          >
            Log In
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Signup;

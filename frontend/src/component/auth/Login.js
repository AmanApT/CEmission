import React from "react";
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div className="loginAuth">
      <div className="loginDialog">
        <h1 className="loginTitle">WELCOME BACK</h1>
        <div className="authInput">
        <TextField id="outlined-basic" label="Email" color="success" variant="filled" />
        </div>
        <div className="authInput">
        <TextField id="outlined-basic" label="Enter Password" color="success" variant="outlined" />
        </div>
      <button> Login</button>
      <div>
        <h4>Don't have an account ? </h4>
        <h4>Sign Up</h4>
      </div>
      </div>
    </div>
  );
};

export default Login;

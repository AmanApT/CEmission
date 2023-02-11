import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const Login = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  });

  return (
    <div className="loginAuth">
      <div className="loginDialog">
        <h1 className="loginTitle">WELCOME BACK</h1>
        <div className="authInput">
          <CssTextField label="Email" id="custom-css-outlined-input" />
        </div>

        <div className="authInput">
          <CssTextField
            type="password"
            label="Password"
            id="custom-css-outlined-input"
          />
        </div>
        <button className="authButton"> Login</button>
        <div>
          <h4>Don't have an account ? </h4>
          <h4>Sign Up</h4>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = ({ setLoggedUser }) => {
  const [toggleAuth, setToggleAuth] = useState(false);

  return (
    <>
      {toggleAuth ? (
        <Signup setToggleAuth={setToggleAuth} setLoggedUser={setLoggedUser} />
      ) : (
        <Login setToggleAuth={setToggleAuth} setLoggedUser={setLoggedUser} />
      )}
    </>
  );
};

export default Auth;

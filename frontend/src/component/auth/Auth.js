import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = ({ setLoggedUser, setCheckUser }) => {
  const [toggleAuth, setToggleAuth] = useState(false);

  return (
    <>
      {toggleAuth ? (
        <Signup
          setToggleAuth={setToggleAuth}
          setLoggedUser={setLoggedUser}
          setCheckUser={setCheckUser}
        />
      ) : (
        <Login
          setToggleAuth={setToggleAuth}
          setLoggedUser={setLoggedUser}
          setCheckUser={setCheckUser}
        />
      )}
    </>
  );
};

export default Auth;

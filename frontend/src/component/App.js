import React, { useState } from "react";
import Auth from "./auth/Auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import Home from "./home/Home";

function App() {
  // State to check whether user is logged in or not : 
  
  const [loggedUser, setLoggedUser] = useState("");
  const [checkUser, setCheckUser] = useState(0);

  return (
    <div>
      {checkUser === 0 ? (
        <Home setCheckUser={setCheckUser} loggedUser={loggedUser} />
      ) : (
        <Auth
          setCheckUser={setCheckUser}
          setLoggedUser={setLoggedUser}
          loggedUser={loggedUser}
        />
      )}
    </div>
  );
}

export default App;

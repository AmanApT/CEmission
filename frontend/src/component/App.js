import React, { useState } from "react";
import Auth from "./auth/Auth";

import "firebase/compat/firestore";
import "firebase/compat/auth";
import Home from "./home/Home";

function App() {
  const [loggedUser, setLoggedUser] = useState("");

  return (
    <div>
      {loggedUser ? (
        <Home loggedUser={loggedUser} />
      ) : (
        <Auth setLoggedUser={setLoggedUser} />
      )}

      {/* <Main /> */}
    </div>
  );
}

export default App;

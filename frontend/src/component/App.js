import React, { useState } from "react";
import Auth from "./auth/Auth";

//Firebase Imports
// import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import Home from "./home/Home";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import Home from "./home/Home";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// const auth = getAuth(app);
// const firestore = firebase.firestore();

function App() {
  // const [user] = useAuthState(auth);

  // const usersRef = firestore.collection("users");
  // const query = usersRef.orderBy("createdAt");

  const [loggedUser, setLoggedUser] = useState("");

  return (
    <div>
      {loggedUser ? (
        <Home loggedUser={loggedUser} />
      ) : (
        <Auth setLoggedUser={setLoggedUser} />
      )}
    </div>
  );
}

export default App;

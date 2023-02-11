import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

//To initialize firebase in react app
const app = firebase.initializeApp({
  apiKey: "AIzaSyAGD-jFDY7D_cJJdPEoisyqipFOymlmZlY",
  authDomain: "cemission-ac7ce.firebaseapp.com",
  projectId: "cemission-ac7ce",
  storageBucket: "cemission-ac7ce.appspot.com",
  messagingSenderId: "237685365481",
  appId: "1:237685365481:web:5163f5365a5b4ec4466e78",
  measurementId: "G-NCT0HFQFYC"
});

const auth = getAuth(app);

export default auth;

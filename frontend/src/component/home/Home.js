import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import QuestionPage1 from "../questions/QuestionPage1";
// import QuestionPage3 from "../questions/QuestionPage3";
// import QuestionPage2 from "../questions/QuestionPage2";
// import QuestionPage4 from "../questions/QuestionPage4";
import Question from "../questions/Individual/Question";
import IndustryQuestion from "../questions/Industry/IndustryQuestion";
import Login from "../auth/Login";
import Main from "./Main";
import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  arrayUnion,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import Recommend from "../questions/Individual/Recommend";
import RecommendIndustry from "../questions/Industry/RecommendIndustry";

const Home = ({ loggedUser, setCheckUser }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  //   const [pageToggle, setPageToggle] = useState(0);
  const [homeQuestion, setHomeQuestion] = useState(0);
  const [open, setOpen] = useState(false);

  // const description = [1000, 1000, 1200, 10000, 4, 4, 0, 0];

  // const api = "http://127.0.0.1:5000/query1";
  // const handleClick = async () => {
  //   const response = await fetch(`${api}?description=${description}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   // 3) parse response
  //   const data = response.json();
  //   console.log(data);
  //   //   return data;
  //   // response();
  // };

  // let  userinfo = {}
  // useEffect(()=>{

  //   const getData = async()=> {
  //     const q = query(
  //       collection(db, "userinfo"),
  //       where("email", "==", loggedUser.email)
  //     );

  //     const querySnapshot = await getDocs(q);
  //     console.log(querySnapshot);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       // console.log(doc.id, " => ", doc.data());
  //       userinfo = doc.data().info;
  //       // console.log(userinfo);

  //       // userId = doc.id;
  //     });
  //   }
  //   getData();

  // },[])

  return (
    <div>
      {/* <button onClick={handleClick}>Send Api Request</button> */}

      {homeQuestion === 1 ? (
        <Question setHomeQuestion={setHomeQuestion} loggedUser={loggedUser} />
      ) : homeQuestion === 2 ? (
        <IndustryQuestion
          setHomeQuestion={setHomeQuestion}
          loggedUser={loggedUser}
        />
      ) : (
        <Main
          setHomeQuestion={setHomeQuestion}
          homeQuestion={homeQuestion}
          loggedUser={loggedUser}
          setCheckUser={setCheckUser}
        />
      )}

      {/* <RecommendIndustry /> */}
    </div>
  );
};

export default Home;

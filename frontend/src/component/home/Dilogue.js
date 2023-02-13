import React, { useEffect, useState } from "react";
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
import { async } from "@firebase/util";

const Dilogue = ({ loggedUser }) => {
  useEffect(() => {
    document
      .getElementById("open-popup-btn")
      .addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.add("active");
        console.log("Log ho rha hun mai ");
      });

    document
      .getElementById("dismiss-popup-btn")
      .addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.remove("active");
      });
  }, []);

  const [userInfo,setUserInfo] = useState([]);




  //  userinfo = [];
  // let userInfoMap = [];
  // useEffect(() => {
  //   const getData = async () => {
  //     const q = query(
  //       collection(db, "userinfo"),
  //       where("email", "==", loggedUser.email)
  //     );

  //     const querySnapshot = await getDocs(q);
  //     // console.log(querySnapshot);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       // console.log(doc.id, " => ", doc.data());
  //       userinfo = doc.data().info;

  //       // userId = doc.id;
  //     });

  //   };
  //   getData();

  //   console.log(userinfo);
  // }, []);

  const handleClick =async()=>{

    const q = query(
      collection(db, "userinfo"),
      where("email", "==", loggedUser.email)
    );

    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setUserInfo(doc.data().info);
      console.log('====================================');
      console.log(userInfo);
      console.log('====================================');
      // userId = doc.id;
    });

  }

  return (
    <div style={{ height: "100%" }}>
      <div class="popup center ">
        <div class="title">Your Carbon Emission history</div>
        <div class="description">


        <div className="tableParent">
      <table className="table">
        {/* Heading Row---------- */}
        <tr>
          {/* <th style={{ borderTopLeftRadius: "12px" }}></th> */}
          <th style={{ borderTopLeftRadius: "12px" }}>Electricity Bill</th>
          <th>Gas Bill</th>
          <th>Car Mileage</th>
          <th>Flight1</th>
          <th>Flight2</th>
          <th>Oil Bill</th>
          <th>Recylcle1</th>
          <th>Recycle2</th>
          <th style={{ borderTopRightRadius: "12px" }}>C.Emission</th>
          
        </tr>

        {/* ⬇️Further rows */}
       
       
        {
        
        userInfo ?  
            (
        userInfo.map((eachInfo) => {
          return (
            <tr>
              <td style={{ fontSize: "13px" }}>{eachInfo.in[0]}</td>
              <td style={{ fontSize: "13px" }}>{eachInfo.in[1]}</td>
              <td style={{ fontSize: "13px" }}>{eachInfo.in[2]}</td>
              <td style={{ fontSize: "13px" }}>{eachInfo.in[3]}</td>
              <td style={{ fontSize: "13px" }}>{eachInfo.in[4]}</td>
              <td style={{ fontSize: "13px" }}>{eachInfo.in[5]}</td>
              <td style={{ fontSize: "13px" }}>{eachInfo.in[6]}</td>
              <td style={{ fontSize: "13px" }}>{eachInfo.in[7]}</td>
              <td style={{ fontSize: "13px" }}>{eachInfo.op[0]}</td>
            </tr>
          );
        } )  )
        : <div> Kuch nahi hai lavde</div>
      }
      </table>
    </div>
        </div>
        <div class="dismiss-btn">
          <button id="dismiss-popup-btn">Dismiss</button>
        </div>

      </div>

      <div class="center-btn">
        <button  onClick={handleClick} id="open-popup-btn">Show history</button>
      </div>
    </div>
  );
};

export default Dilogue;

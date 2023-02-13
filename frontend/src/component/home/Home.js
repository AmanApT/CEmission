import React, { useEffect, useState } from "react";
// import QuestionPage1 from "../questions/QuestionPage1";
// import QuestionPage3 from "../questions/QuestionPage3";
// import QuestionPage2 from "../questions/QuestionPage2";
// import QuestionPage4 from "../questions/QuestionPage4";
import Question from "../questions/Individual/Question";
import IndustryQuestion from "../questions/Industry/IndustryQuestion";
import Login from "../auth/Login";
import Main from "./Main";

const Home = ({ loggedUser }) => {
  //   const [pageToggle, setPageToggle] = useState(0);
  const [homeQuestion, setHomeQuestion] = useState(0);

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
        <Main setHomeQuestion={setHomeQuestion} homeQuestion={homeQuestion} />
      )}
    </div>
  );
};

export default Home;

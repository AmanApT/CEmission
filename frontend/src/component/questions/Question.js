import React, { useState } from "react";
import QuestionPage1 from "./QuestionPage1";
import QuestionPage3 from "../questions/QuestionPage3";
import QuestionPage2 from "../questions/QuestionPage2";
import QuestionPage4 from "../questions/QuestionPage4";
import Result from "./Result";

const Question = ({ setHomeQuestion }) => {
  const [toggleQuestion, setToggleQuestion] = useState(1);

  return (
    <>
      {toggleQuestion === 1 ? (
        <QuestionPage1
          setToggleQuestion={setToggleQuestion}
          setHomeQuestion={setHomeQuestion}
        />
      ) : toggleQuestion === 2 ? (
        <QuestionPage2 setToggleQuestion={setToggleQuestion} />
      ) : toggleQuestion === 3 ? (
        <QuestionPage3 setToggleQuestion={setToggleQuestion} />
      ) : toggleQuestion === 4 ? (
        <QuestionPage4 setToggleQuestion={setToggleQuestion} />
      ) : (
        <Result setToggleQuestion={setToggleQuestion} />
      )}
    </>
  );
};

export default Question;

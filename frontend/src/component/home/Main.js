import React from "react";

const Main = ({ setHomeQuestion, homeQuestion }) => {
  return (
    <>
      <button onClick={() => setHomeQuestion(1)}>
        Question dekhne ke liye mujhe dabaye
      </button>
    </>
  );
};

export default Main;

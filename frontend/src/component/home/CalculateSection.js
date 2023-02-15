import React from "react";

const CalculateSection = ({ loggedUser, setCheckUser, setHomeQuestion }) => {
  const handleClick = () => {
    if (loggedUser) {
      setHomeQuestion(1);
    } else {
      setCheckUser(1);
    }
  };

  const handleClick2 = () => {
    if (loggedUser) {
      setHomeQuestion(2);
    } else {
      setCheckUser(1);
    }
  };

  // id="calculateCarbonEmission
  return (
    <section className="calculateCarbonEmission" data-aos="fade" id="calculate">
      <div className="calculateMainDiv">
        <p className="calculateHeading">
          Calculate Your
          <br /> Carbon Footprint Today!
        </p>

        <div className="calculationBoxes">
          <div className="box1" onClick={handleClick}>
            <div>
              {" "}
              FOR
              <br /> INDIVIDUAL{" "}
            </div>
          </div>
          <div>
            <div className="box1" onClick={handleClick2}>
              FOR <br /> INDUSTRY{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculateSection;

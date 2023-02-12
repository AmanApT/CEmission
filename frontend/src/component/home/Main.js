import React from "react";
import leafImage from "../questions/leaf.png";
import linkedIn from "../questions/linkedin.png";
import twitter from "../questions/twitter.png";
import facebook from "../questions/facebook.png";
import instagram from "../questions/instagram.png";

const Main = ({ setHomeQuestion, homeQuestion }) => {
  return (
    <div>
      <nav className="navBar"></nav>

      <div className="mainFirst">
        <div className="mainFirstDiv">
          <h1>ITS TIME TO OFFSET YOUR CARBON FOOTPRINTS EMISSION</h1>
        </div>
      </div>

      {/* .................................Mini Section............................ */}

      <div className="miniSection">
        <div style={{ width: "50%", marginTop: "2%" }}>
          <div className="headingMinSection" style={{ width: "100%" }}>
            <h1 style={{ color: "#165a4a", fontWeight: "400" }}>
              Reclaim Green
            </h1>
            <h1 style={{ color: "#165a4a", fontWeight: "400" }}>
              is your one stop solution
            </h1>
          </div>
          <p
            className="minSectionDescription"
            style={{
              color: "rgb(71, 64, 64)",
              fontSize: "22px",
              marginTop: "2%",
            }}
          >
            for tracking, analyzing,cutting carbon of individual, industry level
            and making the world more green and happy place to live!
          </p>

          <button className="getStartedBtn">GET STARTED</button>
        </div>
      </div>

      {/* .................................Card Section............................ */}

      <div className="cardsSection">
        <div className="cardsSectionHeading_Description">
          <p className="cardsSectionHeading">
            A simple and streamlined process
          </p>
          <div>
            <p className="cardsSectionDescription">
              Offset your individual, industry level carbon footprint emissions
              and save the world!
            </p>
            <div>
              <p className="cardsSectionMiniDescription">How does it work?</p>
              <p className="cardsSectionMiniDescription">
                Check the descrption below
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* .................................Did you know Section............................ */}

      <div className="didYouKnow">
        <img className="leafImage" src={leafImage} alt="React Logo" />

        <div className="didYouKnowDescription">
          <p className="headingDidYouKnow">Did you know?</p>
          <p className="textDidYouKnow">
            Carbon Footprint measures greenhouse gases (GHG) emitted into the
            atmosphere which have severely impacted Earth and given birth to
            problems like global warming. Measuring carbon footprint helps us to
            know the GHG-producing areas, and gives us a chance to mitigate them
            and reduce their impact to protect the Earth from further damage.
          </p>
          <p className="subHeadingDidYouKnow">
            Start your journey in creating a sustainable future by calculating
            your carbon footprint today.
          </p>
        </div>
      </div>

      {/* ..........................................Calculate Section....................................... */}

      <section id="calculateCarbonEmission">
        <div className="calculateMainDiv">
          <p className="calculateHeading">
            Calculate Your
            <br /> Carbon Footprint Today
          </p>

          <div className="calculationBoxes">
            <div className="box1">
              <div>
                {" "}
                FOR
                <br /> INDIVIDUAL{" "}
              </div>
            </div>
            <div>
              <div className="box1">
                FOR <br /> INDUSTRY{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ...............................................Graph Section........................................ */}

      <section id="graph">
        <p className="graphHeading">My Footprint</p>
      </section>

      {/* .............................................Contact Us............................................. */}

      <section id="contactUs">
        <div className="contactUsLeft">
          <p className="contactUsLeftJoin">Join Us</p>
          <p className="contactUsLeftJoin2">Sign Up for our Newsletter!</p>
          <p className="email">
            E-Mail : <span className="emailInfo">mahirakhan35@gmail.com</span>
          </p>
          <p>Follow us On :</p>
          <div className="socialLinks">
            <img className="linkedIn" src={linkedIn} alt="React Logo" />
            <img className="instagram" src={instagram} alt="React Logo" />
            <img className="twitter" src={twitter} alt="React Logo" />
            <img className="facebook" src={facebook} alt="React Logo" />
          </div>
        </div>

        <div className="contactUsRight">
          <p className="getInTouch">Get In Touch:</p>
          <div className="inputFieldDiv">
            <input
              placeholder="NAME"
              className="inputField"
              contenteditable="false"
            />
            <input
              placeholder="EMAIL ADDRESS"
              className="inputField"
              contenteditable="false"
            />
            <input
              placeholder="YOUR MESSAGE"
              className="inputFieldM"
              contenteditable="false"
            />
          </div>
        </div>
      </section>

      {/* <button onClick={() => setHomeQuestion(1)}>
        Question dekhne ke liye mujhe dabaye
      </button> */}
    </div>
  );
};

export default Main;

import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./home.css";
import ScrollDown from "./ScrollDown";
import profile_photo from "../../assets/profile.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          {/* style=
          {{
            animation: "profile__animate 5s ease-in-out infinite 1s",
          }} */}

          {/* <div>
            <img className="home-img" src={profile_photo} alt="xyz"></img>
          </div> */}

          <div id="img">
            <img className="home-img" src={profile_photo} alt="xyz"></img>
          </div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

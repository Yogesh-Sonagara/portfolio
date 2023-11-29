import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <>
      <section id="home" className="home">
        <div className="home__text-wrapper">
          <h1>
            Hello, I'm Yogesh
            <br />
            Backend devaloper
          </h1>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateY(550px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <div className="home__contact-me">
              <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Home;

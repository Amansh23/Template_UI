import React from "react";
import backgroundimage from "../assets/Group 512838.png";
import helex from "../assets/Helix.png";
import tube from "../assets/Thorus Knot.png";
import triangle from "../assets/Pyramid 1.png";
import donut from "../assets/Thorus 2.png";
import sphere from "../assets/Sphere.png";
import cylinder from "../assets/Cylinder 1.png";
import Cube from "../assets/Cube 1.png";

const Home = () => {
  return (
    <div className="Home_main_container">
      <div className="Home_left_container">
        <h3>Shaping Brands by</h3>
        <h1>
          Planning,
          <br />
          Crafting, & Perfection
        </h1>
        <button className="Home_left_button">
          <span>
            <i class="bi bi-arrow-right-circle"></i>
          </span>
          Connect
        </button>
      </div>
      <div className="Home_right_container">
        <img
          className="Home_right_background"
          src={backgroundimage}
          alt="Window"
        />
        <img className="Home_right_helex" src={helex} alt="helex" />
        <img className="Home_right_tube" src={tube} alt="knot" />
        <img className="Home_right_triangle" src={triangle} alt="triangle" />
        <img className="Home_right_donut" src={donut} alt="donut" />
        <img className="Home_right_cylinder" src={cylinder} alt="cylinder" />
        <img className="Home_right_Cube" src={Cube} alt="Cube" />
        <img className="Home_right_donut2" src={donut} alt="donut2" />
        <img className="Home_right_sphere" src={sphere} alt="sphere" />
      </div>
    </div>
  );
};

export default Home;

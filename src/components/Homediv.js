import React from "react";
import "../styles/Homediv.css";
import me from "../assets/image1.png";
import Sidediv from "./Sidediv";
import vistor from "../assets/Visitors.png";
import vehicles from "../assets/vehicles.png";
import Fvech from "./../assets/Fvehicles.png";
import { FaSearch } from "react-icons/fa";
import "../../src/index.css";

const Homediv = () => {
  return (
    <div className="container ">
      <div className="Top">
        <img
          src={me}
          alt="logo"
          width={180}
          height={60}
          className="image"
          style={{ float: "left" }}
        />
        <div className="search-input">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="Side">
        <Sidediv />
      </div>

      <div className="Tophead">
        <h2>VVMS Dashboard</h2>
      </div>

      <div className="row_container ">
        1
        <div className="board">
          <div className="center1">
            <img src={vehicles} alt="imagea" width={300} height={100} />
            <div>
              <p className="num">90</p>
              <button className="button light-button">1.23</button>
            </div>
            <p id="me">
              <span id="me1">10%</span> Decrease of the Total Employee
            </p>
          </div>
          <div className="Box1">
            <img src={vistor} alt="imagea1" width={300} height={100} />
            <div>
              <p className="num">90</p>
              <button className="button light-button">1.23</button>
              <p id="me">
                <span id="me2">10%</span> Increase of the Total Employee
              </p>
            </div>
          </div>

          <div className="Box3"></div>

          <div className="Box4">
            <img src={Fvech} alt="imagea" width={300} height={100} />
            <div>
              <p className="num">90</p>
              <button className="button light-button1">1.23</button>
              <p id="me">
                <span id="me2">10%</span> Increase of the Total Employee
              </p>
            </div>
          </div>
          <div className="Box5">8</div>
          <div className="Box6">9</div>
        </div>
      </div>
    </div>
  );
};

export default Homediv;

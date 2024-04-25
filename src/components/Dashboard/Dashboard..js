import React from "react";
import "../../index.css";
import me from "../../assets/image1.png";
import Sidediv from "../Sidediv";
import vehicles from "../../assets/vehicles.png";
import "../../styles/Homediv.css";
const Dashboard = () => {
  return (
    <div className="dash" style={{ display: "flex" }}>
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
          <input type="text" placeholder="Search..." name="my" />
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <Sidediv />
      </div>
      <div style={{ flex: 5 }} className="maindash">
        <div className="Tophead">
          <h2>VVMS Dashboard</h2>
        </div>
        <div>
          <div className="center1">
            <img src={vehicles} alt="imagea" width={300} height={100} />
            <div>
              <p id="me">
                <span id="me1">10%</span> Decrease of the Total Employee
              </p>
              <p className="num">90</p>
              <button className="button light-button">1.23</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

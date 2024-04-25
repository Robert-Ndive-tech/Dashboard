import React from "react";
import "../../index.css";
import me from "../../assets/image1.png";
import vistor from "../../assets/Visitors.png";
import Sidediv from "../Sidediv";
import vehicles from "../../assets/vehicles.png";
import Fvech from "../../assets/Fvehicles.png";
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
        <div style={{ display: "inline-block" }}>
          <table>
            <head></head>
            <tbody>
              <td>
                <div className="Box1">
                  <img src={vistor} alt="imagea1" width={300} height={100} />
                  <div>
                    <div style={{ display: "block" }}>
                      <button className="button light-button">1.23</button>
                      <p className="num">90</p>
                    </div>

                    <p id="me">
                      <span id="me2">10%</span> Increase of the Total Employee
                    </p>
                  </div>
                </div>
              </td>

              <td>
                <div className="center1">
                  <img src={vehicles} alt="imagea" width={300} height={100} />
                  <div>
                    {" "}
                    <button className="button light-button">1.23</button>
                    <p className="num">90</p>
                    <p id="me">
                      <span id="me1">10%</span> Decrease of the Total Employee
                    </p>{" "}
                  </div>
                </div>
              </td>
              {/*next box */}

              <td>
                <div className="Box4">
                  <img src={Fvech} alt="imagea" width={300} height={100} />
                  <div>
                    <button className="button light-button1">1.23</button>
                    <p className="num">90</p>

                    <p id="me">
                      <span id="me2">10%</span> Increase of the Total Employee
                    </p>
                  </div>
                </div>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

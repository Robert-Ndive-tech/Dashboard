import React from "react";
import "../../index.css";
import me from "../../assets/image1.png";
import vistor from "../../assets/Visitors.png";
import Sidediv from "../Sidediv";
import vehicles from "../../assets/vehicles.png";
import Fvech from "../../assets/Fvehicles.png";
import "../../styles/Homediv.css";
import MyCurveChart from "../../Test/graph3";
import MyEntryStatisticsChart from "../../Test/graph56";
import Rightdiv from "../Rightdiv";
import Bottomdiv from "../Bottomdiv";
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
      <div style={{ flex: 6, height: 1300 }} className="maindash">
        <div className="Tophead">
          <h1>VVMS Dashboard</h1>
        </div>
        <div style={{ display: "inline-block" }}>
          <table style={{ margingTop: 300 }}>
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
          <div>
            <table>
              <tbody>
                <td>
                  <div className="Box3">
                    <MyEntryStatisticsChart />
                  </div>
                </td>
                <td>
                  <div className="Box5">
                    <Rightdiv />
                  </div>
                </td>
              </tbody>
            </table>
          </div>
        </div>
        <div className="Box6">
          <Bottomdiv />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

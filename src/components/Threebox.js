import React from "react";
import vistor from "../assets/Visitors.png";
import "../index.css";
import vehicles from "../assets/vehicles.png";
import Fvech from "../assets/Fvehicles.png";
import "../styles/Homediv.css";

const Threebox = () => {
  return (
    <table>
      <tbody>
        <td>
          <div className="Box1">
            <img src={vistor} alt="imagea1" width={300} height={100} />
            <div id="box1">
              <div style={{ display: "block" }}>
                <p className="num" style={{ display: "inline-block" }}>
                  30
                </p>
                <button
                  className="button light-button"
                  style={{ display: "inline-block" }}
                >
                  1.23%
                </button>
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
            <div id="box2">
              <p className="num" style={{ display: "inline-block" }}>
                60
              </p>
              <button
                className="button light-button"
                style={{ display: "inline-block" }}
              >
                1.23%
              </button>
              <p id="me">
                <span id="me2">10%</span> Decrease of the Total Employee
              </p>
            </div>
          </div>
        </td>
        {/*next box */}

        <td>
          <div className="Box4">
            <img src={Fvech} alt="imagea" width={300} height={100} />
            <div id="box4">
              <p className="num" style={{ display: "inline-block" }}>
                90
              </p>
              <button
                className="button light-button1"
                style={{ display: "inline-block" }}
              >
                1.23%
              </button>
              <p id="me">
                <span id="me2">10%</span> Increase of the Total Employee
              </p>
            </div>
          </div>
        </td>
      </tbody>
    </table>
  );
};

export default Threebox;

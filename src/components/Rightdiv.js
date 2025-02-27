import React from "react";
import "../styles/Rightended.css";
import "../index.css";
import car from "../assets/car.png";
const Rightdiv = () => {
  return (
    <div id="bord">
      <p className="Heading">
        Recently
        <br /> Login in Vehicles
      </p>
      <MyTable />
    </div>
  );
};

export default Rightdiv;

const data = [
  { image: car, name: "Toyota yaris", time: "20 min ago" },
  { image: car, name: "Toyota Rav", time: "30 min ago" },
  { image: car, name: "Nissan Jeep", time: "40 min ago" },
  { image: car, name: "Nissan meep", time: "50 min ago" },
];

const MyTable = () => {
  return (
    <table>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td id="row">
              <img src={car} width={50} height={50} alt="imageh" />
            </td>
            <td id="row">{item.name}</td>
            <td id="row">{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

import React from 'react'
import UserImg from "../assets/user.png";
import Logo from "../assets/logo.png";
import { productivityData } from "../data/productivityData";
import ProgressBar from "./ProgressBar";

const EmployeeProductivity = () => {
  return (
    <div className="dashboard-container">
        <section className="userimg-container">
          <img
            style={{ aspectRatio: 1 / 1, width: "3.5rem" }}
            src={UserImg}
          ></img>
        </section>
        <section className="dashboardlogo-container">
          <div style={{ position: "relative" }}>
            <img className="logo" src={Logo}></img>
            <a className="four-count">
              <p>4</p>
            </a>
          </div>
        </section>
        <section className="productivity-dashboard">
          <div className="dashboard-label">Exployee Productivity Dashboard</div>
          <div className="stats">
            {productivityData.map((data) => {
              return (
                <div
                  key={data.id}
                  style={{ marginTop: "15px" }}
                  className="flex-col"
                >
                  <div className="flex-between-row">
                    <li style={{ listStyle: "none" }}>{data.day}</li>
                    <p style={{color:"#36A546"}}>{data.productivity}%</p>
                  </div>
                  <ProgressBar progress={data.productivity} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
  )
}

export default EmployeeProductivity

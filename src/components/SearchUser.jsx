import React from 'react'
import UserImg from "../assets/user.png";
import Logo from "../assets/logo.png";
import Search from './Search';
import { employees } from '../data/employeeData';
import UserCard from './UserCard';

const SearchUser = () => {
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
        <section style={{marginTop:'20px'}}>
            <Search emptyTitle="No users found!" data={employees} card={UserCard} />
        </section>
      </div>
  )
}

export default SearchUser

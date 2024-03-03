import React, { useState } from "react";
import Home from '../assets/hove.svg'
import User from '../assets/user-alt-1-svgrepo-com.svg'

import EmployeeProductivity from "./EmployeeProductivity";
import SearchUser from "./SearchUser";

const Dashboard = () => {
    const [currentTab, setCurrentTab] = useState('productivity');
  return (
    <div className="dashboard">
      {currentTab==='productivity'?<EmployeeProductivity />: <SearchUser />}
      <div className="bottom-menu">
        <div onClick={()=>setCurrentTab('productivity')} className={`bottom-menu-item ${currentTab==='productivity'&&'active-tab'}`}><img style={{width:'1.5rem'}} src={Home}></img></div>
        <div onClick={()=>setCurrentTab('search')} className={`bottom-menu-item ${currentTab==='search'&&'active-tab'}`}><img style={{width:'1.5rem'}} src={User}></img></div>
      </div>
    </div>
  );
};

export default Dashboard;

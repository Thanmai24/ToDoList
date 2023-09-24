import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Fetch from './Fetch';
function Navbar({group, setGroup, order, setOrder}) {
  const [displayReq, SetDisplayReq] = useState(false);
  const handleDisplay = () => {
    SetDisplayReq(!displayReq);
  };

  const groupHandler = (e) => {
    const newValue = e.target.value;
    setGroup(newValue);
    localStorage.setItem('group', newValue); 
  };

  const orderHandler = (e) => {
    const newValue = e.target.value;
    setOrder(newValue);
    localStorage.setItem('order', newValue); 
  };

  return (
    <>
    <div className="navbar-container">
      {/* <div className='outer-nav' onClick={()=>{
        SetDisplayReq(false);
      }}>
      </div> */}
      <div className="navbarBox">
        <button onClick={handleDisplay} className="display">
          <FontAwesomeIcon icon={faSliders} className="slider" />
          Display
          <FontAwesomeIcon icon={faChevronDown} className="dropDownIcon" />
        </button>
      </div>
      {displayReq ? (
        <div className="dropdown-elements">
          <div className="grouping">
            <label htmlFor="group" className="group">
              Grouping
            </label>
            <select name="group" id="group" onChange={groupHandler} value={group}>
              <option value="status">Status</option>
              <option value="users">Users</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="ordering">
            <label htmlFor="order" className="order">
              Ordering
            </label>
            <select name="order" id="order" onChange={orderHandler} value={order}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
        
      ) : (
        <></>
      )}
    </div>
    
    </>
  );
}

export default Navbar;

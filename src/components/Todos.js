import React, { useState, useEffect } from 'react'
import './Todos.css'
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faSignal, faPlus, faCircleExclamation, faCircle, faCircleCheck, faCircleHalfStroke, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Status from './Status';




function Todos({ item, group, order, user }) {
  const [mainData, setmainData] = useState({});
  const priorityNames = ["No priority", "Low", "Medium", "High", "Urgent"];
  const iconNames = [faEllipsisH, faSignal, faSignal, faSignal, faCircleExclamation];
  const statusIcons = [faCircle, faCircleHalfStroke, faCircleCheck, faCircleXmark];
  const statusNumber = { "Todo": 0, "In progress": 1, "Done": 2, "Backlog": 3 };
  const [userNames, setuserNames] = useState({});
  const [hIcon, sethIcon] = useState('');
  const [statusIcon, setStatusIcon] = useState('');
  useEffect(() => {
    if (item) {
      setmainData(item);
      console.log(item);
      console.log(user);
    }
  }, [item]);

  const userIdToNameMap = {};
  for (const id in user) {
    if (user[id]) {
      userIdToNameMap[user[id].id] = user[id].name;
    }
  }
  console.log(userIdToNameMap);

  const userIcon = {};
  for (const id in user) {
    if (user[id]) {
      const name = user[id].name;
      userIcon[user[id].id] = name.charAt(0) + name.charAt(name.length - 1);
    }
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="card-list">
      {
        Object.entries(mainData).map(([priority, items]) => (
          <div className="cardFlow" key={priority}>
            <div className='priority-heading'>
              {
                (group === 'priority') && (
                  <FontAwesomeIcon icon={iconNames[priority]} className={`priority-icon-heading-${priority}`} />
                )
              }
              {
                (group === 'status') && (
                  <FontAwesomeIcon icon={statusIcons[statusNumber[priority]]} className={`titleicon-${statusNumber[priority]}`} />
                )
              }
              {
                (group === 'users') && (

                   <div className ='userBox' style={{ backgroundColor: getRandomColor() }}>
                   <div className='usericon'>{userIcon[priority]}</div>
                   <div className='usericonavaialable'>
                    <div className='ua'></div>
                   </div>
                   </div>
                   
                )
              }
              {
                (group === 'priority') && (
                  <h4 className='priority'>{priorityNames[priority]}</h4>
                )
              }
              {
                (group === 'status') && (
                  <h4 className='priority'>{priority}</h4>
                )
              }
              {
                (group === 'users') && (
                  <h4 className='priority'>{userIdToNameMap[priority]}</h4>
                )
              }
              <p className='priority-size'>{items.length}</p>
              <FontAwesomeIcon icon={faPlus} className='add' />
              <FontAwesomeIcon icon={faEllipsisH} className='more' />
            </div>
            {
              items.map((item, index) => {
                return <Card key={index} cardData={item} group={group} order={order} userIcon = {userIcon} user = {user} />
              })
            }
          </div>
        ))
      }
    </div>
  )
}

export default Todos

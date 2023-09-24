import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEllipsisH, faCircleExclamation, faSignal, faCircleXmark, faCircleHalfStroke, faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './card.css';
function Card({ cardData, group, order, userIcon,user }) {
  const [data, setData] = useState([]);
  const [priority, setPriority] = useState(0);
  const iconNames = [faEllipsisH, faSignal, faSignal, faSignal, faCircleExclamation];
  // const statusicons = [faCircleHalfStroke,faCricleCheck,faCircle,faCircleXmark];
  const [statusIcon, setStatusIcon] = useState('');
  const [statusNumber, setStatusNumber] = useState(0);
  const [uid, setUId] = useState('');
  const [userStatus,setUserStatus] = useState(false);

  useEffect(() => {
    if (cardData) {
      setData(cardData);
      setPriority(cardData.priority);
      setUId(cardData.userId);
      setUserStatus(cardData.avalilable);
      var status = cardData.status;
      if (status === 'Todo') {
        setStatusIcon(faCircle);
        setStatusNumber(0);
      }
      else if (status === 'In progress') {
        setStatusIcon(faCircleHalfStroke);
        setStatusNumber(1);
      }
      else if (status === 'Done') {
        setStatusIcon(faCircleCheck);
        setStatusNumber(2);
      }
      else if (status === "Backlog") {
        setStatusIcon(faCircleXmark);  
        setStatusNumber(3);
      }
    }

  }, [cardData]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const setBg = (()=>{
    if(userStatus)
    {
       return 
    }
  })

  return (
    <div>
      <div className='card'>
        <div className='in-card'>
          <div className='ticket-header'>
            <div className='ticket-id'>{data.id}</div>
            {
              (group === 'priority' || group=== 'status') && (
                   <div className ='userBox usertitle-icon' style={{ backgroundColor: getRandomColor() }}>
                   <div className='usericon'>{userIcon[uid]}</div>
                   <div className='usericonavaialable'>
                    <div className='ua'></div>
                   </div>
                   </div>
              )
            }
          </div>

          <div className='titleHeader'>
            {
              (group === 'priority') && (
                <FontAwesomeIcon icon={statusIcon} className={`titleicon-${statusNumber} titleicon`} />
              )
            }
            <div className='title'>{data.title}</div>
          </div>
          <div className='statusHeader'>
            {
              (group === 'status' || group === 'users') && (
                <div className='priority-icon-box'>
                  <FontAwesomeIcon icon={iconNames[priority]} className={`priority-icon-${priority}`} />
                </div>
              )
            }
            <div className='status-box'>
              <FontAwesomeIcon icon={solidCircle} className='status-icon' />
              <div className='status'>Feature Request</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

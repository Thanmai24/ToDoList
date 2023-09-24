import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faSignal, faPlus, faCircle, faCircleCheck, faCircleExclamation, faCircleHalfStroke, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
function Status({ rawData }) {
    const [mainData, setmainData] = useState({});
    const iconNames = [faEllipsisH, faSignal, faSignal, faSignal, faCircleExclamation];
    const statusIcons = [faCircle, faCircleCheck, faCircleHalfStroke, faCircleXmark];
    const statusNumber = { "Todo": 0, "Done": 1, "In Progress": 2, "Backlog": 3 };
    const statusNames = ["Todo", "Done", "In Progress", "Backlog"];
    useEffect(() => {
        if (rawData) {
            setmainData(rawData);
            console.log(rawData);
        }
    }, [rawData]);

    return (
        <div>
           {Object.entries(rawData).map(([group, items], index) => (
        <div className="cardFlow" key={index}>
          <div className='priority-heading'>
            <FontAwesomeIcon icon={iconNames[index]} className={`priority-icon-heading-${index}`} />
            <h4 className='priority'>{group}</h4>
            <p className='priority-size'>{items.length}</p>
            <FontAwesomeIcon icon={faPlus} className='add' />
            <FontAwesomeIcon icon={faEllipsisH} className='more' />
          </div>
          {items.map((item, itemIndex) => (
            <Card key={itemIndex} cardData={item} />
          ))}
        </div>
      ))}
        </div>
    )
}

export default Status

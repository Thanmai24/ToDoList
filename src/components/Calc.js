import React, { useEffect ,useState} from 'react'
import Todos from './Todos';
import Status from './Status';
function Calc({rawdata,group,order}) 
{
  const [tickets,setTickets] = useState([]);
  const [users,setUsers] = useState([]);
  const [groupvalue,setGroupvalue] = useState('');
  const [ordervalue,setOrdervalue] = useState('');
  const priorityLevels = {"Urgent":4,"High":3,"Medium":2,"Low":1,"No priority":0};
  useEffect(()=>{
    if(rawdata)
    {
      setTickets(rawdata.tickets);
      setUsers(rawdata.users);
    }
    setGroupvalue(group);
    setOrdervalue(order);
    console.log(group);
    console.log(rawdata.users);
  },[rawdata,group,order]);
  let priorityData = {};
  let statusData = {};
  let userData = {};
  if(tickets)
  {
    for(let i=0;i<tickets.length;i++)
    {
      const item = tickets[i];
      const priority = item.priority;
      if(!priorityData[priority])
      {
          priorityData[priority] = [item];
      }
      else{
          priorityData[priority].push(item);
      }
    }
    if (order === 'title') {
      for (const priority in priorityData) {
        priorityData[priority].sort((a, b) => a.title.localeCompare(b.title));
      }
    }
    for(let i=0;i<tickets.length;i++)
    {
      const item = tickets[i];
      const status = item.status;
      if(!statusData[status])
      {
        statusData[status]=[item];
      }
      else{
        statusData[status].push(item);
      }
    }
    if (order === 'title') {
      for (const status in statusData) {
        statusData[status].sort((a, b) => a.title.localeCompare(b.title));
      }
    }
    if (order === 'priority')
    {
      for (const status in statusData) {
        statusData[status].sort((a, b) =>
          b.priority - a.priority
        );
      }
    }
    for(let i=0;i<tickets.length;i++)
    {
      const item = tickets[i];
      const userId = item.userId;
      if(!userData[userId])
      {
        userData[userId]=[item];
      }
      else{
        userData[userId].push(item);
      }
    }
    if (order === 'title') 
    {
      for (const status in userData) {
        userData[status].sort((a, b) => a.title.localeCompare(b.title));
      }
    }
    if (order === 'priority')
    {
      for (const userId in userData) {
        userData[userId].sort((a, b) =>
          priorityLevels[b.priority] - priorityLevels[a.priority]
        );
      }
    }
  }
  
  return (
    <>
      {groupvalue === 'status' && <Todos item={statusData} group = {group} order={order} user={users}/>}
      {groupvalue === 'priority' &&  <Todos item={priorityData} group = {group} order={order}  user={users}/>}
      {groupvalue === 'users' && <Todos item={userData} group = {group} order={order}  user={users}/>}
    </>
  );
}

export default Calc

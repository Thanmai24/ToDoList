import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import Calc from './Calc';
import Todos from './Todos';
function Fetch({ group, order }) 
{
    const [data, setData] =  useState([]);
    const [temp,setTemp] = useState(0);
    useEffect(() => {
        axios.get(`https://api.quicksell.co/v1/internal/frontend-assignment`)  
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
   
  return (
    <>
      <Calc rawdata = {data} group={group} order={order}/>
    </>
  )
}

export default Fetch

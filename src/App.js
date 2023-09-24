import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Fetch from './components/Fetch';
import React,{useState,useEffect} from 'react';

function App() 
{
  const [group, setGroup] = useState(localStorage.getItem('group') || '');
  const [order, setOrder] = useState(localStorage.getItem('order') || '');
  return (
    <div className="App">
      <Navbar group={group} setGroup={setGroup} order={order} setOrder={setOrder} />
      <Fetch group={group} order={order} />
    </div>
  );
}

export default App;

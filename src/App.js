import React from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import Sidebar from './Sidebar';
import Feed from './Feed';

const App = () => {
  return (
    <div className='app'>
      
      <div className='header'>
        <div className='header__left'>
           <img src='https://mms.businesswire.com/media/20210112005244/en/840086/23/Fiverr_Logo_GreenGreen_RGB.jpg'/>
           <div className='headerLeft__options'>
             <h1>Dashboard</h1>
             <h1>Messages</h1>
             <h1>Orders</h1>
             <h1>Gigs</h1>
             <h1>Analytics</h1>
             <h1>Earnings</h1>
             <h1>Community</h1>
             <h1>More</h1>
           </div>
        </div>
        <div className='header__right'>
          <h1>Switch to Buying</h1>
          <Avatar style={{cursor:'pointer'}}/>
        </div>
      </div>
      <div className='app__body'>
          <div className='sidebar'>
          <Sidebar/>
          </div>
         
        <Feed/>
        <div className='footer'></div>
      </div>
      
    </div>
  );
};

export default App;
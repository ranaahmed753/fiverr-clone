import  React from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import  Sidebar from './Sidebar';
import  Feed from './Feed';
import  Header from './Header';
import  Dashboard from './Dashboard';
import  Messages from './Messages';
import  Orders from './Orders';
import  Gigs from './Gigs';
import  Analytics from './Analytics';
import  Earnings from './Earnings';
import  Community from './Community';
import  More from './More';
import Profile from './Profile';
import Refer from './Refer';
import Setting from './Setting';
import HelpSupport from './HelpSupport';
import Logout from './Logout';

import {BrowserRouter as Router , Switch , Route , Link, BrowserRouter,NavLink} from "react-router-dom";

const App = () => {
  return (
    <div className='app'>
      
        <BrowserRouter>
            <Header/>
            <Switch>

                <Route exact path='/'>
                <div className='app__body'>
                  <div className='sidebar'>
                    <Sidebar/>
                  </div>
         
                    <Feed/>
                  <div className='footer'></div>
                </div>
                </Route>

                <Route exact path='/dashboard'>
                <div className='app__body'>
                  <div className='sidebar'>
                    <Sidebar/>
                  </div>
         
                    <Feed/>
                  <div className='footer'></div>
                </div>
                </Route>
                <Route exact path='/messages'>
                    <Messages/>
                </Route>
                <Route exact path='/orders'>
                  <Orders/>
                </Route>
                <Route exact path='/gigs'>
                  <Gigs/>
                </Route>
                <Route exact path='/analytics'>
                  <Analytics/>
                </Route>
                <Route exact path='/earnings'>
                  <Earnings/>
                </Route>
                <Route exact path='/profile'>
                  <Profile/>
                </Route>
                <Route exact path='/refer'>
                  <Refer/>
                </Route>
                <Route exact path='/settings'>
                  <Setting/>
                </Route>
                <Route exact path='/help'>
                  <HelpSupport/>
                </Route>
                <Route exact path='/logout'>
                  <Logout/>
                </Route>
               
                  <Community/>
                  <More/>
            </Switch>
        </BrowserRouter>
      
      
      
    </div>
  );
};

export default App;
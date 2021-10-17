import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import StarIcon from '@material-ui/icons/Star';
import HelpIcon from '@material-ui/icons/Help';


const Sidebar = () => {
    return (
        <div className='sidebar'> 
          <div className='sidebar__top'>
              
              <div className='sidebarTop__options'>

                  <div className='sidebarTopOptions__left'>
                     <Avatar style={{cursor:'pointer',height:50,width:50}}/>
                     <h1>ranaahmed735</h1>
                  </div>

                  <div className='sidebarTopOptions__right'>
                     <StarIcon style={{color:'orange'}}/>
                     <h1>N/A</h1>
                  </div>
                  
              </div>

              <div className='sidebarTop__middle'>
                  <div className='sidebarTopMiddle__options'>
                      <h1 style={{fontSize:15,fontWeight:400,color:'gray'}}>Response Rate</h1>
                      <div className='sidebarMiddleOptions__left'>
                          <div style={{height:6,width:60,backgroundColor:'#1dbf73',borderRadius:999,margin:10}}></div>
                          <h1 style={{fontSize:15,fontWeight:400,color:'gray'}}>100%</h1>
                      </div>
                  </div>

                  <div className='sidebarTopMiddle__options'>
                      <h1 style={{fontSize:15,fontWeight:400,color:'gray'}}>Delivered on Time</h1>
                      <div className='sidebarMiddleOptions__left'>
                          <div style={{height:6,width:60,backgroundColor:'#1dbf73',borderRadius:999,margin:10}}></div>
                          <h1 style={{fontSize:15,fontWeight:400,color:'gray'}}>100%</h1>
                      </div>
                  </div>

                  <div className='sidebarTopMiddle__options'>
                      <h1 style={{fontSize:15,fontWeight:400,color:'gray'}}>Order Completion</h1>
                      <div className='sidebarMiddleOptions__left'>
                          <div style={{height:6,width:60,backgroundColor:'#1dbf73',borderRadius:999,margin:10}}></div>
                          <h1 style={{fontSize:15,fontWeight:400,color:'gray'}}>100%</h1>
                      </div>
                  </div>

              </div>

              <div className='sidebarTop__bottom'>
                  <div className='sidebarTopBottom__options'>
                      <h1>Earned in May</h1>
                      <h1 style={{marginLeft:'auto'}}>$0</h1>
                  </div>

                  <div className='sidebarTopBottom__options'>
                      <h1>Response Time</h1>
                      <h1 style={{marginLeft:'auto',color:'#1dbf73'}}>1hr</h1>
                  </div>
              </div>
          </div>

          <div className='sidebar__center'>
             <h1 style={{fontSize:15,fontWeight:400}}>Inbox</h1>
              <h1 style={{fontSize:15,fontWeight:400,marginLeft:'auto',color:'#4A7CEC',cursor:'pointer'}}>View All</h1>
           </div>  
          <div className='sidebar__bottom'>
              <div className='sidebarBottom__options'>
                  <h1 style={{fontSize:15,fontWeight:400,color:'gray'}}>Link your social networks</h1>
                  <HelpIcon style={{marginLeft:10,color:'gray'}}/>
              </div>
              <div className='sidebarBottomBottom__options'>
                  <Avatar style={{margin:10}} src='https://www.flaticon.com/svg/vstatic/svg/124/124010.svg?token=exp=1619871477~hmac=ebeca4f0bc480a002da904876b9334fa'/>
                  <Avatar style={{margin:10}} src='https://www.flaticon.com/svg/vstatic/svg/2111/2111463.svg?token=exp=1619871588~hmac=501ea4d353aa92c74925333591c5fc94'/>
                  <Avatar style={{margin:10}} src='https://www.flaticon.com/svg/vstatic/svg/733/733579.svg?token=exp=1619871616~hmac=c22f96843e037e6457fdc59e031a6611'/>
                  <Avatar style={{margin:10}} src='https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1619871685~hmac=63e69d686210ad6bffad96e956d14c29'/>
                  <Avatar style={{margin:10}} src='https://www.flaticon.com/svg/vstatic/svg/174/174877.svg?token=exp=1619871780~hmac=6c93dde7d930626f269502b74da055fb'/>
                  
              </div>
          </div> 
        </div>
    );
};

export default Sidebar;
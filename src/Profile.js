import React, { Component } from 'react';
import './Profile.css';
import { Avatar, TextField } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import UpdateIcon from '@material-ui/icons/Update';
import Stack from '@mui/material/Stack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Button from './Button';
import ProfileFeed from './ProfileFeed';


class Profile extends Component {
    state = {
        
    }
    render( ) {
        
        return (
            <div className='profile'>
                <div className='profile__sidebar'>
                    <Avatar className='profile__avatar'/>
                    <h1 className='user__name'>ranaahmed753</h1>
                    <h3 className='user__bio'>Mobile App & Web Developer</h3>
                   
                    <div className='button__container'>
                        <Button text='Preview Public Mode' id='top'/>
                    </div>
                   
                    <div className='sidebarMiddle__options'>
                                <div className='sidebar__options'>
                                    <div className='sidebarOption__left'>
                                        <LocationOnIcon className='icon'/>
                                        <h3 className='item__text'>From</h3>
                                    </div>
                                    <h3 style={{marginLeft:'auto'}} className='item__text'>Bangladesh</h3>
                                </div>

                                <div className='sidebar__options'>
                                    <div className='sidebarOption__left'>
                                        <LocalLibraryIcon className='icon'/>
                                        <h3 className='item__text'>Member Since</h3>
                                    </div>
                                    <h3 style={{marginLeft:'auto'}} className='item__text'>Aug 2020</h3>
                                </div>

                                <div className='sidebar__options'>
                                    <div className='sidebarOption__left'>
                                        <UpdateIcon className='icon'/>
                                        <h3 className='item__text'>Avg. Response Time</h3>
                                    </div>
                                    <h3 style={{marginLeft:'auto'}} className='item__text'>1 hour</h3>
                                </div>

                    </div>
                    
                    <div className='profileSidebar__bottom'>
                        <div className='profileSidebarBottom__left'>
                            <CalendarTodayIcon className='item__icon'/>
                            <h3 className='item__text'>Available</h3>
                        </div>
                        <div className='profileSidebarBottom__right'>
                            <Button text='Set Availability' id='bottom'/>
                        </div>
                    </div>

                </div>

                <div className='profile__feed'>
                    <ProfileFeed/>
                </div>
                
            </div>
        )
    }
}

export default Profile

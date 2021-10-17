import React, { Component } from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import Popup from './Popup';
import withProcess from './withProcess';
import {BrowserRouter as Router , Switch , Route , Link, BrowserRouter,NavLink} from "react-router-dom";

class Header extends Component {
    state = {
      routeInfo : [
        {
          routeName : 'Dashboard',
          routeTo : '/dashboard'
        },
        {
          routeName : 'Messages',
          routeTo : '/messages'
        },
        {
          routeName : 'Orders',
          routeTo : '/orders'
        },
        {
          routeName : 'Gigs',
          routeTo : '/gigs'
        },
        {
          routeName : 'Analytics',
          routeTo : '/analytics'
        },
        {
          routeName : 'Earnings',
          routeTo : '/earnings'
        },
        
      ],
      STYLE : {fontSize:17,textUnderlineOffset:'none',fontWeight:500,margin:5},
      communityTitle : ['Buyer Request','Scale Your Business','Learn-Online Courses','Contacts'],
      moreTitle : ['Events','Blog','Forum','Community Standard','Podcast'],
      profileTitle : ['Profile','Refer & Get Up to $100','Settings','English','$USD','Help & Support','Logout'],
      profileRoute : [
        {
          routeName : 'Profile',
          routeTo : '/profile'
        },
        {
          routeName : 'Refer & Get Up to $100',
          routeTo : '/refer'
        },
        {
          routeName : 'Settings',
          routeTo : '/settings'
        },
        {
          routeName : 'English',
          routeTo : ''
        },
        {
          routeName : '$USD',
          routeTo : ''
        },
        {
          routeName : 'Help & Support',
          routeTo : '/help'
        },
        {
          routeName : 'Logout',
          routeTo : '/logout'
        }
      ],
      isProfileOpen : false,
      isOpen : false,
      isMore : false,
      isCommunity : false,
      handleCommunity : ()=> {
       this.setState({
         isOpen : true,
         isCommunity : true,
         isMore : false,
         isProfileOpen : false
       })
      },
      handleMore : ()=> {
        this.setState({
          isOpen : true,
          isMore : true,
          isCommunity : false,
          isProfileOpen : false
        })
      },
      onOpen : ()=> {
        this.setState({
          isOpen : true
        })
      },
      onClose : ()=> {
        this.setState({
          isOpen : false
        })
      },
      handleProfile : ()=> {
        this.setState({
          isProfileOpen : true,
          isCommunity : false,
          isMore : false,
          isOpen : true
        })
      }
    }

    render(){
      //const {isOpen,onOpen,onClose} = this.props;
      const {routeInfo,STYLE,communityTitle,moreTitle,isOpen,isMore,isCommunity,handleCommunity,handleMore,onOpen,onClose,isProfileOpen,handleProfile,profileTitle,profileRoute} = this.state;
      return (
        <div className='header'>
            <div className='header__left'>
              <img src='https://mms.businesswire.com/media/20210112005244/en/840086/23/Fiverr_Logo_GreenGreen_RGB.jpg'/>
          
              <div className='headerLeft__options' >
              {
                routeInfo.map(route => (
                    <NavLink exact activeClassName='active'  activeStyle={{color:'#1dbf73'}} style={{color:'gray',textDecoration:'none'}} to={route.routeTo}>
                        <h3 style={STYLE} onClick={onClose}>{route.routeName}</h3>
                    </NavLink>
                ))
              }
               
               <h3 style={STYLE} onClick={handleCommunity}>Community</h3>
               <h3 style={STYLE} onClick={handleMore}>More</h3>
                
           </div>
        </div>

        <div className='header__right'>
          <h1>Switch to Buying</h1>
          <Avatar style={{cursor:'pointer'}} onClick={handleProfile}/>
        </div>

            <Popup 
            isOpen={isOpen} 
            isCommunity={isCommunity} 
            isMore={isMore} 
            onClose={onClose} 
            onOpen={onOpen} 
            communityTitle={communityTitle} 
            moreTitle={moreTitle}
            profileTitle={profileTitle}
            isProfileOpen={isProfileOpen}
            profileRoute={profileRoute}
            STYLE={STYLE}
            /> 
              

      </div>
    );
    }
    
};

export default  Header;
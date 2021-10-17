import React, { Component } from 'react';
import './Popup.css';
import {BrowserRouter as Router , Switch , Route , Link, BrowserRouter,NavLink} from "react-router-dom";

class Popup extends Component {
   
    render(){
        const {isOpen,isCommunity,isMore,onClose,onOpen,communityTitle,moreTitle,profileTitle,isProfileOpen,profileRoute,STYLE} = this.props;
        const {route} = this.props
        // return  isOpen ? (
        //     <div className={isCommunity ? 'cummunity__title' : 'more__title'}>
                
        //         {
                   
        //           isCommunity ?  communityTitle.map(community => (
        //                 <h1 onClick={onClose}>{community}</h1>
        //             )) : moreTitle.map( more => (
        //                 <h1 onClick={onClose}>{more}</h1>
        //             )) 


        //         }


        //     </div>
        // ) : null ;

        let message;
        if(isOpen)
        {
            if(isCommunity)
            {
                message = communityTitle.map(community => (
                    <h1 onClick={onClose}>{community}</h1>
                  )) 
                  return <div className={isCommunity ? 'cummunity__title' : 'more__title'}>{message}</div>
            }

        }else{
            return null
        }

        if(isOpen)
        {
           if(isMore)
           {
            message =  moreTitle.map( more => (
                <h1 onClick={onClose}>{more}</h1>
            )) 
            return <div className={isMore ? 'more__title' : 'community__title'}>{message}</div>
           }

        }else{
            return null;
        }

        if(isOpen)
        {
            if(isProfileOpen)
            {
                message = profileRoute.map( route => (
                   
                    <NavLink exact activeClassName='active'  activeStyle={{color:'#1dbf73'}} style={{color:'gray',textDecoration:'none'}} to={route.routeTo}>
                         <h1 onClick={onClose} style={STYLE}>{route.routeName}</h1>
                    </NavLink>
                    
                ))
                return <div className={isProfileOpen ? 'profile__title' : 'more__title'}>{message}</div>
            }
        }else{
            return null;
        }
        
       
    }
};

export default Popup;
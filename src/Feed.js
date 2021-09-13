import React from 'react';
import './Feed.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Carousels from './Carousels';


const Feed = () => {
    return (
        <div className='feed'>
            
            <div className='feed__top'>
                <h1 style={{fontSize:18,fontWeight:500}}>Active Orders <span style={{color:'gray'}}>-0($0)</span></h1>
                <div className='feedTop__options'>
                    <h1 style={{fontSize:15,fontWeight:500,color:'gray'}}>Active Orders(0)</h1>
                    <IconButton style={{marginLeft:'auto',color:'gray',padding:5}}>
                        <ExpandMoreIcon />
                    </IconButton>
                    
                </div>
            </div>
            <div className='feed__middle'>
                <h1>Upgrade Your Business</h1>
                <div style={{width:'100%',height:1,backgroundColor:'lightgray',margin:10,flex:0.8}}></div>
            </div>

            <div className='feedMiddle__card'>
                <h1>How to build your success on Fiverr in 3 steps</h1>
                <p>The key to your success on Fiverr is the brand you build for yourself through your Fiverr reputation. We gathered some tips and resources to help you become a leading seller on Fiverr.</p>
            </div>

            <div className='bottom__card'>
                <h1 style={{alignSelf:'center'}}>Take these steps to become a top seller on Fiverr</h1>
                <div className='bottomCard__options'>
                    <div className='bottomCard__option'>
                    <HeadsetMicIcon/>
                        <h1>Get Noticed</h1>
                        <p>Tap into the power of social media by sharing your Gig, and get expert help to grow your impact</p>
                        <button>Share Your Gigs</button>
                    </div>

                    <div className='bottomCard__option'>
                        <MenuBookIcon/>
                        <h1>Get more skills & exposure</h1>
                        <p>Tap into the power of social media by sharing your Gig, and get expert help to grow your impact</p>
                        <button>Explore Learn</button>
                    </div>

                    <div className='bottomCard__option'>
                        <StarOutlineIcon/>
                        <h1>Become a successful seller!</h1>
                        <p>Tap into the power of social media by sharing your Gig, and get expert help to grow your impact</p>
                        <button>Watch Free Course</button>
                    </div>

                </div>
            </div>
            
            
        </div>
    );
};

export default Feed;
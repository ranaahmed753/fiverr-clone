import React, { Component } from 'react';
import './GigItem.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

class GigItem extends Component {
    render( ) {
        return (
            <div className='gigItem'>
                <div className='gigItem__top'>
                    <img src='https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
                    <h1>I will develop android app with firebase database</h1>
                </div>
                <div className='gigItem__bottom'>
                    <div className='gigItemBottom__left'>
                        <MoreHorizIcon className='more__icon'/>
                    </div>
                    <div className='gigItemBottom__right'>
                        <h3>Starting At </h3>
                        <h3> <span style={{marginLeft:5,fontWeight:'bold'}}>$20</span></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default GigItem

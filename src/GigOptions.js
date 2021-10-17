import React, { Component } from 'react';
import './GigOption.css';

class GigOptions extends Component {
    render( ) {
        return (
            <div className='gigOption'>

                <div className='gigOption__left'>
                    <input type='checkbox'/>
                </div>

                <div className='gigOption__middle'>
                    <img alt='' src='https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWN0JTIwanN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
                    <h3>design and develop android chat app</h3>
                </div>

                <div className='gigOption__right'>
                    <h3>52</h3>
                    <h3>2</h3>
                    <h3>0</h3>
                    <h3>0%</h3>
                </div>
                
            </div>
        )
    }
}

export default GigOptions

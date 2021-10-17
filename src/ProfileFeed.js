import React, { Component } from 'react';
import './ProfileFeed.css';
import GigItem from './GigItem';
import CreateGigItem from './CreateGigItem';
import GigContext from './gigContext';

class ProfileFeed extends Component {
    state = {
        item : [ ],
        addGigItem : ( ) => {
            this.setState( { 
                item : [...this.state.item,<GigItem/>]
            })
        }
    }
    

    render( ) {
        const {item,addGigItem} = this.state;
        
        return (
            <div className='profileFeed'>
                <div className='profileFeed__top'>
                    <h1>Active Gigs</h1>
                    <div className='top__border'/>
                </div>
                <div className='profileFeed__bottom'>
                    <CreateGigItem addGigItem={addGigItem}/>
                        {
                            item.map( items => (
                                items
                            ))
                        }    
                   
                </div>
            </div>
        )
    }
}

export default ProfileFeed

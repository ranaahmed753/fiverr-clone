import React, { Component } from 'react';
import './Gigs.css';
import GigOptions from './GigOptions';
import GigContext from './gigContext';

class Gigs  extends Component{
    state = {
        gig : [ ],
        addGig : ( ) => {
            this.setState({
                gig : [...this.state.gig,<GigOptions/>]
            })
        },
        deleteGig : ( ) => {
           
        }
    }

    render( ){
        const { gig , addGig,deleteGig } = this.state;
    return (
        <div className='gigs' onClick={ deleteGig }>
            <div className='gigs__top'>
                <h1>Gigs</h1>
                <div className='gigsTop__right'>
                    <h1>Accepting Custom Orders Gigs</h1>
                </div>
            </div>

            <div className='gigs__middle'>
                <div className='gigsMiddle__left'>
                    <h3>ACTIVE 2</h3>
                    <h3 className='text__item'>PENDING APPROVAL</h3>
                    <h3 className='text__item'>REQUIRES MODIFICATION</h3>
                    <h3 className='text__item'>DRAFT</h3>
                    <h3 className='text__item'>DENIED</h3>
                    <h3 className='text__item'>PAUSED</h3>
                </div>
                <div className='gigsMiddle__right'>
                    <button onClick={ addGig }>Create A New Gig</button>
                </div>
            </div>

            <div className='gigs__bottom'>
                <div className='gigsBottom__top'>
                    <h2>ACTIVE GIGS</h2>
                    <h2 style={{marginLeft:'auto'}}>Gigs Date</h2>
                </div>
                <div className='gigsBottom__middle'>
                    <div className='gigsBottomMiddle__left'>
                        <input type='checkbox'/>
                        <h3>GIG</h3>
                    </div>
                    <div className='gigsBottomMiddle__right'>
                        <h3>IMPRESSIONS</h3>
                        <h3>CLICKS</h3>
                        <h3>ORDERS</h3>
                        <h3>CANCELLATIONS</h3>
                    </div>
                </div>
                <div className='gigsBottom__options'>
                    
                        {
                          gig.map( gigs => (
                                gigs
                            ))
                        }
                   
                    
                </div>
            </div>
        </div>
    );
    }
};

export default Gigs;
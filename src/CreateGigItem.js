import React, { Component } from 'react';
import './CreateGigItem.css';
import AddIcon from '@mui/icons-material/Add';

class CreateGigItem extends Component {
    render( ) {
        const {addGigItem} = this.props
        return (
            <div className='createGig'>
                <div className='add__icon' onClick={addGigItem}>
                   <AddIcon className='addIcon'/>
                </div>
                <h3>Create A New Gig</h3>
            </div>
        )
    }
}

export default CreateGigItem

import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
    render() {
        const {text,id} = this.props;
        return (
            <div className='button'>
                <button className={id == 'top' ? 'button__resize' : 'custom__button'}>{text}</button>
            </div>
        )
    }
}

export default Button

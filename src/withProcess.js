import React, { Component } from 'react';

const withProcess = (OriginalComponent) => {
    class NewComponent extends Component{
        state = {
            isOpen : false,
            onOpen : () => {
              this.setState({
                isOpen : true,
              })
            },
            onClose : () => {
              this.setState({
                isOpen : false,
              })
            }
          }
        render(){
            const {isOpen,onOpen,onClose} = this.state;
            return <OriginalComponent isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        }
    }

    return NewComponent;
};

export default withProcess;
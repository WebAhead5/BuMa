import React from 'react';
import Modal from 'react-modal';

const Popup = (props) => {
    // buttons options
    const buttonsNumber = props.labels;
    //pass callbacks on father component to handle the buttons options
    const callbacks = props.callbacks;

    // handle errors
    if(buttonsNumber.length !== callbacks.length) {
        throw new Exception('buttonsNumber length does not match callbacks length')
    }
  
    // populate div with buttons according to props.labels length.
   const buttons = buttonsNumber.map((button, index) => (
        <div>
        <button onClick={callbacks[index]}>{button}</button>
        </div>
    ))

    // return the Components to be used on other components
    return (
        <Modal isOpen={props.isOpen} style={props.style} >
            <button onClick={() => props.setShow(false)}>X</button>
            {props.children}
            {buttons}
        </Modal>
    )
}

export default Popup
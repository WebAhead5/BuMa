import React from 'react';
import Modal from 'react-modal';

const styles = {
    closeBtn: {
        border: 'none', 
        backgroundColor: '#0B8D98',
        textDecoration: 'none',
        textAlign: 'center',
    },
    YesNoBtns: {
        backgroundColor: '#0B8D98',
        color: '#E4FDFF',
        borderRadius: '5px',
        height: '35px',
        width: '70px',
        fontSize: '20px',
        textDecoration: 'none',
        textAlign: 'center',
        border: 'none'
    },
}

const Popup = (props) => {
    // buttons options
    const buttonsNumber = props.labels;
    //pass callbacks on father component to handle the buttons options
    const callbacks = props.callbacks;

    // handle errors
    if (buttonsNumber.length !== callbacks.length) {
        throw new Error('buttonsNumber length does not match callbacks length')
    }

    // populate div with buttons according to props.labels length.
    const buttons = buttonsNumber.map((button, index) => (
        <button style={buttonsNumber.length > 1 ? styles.YesNoBtns : props.style} onClick={callbacks[index]}>{button}</button>
    ))

    // return the Components to be used on other components
    return (
        <Modal ariaHideApp={false} isOpen={props.isOpen} style={props.style} className='Modal' overlayClassName={buttonsNumber.length > 1 ? 'Overlay-no-close-button' : "Overlay"} >
            <div className="Modal-container">
                {/* check the length of the labels sent from father component and send a different design according to that */}
                {buttonsNumber.length <= 1 && <div className="Modal-exit-button">
                    <button style={styles.closeBtn} onClick={() => props.setShow(false)}>X</button>
                </div>}

                {props.children}
                <div className="Modal-buttons">
                    {buttons}
                </div>
            </div>
        </Modal>
    )
}

export default Popup
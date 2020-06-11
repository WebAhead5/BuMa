import React, { useState } from 'react';
import Popup from '../Popups';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

//This component uses popup component and TextField component
//To give the user the option build popup with input fields 
//The use  will be something like this:
//<TextBoxesPopup setShow={setPopupShow} show= {popupShow}></FromDateToDatePopup>  
const TextBoxesPopup = (props) => {
    const buttons = ["Send"];
    const popupChildren = [];
    const elements = props.textBoxes; 

    elements.map((element)=> {
        popupChildren.push(
            <div >
            <TextField
             rows={element.rows}
             multiline = {element.multiline}
             variant={element.variant}
            className = {element.className}
            id={element.label}
            label={element.label}
            type={element.type}
            defaultValue={element.defaultValue}
        />
        </div>
        )

    })

    const callbacks = props.callbacks
    return (
        <Popup children={popupChildren} setShow={props.setShow} isOpen={props.show} labels={buttons} callbacks={callbacks} />
    )
}

export default TextBoxesPopup;
import React, { useState } from 'react'
import Popup from '../Popups'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

//This component uses popup component and TextField component
//To give the user the option of chossing 'from date to date'. 
//To use it create in the calling component a show state and 
//changing function to that state and send it to this component
//in the props, it will be something like this:
//<FromDateToDatePopup setShow={setPopupShow} show= {popupShow}></FromDateToDatePopup>  
const FromDateToDatePopup = (props) => {
    const buttons = ["Send"]

    const callBack = () => {

    }

    const popupChildren = [];

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: '15px',
            width: '200px'
         
        },
        dates :{
            backgroundColor: 'white',
            marginBottom: '10px'
        }
    }));

    const classes = useStyles();
    popupChildren.push(
        <div className={classes.margin}>
            <TextField
                className = {classes.dates}
                id="from"
                label="From"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                className = {classes.dates}
                id="to"
                label="To"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    )

    const callbacks = [callBack]
    return (
        <Popup children={popupChildren} setShow={props.setShow} isOpen={props.show} labels={buttons} callbacks={callbacks} />
    )
}

export default FromDateToDatePopup;
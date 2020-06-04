import React from 'react';
import Button from '../Button';
import {Link} from 'react-router-dom'

const styles = {

    appointment: {

        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyleType: 'none',
        width: '95vw',
        height: '5vh',
        borderRadius: '5px'
    },
    deleteBtn: {
        width: '35px',
        height: '35px',
        border: 'none',
        background: 'url(/img/deleteIcon.svg)',
        backgroundSize: 'cover',

    },
    
}

const AppointmentEntry = (props) => {
    let id = props.appointment.id
    let fromHour = props.appointment.start_at
    let toHour = props.appointment.end_at
    return (
        //TODO: link to the page that khalid is working on - Appointment page.
        <Link to={'/'}>
            
            <ul style={styles.appointment}>

                <li>{id}</li>

                <li>{fromHour} </li>

                <li>{toHour} </li>

                <li><Button style={styles.deleteBtn}></Button></li>
            </ul>
        </Link>
    )
}

export default AppointmentEntry
import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom'
import { deleteAppointment } from '../../actions/appointments'
import { useRemoveAppointment } from '../../store/appointments'

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
    const removeAppointment = useRemoveAppointment()
    const handleDeleteButton = (clickId) => {
        deleteAppointment(clickId, (err, msg) => {
            //TODO: handle error properly
            if (err) console.log(err)
            removeAppointment(clickId)
            return
        })
    }

    return (
        //TODO: link to the page that khalid is working on - Appointment page.


        <ul style={styles.appointment}>

            <li>{id}</li>

            <li>{fromHour} </li>

            <li>{toHour} </li>

            <li><Button style={styles.deleteBtn} onClickButton={() => handleDeleteButton(id)} /></li>
        </ul>

    )
}

export default AppointmentEntry
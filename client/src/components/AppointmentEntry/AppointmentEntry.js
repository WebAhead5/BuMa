import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom'
import { deleteAppointment } from '../../actions/appointments'
import { useRemoveAppointment } from '../../store/appointments'
import Popup from '../Popups'


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
        outline: 'none'
    }, 
    
    h4: {
        color: '#E4FDFF',
    }
    
}

const AppointmentEntry = (props) => {

    const [show, setShow] = React.useState(false)

    const handleNoOpt = () => {
        setShow(false)
    }

    let id = props.appointment.id
    let fromHour = props.appointment.start_at
    let toHour = props.appointment.end_at
    
    // Recoil Hook
    const removeAppointment = useRemoveAppointment()

    // What happens after confirming delete!
    const handleDeleteButton = (clickId) => {
        deleteAppointment(clickId, (err, msg) => {
            //TODO: handle error properly
            if (err) console.log(err)
            removeAppointment(clickId)
            return
        })
    }

    // handles confirmation on delete popup
    const handleYesOpt = () => {
        handleDeleteButton(id)
        setShow(false)
    }

    return (
        //TODO: link to the page that khalid is working on - Appointment page.
    
        <Link to={`/appointmentCard/${id}`}>
        <ul style={styles.appointment}>
       
            <li>{id}</li>

            <li key="fromhour">{fromHour} </li>

            <li>{toHour} </li>
       
            <li><Button style={styles.deleteBtn} onClickButton={() => setShow(true)} />
                <Popup isOpen={show} setShow={(el) => setShow(el)} labels={['yes', 'no']} callbacks={[handleYesOpt, handleNoOpt]}></Popup> </li>
        </ul>
        </Link>
        
     
    )
}

export default AppointmentEntry
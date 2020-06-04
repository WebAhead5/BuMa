import React from 'react';
import Appointments from '../../screens/Appointments';
import { appointments } from '../../store/appointments';

const AppointmentsList = (props) => {

    let appointments = props.appointments
    console.log('Appointments list = ', appointments)

    return (
        <ul>
            <li>
                {appointments.day}
            </li>
        </ul>
    )
}

export default AppointmentsList

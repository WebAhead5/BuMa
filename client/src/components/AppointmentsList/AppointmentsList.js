import React from 'react';
import AppointmentEntry from '../AppointmentEntry'

const styles = {

    container: {

        backgroundColor: '#1F2B30',
        height: '800px'

    },

    ul: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        listStyleType: 'none',
        width: '95vw',
        borderRadius: '6px',
        height: '5vh'

    }


};

const AppointmentsList = (props) => {

    let appointments = props.appointments

    let allAppointments = []
    appointments.forEach((appointment, index) => {
        allAppointments.push(<AppointmentEntry key={`Entry ${index}`}
            appointment={appointment}
            id={appointment.id}
            from={appointment.start_at}
            to={appointment.end_at}
        />)
    })



    return (
        <div style={styles.container}>

            <ul style={styles.ul}>

                <li key="name">Name </li>

                <li key="from">From</li>

                <li key="to">To </li>



            </ul>


            {allAppointments}

        </div>
    )
}

export default AppointmentsList

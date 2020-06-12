import React from 'react';
import AppointmentEntry from '../AppointmentEntry'

const styles = {

    container: {

        backgroundColor: '#1F2B30',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

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
    },
    li: {
        width: '25%'
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

                <li style={styles.li} key="name">Name </li>

                <li style={styles.li} key="from">From</li>

                <li style={styles.li} key="to">To </li>

                <li style={styles.li}></li>



            </ul>


            {allAppointments}

        </div>
    )
}

export default AppointmentsList

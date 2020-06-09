import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import AppointmentInfo from '../components/appointmentInfo'
//import Button from '../components/Button';
//import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { getAppointmentData } from '../actions/appointments';
import { useSetAppointments, appointments, appointmentsState } from '../store/appointments';


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '5px',
    },
    saveBtn: {
        background: '#0B8D98',
        color: "white",
        width: "150px",
        marginLeft: '15px',
        marginBottom : '15px',
    },
}

const AppointmentCard = ({match}) => {
    const appointmentsCard = useRecoilValue(appointmentsState);
    console.log(appointmentsCard)
    console.log(match)
    const appointmentDetails = appointmentsCard.filter(appointment => match.params.id==appointment.id)
    console.log(appointmentDetails)

    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow" title="Appointment Details" />
            <AppointmentInfo 
            appointment={appointmentDetails}
            />
        </ScreenContainer >
    );
}

export default AppointmentCard;
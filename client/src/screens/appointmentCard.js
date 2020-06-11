import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import AppointmentInfo from '../components/appointmentInfo'
import { useRecoilValue } from 'recoil';
import { appointments } from '../store/appointments';



const AppointmentCard = ({match}) => {
    const appointmentsCard = useRecoilValue(appointments);
    const appointmentDetails = appointmentsCard.filter(appointment => match.params.id==appointment.id)
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
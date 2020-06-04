import React, { useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import { useRecoilValue } from 'recoil';
import { fetchAppointments } from '../actions/appointments'
import { appointments, useSetAppointments } from '../store/appointments'
import AppointmentsList from '../components/AppointmentsList';


const style = {
    date: {
        color: '#E4FDFF'
    }
}

const Appointments = (props) => {


    const allAppointments = useRecoilValue(appointments)
    console.log(allAppointments)
    const setItems = useSetAppointments();

    useEffect(() => {
        fetchAppointments(setItems)
    }, [])


    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow"
                title="Appointments">
            </MenuHeader>
            {/* TODO: change change value to be sent from the calendar */}
            <p style={style.date}>date: 10/06/2020</p>
            <AppointmentsList appointments={allAppointments} />
        </ScreenContainer>
    )
}

export default Appointments
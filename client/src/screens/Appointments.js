import React, { useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import Button from '../components/Button';
import { useRecoilValue } from 'recoil';
import { fetchAppointments } from '../actions/appointments'
import { appointments, useSetAppointments } from '../store/appointments'
import AppointmentsList from '../components/AppointmentsList';


const Appointments = (props) => {


    const allAppointments =  useRecoilValue(appointments)
    console.log(allAppointments)
    const setItems = useSetAppointments();

    useEffect(() => {
        fetchAppointments(setItems)
    }, [])


    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow"
                title="Appointments">
                    <AppointmentsList appointments={allAppointments}/>
                <Button></Button>
            </MenuHeader>
        </ScreenContainer>
    )
}

export default Appointments
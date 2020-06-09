import React, { useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import { useRecoilValue } from 'recoil';
import { fetchAppointments } from '../actions/appointments'
import { appointments, useSetAppointments } from '../store/appointments'
import { localeDate, useSetDate } from '../store/date'
import AppointmentsList from '../components/AppointmentsList';
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import DateClicked from '../components/DateClicked'


const style = {
    date: {
        color: '#E4FDFF'
    },
    addBtn: {
        background: 'url(/img/addAppointment.svg)',
        backgroundSize: 'cover',
        width: '50px',
        height: '50px',
        border: 'none',
        position: 'absolute',
        right: '20px'
    }
}



const Appointments = (props) => {


    const allAppointments = useRecoilValue(appointments)

    const setItems = useSetAppointments();

    const dateToday = useRecoilValue(localeDate)
    const setDate = useSetDate()

    useEffect(() => {
        fetchAppointments(setItems)
        setDate(dateFromParams)
    }, [])

    // we receive the date from the params and filter our appointments result according to the date we get.
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const dateFromParams = params.get('date');
    
    const comparisonDate = new Date(dateFromParams)

    let splittedISOString = date => {
       return date.split('T')[0]
    }

    
    let appointmentsDays = allAppointments.filter(appointments => splittedISOString(appointments.day) === splittedISOString(comparisonDate.toISOString()))


    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow"
                title="Appointments">
            </MenuHeader>
            <h1 style={style.date}><DateClicked /></h1>
            <AppointmentsList appointments={appointmentsDays} />
            <Link to={'/addappointment'}>
                <Button style={style.addBtn}></Button>
            </Link>
        </ScreenContainer>
    )
}

export default Appointments
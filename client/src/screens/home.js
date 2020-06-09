import React, { useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ScreenContainer from '../components/Screen';
import { localeDate, useSetDate } from '../store/date'
import { useRecoilValue } from 'recoil';
import MenuHeader from '../components/MenuHeader'
import { fetchAppointments } from '../actions/appointments'
import { appointments, useSetAppointments } from '../store/appointments'

const styles = {
    date: {
        color: "#E4FDFF"
    }
}



const Home = () => {

    const allAppointments = useRecoilValue(appointments)

    const setItems = useSetAppointments();


    //fetch appointments data

    useEffect(() => {
        fetchAppointments(setItems)
    }, [])

    //convert date from db to an actual Date to compare them with the calendar values
    let appointmentsDays = allAppointments.map(appointments => appointments.day)

    appointmentsDays = appointmentsDays.map(date => new Date(date)).sort((a, b) => a - b)

    const dateToday = useRecoilValue(localeDate)
    const setDate = useSetDate()


    const onClickDayHandler = (e) => {
        window.location.href = `/appointments?date=${e}`
    }


    return (
        <ScreenContainer>
            <MenuHeader title="Home" icon='burger'></MenuHeader>
            <div className="Calendar-container">
                <Calendar 
                    onClickDay={(e) => onClickDayHandler(e.toLocaleDateString())}
                    value={dateToday}
                    tileContent={({ activeStartDate, date, view }) => {
                        //compare our date value with calendar values, and show highlighted days that have appointments
                        return view === 'month' && appointmentsDays.some(appointments => appointments.getDate() === date.getDate()
                            && appointments.getMonth() === date.getMonth() && appointments.getFullYear() === date.getFullYear()) ?
                            <div className='Calendar-appointment-mark'></div> : null
                    }
                    }
                />
            </div>
            <div style={styles.date}>
                {dateToday? dateToday : new Date().toLocaleDateString()}
            </div>
        </ScreenContainer>
    )
}


export default Home
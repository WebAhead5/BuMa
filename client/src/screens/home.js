import React, { useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ScreenContainer from '../components/Screen';
import {localeDate, useSetDate} from '../store/date'
import { useRecoilValue } from 'recoil';

const styles = {
    date: {
        color: "#E4FDFF"
    }
}

const Home = () => {

    const dateToday = useRecoilValue(localeDate)
    const setDate = useSetDate()
    
    console.log(dateToday)

    const onChange = date => {

        setDate(date);
    }

    return (
        <ScreenContainer>
            <h1>Home Page</h1>
            <Calendar formatLongDate={(locale, date) => date} onChange={onChange}
                value={dateToday}
                 />
                 <div style={styles.date}>
                     {dateToday.toLocaleDateString()}
                 </div>
        </ScreenContainer>
    )
}


export default Home
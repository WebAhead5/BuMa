import React, { useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ScreenContainer from '../components/Screen';

const Home = () => {

    const [date, setDate] = React.useState(new Date())
    
    const onChange = date => {

        setDate(date);
    }

    return (
        <ScreenContainer>
            <h1>Home Page</h1>
            <Calendar formatLongDate={(locale, date) => date.toLocaleDateString()} onChange={onChange}
                value={date}
                 />
                {date.toLocaleDateString()}
        </ScreenContainer>
    )
}


export default Home
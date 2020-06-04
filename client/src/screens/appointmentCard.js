import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import AppointmentInfo from '../components/appointmentInfo'
import Button from '../components/Button';
//import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { getAppointmentData } from '../actions/appointments';
import { useSetAppointments, appointments } from '../store/appointments';


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
    const appointmentsList = useRecoilValue(appointments);
    console.log(appointmentsList)
    //appointmentsList.filter(rec => match.params.id!=appointmentsList.id)
    const setItems = useSetAppointments();
    
    useEffect(() => {
        // Update the document title using the browser API
        getAppointmentData(match.params.id, setItems);
    }, []);

    // const HandleChange = (e) => {
    //         getAppointmentData(setItem);
    // }

    return (
        <ScreenContainer>
            sd
            <MenuHeader icon="backArrow" title="Appointment Details" />
            <AppointmentInfo
                // namePlaceHolder={appointment.id}
                // timePlaceHolder={appointment.start_at}
                // datePlaceHolder={appointment.day}
                // notePlaceHolder={appointment.note}
            />
            <Button
                text="Save"
                onClickButton={() => console.log('post new state to db')}
                style={styles.saveBtn}
            />
        </ScreenContainer >
    );
}

export default AppointmentCard;
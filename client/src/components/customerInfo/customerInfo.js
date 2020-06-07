import React from 'react'
import PaymentNumber from '../AddAppointmentForm/AppointmentForm';
import PaymentPeriod from '../AddAppointmentForm/AppointmentForm';

const styles = {

    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },


}


const customerInfo = (props) => {

    return (
        <div style={styles.container}>

            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="customerName" value={props.namePlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="email" name="customerEmail" value={props.emailPlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="phone" name="customerPhone" value={props.phonePlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="number" name="appointmentPrice" value={props.appointmentPricePlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="appointmentEveryNum" 
            value={`Every` + ' ' + props.appointmentEveryValPlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="appointmentPeriod" 
            value={props.appointmentEveryPeriodPlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="paymentHistory" placeholder={'Payment History'} disabled />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="paymentMethod" placeholder={'Payment Method'} disabled />
            <textarea
                rows="4"
                className="input-reset ba b--black-20 pa2 mb2 br3 db w-50"
                placeholder={props.notesPlaceHolder} />

        </div>
    )
}

export default customerInfo

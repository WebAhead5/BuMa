import React from 'react'

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

            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="customerName" placeholder={props.namePlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="email" name="customerEmail" placeholder={props.emailPlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="phone" name="customerPhone" placeholder={props.phonePlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="number" name="appointmentPrice" placeholder={props.appointmentPricePlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="appointmentEvery" 
            placeholder={`Every` + ' ' + props.appointmentEveryValPlaceHolder + ' ' + props.appointmentEveryUnitPlaceHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="paymentHistory" placeholder={'Payment History'} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="paymentMethod" placeholder={'Payment Method'} />
            <textarea
                rows="4"
                className="input-reset ba b--black-20 pa2 mb2 br3 db w-50"
                placeholder={props.notesPlaceHolder} />

        </div>
    )
}

export default customerInfo

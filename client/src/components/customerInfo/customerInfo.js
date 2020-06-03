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

            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="customerName" placeholder={props.placeHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="email" name="customerEmail" placeholder={props.placeHolder}/>
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="phone" name="customerPhone" placeholder={props.placeHolder}/>
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="number" name="appointmentPrice" placeholder={props.placeHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="number" name="appointmentEveryNum" placeholder={props.placeHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="number" name="appointmentEveryVal" placeholder={props.placeHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="paymentHistory" placeholder={props.placeHolder} />
            <input className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" type="text" name="paymentMethod" placeholder={props.placeHolder} />
            <textarea
                rows="3"
                className="input-reset ba b--black-20 pa2 mb2 br3 db w-50"
                placeholder={props.placeHolder} />

        </div>
    )
}

export default customerInfo

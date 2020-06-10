import React from 'react'
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const styles = {


    btnsContainer: {


        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '30.5vh',
        borderBottom: ' 1px solid rgba(255,255,255, 0.2)'


    },

    label: {


        color: 'white',
        marginLeft: '20px'
    },

    paymentBtn: {


        background: '#1F2B30',
        border: 'none',
        marginLeft: '25px',
        height: '50px',
        width: '50px',
        background: 'url(/img/payment.svg)',
        backgroundSize: 'cover',
        marginBottom: '20px',
        marginTop: '20px',
        outline:'none',


    },

    notificationBtn: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/notification.svg)',
        backgroundSize: 'cover',
        marginBottom: '20px',
        marginTop: '20px',
        outline:'none',

    },

    syncBtn: {
        background: '#1F2B30',
        border: 'none',
        marginRight: '5px',
        height: '50px',
        width: '50px',
        background: 'url(/img/sync.svg)',
        backgroundSize: 'cover',
        marginBottom: '20px',
        marginTop: '20px',
        outline:'none',


    }



}



const Settings = () => {
    return (
        <ScreenContainer>

            <MenuHeader icon="backArrow" title="Settings" />


            <Link to='payment-settings' style={{ textDecoration: 'none' }}>
                <div style={styles.btnsContainer}>


                    <Button

                        style={styles.paymentBtn} />



                    <label style={styles.label}>Payment Settings</label>

                </div>
            </Link>

            <div style={styles.btnsContainer}>

                <Button

                    style={styles.notificationBtn} />

                <label style={styles.label}>Notification Settings</label>


            </div>

            <div style={styles.btnsContainer}>

                <Button

                    style={styles.syncBtn} />

                <label style={styles.label}>Sync Calenders</label>

            </div>


        </ScreenContainer>

    )
}

export default Settings

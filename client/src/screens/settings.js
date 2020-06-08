import React from 'react'
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import Button from '../components/Button'


const styles = {

    container: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '5px',

    },

    label: {


        color: 'white',
    },

    paymentBtn: {


        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/payment.svg)',
        backgroundSize: 'cover',

    },

    notificationBtn: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/notification.svg)',
        backgroundSize: 'cover',


    },

    syncBtn: {
        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/sync.svg)',
        backgroundSize: 'cover',



    }



}



const Settings = () => {
    return (
        <ScreenContainer>

            <MenuHeader icon="backArrow" title="Settings" />


            <div style={styles.container}>

                <Button

                    style={styles.paymentBtn} />
                    
                <label style={styles.label}>Payment Settings</label>


            </div>

            <div style={styles.container}>

                <label>Notification Settings</label>

                <Button

                    style={styles.notificationBtn} />

            </div>

            <div style={styles.container}>

                <label>Sync Calenders</label>

                <Button

                    style={styles.syncBtn} />

            </div>



        </ScreenContainer>

    )
}

export default Settings

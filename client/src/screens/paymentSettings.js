import React, {useState,useEffect}  from 'react'
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import PaymentSettingsData from '../components/paymentSettingsData'
import {getPaymentSettingsByUserId} from '../actions/paymentSettings'

const PaymentSettings = () => {


    const [userSettings,setUserSettings] = useState({})

    const handleUserSettings = (err,userSettingsResponse) => {

        if (err) {
            console.log('error')
            return;
        }
        console.log('no error')
        setUserSettings(userSettingsResponse.settings[0])

    }
        


    useEffect(() => {
        // Update the document title using the browser API
        getPaymentSettingsByUserId(2,handleUserSettings);
    }, []);


    return (
        <ScreenContainer>

            <MenuHeader icon="backArrow" title="PaymentSettings" />


            <PaymentSettingsData
            
            userSettings = {userSettings}
            
            
            />

        </ScreenContainer>
    )
}

export default PaymentSettings

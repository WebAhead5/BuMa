import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import CustomerInfo from '../components/customerInfo/customerInfo'
import Button from '../components/Button';
import { Link } from 'react-router-dom'
import { getCustomerData } from '../actions/customers';



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

    deleteBtn: {
        border: 'none',
        marginLeft: '25px',
        height: '50px',
        width: '50px',
        background: 'url(/img/deleteIcon.svg)',
        backgroundSize: 'cover'
    },

    activityBtn: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/activityicon.svg)',
        backgroundSize: 'cover'

    },

}


const CustomerCard = ({ match }) => {

    const [customerData, setCustomerData] = useState({});
    const [error, setError] = React.useState('');

    const handlegetCustomerData = (err, customer_res) => {
        if (err) {
            setError(err)
            return;
        }
        setCustomerData(customer_res.customer[0])

    };


    useEffect(() => {
        // Update the document title using the browser API
        getCustomerData(match.params.id, handlegetCustomerData);

    }, []);


    let currency = '₪';

    return (
        <ScreenContainer>
            <MenuHeader title="Customer Card" />

            <CustomerInfo
                namePlaceHolder={customerData.name}
                emailPlaceHolder={customerData.email}
                phonePlaceHolder={customerData.phone}
                appointmentPricePlaceHolder={customerData.appointmentprice + currency}
                appointmentEveryValPlaceHolder={customerData.paymenteveryvalue}
                appointmentEveryUnitPlaceHolder={customerData.paymenteveryunit}
                notesPlaceHolder={customerData.notes}
            />



            <Button

                text="Save"

                onClickButton={() => console.log('clicked')}


                style={styles.saveBtn}



            />
            <div style={styles.container}>

                <Button style={styles.deleteBtn}>
                </Button>



                <Button style={styles.activityBtn}>
                </Button>
            </div>

        </ScreenContainer >
    );
}

export default CustomerCard;
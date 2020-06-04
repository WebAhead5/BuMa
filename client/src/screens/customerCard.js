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

        background: '#1F2B30',
        border: 'none',
        marginLeft: '25px',
    },

    deleteIcon: {

        height: '50px',
        width: '50px',
        


    },
    activityBtn: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',


    },

    activityIcon: {
        height: '50px',
        width: '50px',

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
        console.log(customer_res.customer[0])
        setCustomerData(customer_res.customer[0])

    };


    useEffect(() => {
        // Update the document title using the browser API
        getCustomerData(match.params.id, handlegetCustomerData);

    }, []);

    let deleteIcon = "/img/deleteIcon.png";
    let activityIcon = "/img/activityicon.svg";
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

                <button style={styles.deleteBtn}>
                    <img style={styles.deleteIcon} src={deleteIcon} />
                </button>



                <button style={styles.activityBtn}>
                    <img style={styles.activityIcon} src={activityIcon} />
                </button>
            </div>

        </ScreenContainer >
    );
}

export default CustomerCard;
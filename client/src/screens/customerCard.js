import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import CustomerInfo from '../components/customerInfo/customerInfo'
import Button from '../components/Button';
import { getCustomerData } from '../actions/customers';
import { deleteCustomer } from '../actions/customers'
import { useRemoveCustomer } from '../store/customers'
import Popup from '../components/Popups'
import { useHistory } from 'react-router-dom'



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
        marginBottom: '15px',

    },

    deleteBtn: {
        border: 'none',
        marginLeft: '25px',
        height: '50px',
        width: '50px',
        background: 'url(/img/deleteIcon.svg)',
        backgroundSize: 'cover'
    },

    activeUser: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/activityicon.svg)',
        backgroundSize: 'cover',
        transform: 'rotate(180deg)'

    },

    notActiveUser: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/activityicon.svg)',
        backgroundSize: 'cover'

    },
    h4: {
        color: '#E4FDFF',
    }

}


const CustomerCard = ({ match }) => {

    const [customerData, setCustomerData] = useState({});
    const [customerActivity, setCustomerActivity] = useState(null)
    const [error, setError] = React.useState('');
    const [show, setShow] = React.useState(false)
    console.log(customerActivity)
    console.log(customerData)

    const removeCustomer = useRemoveCustomer()

    const handlegetCustomerData = (err, customer_res) => {
        if (err) {
            setError(err)
            return;
        }
        setCustomerData(customer_res.customer[0])
        setCustomerActivity(customer_res.customer[0].activitystatus)
        
    };



    const handleDeleteButton = (clickId) => {
        deleteCustomer(clickId, (err, msg) => {
            //TODO: handle error properly
            if (err) console.log(err)
            removeCustomer(clickId)
            return
        })
    }

    const handleNoOpt = () => {
        setShow(false)
    }

    let history = useHistory();

    const handleYesOpt = () => {
        handleDeleteButton(match.params.id)
        history.goBack();
    }


    useEffect(() => {
        // Update the document title using the browser API
        getCustomerData(match.params.id, handlegetCustomerData);

    }, []);



    const handleActivityStatus = () => {

        setCustomerActivity(!customerActivity)
        setCustomerData({ ...customerData, ['activitystatus']: !customerActivity});
    } 

    

    return (
        <ScreenContainer>
            <MenuHeader title="Customer Card" />

            <CustomerInfo
                customerData = {customerData}
                activity = {customerActivity}
                
            />



            <div style={styles.container}>
                <Button style={styles.deleteBtn} onClickButton={() => setShow(true)} />
                <Popup isOpen={show} setShow={(el) => setShow(el)} labels={['yes', 'no']} callbacks={[handleYesOpt, handleNoOpt]} style={styles.YesNoBtns}>
                    <h4 style={styles.h4}>Are You sure you want to delete Customer?</h4></Popup>

                <Button

                    style={customerActivity ? styles.activeUser : styles.notActiveUser}
                    onClickButton={() => handleActivityStatus()}
>


                </Button>
            </div>

        </ScreenContainer >
    );
}

export default CustomerCard;
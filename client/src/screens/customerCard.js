import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import CustomerInfo from '../components/customerInfo/customerInfo'
import Button from '../components/Button';
import { getCustomerData } from '../actions/customers';
import { deleteCustomer } from '../actions/customers'
import { useDeleteCustomerFromSelectedCustomers } from '../store/customers'
import Popup from '../components/Popups'
import { useHistory } from 'react-router-dom'
import { customers } from '../store/customers'
import { useRecoilValue } from 'recoil';




const styles = {

    

    container: {

        backgroundColor : '#1F2B30',
    },

    saveBtn: {

        background: '#0B8D98',
        color: "white",
        width: "150px",
        marginLeft: '15px',


    },

    deleteBtn: {
        border: 'none',
        marginLeft: '25px',
        height: '50px',
        width: '50px',
        background: 'url(/img/deleteIconWhite.svg)',
        backgroundSize: 'cover',
        outline: 'none',
    },

    activeUser: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/activityicon.svg)',
        backgroundSize: 'cover',
        transform: 'rotate(180deg)',
        outline: 'none',

    },

    notActiveUser: {

        background: '#1F2B30',
        border: 'none',
        marginLeft: '20px',
        height: '50px',
        width: '50px',
        background: 'url(/img/activityicon.svg)',
        backgroundSize: 'cover',
        outline: 'none',

    },
    h4: {
        color: '#E4FDFF',
    }

}


const CustomerCard = ({ match }) => {

    const [customerActivity,setCustomerActivity] = useState(false)
    const [error, setError] = React.useState('');
    const [show, setShow] = React.useState(false)

    const customersByUserId = useRecoilValue(customers)
    


    const matchId = match.params.id

    let userCustomers = customersByUserId.filter((customer) => customer.id === +matchId)
    let updatedCustomer = userCustomers[0];


    const removeCustomer = useDeleteCustomerFromSelectedCustomers()


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




    const handleActivityStatus = () => {
        setCustomerActivity(!customerActivity);
        updatedCustomer = { ...updatedCustomer, ['activitystatus']: !customerActivity};
    } 

    

    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow" title="Customer Card" />

            <CustomerInfo
                updatedCustomer = {updatedCustomer}
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
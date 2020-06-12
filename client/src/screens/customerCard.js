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

    const [currentCustomer, setCurrentCustomer] = useState([{}]);
    const [customerActivity, setCustomerActivity] = useState(null)
    const [error, setError] = React.useState('');
    const [show, setShow] = React.useState(false)

    const customersByUserId = useRecoilValue(customers)

    useEffect(() => {
        let userCustomers = customersByUserId.filter((customer) => customer.id === +match.params.id)
    
        if(!userCustomers.length) {
            userCustomers = JSON.parse(localStorage.getItem('currentCustomer'))
        } else {
            localStorage.setItem('currentCustomer', JSON.stringify(userCustomers))
        }

        setCurrentCustomer(userCustomers)
    }, [])

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


    // useEffect(() => {
    //     // Update the document title using the browser API
    //     getCustomerData(match.params.id, handlegetCustomerData);

    // }, []);



    const handleActivityStatus = () => {

        setCustomerActivity(!customerActivity)
        setCurrentCustomer({ ...currentCustomer[0], ['activitystatus']: !currentCustomer[0].activitystatus});
    } 

    
    if (!currentCustomer) {
        return 'Loading...'
    }

    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow" title="Customer Card" />

            <CustomerInfo
                customerData = {currentCustomer}
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
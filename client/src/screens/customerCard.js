import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import CustomerInfo from '../components/customerInfo/customerInfo'
import Button from '../components/Button';
import { deleteCustomer } from '../actions/customers'
import { useDeleteCustomerFromSelectedCustomers } from '../store/customers'
import Popup from '../components/Popups'
import { useHistory } from 'react-router-dom'
import { customers, useSetCustomer,useSetCustomers } from '../store/customers'
import { useRecoilValue } from 'recoil';



const CustomerCard = ({ match }) => {

    const [currentCustomer, setCurrentCustomer] = useState([{}]);
    const [customerActivity, setCustomerActivity] = useState(null)
    const [error, setError] = React.useState('');
    const [show, setShow] = React.useState(false)

    const customersByUserId = useRecoilValue(customers)

    const matchId = match.params.id

    let userCustomers = customersByUserId.filter((customer) => customer.id === +matchId)

    useEffect(() => {
    
        if(!userCustomers.length) {
            userCustomers = JSON.parse(localStorage.getItem('currentCustomer'))
        } else {
            localStorage.setItem('currentCustomer', JSON.stringify(userCustomers))
        }

        setCurrentCustomer(userCustomers)
    }, [])

   




    
    if (!currentCustomer) {
        return 'Loading...'
    }

    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow" title="Customer Card" />

            <CustomerInfo
                updatedCustomer={userCustomers[0]}
                matchId = {matchId}

            />

        </ScreenContainer >
    );
}

export default CustomerCard;
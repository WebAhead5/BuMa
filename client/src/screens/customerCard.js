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
    let allCustomers = useRecoilValue(customers)
    const matchId = match.params.id
    let userCustomers = allCustomers.filter((customer) => customer.id === +matchId)
    let updatedCustomer = userCustomers[0];
    

    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow" title="Customer Card" />

            <CustomerInfo
                updatedCustomer={updatedCustomer}
                matchId = {matchId}
                activity = {updatedCustomer.activitystatus}

            />

        </ScreenContainer >
    );
}

export default CustomerCard;
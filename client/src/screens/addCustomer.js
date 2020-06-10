import React from 'react';
import Header from '../components/MenuHeader';
import CustomerForm from "../components/addCustomerForm/customerForm";
import ScreenContainer from '../components/Screen';

const addCustomer = () => {

    return (
        <ScreenContainer>
            <Header icon="backArrow" title="Add Customer" />
            <CustomerForm />
        </ScreenContainer >
    );
}

export default addCustomer;
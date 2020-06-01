import React from 'react';
import BackButton from '../components/BackArrow';
import Header from '../components/MenuHeader';
import CustomerForm from "../components/addCustomerForm/customerForm";

const addCustomer = () => {

        return (
            <div>
                <BackButton />
                <Header title="Add Customer"/>
                <CustomerForm />
            </div>
        );
}
 
export default addCustomer;
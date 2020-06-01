import React from 'react';
import Header from '../components/MenuHeader';
import CustomerForm from "../components/addCustomerForm/customerForm";

const addCustomer = () => {

        return (
            <div>
                <Header title="Add Customer"/>
                <CustomerForm />
            </div>
        );
}
 
export default addCustomer;
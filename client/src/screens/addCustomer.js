import React from 'react';
import CustomerNav from '../components/addCustomerForm/customerNav';
import CustomerForm from "../components/addCustomerForm/customerForm";

const addCustomer = () => {
        return (
            <div>
                <CustomerNav />
                <CustomerForm />
            </div>
        );
}
 
export default addCustomer;
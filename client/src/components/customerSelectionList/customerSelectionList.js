import React, { useState } from 'react'
import CustomerSelectionEntry from '../customerSelectionEntry';
import { useRecoilValue } from 'recoil';
import { selectedCustomers, useAddCustomerSelectedCustomers, useDeleteCustomerFromSelectedCustomers, useAddCustomerToSelectedCustomers } from '../../store/customers';
import * as equal from 'deep-equal';


const styles = {

    container: {

        backgroundColor: '#1F2B30',
        height: '50vh',

    },

    ul: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyleType: 'none',
        width: '95vw',
        borderRadius: '6px',
        height: '5vh',
        marginLeft: '10px',

    }


};

const CustomerSelectionList = (props) => {
    const selectedCustomersItems = useRecoilValue(selectedCustomers);

    const addCustomers = useAddCustomerToSelectedCustomers();
    const removeCustomer = useDeleteCustomerFromSelectedCustomers();

    let customers = [];

    if (props.error) {
        return (<div>Could not fetch, try again later</div>)
    }



    props.customersName.forEach((customer, index) => {
        let checked = false;
        selectedCustomersItems.forEach((element)=>{
            if(equal(element,customer))
                checked = true;
        })
        customers.push(
        <CustomerSelectionEntry key={`Entry + ${index} `}
            customer={customer}
            handleAddCustomer={addCustomers}
            handleDeleteCustomer={removeCustomer}
            selectedCustomers={selectedCustomers}
            checked = {checked}
            {...props}
        />);
    });







    return (
        <div style={styles.container}>
            <ul style={styles.ul}>
                <li>{'Name'}</li>

                <li>{'Select'} </li>
            </ul>


            {customers}



        </div>
    )
}

export default CustomerSelectionList

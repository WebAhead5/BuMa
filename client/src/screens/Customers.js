/**
 * Created by farid on 03/07/17.
 */
import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import { fetchCustomers } from '../actions/customers';
import Button from '../components/Button';
import CustomerList from '../components/CustomerList';
import SearchField from '../components/searchField'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { filterDisplay, customers , customresState } from '../store/customers';
import { useSetfilterDisplay, useSetCustomers } from "../store/customers";





const styles = {
    btn: {
        backgroundColor: '#0B8D98',
        color: 'E4FDFF',
        width: '50vw',
        height: '5vh'
    },
    noButtonFoundText: {
        color: '#a9b4bf',
        fontSize: '1.1em',
    },
};




const Customers = (props) => {
    const allCustomers =  useRecoilValue(customers);
    const filteredCustomers = useRecoilValue(filterDisplay)

    const setItems = useSetCustomers();
    const setFilterItems = useSetfilterDisplay();

    const [error, setError] = React.useState('')
    const [searchText, setSearchText] = React.useState('')


    useEffect(() => {
        // Update the document title using the browser API
        fetchCustomers(setItems);
    }, []);


    const searchFieldHandleChange = (e) => {
        let input = e.target.value
        if (input !== '') {
           setSearchText(input.trim())
           let newList = allCustomers.filter(({ name }) => name.toLowerCase().startsWith(input.toLowerCase()))
           setFilterItems(newList);
           
        } else {
            setSearchText('')
            setFilterItems(allCustomers);
        }
    }

    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow"
                title= "Customers" />
            <SearchField value={searchText} handleChange={searchFieldHandleChange} />


            <CustomerList customers={filteredCustomers} error={error} />
            <Link to={`/addCustomer`}>

                <Button text="Add new" style={styles.btn} />

            </Link>

            <Button text="Public Announcement" onClickButton={() => console.log('clicked')} style={styles.btn} />

        </ScreenContainer>
    );
}


export default Customers;

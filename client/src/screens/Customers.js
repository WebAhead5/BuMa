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



const styles = {
    btn: {
        backgroundColor: '#0B8D98',
        color: 'E4FDFF',
        width: '40vw',
        height: '10vh',
        marginBottom : '20px',
        overflow : 'hidden',
    },
    noButtonFoundText: {
        color: '#a9b4bf',
        fontSize: '1.1em',
    },

    btnContainer: {

        display: 'flex',
        flexWrap : 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

};




const Customers = (props) => {

    const [customers, setCustomers] = React.useState([]);
    const [error, setError] = React.useState('')
    const [searchText, setSearchText] = React.useState('')
    const [filterDisplay, setFilterDisplay] = React.useState(customers)
    // function click() {
    //     fetchCustomers(handleSetCustomers);
    // }
    const handleSetCustomers = (err, customers_res) => {
        if (err) {
            setError(err)
            return;
        }
        setCustomers(customers_res.customers)
        setFilterDisplay(customers_res.customers)
    };


    useEffect(() => {
        // Update the document title using the browser API
        fetchCustomers(handleSetCustomers);

    }, []);


    const searchFieldHandleChange = (e) => {
        let input = e.target.value
        if (input !== '') {
            setSearchText(input.trim())
            let newList = customers.filter(({ name }) => name.toLowerCase().startsWith(input.toLowerCase()))
            setFilterDisplay(newList);
        } else {
            setSearchText('')
            setFilterDisplay(customers)
        }

    }

    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow"
                title="Customers" />
            <SearchField value={searchText} handleChange={searchFieldHandleChange} />


            <CustomerList customers={filterDisplay} error={error} />

            <div style={styles.btnContainer}>
                <Link to={`/addCustomer`}>

                    <Button text="Add new" style={styles.btn} />

                </Link>

                <Button text="Public Announcement" onClickButton={() => console.log('clicked')} style={styles.btn} />
            </div>
        </ScreenContainer>
    );
}


export default Customers;

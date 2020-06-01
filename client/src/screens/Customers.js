/**
 * Created by farid on 03/07/17.
 */
import React from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import { fetchCustomers } from '../actions/customers';
import Button from '../components/Button';
import CustomerList from '../components/CustomerList';


const styles = {
    page: {
        backgroundColor: '#f1f3f4',
    },
    noButtonFoundText: {
        color: '#a9b4bf',
        fontSize: '1.1em',
    }
};




const Customers = (props) => {

    const [customers, setCustomers] = React.useState([]);
    const [error, setError] = React.useState('')

    function click() {
        fetchCustomers(handleSetCustomers);
    }

    const handleSetCustomers = (err, customers_res) => {
        if (err) {
            setError(err)
            return;
        }
        setCustomers(customers_res.customers)
    };


    return (
        <ScreenContainer>
            <MenuHeader icon="burger"
                title="customers" />
            <Button onClickButton={click} text="Click" style={styles.page} />
            <CustomerList customers={customers} error={error} />
        </ScreenContainer>
    );
}


export default Customers;

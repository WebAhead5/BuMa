/**
 * Created by farid on 03/07/17.
 */
import React, { useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import { fetchCustomers } from '../actions/customers';
import Button from '../components/Button';
import CustomerList from '../components/CustomerList';
import SearchField from '../components/searchField'


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
    }
};




const Customers = (props) => {

    const [customers, setCustomers] = React.useState([]);
    const [error, setError] = React.useState('')
    const [value, setValue] = React.useState('')
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
    };


    useEffect(() => {
        // Update the document title using the browser API
        fetchCustomers(handleSetCustomers);
    }, []);

    useEffect(()=> {
        setFilterDisplay(customers)
    }, [customers])
    

    const searchFieldHandleChange = (e) => {
        e.preventDefault()
        let oldList = customers.filter(customers => customers)
        console.log("customers", oldList)
        if(e.target.value !== "") {
            let newList = []
            setValue(e.target.value)
            newList = oldList.filter(customer => customer.name.toLowerCase().includes(value.toLowerCase()))
            setFilterDisplay(newList);
        } else {
            setValue('')
            setFilterDisplay(customers)
        }
        
    }




    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow"
                title="Customers" />
            <SearchField value={value} handleChange={searchFieldHandleChange} />
            <CustomerList customers={filterDisplay} error={error} />
            <Button text="Add new" style={styles.btn} />
            <Button text="Public Announcement" onClickButton={() => console.log('clicked')} style={styles.btn} />
        </ScreenContainer>
    );
}


export default Customers;

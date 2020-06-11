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
import { filterDisplay, customers , customersState } from '../store/customers';
import { useSetfilterDisplay, useSetCustomers } from "../store/customers";
import TextBoxesPopup from '../components/TextBoxesPopup';
import { makeStyles } from '@material-ui/core/styles';





const styles = {
    AddBtn: {
        background: '#0B8D98',
            color: "white",
            width: "25vw",
            height : '9vh',


    },

    PublicBtn: {
        background: '#0B8D98',
            color: "white",
            width: "25vw",
            height : '9vh',
            
    },
    noButtonFoundText: {
        color: '#a9b4bf',
        fontSize: '1.1em',
    },

    btnContainer: {

        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width : '100vw',
        height : '10vh'
    }

};




const Customers = (props) => {
    const allCustomers =  useRecoilValue(customers);
    const filteredCustomers = useRecoilValue(filterDisplay)

    const setItems = useSetCustomers();
    const setFilterItems = useSetfilterDisplay();

    const [error, setError] = React.useState('')
    const [searchText, setSearchText] = React.useState('')
    const [popupShow,setPopupShow] = React.useState(false);


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

    const useStyles = makeStyles((theme) => ({
        dates :{
            backgroundColor: 'white',
            marginBottom: '10px',
            height: '200px',
            width:'200px',
        }
    }));

    const classes = useStyles();

    const messageTextBox = [
        {
            label:"Message",
            type: "Text",
            defaultValue:"",
            multiline:"true",
            rows:9,
            variant: "outlined",
            className: classes.dates
        }
    ]
    const handleChangeMessageTextBox = () => {

    }
    const callBacks = [
        handleChangeMessageTextBox
    ]

 
    return (
        <ScreenContainer>
            <TextBoxesPopup callbacks= {callBacks} textBoxes={messageTextBox} setShow={setPopupShow} show= {popupShow}></TextBoxesPopup> 
            <MenuHeader icon="backArrow"
                title= "Customers" />
            <SearchField value={searchText} handleChange={searchFieldHandleChange} />


            <CustomerList customers={filteredCustomers} error={error} />
           

            <div style={styles.btnContainer}>
                <Link to={`/addcustomer`}>

                    <Button text="Add new" style={styles.AddBtn} />

                </Link>

                <Button text="Public Announcement" onClickButton={() => setPopupShow(true)} style={styles.PublicBtn} />
            </div>
        </ScreenContainer>
    );
}


export default Customers;

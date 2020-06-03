import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import CustomerInfo from '../components/customerInfo/customerInfo'
import Button from '../components/Button';
import { Link } from 'react-router-dom'



const styles = {

    container: {

        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: '5px'

    },

    saveBtn: {

        background: '#0B8D98',
        color: "white",
        width: "100px"
    },

    deleteBtn: {

        background: '#1F2B30',
        border: 'none'
    },

    deleteIcon: {

        height: '50px',
        width: '50px',


    }
}


const CustomerCard = (props) => {

    let deleteIcon = "/img/deleteIcon.png";
    let activityIcon = "/img/deleteIcon.png";

    return (
        <ScreenContainer>
            <MenuHeader title="Customer Card" />

            <CustomerInfo />

            <Button

                text="Save"

                onClickButton={() => console.log('clicked')}


                style={styles.saveBtn}



            />

            <div style={styles.container}>



                <button style={styles.deleteBtn}>
                    <img style={styles.deleteIcon} src={deleteIcon} />
                </button>
            </div>

        </ScreenContainer >
    );
}

export default CustomerCard;
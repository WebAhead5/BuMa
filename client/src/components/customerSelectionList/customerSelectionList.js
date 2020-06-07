import React, { useState } from 'react'
import CustomerSelectionEntry from '../customerSelectionEntry';
import { useRecoilValue } from 'recoil';
import { selectedCustomers, useSetSelectedCustomers } from '../../store/customers';



const styles = {

    container: {

        backgroundColor: '#1F2B30',
        height: '800px'

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

    const checkedCustomers = useRecoilValue(selectedCustomers);

    const setCustomers = useSetSelectedCustomers();
    // const [selectedCustomers, setSelectedCustomers] = useState(new Set())

    const handleChangeSelectedCustomers = (item) => {

        if (item.startsWith('--')) {

            checkedCustomers.delete(item.substr(2))
            setCustomers(checkedCustomers)

        } else {

            setCustomers(checkedCustomers.add(item))

        }

        console.log(checkedCustomers)

    }



    let customers = [];

    if (props.error) {
        return (<div>Could not fetch, try again later</div>)
    }

    props.customersName.forEach((customer, index) => {

        customers.push(<CustomerSelectionEntry key={`Entry + ${index} `}
            customer={customer}
            handleChangeSelectedCustomer={handleChangeSelectedCustomers}
            selectedCustomers={selectedCustomers}

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

import React, { useState, useEffect } from 'react'



const styles = {

    checked: {
        marginTop: '10px',
        marginLeft: '10px',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyleType: 'none',
        width: '95vw',
        height: '5vh',
        borderRadius: '5px',
    },
    unchecked: {
        marginTop: '10px',
        marginLeft: '10px',
        backgroundColor: 'white',
        color: 'white',
        opacity: '0.5',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyleType: 'none',
        width: '95vw',
        height: '5vh',
        borderRadius: '5px',
    },
    li: {

        color: 'black',
    }
}




const CustomerSelectEntry = (props) => {

    const [isChecked, setChecking] = useState(false)


    const handleCheckBoxChange = (customer) => {
        setChecking(!isChecked)
        //Checking the opposite value of isChecked because the the call setChecking(!isChecked) is
        //Async call and it will not make the change immediately 
        if (!isChecked) {
            props.handleAddCustomer(customer)
        } else {
            props.handleDeleteCustomer(customer)
        }
    }

    return (

        <ul style={isChecked ? styles.checked : styles.unchecked}>
            <li style={styles.li}>{props.customer.name}</li>
            <input id={props.customer.id} type="checkbox" checked={isChecked}
                onChange={() => handleCheckBoxChange(props.customer)} name="checkBox" value={props.customer.name} />
        </ul>


    )
}

export default CustomerSelectEntry

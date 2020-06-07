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
    li : {

        color : 'black',
    }
}




const CustomerSelectEntry = (props) => {

    const [isChecked, setChecking] = useState(false)


    const handleCheckBoxChange = (e) => {

        setChecking(!isChecked)


        if (e.target.checked) {

            console.log('You checked the box')


            props.handleChangeSelectedCustomer(e.target.value)



        } else {

            console.log('You unchecked the box')

            props.handleChangeSelectedCustomer('--' + e.target.value)



        }



    }

    return (

        <ul style={isChecked ? styles.checked : styles.unchecked}>

            <li style={styles.li}>{props.customer.name}</li>

            <input id={props.customer.id} type="checkbox" checked={isChecked}
                onChange={handleCheckBoxChange} name="checkBox" value={props.customer.name} />



        </ul>


    )
}

export default CustomerSelectEntry

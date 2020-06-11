import React from 'react';
import Image from '../Image';
import { MAX_CUSTOMER_NAME_DISPLAY_LEN } from '../../constants';
import { Link } from 'react-router-dom'


const styles = {

  activeUser: {
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',
    width: '95vw',
    height: '5vh',
    borderRadius: '5px',
    marginLeft : '10px',
  },

  NotActiveUser: {
    backgroundColor: 'white',
    opacity: '0.3',
    color: 'black',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',
    width: '95vw',
    height: '5vh',
    borderRadius: '5px',
    marginLeft : '10px'
  },
}

const CustomerEntry = (props) => {
  let customerId = props.customer.id;
  let customerName = props.customer.name || '';
  let customerPaymentStatus = (props.customer.paymentstatus);
  let customerAppointmentPrice = props.customer.appointmentprice;
  let customerActivityStatus = (props.customer.activitystatus);
  let customerActivitySrc = props.activitySrc;
  let customerNoActivitySrc = props.noActivitySrc;





  if (customerName.length > MAX_CUSTOMER_NAME_DISPLAY_LEN) {
    customerName = customerName.slice(0, MAX_CUSTOMER_NAME_DISPLAY_LEN - 3) + '...';
  }
  return (

    <Link to={`customerCard/${customerId}`}>
      <ul style={customerActivityStatus ? styles.activeUser : styles.NotActiveUser}>

        <li style={styles.li}><Image src={customerActivityStatus ? customerActivitySrc : customerNoActivitySrc} /> </li>

        <li>{customerName}</li>

        <li>{customerPaymentStatus ? 'Done' : 'Pending ...'} </li>

        <li>{customerAppointmentPrice} </li>

      </ul>


    </Link>
  );
}

export default CustomerEntry;

import React from 'react';
import Image from '../Image';
import { MAX_CUSTOMER_NAME_DISPLAY_LEN } from '../../constants';


const styles = {

  activeUser: {

    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',
    width: '95%',
    height : '5%',
    marginLeft: '20px',
    borderRadius: '5px'
    





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
    width: '95%',
    height : '5%',
    marginLeft: '20px',
    borderRadius: '5px'

  },

}

const CustomerEntry = (props) => {
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

    <ul style={customerActivityStatus ? styles.activeUser : styles.NotActiveUser}>

      <li style={styles.li}><Image src={customerActivityStatus ? customerActivitySrc : customerNoActivitySrc} /> </li>

      <li>{customerName}</li>

      <li>{customerPaymentStatus ? 'Done' : 'Pending ...'} </li>

      <li>{customerAppointmentPrice} </li>




    </ul>





    // <div className="col-xs-12 col-sm-6" style={styles.container}>
    //   <div className="col-xs-4 vcenter">
    //     <Image style={styles.image} src={props.imageSrc} />
    //   </div>
    //   <div className="col-xs-6 vcenter">
    //     <span style={styles.name}>Name : {customerName} </span>
    //     <br></br>
    //     <span style={styles.name}>Payment Status : {customerPaymentStatus} </span>
    //     <br></br>
    //     <span style={styles.name}>Appointment Price : {customerAppointmentPrice} </span>
    //   </div>
    //   <div className="var _ = require('lodash');col-xs-2 vcenter" style={styles.settings}>
    //     <i className="fa fa-cog" aria-hidden="true" style={styles.settingsIcon} onClick={() => props.onButtonSettingsClick(props.button.id)}></i>
    //   </div>
    // </div>
  );
}

export default CustomerEntry;

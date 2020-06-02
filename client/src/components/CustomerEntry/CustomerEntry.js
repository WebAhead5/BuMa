import React from 'react';
import Image from '../Image';
import {MAX_CUSTOMER_NAME_DISPLAY_LEN} from '../../constants';

const styles = {
  container: {
    backgroundColor: '#282c34',
    borderRadius: 9,
    marginBottom: 10,
    padding: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1em',
    overflowWrap: 'break-word',
  },

  image: {
    width: 20,
    height: 20,
    backgroundColor: '#347575'
  },

  settings: {
    color: '#b9b9b9',
    paddingBottom: '50px',
    textAlign: 'right',
  },
  settingsIcon: {
  },
  image : {
    backgroundColor: 'black'
  },
};

const CustomerEntry = (props) => {

    let customerName = props.customer.name || '';
    let customerPaymentStatus = (props.customer.paymentstatus).toString() ;
    console.log(customerPaymentStatus);
    
    let customerAppointmentPrice =props.customer.appointmentprice;

    if (customerName.length > MAX_CUSTOMER_NAME_DISPLAY_LEN) {
      customerName = customerName.slice(0,MAX_CUSTOMER_NAME_DISPLAY_LEN - 3) + '...';
    }
    return (
      <div className="col-xs-12 col-sm-6" style={styles.container}>
        <div className="col-xs-4 vcenter">
          <Image style= {styles.image} src={props.imageSrc}/>
        </div>
        <div className="col-xs-6 vcenter">
          <span style={styles.name}>Name : {customerName} </span>
          <br></br>
          <span style={styles.name}>Payment Status : {customerPaymentStatus} </span>
          <br></br>
          <span style={styles.name}>Appointment Price : {customerAppointmentPrice} </span>
        </div>
        <div className="col-xs-2 vcenter" style={styles.settings}>
          <i className="fa fa-cog" aria-hidden="true" style={styles.settingsIcon} onClick={() => props.onButtonSettingsClick(props.button.id)}></i>
        </div>
      </div>
    );
  }

export default CustomerEntry;

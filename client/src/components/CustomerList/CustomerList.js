import React from 'react';
import CustomerEntry from '../CustomerEntry';
import PropTypes from 'prop-types';
var _ = require('lodash');

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
    width: '95%',
    marginLeft: '20px',
    borderRadius: '5px'

  }


};

const CustomerList = (props) => {

  let customers = [];
  if (props.error) {
    return (<div>Could not fetch, try again later</div>)
  }
  props.customers.forEach((customer, paymentstatus, appointmentprice, activitystatus, index) => {
    let imageSrc = "/img/burger.png";
    let activitySrc = "/img/green.png";
    let noActivitySrc = "/img/red.png";
    customers.push(<CustomerEntry key={'buttonEntry' + index}
      customer={customer}
      paymentstatus={paymentstatus}
      appointmentprice={appointmentprice}
      activitystatus={activitystatus}
      activitySrc={activitySrc}
      noActivitySrc={noActivitySrc}

      imageSrc={imageSrc}


      {...props} />);

  });

  return (

    <div style={styles.container}>

      <ul style={styles.ul}>

        <li>Activity Status </li>

        <li>Name</li>

        <li>Payment Status </li>

        <li>Amount </li>


      </ul>


      {customers}

    </div>


  );

}

export default CustomerList;

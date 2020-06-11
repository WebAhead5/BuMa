import React from 'react';
import CustomerEntry from '../CustomerEntry';
var _ = require('lodash');

// TODO: change the list on a general component instead of making 2 similar lists
const styles = {

  container: {

    backgroundColor: '#1F2B30',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },

  ul: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',
    width: '95vw',
    borderRadius: '6px',
    height: '6vh',
    marginLeft : '10px',

  },

  li : {



  }




};

const CustomerList = (props) => {

  let customers = [];
  if (props.error) {
    return (<div>Could not fetch, try again later</div>)
  }
  props.customers.forEach((customer, paymentstatus, appointmentprice, activitystatus, customerid) => {
    let imageSrc = "/img/burger.png";
    let activitySrc = "/img/green.png";
    let noActivitySrc = "/img/red.png";


    customers.push(<CustomerEntry key={`Entry ${customerid}`}
      customerid={customerid}
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

        <li style={styles.li}>Activity Status </li>

        <li style={styles.li}>Name</li>

        <li style={styles.li}>Payment Status </li>

        <li style={styles.li}>Amount </li>


      </ul>


      {customers}

    </div>


  );

}

export default CustomerList;

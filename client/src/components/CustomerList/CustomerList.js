import React from 'react';
import CustomerEntry from '../CustomerEntry';
import PropTypes from 'prop-types';

var _ = require('lodash');

const styles = {

  container: {

    backgroundColor: '#1F2B30',

  },

  table: {
    color: 'black',
    backgroundColor: '#1F2B30',
    marginLeft: '30px',
    width: '95vw',
    height: '100vh',


  },
  thead: {
    backgroundColor: 'white',
    


  },
  tr : {

    height : '50px  '
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
      <table style={styles.table}>

          <tr className='br3' style={styles.thead} >
            <th >Activity Status</th>
            <th>Name</th>
            <th>Payment Status</th>
            <th>Amount</th>
          </tr>



          {customers}




      </table>

    </div>


  );

}

export default CustomerList;

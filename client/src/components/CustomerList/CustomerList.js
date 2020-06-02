import React from 'react';
import CustomerEntry from '../CustomerEntry';
import PropTypes from 'prop-types';

var _ = require('lodash');

const styles = {
  listView: {
    color: 'white',
    backgroundColor: '#282c34',
    display: 'flex',
    flexDirection: 'column'

  }
};

const CustomerList = (props) => {

  let customers = [];
  if (props.error) {
    return (<div>Could not fetch, try again later</div>)
  }
  props.customers.forEach((customer, paymentstatus, appointmentprice, index) => {
    //let imageSrc = getButtonLogo4Project(button.project);
    let imageSrc = "/img/burger.png";
    customers.push(<CustomerEntry key={'buttonEntry' + index}
      customer={customer}
      paymentstatus={paymentstatus}
      appointmentprice={appointmentprice}
      imageSrc={imageSrc}
      {...props} />);
  });
  return (
    <div className="col-xs-12 list-view" style={styles.listView}>

      {customers}
    </div>
  );

}

export default CustomerList;

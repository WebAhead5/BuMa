import React from 'react';
import CustomerEntry from '../CustomerEntry';
import PropTypes from 'prop-types';

var _ = require('lodash');

const styles = {
  listView: {
  }
};

const CustomerList = (props) => {

  let customers = [];
  if (props.error) {
    return (<div>Could not fetch, try again later</div>)
  } 
  props.customers.forEach((customer, index) => {
    //let imageSrc = getButtonLogo4Project(button.project);
    let imageSrc = "/img/burger.png";
    customers.push(<CustomerEntry key={'buttonEntry' + index}
      customer={customer}
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

import React, { useState } from 'react'
import CustomerName from './customerName';
import CustomerEmail from './customerEmail';
import CustomerNote from './customerNote';
import CustomerPhone from './customerPhone';
import CustomerPrice from './customerPrice';
import PaymentNumber from './paymentEvery';
import PaymentPeriod from './paymentPer';
import { addCustomer } from '../../actions/customers';
import { Redirect } from 'react-router'



function CustomerForm() {
  const date = new Date();
  const todaysDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [isRedirect, setRedirect] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    userid: '1',
    paymentStatus: 'false',
    activityStatus: 'true',
    notes: 'Note',
    balance: '0',
    appointmentPrice: 'Price per appointment',
    paymentEveryValue: '1',
    paymentEveryUnit: 'Week',
    balanceValidUntil: todaysDate
  });


  const handleChange = (e, id) => {
    setCustomerDetails({ ...customerDetails, [id]: e.target.value });
    console.log(customerDetails)
  }

  const handleSubmit = (event) => {
    console.log(customerDetails);

    addCustomer(customerDetails);
    setRedirect(true);
    event.preventDefault();
  }

  return (

    <form onSubmit={handleSubmit} style={{ background: '#1F2B30' }}>
      <div className="tl pa4 vcenter">
        <CustomerName
          stateId="name"
          onChange={handleChange}
          placeHolder={customerDetails.name}
        />
        <CustomerEmail
          stateId="email"
          onChange={handleChange}
          placeHolder={customerDetails.email}
        />
        <CustomerPhone
          stateId="phone"
          onChange={handleChange}
          placeHolder={customerDetails.phone}
        />
        <CustomerPrice
          stateId="appointmentPrice"
          onChange={handleChange}
          placeHolder={customerDetails.appointmentPrice}
        />
        <PaymentNumber
          stateId="paymentEveryValue"
          onChange={handleChange}
          placeHolder={customerDetails.paymentEveryValue}
        />
        <PaymentPeriod
          stateId="paymentEveryUnit"
          onChange={handleChange}
          placeHolder={customerDetails.paymentEveryUnit}
        />
        <CustomerNote
          stateId="notes"
          onChange={handleChange}
          placeHolder={customerDetails.notes}
        />

        <input
          type="submit"
          value="Add"
          className='btn btn-submit ma3 btn-lg grow'
          style={{ background: '#0B8D98', color: "white", width: "100px" }}
        />

      </div>

      {isRedirect && (
        <Redirect to={'/customers'} />
      )}
    </form>
  );
}


export default CustomerForm;
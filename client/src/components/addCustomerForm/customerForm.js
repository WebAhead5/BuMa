import React, { useState } from 'react'
import CustomerName from './customerName';
import CustomerEmail from './customerEmail';
import CustomerPhone from './customerPhone';
import CustomerPrice from './customerPrice';
import PaymentNumber from './paymentEvery';
import PaymentPeriod from './paymentPer';
import NoteFieldText from '../NoteFieldText';
import { addCustomer } from '../../actions/customers';
import { Redirect } from 'react-router';
import { user } from '../../store/users'
import { useRecoilValue } from 'recoil'




function CustomerForm() {
  const date = new Date();
  const todaysDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [isRedirect, setRedirect] = useState(false);
  const userValue = useRecoilValue(user)

  const [customerDetails, setCustomerDetails] = useState({
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    userid: userValue.id,
    paymentStatus: 'false',
    activityStatus: 'true',
    notes: 'Note',
    balance: '0',
    appointmentPrice: 'Price per appointment',
    paymentEveryValue: '1',
    paymentEveryUnit: 'Week',
    balanceValidUntil: todaysDate
  });


  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.id]: e.target.value });
  }

  const handleSubmit = (event) => {

    addCustomer(customerDetails)

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
        <div style={{display:'flex', flexWrap: 'nowarp', justifyContent:'space-evenly'}} className="shadow-5 ma3 w-80 tl">
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
        </div>
        <NoteFieldText
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
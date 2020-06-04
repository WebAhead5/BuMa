import React, { useState } from 'react'
import CustomerName from '../addCustomerForm/customerName';
import CustomerEmail from '../addCustomerForm/customerEmail';
import CustomerPhone from '../addCustomerForm/customerPhone';
import CustomerPrice from '../addCustomerForm/customerPrice';
import PaymentNumber from '../addCustomerForm/paymentEvery';
import PaymentPeriod from '../addCustomerForm/paymentPer';
import NoteFieldText from '../NoteFieldText';
import OpenAnotherComponentTextField from '../OpenAnotherComponentTextField';
import { addCustomer } from '../../actions/customers';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';



function AppointmentForm() {
  const date = new Date();
  const todaysDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [isRedirect, setRedirect] = useState(false);



  const handleChange = (e, id) => {
    // setCustomerDetails({ ...customerDetails, [id]: e.target.value });
    // console.log(customerDetails)
  }


  const handleClick = (event) => {
    setRedirect(true);
  }

  return (

    <form style={{ background: '#1F2B30' }}>
      <div className="tl pa4 vcenter">
        <Link to={`addAppointment`}>
          <OpenAnotherComponentTextField
            stateId="names..."
            click={handleClick}
            placeHolder="names..."
          />
        </Link>
        <form  noValidate>
          <TextField
            id="datetime-local"
            label="Start time"
            type="time"
            defaultValue="10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="datetime-local"
            label="End time"
            type="time"
            defaultValue="10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

        <form  noValidate>
          <TextField
            id="datetime-local"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <NoteFieldText
          stateId="notes"
          onChange={handleChange}
          placeHolder="Notes"
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


export default AppointmentForm;
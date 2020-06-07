import React, { useState } from 'react'
import NoteFieldText from '../NoteFieldText';
import OpenAnotherComponentTextField from '../OpenAnotherComponentTextField';
import { addAppointment } from '../../actions/appointments';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { selectedCustomers } from '../../store/customers';
import { RecoilRoot } from 'recoil';
import { useRecoilValue } from 'recoil';



function AppointmentForm() {
  const date = new Date();
  const todaysDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [isRedirect, setRedirect] = useState(false);
  const [isRedirectHome, setRedirectHome] = useState(false);
  const selectedCustomersItems = useRecoilValue(selectedCustomers);


  let appointmentDetails = {
    userid: '1',
    day: '2012-04-25',
    start_at: '08:00:00',
    end_at: '10:00:00',
    note: '1',
    customerIds: []
  };


  const handleChangeNote = (e, id) => {
    appointmentDetails = { ...appointmentDetails, [id]: e.target.value };
  }

  const handleChangeStartAt = (e, id) => {
    appointmentDetails = { ...appointmentDetails, ['start_at']: e.target.value };

  }

  const handleChangeEndAt = (e, id) => {
    appointmentDetails = { ...appointmentDetails, ['end_at']: e.target.value };
  }

  const handleChangeDay = (e, id) => {
    appointmentDetails = { ...appointmentDetails, ['day']: e.target.value };
  }

  const handleSelectCustomersClick = (event) => {
    setRedirect(true);
  }

  const handleSave = (event) => {
    if (selectedCustomersItems.size > 0) {
      //Geting sellected customers ids to send it to create appointment 
      let customerIds = [];
      selectedCustomersItems.forEach((customer) => {
        customerIds.push(customer.id);
      });
      appointmentDetails = { ...appointmentDetails, ['customerIds']: customerIds };
      addAppointment(appointmentDetails);
      setRedirectHome(true);
    }else{
      //If no user was selected should show error message.
    }
  }



  return (
    <form onSubmit={handleSave} style={{ background: '#1F2B30' }}>
      <div className="tl pa4 vcenter">
        <Link to={`addAppointment`}>
          <OpenAnotherComponentTextField
            stateId="names..."
            click={handleSelectCustomersClick}
            placeHolder="names..."
          />
        </Link>
        <form noValidate>
          <TextField
            id="start_at"
            label="Start time"
            type="time"
            onChange={handleChangeStartAt}
            defaultValue="10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="end_at"
            label="End time"
            type="time"
            onChange={handleChangeEndAt}
            defaultValue="10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

        <form noValidate>
          <TextField
            id="day"
            label="Date"
            type="date"
            onChange={handleChangeDay}
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <NoteFieldText
          stateId="note"
          onChange={handleChangeNote}
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
        <Redirect to={'/selectcustomer'} />
      )}
      {isRedirectHome && (
        <Redirect to={'/home'} />
      )}
    </form>
  );
}


export default AppointmentForm;
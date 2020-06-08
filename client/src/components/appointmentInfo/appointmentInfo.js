import React, { useState } from 'react'
import NoteFieldText from '../NoteFieldText';
import { updateAppointment } from '../../actions/appointments';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function AppointmentInfo(props) {
  

  const [isRedirect, setRedirect] = useState(false);
  
  let appointmentDetails = props.appointment[0];
  let appointmentDay = new Date(appointmentDetails.day);
  let month = appointmentDay.getMonth() + 1;
  let day = appointmentDay.getDate();
  let year= appointmentDay.getFullYear();
  if (day<=9)
    day = "0" + day;
  if (month<10)
    month="0"+month;
  const appointmentDate = year + "-" + month + "-" + day;

  console.log(appointmentDate)
  const handleChange = (e, id) => {
    appointmentDetails = { ...appointmentDetails, [id]: e.target.value };
  }

  const handleSelectCustomersClick = (event) => {
    setRedirect(true);
  }

  const handleSave = (event) => {
      //fix update function api/actions
   // updateAppointment(appointmentDetails.id, appointmentDetails);
  }

  return (
    <form onSubmit={handleSave} style={{ background: '#1F2B30' }}>
      <div className="tl pa4 vcenter">
        {/* replace userid with name from customers table and make it constant */}
        <TextField
            id="userid"
            label="Appointment with:"
            type="text"
            onChange={handleChange}
            value={appointmentDetails.userid}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="start_at"
            label="Start time"
            type="time"
            onChange={handleChange}
            defaultValue={appointmentDetails.start_at}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="end_at"
            label="End time"
            type="time"
            onChange={handleChange}
            defaultValue={appointmentDetails.end_at}
            InputLabelProps={{
              shrink: true,
            }}
          />
        
          <TextField
            id="day"
            label="Date"
            type="date"
            onChange={handleChange}
            defaultValue={appointmentDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
       
        <NoteFieldText
          stateId="note"
          onChange={handleChange}
          placeHolder={appointmentDetails.note}
        />
        <input
          type="submit"
          value="Save"
          className='btn btn-submit ma3 btn-lg grow'
          style={{ background: '#0B8D98', color: "white", width: "100px" }}
        />
      </div>
      {isRedirect && (
        <Redirect to={'/Appointments'} />
      )}
    </form>
  );
}
export default AppointmentInfo;

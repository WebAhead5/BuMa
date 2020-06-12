import React, { useState } from 'react'
import NoteFieldText from '../NoteFieldText';
import { updateAppointment } from '../../actions/appointments';
import {getCustomerData} from '../../actions/customers';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { useSetAppointments, useSetAppointment } from '../../store/appointments';
import InputAdornment from '@material-ui/core/InputAdornment';
//import AccountCircle from '@material-ui/icons/AccountCircle';
import { customers } from '../../store/customers';
import { useRecoilValue } from 'recoil';

function AppointmentInfo(props) {
  
  const [isRedirect, setRedirect] = useState(false);

  //get appointment details as properties from appointmentCard
  let appointmentDetails = props.appointment[0];

  //initials setASppointment in order to update the state later
  const setAppointment = useSetAppointment()
 
  //get customer data by id in order to display name
  // const getCustomers = useRecoilValue(customers)
  // console.log(getCustomers)
  // let getName = getCustomers.filter(obj => obj.userid===appointmentDetails.userid)
  

  //parse date 
  const getAppointmentDate = (dateData) =>{
    let appointmentDay = new Date(dateData);
    let month = appointmentDay.getMonth() + 1;
    let day = appointmentDay.getDate();
    let year= appointmentDay.getFullYear();
    if (day<=9)
      day = "0" + day;
    if (month<10)
      month="0"+month;
    const  appointmentDateValue = year + "-" + month + "-" + day;
    return appointmentDateValue;
  }
  
  const handleChange = (e) => {
    appointmentDetails = ({ ...appointmentDetails, [e.target.id]: e.target.value });
  }

  const handleSubmit = (event) => {
    //update state
    setAppointment(appointmentDetails)
    
    //update database
    appointmentDetails = ({ ...appointmentDetails, 'day': getAppointmentDate(appointmentDetails.day) });
    updateAppointment(appointmentDetails.id, appointmentDetails);
    setRedirect(true);
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: '#1F2B30' , padding:'40px'}}>
      <div className="tc pa4 vcenter">
        {/* replace userid with name from customers table and make it constant */}
        <TextField
            id="userid"
            label="Appointment with:"
            type="text"
            color="primary"
            className="br2 tc"
            onChange={handleChange}
            style={{height:"70px", background: 'white', width:'90%', margin:'5px'}}
            value={appointmentDetails.userid}
            InputLabelProps={{
              shrink: true,
            }}
          />
           <br></br>
           <div className=" pa2"> 
          <TextField
            id="start_at"
            label="Start time"
            type="time"
            color="primary"
            onChange={handleChange}
            className="br2 tc pa2"
            style={{height:"50px", background: 'white', padding:'5px', width:'45%', margin:'5px'}}
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
            className="br2 tc pa2"
            style={{height:"50px", background: 'white', padding:'5px', width:'45%', margin:'5px'}}
            defaultValue={appointmentDetails.end_at}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </div>
          <TextField
            id="day"
            label="Date"
            type="date"
            color="primary"
            className="br2 tc pa2"
            onChange={handleChange}
            style={{height:"50px", background: 'white', padding:'5px', width:'90%', margin:'5px'}}
            defaultValue={getAppointmentDate(appointmentDetails.day)}
            InputLabelProps={{
              shrink: true,
            }}
          />
       <br></br>
        <TextField
          id="note"
          label="Note"
          multiline="true"
          maxRows={8}
          color="primary"
          onChange={handleChange}
          className="br2 tc pa5"
          style={{ background: 'white', padding:'5px', width:'90%', margin:'5px', height:'200px'}}
          defaultValue={appointmentDetails.note}
          InputLabelProps={{
              shrink: true,
            }}
        />
         <br></br>
        <input
          type="submit"
          value="Save"
          className='btn btn-submit ma3 btn-lg grow'
          style={{ background: '#0B8D98', color: "white", width: "200px" }}
        />
      </div>
      {isRedirect && (
        <Redirect to={'/Appointments'} />
      )}
    </form>
  );
}
export default AppointmentInfo;

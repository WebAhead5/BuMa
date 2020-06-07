import React, { useState } from 'react'
import NoteFieldText from '../NoteFieldText';
import OpenAnotherComponentTextField from '../OpenAnotherComponentTextField';
import { updateAppointment } from '../../actions/appointments';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function AppointmentInfo(props) {
  const date = new Date();
  const todaysDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [isRedirect, setRedirect] = useState(false);
  
  let appointmentDetails = props.appointment;

  const handleChange = (e, id) => {
    appointmentDetails = { ...appointmentDetails, [id]: e.target.value };
  }

  const handleSelectCustomersClick = (event) => {
    setRedirect(true);
  }

  const handleSave = (event) => {
      //fix update function api/actions
   // updateAppointment(userid, appointmentDetails);
  }

  return (
    <form onSubmit={handleSave} style={{ background: '#1F2B30' }}>
      <div className="tl pa4 vcenter">
        <TextField
            id="userid"
            label="Appointment with:"
            type="text"
            onChange={handleChange}
            defaultValue={props.appointment.userid}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="start_at"
            label="Start time"
            type="time"
            onChange={handleChange}
            defaultValue={props.appointment.start_at}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="end_at"
            label="End time"
            type="time"
            onChange={handleChange}
            defaultValue={props.appointment.end_at}
            InputLabelProps={{
              shrink: true,
            }}
          />
        
          <TextField
            id="day"
            label="Date"
            type="date"
            onChange={handleChange}
            defaultValue={props.appointment.day}
            InputLabelProps={{
              shrink: true,
            }}
          />
       
        <NoteFieldText
          stateId="note"
          onChange={handleChange}
          placeHolder={props.appointment.note}
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
// import React from 'react'
// //import Note from '../NoteFieldText';

// const styles = {
//     container: {
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//     },
// }


// const AppointmentInfo = (props) => {
//     return (
//         <div style={styles.container}>
//             <input 
//             className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" 
//             type="text" 
//             name="appTitle" 
//             placeholder={props.namePlaceHolder} />
//             <input 
//             className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" 
//             type="date" 
//             name="appDate" 
//             placeholder={props.datePlaceHolder} />
//             <input 
//             className="input-reset ba b--black-20 pa2 mb2 db br3 w-20" 
//             type="time" 
//             name="time" 
//             placeholder={props.timePlaceHolder} />
//             <textarea
//                 rows="4"
//                 className="input-reset ba b--black-20 pa2 mb2 br3 db w-50"
//                 placeholder={props.notePlaceHolder} />
//         </div>
//     )
// }
// export default AppointmentInfo;
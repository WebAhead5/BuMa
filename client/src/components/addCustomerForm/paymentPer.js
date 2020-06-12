import React from 'react';
import Popup from '../Popups'

const style = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    width: '75vmin',
    height: '30px',
    borderRadius: '5px',
    marginBottom: '5px'
  }
};

const PaymentPer = (props) => {
 

  return (
    <div>
        <label style={{color:'white'}}>Repeat</label>
            <select
            type="number"
            className="input-reset ba b--black-20 pa2 br3 mb2 ma1 w-80"
            onChange={(e, id) => props.onChange(e, props.stateId)}>
            <option value="Appointment" selected={props.Value=== "Appointment"}>Appointment</option>
            <option value="Week" selected={props.Value=== "Week"}>Week</option>
            <option value="Month" selected={props.Value=== "Month"}>Month</option>
          </select>
        
    </div>
  );
}

export default PaymentPer;
import React from 'react';

const paymentPer = (props) => {
      return (
        <div>
          <label style={{color:'white'}}> Every </label>
          <select 
          type="number"
          className="input-reset ba b--black-20 pa2 br3 mb2 ma1 w-30"
          onChange={(e, id) => props.onChange(e, props.stateId)}>
              <option value="appointment">appointment</option>
              <option value="week">week</option>
              <option value="month">month</option>
          </select>
          
        </div>
      );
    }
 
export default paymentPer;
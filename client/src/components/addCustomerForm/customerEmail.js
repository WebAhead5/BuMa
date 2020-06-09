import React from 'react'

const customerEmail = (props) => {
      return (
        <div>
          <input 
          className="input-reset ba b--black-20 pa2 br3 mb2 db w-90"
          type="email"
          onChange={(e, id) => props.onChange(e, props.stateId)}
          placeholder={props.placeHolder}
          value = {props.Value}
          required={props.required}/>
        </div>
      );
    }
 
export default customerEmail;


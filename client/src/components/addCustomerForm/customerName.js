import React from 'react'

const customerName = (props) => {
      return (
        <div>
          <input 
          type="text"
          className="input-reset ba b--black-20 pa2 mb2 db br3 w-80"
          onChange={(e, id) => props.onChange(e, props.stateId)}
          placeholder={props.placeHolder}
          required/>
        </div>
      );
    }
 
export default customerName;
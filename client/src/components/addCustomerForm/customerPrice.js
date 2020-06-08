import React from 'react'

const customerPrice = (props) => {
      return (
        <div>
          <input 
          type="number"
          className="input-reset ba b--black-20 pa2 br3 mb2 db w-90"
          onChange={(e, id) => props.onChange(e, props.stateId)}
          placeholder={props.placeHolder}
          value = {props.Value}
          required={props.required}
          />
        </div>
      );
    }
 
export default customerPrice;
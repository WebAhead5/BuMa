import React from 'react'

const customerPricePH = (props) => {
      return (
        <div>
          <input 
          type="number"
          className="input-reset ba b--black-20 pa2 br3 mb2 db w-90"
          onChange={(e, id) => props.onChange(e, props.stateId)}
          placeholder={props.placeHolder}
          required/>
        </div>
      );
    }
 
export default customerPricePH;
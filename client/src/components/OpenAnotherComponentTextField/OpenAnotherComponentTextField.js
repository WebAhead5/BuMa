import React from 'react'

const OpenAnotherComponentTextField = (props) => {
      return (
        <div className="tc">
          <input 
          type="text"
          className="input-reset ba b--black-20 pa2 mb2 db br3 w-90"
          onClick={(e, id) => props.click()}
          placeholder={props.placeHolder}
          required/>
        </div>
      );
    }
 
export default OpenAnotherComponentTextField;
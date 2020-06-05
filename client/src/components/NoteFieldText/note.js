import React from 'react'

const NoteFieldText = (props) => {
      return (
        <div>
          <textarea 
          rows="4"
          className="input-reset ba b--black-20 pa2 mb2 br3 db w-90"
          onChange={(e, id) => props.onChange(e, props.stateId)}
          placeholder={props.placeHolder}
          required/>
        </div>
      );
    }
 
export default NoteFieldText;
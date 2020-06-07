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
  // const [show, setShow] = React.useState(false)
  // const [repeat, setRepeat] = React.useState(1)


  // limit the counter to not go lower than 1
  // const handleRepeat = () => {
  //   if (repeat > 1)
  //     setRepeat(repeat - 1)
  //   return;
  // }

  //update database
  // const handleYesOpt = () => console.log('Yes Clicked')
  // const handleNoOpt = () => console.log('No Click')

  return (
    <div>
      {/* <button onClick={() => setShow(true)} style={style.button}>Payment every?</button>
      <Popup isOpen={show} style={style.content} setShow={(el)=> setShow(el)} labels={['yes', 'no']} callbacks={[handleYesOpt, handleNoOpt]}>
        <label>Repeat
              <input value={repeat} onChange={(e, id) => props.onChange(e, props.stateId)} >
          </input>
          <button onClick={() => setRepeat(repeat + 1)}>+</button>
          <button onClick={handleRepeat}>-</button>
        </label> */}
        <label style={{color:'white'}}>Every</label>
            <select
            type="number"
            className="input-reset ba b--black-20 pa2 br3 mb2 ma1 w-30"
            onChange={(e, id) => props.onChange(e, props.stateId)}>
            <option value="Appointment">Appointment</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
        
      {/* </Popup> */}
    </div>
  );
}

export default PaymentPer;
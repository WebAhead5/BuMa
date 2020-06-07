import React from 'react'
import Popup from '../Popups'

 const ConfirmDeleteAppointment = (props) => {

    const [show, setShow] = React.useState(false)

    const handleYesOpt = () => {
        console.log('yes clicked')
    }

    const handleYesNo = () => {
        console.log('No clicked')
    }

    return (
        <div>
        <h1 style={{color:'white'}}>Delete Appointment</h1>
        <button onClick={() => setShow(true)} >Delete</button>
      <Popup isOpen={show}  setShow={(el)=> setShow(el)} labels={['yes', 'no']} callbacks={[handleYesOpt, handleYesNo]}>


      </Popup>
        </div>

    )
}

export default ConfirmDeleteAppointment
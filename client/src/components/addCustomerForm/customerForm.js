import React, { useState, useEffect } from 'react'
import { addCustomer } from '../../actions/customers';
import { Redirect } from 'react-router';
import { useRecoilValue } from 'recoil';
import TextField from '@material-ui/core/TextField';
import { user } from '../../store/users'




function CustomerForm() {
  const date = new Date();
  const todaysDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [isRedirect, setRedirect] = useState(false);
  const userValue = useRecoilValue(user)
  const [newUserValue, setUserValue] = React.useState({})

  useEffect(() => {
    let userId = userValue.id
    if (!userId) {
      userId = JSON.parse(localStorage.getItem('loggeduserid'))
    } else {
      localStorage.setItem('loggeduserid', JSON.stringify(userId))
    }
    setUserValue(userId)
  })

  //const [customerDetails, setCustomerDetails] = useState({
  let customerDetails = {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    userid: newUserValue.id,
    paymentStatus: 'false',
    activityStatus: 'true',
    notes: 'Note',
    balance: '0',
    appointmentPrice: '',
    paymentEveryValue: '1',
    paymentEveryUnit: 'Week',
    balanceValidUntil: todaysDate
  }
  //);
  //get customer details from recoil state
  //const customerDetails = useRecoilValue(customers)

  //initiat setCustomers in order to update the state
  //const setCustomer = useSetCustomers();


  const handleChange = (e) => {
    console.log(customerDetails)
    customerDetails = ({ ...customerDetails, [e.target.id]: e.target.value });
  }

  const handleSubmit = (event) => {
     //update state
     //setCustomer(customerDetails)

    //add to database
    addCustomer(customerDetails)
   
    setRedirect(true);
    event.preventDefault();
  }

  return (

    <form 
    onSubmit={handleSubmit} 
    style={{ background: '#1F2B30', marginTop:'30px' }}>
      <div className="tc pa4 vcenter">
      <TextField
            id="name"
            label="Customer's name:"
            type="text"
            color="primary"
            className="br2 tc"
            onChange={handleChange}
            style={{height:"50px", background: 'white', width:'90%', margin:'5px'}}
            // defaultValue={customerDetails.name}
            InputLabelProps={{
              shrink: true,
            }}
          />
        <TextField
            id="email"
            label="email :"
            type="email"
            color="primary"
            className="br2 tc"
            onChange={handleChange}
            style={{height:"50px", background: 'white', width:'90%', margin:'5px'}}
            // defaultValue={customerDetails.name}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="phone"
            label="phone :"
            type="number"
            color="primary"
            className="br2 tc"
            onChange={handleChange}
            style={{height:"50px", background: 'white', width:'90%', margin:'5px'}}
            // defaultValue={customerDetails.name}
            InputLabelProps={{
              shrink: true,
            }}
          />
        <TextField
            id="appointmentPrice"
            label="Price per appointment :"
            type="number"
            color="primary"
            className="br2 tc"
            onChange={handleChange}
            style={{height:"50px", background: 'white', width:'90%', margin:'5px'}}
            // defaultValue={customerDetails.name}
            InputLabelProps={{
              shrink: true,
            }}
          />
        
        <div style={{display:'flex', flexWrap: 'nowarp', justifyContent:'center'}} className="shadow-5 ma3 w-80 tc">
        <select
        id="paymentEveryValue"
        type="number"
        className="input-reset ba b--black-20 pa2 br3 mb2 ma1 w-60"
        onChange={handleChange}>
        <option value="select payment" disabled selected>select payment</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <select
        id="paymentEveryUnit"
        type="text"
        className="input-reset ba b--black-20 pa2 br3 mb2 ma1 w-60"
        onChange={handleChange}>
        <option value="select every" disabled selected>select every</option>
        <option value="Appointment">Appointment</option>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
      </select>
         
        </div>
        <TextField
          id="notes"
          label="Note"
          multiline="true"
          rows={8}
          color="primary"
          onChange={handleChange}
          className="br2 tc pa5"
          style={{ background: 'white', padding:'5px', width:'90%', margin:'5px', height:'200px'}}
          InputLabelProps={{
              shrink: true,
            }}
        />
        <div>
        <input
          type="submit"
          value="Add"
          className='btn btn-submit ma5 btn-lg grow'
          style={{ background: '#0B8D98', color: "white", width: "200px"}}
        />
        </div>

      </div>

      {isRedirect && (
        <Redirect to={'/customers'} />
      )}
    </form>
  );
}


export default CustomerForm;
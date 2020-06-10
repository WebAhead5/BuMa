import React, { useState } from 'react';
import { addUser } from '../../actions/users';
import { Redirect } from 'react-router';
//import { Input } from '@material-ui/core';

function RegistrationForm() {
  const date = new Date();
  const todaysDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const [isRedirect, setRedirect] = useState(false);
  const [confirmPassword, setConfirmPassword]= useState("");
  const [businessDetails, setBusinessDetails] = useState({
    first_name: 'First name',
    last_name: 'Last name',
    email: 'Email',
    username: 'Username',
    password: 'Password',
    phone:'',
    business_name:'',
    business_logo:'',
    crn:'',
    business_address:''
  });


const style={
    table:{
        width:"90%",
        TextAlignment:"center",
        margin:"15px",
        padding:"15px"

    },
    input:{
        margin:"5px"
    }
}
  const handleChangePassword = (e) => {
    setConfirmPassword(e.target.value);
  }
  const handleChange = (e) => {
    setBusinessDetails({ ...businessDetails, [e.target.id]: e.target.value });
  }

  const handleSubmit = (event) => {
    if(confirmPassword===businessDetails.password){
      addUser(businessDetails)
      alert('thank you for registering with us')
      setRedirect(true);
    }else{
      alert('please type in identical passwords')
    }
    event.preventDefault();
  }

  return (

    <form onSubmit={handleSubmit} style={{ background: '#1F2B30' }}>
      <div className="tc pa4 vcenter">
      <table border="0" style={style.table}>
      <tr><td>
        <input
          id="first_name"
          type="text"
          onChange={handleChange}
          style={{width:"90%",margin:"10px", height:"35px"}}
          placeHolder={businessDetails.first_name}
          required
        />
        </td><td>
        <input
          id="last_name"
          type="text"
          onChange={handleChange}
          style={{width:"90%",margin:"10px", height:"35px"}}
          placeHolder={businessDetails.last_name}
          required
        />
        </td></tr>
        <tr ><td colspan="2">
        <input
          id="username"
          type="text"
          onChange={handleChange}
          style={{width:"95%",margin:"10px", height:"35px"}}
          placeHolder={businessDetails.username}
          required
        />
        </td></tr>
        <tr ><td colspan="2">
        <input
          id="email"
          type="email"
          onChange={handleChange}
          style={{width:"95%",margin:"10px", height:"35px"}}
          placeHolder={businessDetails.email}
          required
        />
         </td></tr>
         <tr><td>
         <input
            id="password"
            type="password"
            onChange={handleChange}
            style={{width:"90%",margin:"10px", height:"35px"}}
            placeHolder={businessDetails.password}
            required
          />
          </td><td>
          <input
            id="password2"
            type="password"
            onChange={handleChangePassword}
            style={{width:"90%",margin:"10px", height:"35px"}}
            placeHolder="Confirm Password"
            required
          />
          </td></tr>
          <tr ><td colspan="2" style={{textAlign:"center"}}>
        <input
          type="submit"
          value="Registration"
          
          className='btn btn-submit ma3 btn-lg grow'
          style={{ background: '#0B8D98', color: "white", width: "80%", marginTop:"50px"}}
        />
        </td></tr>
        </table>
      </div>

      {isRedirect && (
        <Redirect to={'/'} />
      )}
    </form>
  );
}


export default RegistrationForm;
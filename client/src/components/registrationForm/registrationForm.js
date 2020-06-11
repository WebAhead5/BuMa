import React, { useState } from 'react';
import { addUser } from '../../actions/users';
import { Redirect } from 'react-router';
//import { Input } from '@material-ui/core';

function RegistrationForm() {
  const [isRedirect, setRedirect] = useState(false);
  const [businessDetails, setBusinessDetails] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword : '',
    phone:'',
    business_name:'',
    business_logo:'',
    crn:'',
    business_address:''
  });


const style={
    table:{
        width:"90%",
        TextAlignment:"left",
        margin:"5px",
        padding:"5px"

    },
    input:{
        margin:"5px"
    },
    label : {

      color : 'white'
    }
}

  const handleChange = (e) => {
    setBusinessDetails({ ...businessDetails, [e.target.id]: e.target.value });
  }

  const handleSubmit = (event) => {
    if(businessDetails.confirmPassword==businessDetails.password){
      addUser(businessDetails, () => alert('thank you for registering with us') )
      setRedirect(true);
    }else{
      alert('please type in identical passwords')
    }
    event.preventDefault();
  }

  return (

    <form onSubmit={handleSubmit} style={{ background: '#1F2B30' }}>
      <div className="tc vcenter">
      <table border="0" style={style.table}>
      <tr><td>
        <label style={style.label} >first name</label>
        <input
          id="first_name"
          type="text"
          onChange={handleChange}
          style={{width:"90%",margin:"10px", height:"35px"}}
          placeholder={businessDetails.first_name}
          required
        />
        </td><td>
        <label style={style.label}>last name</label>
        <input
          id="last_name"
          type="text"
          onChange={handleChange}
          style={{width:"90%",margin:"10px", height:"35px"}}
          placeholder={businessDetails.last_name}
          required
        />
        </td></tr>
        <tr ><td colspan="2">
        <label style={style.label}>username</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          style={{width:"95%",margin:"10px", height:"35px"}}
          placeholder={businessDetails.username}
          required
        />
        </td></tr>
        <tr ><td colspan="2">
        <label style={style.label}>email</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          style={{width:"95%",margin:"10px", height:"35px"}}
          placeholder={businessDetails.email}
          required
        />
         </td></tr>
         <tr><td>
         <label style={style.label} >password</label>
         <input
            id="password"
            type="password"
            onChange={handleChange}
            style={{width:"90%",margin:"10px", height:"35px"}}
            placeholder={businessDetails.password}
            required
          />
          </td><td>
          <label style={style.label} >confirm password</label>
          <input
            id="confirmPassword"
            type="password"
            onChange={handleChange}
            style={{width:"90%",margin:"10px", height:"35px"}}
            placeholder={businessDetails.confirmPassword}
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
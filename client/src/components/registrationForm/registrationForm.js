import React, { useState } from 'react';
import { addUser } from '../../actions/users';
import { Redirect } from 'react-router';
//import { Label, Error } from '@progress/kendo-react-labels';
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
        width:"80%",
        TextAlignment:"left",
        margin: "auto",
        padding:"10px",
        background:''
    },
    input:{
        margin:"2px"
    },
    label : {
      color : 'white',
      marginTop:'20px',
      width:'100%'
    },
    img:{
      width:'150px',
      height:'150px',
      overFlow:'hidden'
  },
  tbody:{
    background:'',
    paddingLeft:'10px',
  }
}
  const handleChange = (e) => {
    setBusinessDetails({ ...businessDetails, [e.target.id]: e.target.value });
    console.log(businessDetails)
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
      <div className="tl vcenter">
      <table border="0" style={style.table}>
      <thead>
        <tr>
        <th colSpan="2">
        <div className="tc shadow-4 pa3 br3">
            <img src='../img/logo.png' style={style.img}></img>
            <br></br>
            <h1 style={{marginTop:'-40px', color:'#0B8D98'}}>BuMa L.T.D</h1>
            </div>
        </th>
        </tr>
      </thead>
      <tbody style={style.tbody}>
      <tr><td>
        <label style={style.label}> first name*</label> 
        <input
          id="first_name"
          type="text"
          onChange={handleChange}
          style={{width:"90%", height:"40px"}}
          placeholder={businessDetails.first_name}
          required
        />
        </td><td>
        <label style={style.label}>last name*</label>
        <input
          id="last_name"
          type="text"
          onChange={handleChange}
          style={{width:"90%", height:"40px"}}
          placeholder={businessDetails.last_name}
          required
        />
        </td></tr>
        <tr ><td colSpan="2">
        <label style={style.label}>username*</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          style={{width:"95%", height:"40px"}}
          placeholder={businessDetails.username}
          required
        />
        </td></tr>
        <tr ><td colSpan="2">
        <label style={style.label}>email*</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          style={{width:"95%", height:"40px"}}
          placeholder={businessDetails.email}
          required
        />
         </td></tr>
         <tr><td>
         <label style={style.label}>password*</label>
         <input
            id="password"
            type="password"
            onChange={handleChange}
            style={{width:"90%", height:"40px"}}
            placeholder={businessDetails.password}
            required
          />
          </td><td>
          <label style={style.label} >confirm password*</label>
          <input
            id="confirmPassword"
            type="password"
            onChange={handleChange}
            style={{width:"90%", height:"40px"}}
            placeholder={businessDetails.confirmPassword}
            required
          />
          </td></tr>
          <tr ><td colSpan="2" style={{textAlign:"center"}}>
        <input
          type="submit"
          value="Registration"
          
          className='btn btn-submit ma3 btn-lg grow'
          style={{ background: '#0B8D98', color: "white", width: "80%", marginTop:"50px"}}
        />
        </td></tr>
        </tbody>
        </table>
      </div>

      {isRedirect && (
        <Redirect to={'/'} />
      )}
    </form>
  );
}


export default RegistrationForm;
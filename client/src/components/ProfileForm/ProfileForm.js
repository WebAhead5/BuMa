import React, { useState } from 'react';
//import { getUserById, editUserById } from '../../actions/users';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {updateUser} from '../../actions/users';
import { SetUserDetails } from '../../store/users';

function ProfileForm(props) {
  const [isRedirect, setRedirect] = useState(false);
  let userDetails = props.userDetails;
  const setItems = SetUserDetails();

const style={
    table:{
        width:"90%",
        TextAlign:"left",
        margin:"15px",
        padding:"15px",
        color:"white"
    },
    input:{
        margin:"5px"
    },
    img:{
        width:'150px',
        height:'150px',
        marginTop:'-60px',
        overFlow:'hidden'
    }
}
 
  const handleChange = (e) => {
    userDetails = ({ ...userDetails, [e.target.id]: e.target.value });
    console.log(userDetails);
  }

  const handleSubmit = (event) => {
    // edit state
    setItems(userDetails)
    console.log(userDetails)
    // edit table
    updateUser(userDetails.id , userDetails)
    setRedirect(true);
    event.preventDefault();
  }

  return (

    <form onSubmit={handleSubmit} style={{ background: '#1F2B30' }}>
      <div className="tc pa4 vcenter">
      <table border="0" style={style.table}>
        <tr ><td style={{textAlign:"center"}} colSpan="2">
            <div className="tc shadow-4 pa3 br3">
            <img src={userDetails.business_logo} style={style.img}></img>
            <br></br>
            <h1 style={{marginTop:'-40px', color:'#0B8D98'}}>{userDetails.business_name}</h1>
            </div>
        </td></tr>
        <tr>
            <td>
            <TextField
            id="first_name"
            label="First name"
            type="text"
            onChange={handleChange}
            style={{width:"80%",height:"50px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.first_name}
            InputLabelProps={{
              shrink: true,
            }}
          />
            </td>
            <td>
            <TextField
            id="last_name"
            label="Last name"
            type="text"
            onChange={handleChange}
            style={{width:"80%",height:"50px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.last_name}
            InputLabelProps={{
              shrink: true,
            }}
          />
            </td>
        </tr>
        <tr ><td style={{color:'white'}} colSpan="2">
        <TextField
            id="business_name"
            label="Business name"
            type="text"
            onChange={handleChange}
            style={{width:"90%",height:"50px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.business_name}
            InputLabelProps={{
              shrink: true,
            }}
          />
         </td></tr>
         <tr ><td style={{color:'white'}} colSpan="2">
        <TextField
            id="email"
            label="Email"
            type="email"
            onChange={handleChange}
            style={{width:"90%",height:"50px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.email}
            InputLabelProps={{
              shrink: true,
            }}
          />
         </td></tr>
         <tr><td>
            <TextField
            id="crn"
            label="CRN"
            type="number"
            onChange={handleChange}
            style={{width:"80%",height:"50px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.crn}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </td>
          <td>
          <TextField
            id="phone"
            label="Phone"
            type="tel"
            onChange={handleChange}
            style={{width:"80%",height:"50px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.phone}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </td>
          </tr>
          <tr><td colSpan="2">
          <TextField
            id="business_address"
            label="Address"
            onChange={handleChange}
            style={{width:"90%",height:"50px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.business_address}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </td></tr>
          <tr ><td colSpan="2">
        <TextField
            id="business_logo"
            label="Logo URL"
            type="text"
            onChange={handleChange}
            style={{width:"90%",height:"50px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.business_logo}
            InputLabelProps={{
              shrink: true,
            }}
          />
         </td></tr>
          <tr ><td style={{textAlign:"center"}} colSpan="2">
            <input
            type="submit"
            value="Save"
            className='btn btn-submit ma3 btn-lg grow'
            style={{ background: '#0B8D98', color: "white", width: "80%", marginTop:"40px"}}
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


export default ProfileForm;
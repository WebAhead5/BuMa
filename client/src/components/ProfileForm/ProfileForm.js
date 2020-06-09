import React, { useState } from 'react';
//import { getUserById, editUserById } from '../../actions/businesses';
import { Redirect } from 'react-router';
//import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function ProfileForm() {
  const [isRedirect, setRedirect] = useState(false);
   //use match param id
  //const userDetails = getUserById(id, users)
  const [userDetails, setUserDetails] = useState({
    businessName: 'BuMa',
    CRN: '000000000',
    address: '######',
    logoSrc: "../../img/Logo.png",
  });

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
        width:'350px',
        height:'350px',
        marginTop:'-50px'
    }
}

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
    console.log(userDetails);
  }

  const handleSubmit = (event) => {

    // edit users table editUserById(id, userDetails)
   // setRedirect(true);
    event.preventDefault();
  }

  return (

    <form onSubmit={handleSubmit} style={{ background: '#1F2B30' }}>
      <div className="tc pa4 vcenter">
      <table border="0" style={style.table}>
        <tr ><td style={{textAlign:"center"}}>
            <div className="tc shadow-4 pa3 br3">
            <img src={userDetails.logoSrc} style={style.img}></img>
            <br></br>
            <h1 style={{marginBottom: '40px', marginTop:'-100px', color:'#0B8D98'}}>BuMa L.T.D</h1>
            </div>
        </td></tr>
        <tr ><td style={{color:'white'}}>
        {/* <label>Business name</label>
        <input
          id="businessName"
          type="text"
          onChange={handleChange}
          style={{width:"90%",margin:"10px", height:"35px"}}
          placeHolder={userDetails.businessName}
        /> */}
        <TextField
            id="businessName"
            label="Business name"
            type="text"
            onChange={handleChange}
            style={{width:"90%",height:"70px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.businessName}
            InputLabelProps={{
              shrink: true,
            }}
          />
         </td></tr>
         <tr><td>
            <TextField
            id="CRN"
            label="CRN"
            type="number"
            onChange={handleChange}
            style={{width:"90%",height:"70px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.CRN}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </td></tr>
          <tr><td>
          <TextField
            id="address"
            label="Address"
            onChange={handleChange}
            style={{width:"90%",height:"70px",background:"white",padding:'10px',margin:'10px'}}
            defaultValue={userDetails.address}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </td></tr>
          <tr ><td style={{textAlign:"center"}}>
            <input
            type="submit"
            value="Save"
            className='btn btn-submit ma3 btn-lg grow'
            style={{ background: '#0B8D98', color: "white", width: "80%", marginTop:"50px"}}
            />
        </td></tr>
        </table>
      </div>

      {/* {isRedirect && (
        <Redirect to={'/home'} />
      )} */}
    </form>
  );
}


export default ProfileForm;
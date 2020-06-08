import React, { useState } from 'react';
//import { getUserById, editUserById } from '../../actions/businesses';
import { Redirect } from 'react-router';
//import {Link} from 'react-router-dom';

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
        width:'320px',
        marginTop:'-40px'
    }
}

  const handleChange = (e) => {
    // if(e.target.value==='')
    // setUserDetails({ ...userDetails, [e.target.id]: e.target.placeHolder });
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
      <div className="tl pa4 vcenter">
      <table border="1" style={style.table}>
        <tr ><td style={{textAlign:"center"}}>
            <img src={userDetails.logoSrc} style={style.img}></img>
            <br></br>
            <h1 style={{marginBottom: '40px'}}>BuMa L.T.D</h1>
        </td></tr>
        <tr ><td style={{color:'white'}}>
        <label>Business name</label>
        <input
          id="businessName"
          type="text"
          onChange={handleChange}
          style={{width:"90%",margin:"10px", height:"35px"}}
          placeHolder={userDetails.businessName}
        />
         </td></tr>
         <tr><td>
         <label>CRN</label>
         <input
            id="CRN"
            type="number"
            onChange={handleChange}
            style={{width:"90%",margin:"10px", height:"35px"}}
            placeHolder={userDetails.CRN}
          />
          </td></tr>
          <tr><td>
          <label>Address</label>
          <input
            id="address"
            type="mixed"
            onChange={handleChange}
            style={{width:"90%",margin:"10px", height:"35px"}}
            placeHolder={userDetails.address}
          />
          </td></tr>
          <tr ><td style={{textAlign:"center"}}>
            <input
            type="submit"
            value="Registration"
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
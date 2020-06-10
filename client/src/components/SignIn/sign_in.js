import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Image from '../Image'
import { login } from '../../actions/users'
import { user, SetUserDetails } from '../../store/users'

function SignInForm() {

    let userData = {};

    const [isRedirect, setRedirect] = useState(false);
    const [localUser, setLocalUser] = useState(user);
    const setUserData = SetUserDetails();


    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        backgroundColor: {
            backgroundColor: "#ffffff"
        },
        center: {
            margin: '20px',
            width: '50%',
            padding: '10px'
        },
        password: {
            marginTop: '20px',
            marginBottom: '20px',
            width: '100%',
            padding: '10px',
            backgroundColor: 'whitesmoke',
            borderRadius: '5px'
        },
        username: {
            marginTop: '20px',
            marginBottom: '20px',
            width: '100%',
            padding: '10px',
            backgroundColor: 'whitesmoke',
            borderRadius: '5px'
        },
        helperText: {
            color: '#C7C7C7',
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '5px',
            marginTop: '-20px',
            marginBottom: '10px',
            backgroundColor: '#1F2B30'
        },
        checkBox: {
            color: 'white'
        },
        checkBoxLabel: {
            color: '#C7C7C7',
            marginBottom: 0
        },
        iconsRow: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: '15px'
        },
        facebookLogo: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '5px'
        },
        googleLogo: {
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '5px'
        },
        table: {
            TextAlignment: "center",
            margin: "auto",
            padding: "15px"

        }
    }));

    const classes = useStyles();


    const handleSubmit = (event) => {


        // { username: 'mario966111', password: '5585mrr' }
        login(userData,setUserData)
        setRedirect(true)

      
        event.preventDefault();
    }

    const handleChangeUsername = (e) => {

        userData = ({ ...userData, [e.target.id]: e.target.value });
    }

    const handleChangePassword = (e) => {

        userData = ({ ...userData, [e.target.id]: e.target.value });
    }


    const handleClickForgetPassword = (e) => {

    }

    const handleRemeberMeChange = (e) => {

    }

    const handleFacebookIconClick = (e) => {

    }

    const handleGoogleIconClick = (e) => {

    }

    const handleSignupClick = (e) => {

    }

    // useEffect(() => {
    //     if (user != undefined)
            
    // }, [localUser]);


    return (

        <form onSubmit={handleSubmit} style={{ background: '#1F2B30' }}>
            <div className="tc pa4 vcenter">
                <table border="0" className={classes.table}>
                    <tr><td>
                        <Grid className={classes.username} container spacing={1} >
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="username"
                                    label="Username"
                                    type="text"
                                    onChange={handleChangeUsername}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </td></tr>
                    <tr><td >
                        <Grid className={classes.password} container spacing={1} >
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    onChange={handleChangePassword}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </td></tr>
                    <tr>
                        <td className={classes.helperText}>
                            <h6 onClick={handleClickForgetPassword}>Forgot password?</h6>
                        </td>
                    </tr>


                    <tr ><td colspan="2" style={{ textAlign: "center" }}>
                        <input className={classes.checkBox} type="checkbox" id="remember" name="remember" value="No" />
                        <label className={classes.checkBoxLabel} for="remember"> Remember me!</label>
                        <input
                            type="submit"
                            onchange={handleRemeberMeChange}
                            value="Sign in"
                            className='btn btn-submit ma3 btn-lg grow'
                            style={{ background: '#0B8D98', color: "white", width: "60%", marginTop: "2px" }}
                        />
                    </td></tr>
                    <tr>
                        <td style={{ color: "#C7C7C7" }}>
                            <h5> -OR- </h5><br></br>
                            <h6>Sign in with</h6>
                        </td>
                    </tr>
                    <tr className={classes.iconsRow}>
                        <td className={classes.facebookLogo}>
                            <Image onClick={handleFacebookIconClick} src='/img/facebook-logo.svg'></Image>
                        </td>
                        <td className={classes.googleLogo}>
                            <Image onClick={handleGoogleIconClick} src='/img/google-logo.svg'></Image>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ color: "#C7C7C7" }}>
                            <h6>Don’t have an account? Sign up!</h6>
                        </td>
                    </tr>
                </table>
            </div>

            {isRedirect && (
                <Redirect to={'/'} />
            )}
        </form>
    );
}


export default SignInForm;

import React,{useState,useEffect} from 'react';
import { Typography, TextField, Button, Container, Grid ,Paper,Avatar} from '@material-ui/core';
// import {  GoogleLogin  } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
//import { gapi } from "gapi-script";

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input.js';
// import Icon from './Icon.js';
import {signIn,signUp} from '../../actions/auth.js';
import {getPosts } from '../../actions/posts.js'

const Auth = () => {
  const classes = useStyles();
  const initialState={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};
  const [showPassword,setShowPassword]=useState(null);
  const [isSignup,setIsSignup]=useState(true);
  const [formData,setformData]=useState(initialState);
  const dispatch=useDispatch();
  const history = useHistory();
  
  const handleShowPassword=()=>{setShowPassword((prevShowPassword)=>!prevShowPassword)
  }

  const handleChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (isSignup)
    {
      console.log("signup");
    dispatch (signUp(formData,history));}
    
  //actions-->auth.js
    else 
    {console.log("signin initiated");
    dispatch (signIn(formData,history));}
  };
  const switchMode=()=>{
    setIsSignup((previsSignup)=>!isSignup);
    handleShowPassword(false);
  }
  // const googleSuccess=async(res)=>{
  //   const clientId=res?.clientId;
  //   const decoded = jwt_decode(res?.credential);
  //   try{
  //     dispatch({type:"AUTH",data:{decoded,clientId}});
  //     history.push('/');
  //     dispatch(getPosts());
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }
  // const googleError=(err)=>{
  //   console.log("failure");
  //   console.log(err);
  // }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* <Grid item >
            <TextField>Input</TextField>
          </Grid> */}
        { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          {/* <GoogleLogin  className={classes.googleButton}
          onSuccess={googleSuccess}
          onError={googleError}
          cookiePolicy="single_host_origin"
          /> */}
          <Grid container style={{justifyContent:"center"}}>
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        

        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

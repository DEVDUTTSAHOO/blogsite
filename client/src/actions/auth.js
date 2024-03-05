import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { getPosts } from './posts.js';

export const signIn = (formData, router) => async (dispatch) => {
  try {
    //console.log(formData);
    const { data ,token} = await api.signin(formData);
    console.log(data);

     await dispatch({ type: AUTH, data });
     router.push('/');
     window.location.reload();
    
     
  } catch(error) {
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message);
    } else {
      console.log(error);
      alert('Sign-in failed. Please try again.'); 
    }
  };
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    console.log(formData);
    const { data ,token} = await api.signUp(formData);
    console.log(data);
    

    await dispatch({ type: AUTH, data });
    //instead of formData there was data earlier

    router.push('/');
    window.location.reload();
  } catch(error) {
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message);
    } else {
      alert('Sign-in failed. Please try again.'); 
    }
  };
};
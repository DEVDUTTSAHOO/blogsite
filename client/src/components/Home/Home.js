
 import React,{useState,useEffect} from 'react';
 import { Grid ,Container, Grow} from '@material-ui/core';
 import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import {getPosts} from '../../actions/posts.js'
       
       const Home = () => {
        
        const dispatch=useDispatch();
        const [currentId ,setCurrentId]=useState(null);
        const User = JSON.parse(localStorage.getItem('profile'));
      
        useEffect(()=>{
          dispatch(getPosts());
        },[currentId,dispatch]);
      
         return (
            <Grow in >
            <Container>
               <Grid container alignItems="stretch" spacing={3}style={{justifyContent:"space-evenly"}}>
                 <Grid item xs={12} sm={12}>
                   <Posts setCurrentId={setCurrentId}/>
                 </Grid>
                 <Grid item xs={12} sm={8}>
                   <Form currentId={currentId} setCurrentId={setCurrentId} />
                 </Grid>
               </Grid>
             </Container>
            </Grow>
         )
       }
       
       export default Home
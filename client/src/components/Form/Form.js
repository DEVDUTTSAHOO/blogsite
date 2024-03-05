import React,{useState,useEffect} from 'react'
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch , useSelector} from 'react-redux';


import {createPost,updatePost,getPosts}from '../../actions/posts';
// import {  } from '../../../../server/controllers/posts';

function Form({currentId,setCurrentId}) {
   //const posts=useSelector((state)=>state);
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const classes=useStyles();
  const User = JSON.parse(localStorage.getItem('profile'));

 
  const post = useSelector((state) => {
    const foundObject = state.posts.find(obj => obj._id === currentId);
    return foundObject ? foundObject : null;
});
  const dispatch = useDispatch();
  //console.log(post.posts);
  //console.log("from form");
  useEffect(()=>{
    if (post) setPostData(post);
  },[post]);

  

  const handleSubmit=async(e)=>{
    //console.log("handling submit");
    e.preventDefault();
      if (currentId) 
    {console.log("updatePost initiated");
      await dispatch (updatePost(currentId,{...postData,name:User?.decoded.name}));
      dispatch(getPosts);
      // window.location.reload();
    }
     else
     {console.log("createPost initiated");
      await dispatch(createPost({...postData, name:User?.decoded.name ,creator:User?.decoded._id,email:User?.decoded.email}));
      dispatch(getPosts);}
    
  clear();
  }

  if (!User?.decoded?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own blogs.
        </Typography>
      </Paper>
    );
  }
  const clear=()=>{
    //console.log("clear");
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  }
  
  return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6"> {currentId?`${"Edit this blog"}`:`${"Create your own blog"}`}</Typography>
        {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline minrows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

        </form>
      </Paper>
  );
}

export default Form
import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return (
    <div className={classes.container}>
      {posts.length === 0 ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3} style={{justifyContent:"center"}}>
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Posts;

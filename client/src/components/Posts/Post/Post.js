import React,{useState,useRef} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,Backdrop} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const User = JSON.parse(localStorage.getItem('profile'));

const Blog = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [isHovered, setIsHovered] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleCardClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  const onClickEdit=()=>{
    if (isEnlarged) setIsEnlarged(!isEnlarged);
    setCurrentId(post._id);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleDeleteButton=()=>{
    // if (isEnlarged) setIsEnlarged(!isEnlarged);
    const isConfirmed = window.confirm('Are you sure you want to delete this blog?');
    if (isConfirmed) {
      dispatch(deletePost(post._id))
    }
  }
  return (
    <>
    <Card className={`${classes.card} ${isEnlarged ? classes.enlarged : ''}`}  onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div onClick={handleCardClick}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      
      {isHovered && (
        <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      )}
      
      
      {/* {(User?.decoded.sub === post?.creator || User?.decoded._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}>
      <EditIcon fontSize="small" />
      Edit
    </Button>
        </div>
      )} */}
      
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {isEnlarged ? post.message :`${post.message.slice(0, 120)}...`}
      </Typography>
    </CardContent>
    </div>
      
      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" disabled={!User?.decoded} onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like {post.likeCount}
        </Button> */}
        
        {(User?.decoded.sub === post?.creator || User?.decoded._id === post?.creator) && (
          <Button size="small" color="primary" onClick={handleDeleteButton}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )}
        {(User?.decoded.sub === post?.creator || User?.decoded._id === post?.creator) && (
          <Button size="small" color="primary" onClick={onClickEdit}>
          <EditIcon fontSize="small" />
          Edit
        </Button>
        )}
      </CardActions>
    </Card>
    </>
  );
}

export default Blog;

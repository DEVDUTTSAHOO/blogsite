import { makeStyles } from '@material-ui/core/styles';
import { deepPurple ,blue} from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 0,
    margin: 0,
    minHeight: '78 px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure space between items
    padding: '10px 10px', // Adjust padding for both top and bottom
    width: '100%', // Ensure Navbar occupies 100% of the width
    marginBottom: theme.spacing(1), // Add margin at the bottom of the Navbar
    position: 'relative',
    overflow: 'hidden',
    // backgroundColor:'blue',
    // zIndex: theme.zIndex.drawer + 1, 
    zIndex:'999',
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column', // Stack items vertically on smaller screens
      // alignItems: 'stretch', // Stretch items vertically
      height:'78px'
    },
  },
  heading: {
    color: 'rgba(0, 183, 255, 1)',
    textDecoration: 'none',
    fontSize: '2rem', // Initial font size for larger screens
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem', // Increase font size on small screens and up
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem', // Increase font size on medium screens and up
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4rem', // Increase font size on large screens and up
    },
    [theme.breakpoints.down('xs')]: {
      display: '2 rem', // Hide heading on extra small screens
    },
    '@media screen and (max-width: 500px)': {
      display: 'none',
    }
  },
  image: {
    height: 50, // Adjust height for larger screens
    marginRight: theme.spacing(1),
    zIndex:100,
    [theme.breakpoints.between('xs', 'sm')]: {
      height: 70, // Extra Small (xs) screens: Height: 30px
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: 70, // Small (sm) screens: Height: 50px
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: 80, // Medium (md) screens: Height: 70px
    },
    [theme.breakpoints.up('lg')]: {
      height: 100, // Large (lg) screens and above: Height: 90px
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
      marginRight: 0,
      flex: '0 0 auto',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:'0',
    padding:'0',
    width: '100%', // Ensure Toolbar occupies 100% of the width
    overflow: 'hidden',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // [theme.breakpoints.down('sm')]: {
    //   width: '100%',
    //   marginTop: theme.spacing(1),
    // },
  },
  userName: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  button: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
    // '@media screen and (max-width: 200px)': {
    //   display: 'none',
    // }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '@media screen and (max-width: 300px)': {
      display: 'none',
    }
  },
  grow: {
    flexGrow: 1,
  },
  content: {
    marginTop: theme.spacing(8), // Add margin to the top of the content to accommodate Navbar
  },
}));
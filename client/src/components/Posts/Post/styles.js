import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const popupWidth = '80%'; // Adjust as needed
  const popupHeight = '80%';

return({
  media: {
    height: 200,
  },
  card: {
    marginBottom: 10,
    boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    position: 'relative',
    //zIndex:'1000',
    '&:hover': {
      transform: 'scale(1.02)',
      '& $overlay': {
        opacity: 1, // Show the overlay when the card is being hovered over
      },
    },
  },
  enlarged: {
    width: '95%', 
    height: '95%', 
    position: 'fixed',
    top: '2.5%',
    left: '2.5%',
    zIndex: '1001',
    background: '#fff', // Adjust background color as needed
    padding: theme.spacing(2), // Add padding for content
    overflowY: 'auto', // Enable vertical scrolling if content exceeds popup height
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Add shadow for depth
    borderRadius: theme.spacing(1), // Adjust border radius as needed
    transition: 'width 0.3s ease, height 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px 10px',
    borderRadius: 5,
    zIndex: 1,
    opacity: 0, // Initially hide the overlay
    transition: 'opacity 0.3s ease', // Add transition for smooth opacity change
  },
  cardHovered: {
    '&:hover $overlay': {
      opacity: 1, // Show the overlay when the card is being hovered over
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    padding: '0 20px',
  },
  title: {
    padding: '0 20px',
  },
  cardActions: {
    padding: '0 20px 20px 20px',
    justifyContent: 'space-between',
  },
});
});

export default useStyles;
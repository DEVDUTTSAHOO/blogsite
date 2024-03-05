import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { Typography, AppBar, Toolbar, Button, Avatar } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import bucketList from '../../images/blog.jpg';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const isAuthPage = location.pathname === '/auth';

    useEffect(() => {
        const clientId = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
        if (clientId) {
            const decodedID = jwtDecode(clientId);
            if (decodedID.exp * 1000 < new Date().getTime())
                logout();
        }
    }, [location]);

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        history.push('/');
        setUser(null);
        window.location.reload();
    }

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Toolbar className={classes.toolbar}>
                <div className={classes.brandContainer}>
                    <img className={classes.image} src={bucketList} alt="icon" />
                    <Typography component={Link} to="/" className={classes.heading} variant="h6">SereneScrolls</Typography>
                </div>
                <div className={classes.grow} /> {/* Add a div for spacing */}
                {user ?
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.decoded.name} src={user?.decoded.picture}>{user?.decoded.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.decoded.name} </Typography>
                        <Button className={classes.button} variant="contained"  color="secondary" onClick={logout}>Logout</Button>
                    </div> :
                    !(isAuthPage) && (
                        <Button className={classes.button} component={Link} to="/auth" variant="contained" color="primary">Sign Up</Button>
                      )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;

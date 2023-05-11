import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/userContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const { currentUser, loggedIn } = useContext(UserContext);

  const links = loggedIn ? <>
    <Button color="inherit">{ currentUser.username }</Button>
    <Button color="inherit">Logout</Button>
  
  </> : <>
    <Button to="/login" color="inherit" component={ Link }>Login</Button>
    <Button to="/signup" color="inherit" component={ Link }>Signup</Button>
  </>

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Griffam Bill Calculator
          </Typography>
          { links }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
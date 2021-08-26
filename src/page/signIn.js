import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:'100px',
  
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      // margin: theme.spacing(1),
      width:450,
      marginLeft:'0px',
      color: theme.palette.text.secondary,
    },
  }));


const SignIn = () =>{

    const classes = useStyles();
    
        
    return (
        <div className={classes.root}>
        <Grid container spacing={6} justifyContent="center"  >
       <h3 style={{color:'pink', textAlign:"center"}}>SIGNIN</h3>
          {/* <Grid item xs={12}> */}
          <Grid container spacing={6} justifyContent="center"  >

          <Grid item xs={4}>
            <Paper className={classes.paper} >
            <TextField label="Email" />
            <TextField label='Password'/>
           <br/>
           <br/>
           
            <Button variant="contained" color="secondary">
 SignIn
</Button>

<br/><br/>
<span>Dont have account? Register Now</span><br/>
<Link to='/signup'>
<Button variant="contained" color="primary"  >
  SignUp
</Button>
</Link>
          </Paper>
          </Grid>
        </Grid>

        
          
        </Grid>
      </div>
        
       
        
     
        
         
        
    )
}
export default SignIn;
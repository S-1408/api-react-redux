import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:'150px',
     
      textAlign: 'center',
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      // margin: theme.spacing(1),
      width:450,
      margin:'50px',
      color: theme.palette.text.secondary,
    },
  }));
const SignUp = () =>{

    const classes = useStyles();
        const [state, setState] = useState({
          fullName:'',
          email:'',
          mobile:'',
          city:'',
          password:'',
         position:''
        })
        const { fullName,email, mobile,city,password} = state

        const handleInputChange = (e)=>{
          let {name,value} = e.target;
          setState({...state , [name]:value})
        }

        const handleSubmit = (e)=>{
          e.preventDefault();
          console.log(state);
         
          e.target.reset();
        }
    return (
    
        <div className={classes.root}>
        <Grid container spacing={6} justifyContent="center"  >
       <h3 style={{color:'pink'}}>SIGNUP</h3>
       <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
          <Grid container justifyContent="center"  >
          
          <Grid item xs={5}>
        
            <Paper className={classes.paper} >
          
            <TextField label="FullName" name="fullName" value={fullName} onChange={handleInputChange}/><br/>
            <TextField label="Email" name="email" value={email} onChange={handleInputChange} />
            <TextField label="Mobile" name="mobile" value={mobile} onChange={handleInputChange}/>
            <TextField label="City" name="city" value={city} onChange={handleInputChange}/>
            <br/>
          </Paper>
          </Grid>
          <Grid item xs={4} justifyContent='center'>
            <Paper className={classes.paper}>
            <RadioGroup row aria-label="position" onChange={handleInputChange} name="position" defaultValue="top"  style={{justifyContent:'center'}}>
        
       
            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />

        <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
      </RadioGroup>

            <TextField label="Password" name="password" value={password} onChange={handleInputChange}/>
 <br/>
 <br/>
 <br/>
 
            <span style={{display:'flex', marginTop:'10px', justifyContent:'center' }}>
            <Button variant="contained" type="submit" color="primary"  >
  SignUp
</Button>
<Button variant="contained" type="reset"  value="Reset" color="secondary">
  Reset
</Button>
            </span>
         
            </Paper>
        
          </Grid>
          </Grid>
         
          </Grid>
        
          </form>
        </Grid>
          
      </div>
        
       
        
     
        
         
        
    )
}
export default SignUp;
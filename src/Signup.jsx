import React from "react";
import { Paper,TextField,Box, Typography, Button } from "@mui/material";
function Signup(){
    return (
        <>
        <Box sx={{width:'100%',height:'90vh',display:'flex',alignItems:'center',justifyContent:'center'}}>

       <Paper elevation={3}>
        
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant="h5" sx={{textAlign:'center',margin:'30px'}}>Sign up</Typography>
        <Box>

       <TextField id="outlined-basic" label="FirstName" variant="outlined" sx={{margin:'10px',marginX:'15px'}}/>
       <TextField id="outlined-basic" label="LastName" variant="outlined" sx={{margin:'10px',marginX:'15px'}}/>
        </Box>
        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{margin:'10px',width:'400px',marginX:'15px'}}/>
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" sx={{margin:'10px',width:'400px',marginX:'15px'}}/>
        <Button variant="contained" sx={{width:'90px',margin:'auto',marginY:'15px',marginBottom:'40px',textTransform:'none'}}>Sign up</Button>
        </Box>
       </Paper>
        </Box>
   
        </>
    )
}
export default Signup;
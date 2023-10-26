import React from "react";
import { Paper,TextField,Box, Typography, Button } from "@mui/material";
function Login(){
    return (
        <>
        <Box sx={{width:'100%',height:'90vh',display:'flex',alignItems:'center',justifyContent:'center'}}>

       <Paper elevation={3}>
        
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant="h5" sx={{textAlign:'center',margin:'30px'}}>Login</Typography>
       <TextField id="outlined-basic" label="Email" variant="outlined" sx={{margin:'15px',width:'255px',marginX:'55px'}}/>
       <TextField id="outlined-basic" type="password" label="Password" variant="outlined" sx={{margin:'15px',width:'255px',marginX:'55px'}}/>
        <Button variant="contained" sx={{width:'20px',margin:'auto',marginY:'15px',marginBottom:'40px'}}>Login</Button>
        </Box>
       </Paper>
        </Box>
   
        </>
    )
}
export default Login;
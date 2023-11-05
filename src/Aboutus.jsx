import React from "react";
import {Avatar} from "@mui/material";
import { Box,Paper,Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
function Aboutus(){
    let location = useLocation();
    return (
        <>
        <Box sx={{height:'87vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>

    <Paper elevation={3} sx={{padding:'10px',width:'250px',height:'200px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

        <Box sx={{border:'2px solid #185EA5',padding:'15px',width:'130px',margin:'10px'}} >
          
           <Typography variant="body2" align="center">This podcast website is developed by Abid Syed, a student of G Pulla Reddy Engineering College</Typography>
        </Box>
           <Avatar alt="Remy Sharp" src="abid.jpg" />
        
    </Paper>
       
        </Box>
   
        </>
    )
}
export default Aboutus;
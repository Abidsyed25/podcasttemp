import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Box,Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Home(){
    return (
        <>
       <Link to='/' style={{textDecoration:'none'}}>
        <Box sx={{display:"flex",margin:"15px",marginLeft:'50px'}} >
           <HomeIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>Home</Typography>
        </Box>
        
       </Link>
   
        </>
    )
}
export default Home;
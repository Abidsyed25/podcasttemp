import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Box,Typography } from "@mui/material";

function Home(){
    return (
        <>
      
        <Box sx={{display:"flex",margin:"15px",marginLeft:'50px'}}>
           <HomeIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>Home</Typography>
        </Box>
        
        </>
    )
}
export default Home;
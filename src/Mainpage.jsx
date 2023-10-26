import React from "react";
import Maincard from "./components/Maincard";
import { Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
function Mainpage(){
    return (
        <>
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',border:'2px solid red',margin:'20px'}}>
            <Maincard/>
            <Box sx={{width:'95%',margin:'20px'}}>
            <FavoriteBorderIcon sx={{marginX:'10px'}}/>
            <ShareIcon/>
            </Box>
        </Box>
        </>
    )
}
export default Mainpage;
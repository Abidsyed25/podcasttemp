import React from "react";
import Maincard from "./components/Maincard";
import { Box } from "@mui/material";
function Mainpage(){
    return (
        <>
        <Box sx={{display:'flex',justifyContent:'center',border:'2px solid red',height:'90vh'}}>
            <Maincard/>
        </Box>
        </>
    )
}
export default Mainpage;
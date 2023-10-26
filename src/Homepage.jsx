import React from "react";
import { Box,Typography } from "@mui/material";
import CardList from "./components/Cardlist";
function Homepage(){
    return (
        <>
       <Typography variant="h5" sx={{margin:'40px'}}>Recent Episodes  </Typography>
                        <Box sx={{display:'flex',flexWrap:'wrap',margin:'40px',border:'2px solid red',justifyContent:'space-evenly'}}>
                        <CardList/>
                        <CardList/>
                        <CardList/>
                        <CardList/>
                        <CardList/>
                        <CardList/>
                        <CardList/>
                        <CardList/>
                        </Box>
   
        </>
    )
}
export default Homepage;
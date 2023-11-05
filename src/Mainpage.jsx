import React from "react";
import Maincard from "./components/Maincard";
import { Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect,useState } from "react";
import {CircularProgress} from "@mui/material";
import { useParams } from "react-router-dom";
function Mainpage(){
    let [data,setdata] = useState(null);
    const {id} = useParams();
  useEffect(() => {
    fetch(`https://podcast-backend-production-6eab.up.railway.app/main/${id}`).then(res => res.json()).then(data => setdata(data)).catch(err => console.log(err))
},[]);
if(!data){
    return (<Box sx={{height:'70vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <CircularProgress />
    </Box>)
 }
    return (
        data && 
        <>
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',margin:'20px'}}>
            <Maincard data={data}/>
            <Box sx={{width:'95%',margin:'20px'}}>
            <FavoriteBorderIcon sx={{marginX:'10px'}}/>
            <ShareIcon/>
            </Box>
        </Box>
        </>
    )
}
export default Mainpage;

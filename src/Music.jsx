import React, { useEffect, useState } from "react";
import { Box,Typography } from "@mui/material";
import CardList from "./components/Cardlist";
import {CircularProgress} from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { addUser } from "./store/fetchslice";

function Music(){
    let [item,setitem] = useState(null);
    const {name} = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        if (!item) {
          fetch("http://localhost:8000/" + name)
            .then((res) => res.json())
            .then((data) => setitem(data))
            .catch((err) => console.log(err));
        }
      }, [item]);
    if(!item){
        return <>
        <Box sx={{height:'70vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>

        <CircularProgress />
        </Box>
        </>
    }
    return (
        
        <>
        
       <Typography variant="h5" sx={{margin:'40px'}}>Genre: {name}  </Typography>
                        <Box sx={{display:'flex',flexWrap:'wrap',margin:'40px'}}>
                            { Array.isArray(item) && item.length>0 ?
                                item.map((e,i)=>{
                                     return <CardList post={e} key={i}/>
                                }):<Typography variant="p" sx={{margin:'auto'}}>No podcasts to show</Typography>
                            }
                        
                        </Box>
   
        </>
    )
}
export default Music;
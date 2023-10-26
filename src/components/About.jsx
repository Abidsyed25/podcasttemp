import { Typography,Box } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
function About() {
  return (
    
    <>
    <Link to='/about' style={{textDecoration:'none'}}>

       <Box sx={{display:"flex",margin:"15px",marginLeft:'50px'}}>
           <InfoIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>About us</Typography>
        </Box>
    </Link>
    </>
  );
}

export default About;

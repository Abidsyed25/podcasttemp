import { Typography,Box } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
function About() {
  return (
    
    <>
       <Box sx={{display:"flex",margin:"15px",marginLeft:'50px'}}>
           <InfoIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>About us</Typography>
        </Box>
    </>
  );
}

export default About;

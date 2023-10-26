import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box,Typography } from "@mui/material";

function Admin() {
  return (
    
    <>
       <Box sx={{display:"flex",margin:"15px",marginLeft:'50px'}}>
           <DashboardIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>Admin Panel</Typography>
        </Box>
    </>
  );
}

export default Admin;

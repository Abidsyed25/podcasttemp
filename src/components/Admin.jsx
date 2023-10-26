import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box,Typography } from "@mui/material";
import { Link } from 'react-router-dom';
function Admin() {
  return (
    
    <>
    <Link to='/admin' style={{textDecoration:'none'}}>

       <Box sx={{display:"flex",margin:"15px",marginLeft:'50px'}}>
           <DashboardIcon fontSize="small"/>
           <Typography variant="p" sx={{marginLeft:'5px'}}>Admin Panel</Typography>
        </Box>
    </Link>
    </>
  );
}

export default Admin;

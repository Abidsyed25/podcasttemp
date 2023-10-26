import { Typography,Box } from "@mui/material";
import LogoDevIcon from '@mui/icons-material/LogoDev';
function Title() {
  return (
    
    <>
       <Box sx={{height:'90px',border:'2px solid red',display:'flex',alignItems:'center',justifyContent:'center'}}>
       <LogoDevIcon fontSize='large'/><Typography variant="h5" >Podcast</Typography>

       </Box>
    </>
  );
}

export default Title;

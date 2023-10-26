import { Grid, Box } from "@mui/material";
import Title from "./components/Title";
import Home from "./components/Home";
import Admin from "./components/Admin";
import About from "./components/About";
import Searchbar from "./components/Searchbar";
function Layout() {
    return (
        <>
            <Grid container>
                <Grid item xs={2.5}>
                    <Box sx={{ border: '2px solid black', height: '99vh' }}>
                        <Title/>
                        <Box sx={{border:'2px solid pink',display:'flex',flexDirection:'column',margin:'10px'}}>

                        <Home/>
                        <Admin/>
                        <About/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={9.5}>
                    <Box sx={{ border: '2px solid black', height: '8vh',display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <Searchbar/>
                    </Box>
                    <Box sx={{ border: '2px solid black', height: '90vh',overflow:'scroll' }}>
                        <Box sx={{height:'100vh'}}></Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Layout;

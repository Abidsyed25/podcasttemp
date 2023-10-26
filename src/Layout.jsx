import { Grid, Box } from "@mui/material";
import Title from "./components/Title";
import Home from "./components/Home";
import Admin from "./components/Admin";
import About from "./components/About";
import Searchbar from "./components/Searchbar";
import Homepage from "./Homepage";
import { Routes,Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import { Link } from "react-router-dom";
import {Button} from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";
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
                        <Box sx={{border:'2px solid red',display:'flex',margin:'10px'}}>

                        <Button LinkComponent={Link} to="/login" variant="contained" sx={{marginLeft:'40px',textTransform: 'none'}}>Login</Button>
                        <Button LinkComponent={Link} to="/signup" variant="outlined" sx={{marginX:'10px',textTransform: 'none'}}>Sign up</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={9.5}>
                    <Box sx={{ border: '2px solid black', height: '8vh',display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <Searchbar/>
                    </Box>
                    <Box sx={{ border: '2px solid black', height: '90vh',overflow:'scroll' }}>
                        <Routes>
                            <Route path="/" element={<Homepage/>}>
                            </Route>
                            <Route path="/main" element={<Mainpage/>}></Route>
                            <Route path="/login" element={<Login/>}></Route>
                            <Route path="/signup" element={<Signup/>}></Route>
                        </Routes>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Layout;

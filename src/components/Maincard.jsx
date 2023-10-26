import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './Maincard.css'
export default function Maincard() {
  
  return (
    
    <Card sx={{ width:'95%'}}>
      
     
        <CardMedia
          component="img"
          height="200px"
          image="podcast.jpeg"
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Box >

          <audio controls style={{backgroundColor:'none',width:'95%',marginTop:'30px'}}></audio>
          </Box>
        </CardContent>
      
    </Card>
          
  );
}

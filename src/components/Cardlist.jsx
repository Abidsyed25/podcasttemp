import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardList() {
  return (
    <Card sx={{ minWidth: '20%',margin:'15px',height:'150px'}}>
      <Link to='/main' style={{textDecoration:'none'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          image="podcast.jpeg"
          alt="green iguana"
          />
        <CardContent sx={{padding:'0px',height:'50px'}}>
          <Typography gutterBottom variant="p" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Link>
    </Card>
  );
}

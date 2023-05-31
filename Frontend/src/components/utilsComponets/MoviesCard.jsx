
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player';


export default function MoviesCard(props) {
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);

  const HandelClick = (M) => {

    return (navigate('/Movie', { state: { "M": M } }))
  }
  return (
    <div>
      <Grid container spacing={1}>
        <Card
          onClick={() => { HandelClick(props.M) }} sx={{
            width: 300, height: 360, maxHeight: 380, spacing: 1, m: 2, ':hover': {
              boxShadow: 10,
              // theme.shadows[20]
            }
          }}>
          <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >          {hover ? <ReactPlayer height={300} playing config={{ youtube: { playerVars: { disablekb: 1 } } }} url={props.M.Movie_tailers} /> : <> <CardMedia sx={{ height: 300, width: 300 }} image={props.M.Movie_image}>
          </CardMedia>

          </>
          }   </div>


          <Box sx={{ backgroundColor: '#FFF' }}>
            <Typography variant="body2" color="text.secondary">
              {props.M.name}
            </Typography>
            <p height="30px"> 3.6M  views <Rating defaultValue={props.M.Rating} fixed size="small" />
            </p>
          </Box>


        </Card>
      </Grid>
    </div>
  )
}

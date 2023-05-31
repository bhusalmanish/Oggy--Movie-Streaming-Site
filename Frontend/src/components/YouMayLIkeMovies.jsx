import React from 'react'
import MoviesCard from './utilsComponets/MoviesCard'
import Grid from '@mui/material/Grid';

import Movies from  '../Data/Movies.json'

export default function YouMayLIkeMovies() {

   const MoviesList = Movies;
  return (
    <div>
      <Grid   container spacing={2} >    
      {MoviesList.map( (M,index)=>{  return <MoviesCard  key={index} M={M}/>})}
      </Grid>
    </div>
  )
}

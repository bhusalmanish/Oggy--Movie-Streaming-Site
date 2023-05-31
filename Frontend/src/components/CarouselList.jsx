import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Movies from  '../Data/Movies.json'
import MoviesCard from './utilsComponets/MoviesCard'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };


export default function CarouselList( props) {
    const MoviesList = Movies;
  return (
    <div>
<h5>{props.Title}</h5>      <Carousel responsive={responsive}>
{MoviesList.map( (M,index)=>{  return <MoviesCard  key={index} M={M}/>})}
</Carousel>
    </div>
  )
}

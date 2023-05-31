import React from 'react'
import YouMayLIkeMovies from '../components/YouMayLIkeMovies';
import { Container } from 'react-bootstrap';
import CarouselList from '../components/CarouselList';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div>

      <Link to='/Login'>  Login </Link>
      <Link to='/Register'>  Register  </Link>
      <Link to='/Dashboard'>  Dashboard  </Link>


      <Container style={{ marginTop: "40px" }}>
        <YouMayLIkeMovies />
        <CarouselList Title={"Most views"} />
        <CarouselList Title={"Latest Movies"} />
        <CarouselList Title={"Trendings Movies"} />
        <CarouselList Title={"Most views"} />

      </Container>
    </div >
  )
}


import { Card, } from '@mui/material'
import React from 'react'

import { useNavigate } from 'react-router-dom'
export default function MoviesImageCard(props) {
  const navigate = useNavigate();
      
  const HandelClick=(M)=>{
    console.log(M)
    navigate('/Movie', {state:{ "M": M}}) 
    }

  return (
    <div>
        <Card    onClick={() => {HandelClick(props.M) }}sx={{ width:'145px', margin:"2px", ':hover': {
      boxShadow: 5,
       border : '4px solid  #ffc107 ' // theme.shadows[20]
    },}}> 
        <img style={{ height:"200px", width:"145px"}} src={props.M.Movie_image} alt="card"/>
         <center> <h5> {props.M.name}</h5></center>
        </Card>
      

    </div>
  )
}

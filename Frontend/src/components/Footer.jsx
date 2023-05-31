import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
export default function Footer() {
  return (
    <div>
        <div style={{backgroundColor: "#f5ecd2", marginTop:"10px"}}>   <center style={{ padding: "10px", justifyContent:"space-between"}}>  <FacebookIcon/> <InstagramIcon/> <YouTubeIcon/> <TwitterIcon/> </center>  </div>
    <div style={{backgroundColor:"#ffc107", height:"40px"}}>  <center> © 2020 Copyright: Oggy.Com
  </center> </div>
    </div>
  )
}

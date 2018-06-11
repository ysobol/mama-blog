import React from 'react'
import Link from 'gatsby-link'
import profile from "../images/profile.jpg";

const Body = ({ siteTitle, srclogo }) => (
    <div className='body' style={
      {
        display:'flex', 
        justifyContent:'center'
    }} >
    <div className='textContainer'>
      <h1 className='title'>Natalia Sobol</h1>     
      <p className='description'>
        профессиональный дизайнер-модельер =)     
      </p>
    </div>
    <div className='photo' style={{borderRadius:'100%'}} >
    <img src={profile} style={
        {   
          height: '350px',         
          borderRadius: '50%'
        }
      } 
        alt="profile-Natalia Sobol" 
      />    
    </div>
  </div>  
)

export default Body

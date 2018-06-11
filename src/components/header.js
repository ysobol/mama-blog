import React from 'react'
import Link from 'gatsby-link'
import logo from "../images/logo.png";

const Header = ({ siteTitle, srclogo }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div>     
      <img src={logo} style={
        {   
         height: '150px',
         margin: '30px'
        }
      } 
        alt="Logo" 
      />    
    </div>
  </div>
)

export default Header

import React from 'react'
import Link from 'gatsby-link'
import facebook from "../images/fb.png";
import google from "../images/g.png";
import linkedin from "../images/in.png";

const Footer = () => (
    <footer className='body'>
    <div style={{
      display:'flex', 
      justifyContent:'center'
    }} className='socialContainer'>
    <Link
          to="/"
          style={{            
            textDecoration: 'none',
          }}
        >
         <img src={facebook} style={
        {   
         height: '50px',
         margin: '10px'
        }
      } 
        alt="Logo" 
      />    
          
        </Link>
        <Link
          to="/"
          style={{           
            textDecoration: 'none',
          }}
        >
          <img src={google} style={
        {   
          height: '50px',
          margin: '10px'
        }
      } 
        alt="Logo" 
      />    
        </Link>
        <Link
          to="/"
          style={{           
            textDecoration: 'none',
          }}
        >
         <img src={linkedin} style={
        {   
          height: '50px',
          margin: '10px'
        }
      } 
        alt="Logo" 
      />    
        </Link>

    </div>
  </footer>   
)

export default Footer

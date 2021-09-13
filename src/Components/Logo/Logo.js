import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css' 

const Logo = () =>{
  return (
        <div className = 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" tiltMaxAngleX ='15' tiltMaxAngleY ='15' style={{ height: 150, width: 150, backgroundColor: 'darkgreen' }} >
                <div className="Tilt-inner pa3" >
                    <img style={{paddingTop :'1px'}} alt='logo' src = {brain}></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
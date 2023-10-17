import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './Brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div
      className='ma4 mt0'
      style={{
        height: '150px',
        width: '150px',
      }}
    >
      <Tilt tiltMaxAngleY={30} tiltMaxAngleX={30} className='tilt br2 shadow-2'>
        <div className='tc pa3'>
          <img src={Brain} alt='Brain icone' style={{ paddingTop: '5px' }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

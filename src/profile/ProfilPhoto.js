import React from 'react';
import taurus from './taurus.jpg'
const Photo=()=> {
  return (
    <div>
    <img src={taurus} width={320} height={500} style={{display: 'block'}} alt="photo"/>
    </div>
  );
}

export default Photo;
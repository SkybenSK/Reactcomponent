import React from 'react';
import './App.css';
import Adresse from './profile/Address.js';
import Name from './profile/FullName.js';
import Photo from './profile/ProfilPhoto.js';
import './Main.css';
const Main=()=>{
  return (
    <div className="profilContainer">
      <Name />
      <Adresse />
      <Photo />
    </div>
  );
}

export default Main;
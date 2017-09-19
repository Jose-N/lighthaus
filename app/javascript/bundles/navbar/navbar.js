import React from 'react';

const NavBar = props => {
  return (
    <div className='NavBar'>
      <div className='bottom-bar'>
        <li className="nav-button">
          <a href="/">LightHaus</a>
        </li>
        <li className="nav-button">
          <a href="/youtube">Youtube</a>
        </li>
        <li className="nav-button">
          <a href="/twitch">Twitch</a>
        </li>
        <li className="nav-button">
          <a href="/twitter">Twitter</a>
        </li>
      </div>
    </div>
  );
}; 

export default NavBar;

import React from 'react';

const NavBar = props => {
  return (
    <div className='NavBar'>
      <div className='top-bar'>
        <li className="nav-button">
          <a href="/">Home</a>
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
        {props.signed_in ?(
          <div className='user-info'>
            <li className="nav-button">
              <a href="/users/edit">{props.user.first_name}</a>
            </li>
            <li className="nav-button">
              <a data-confirm="Are you sure?" data-method="delete" href="/users/sign_out" rel="nofollow">Log Off</a>
            </li>
          </div>
        ) : (
          <div className='user-info'>
            <li className="nav-button">
              <a href="/users/sign_in">Login</a>
            </li>
            <li className="nav-button">
              <a href="/users/sign_up">Register</a>
            </li>
          </div>
        )}
      </div>
    </div>
  );
}; 

export default NavBar;

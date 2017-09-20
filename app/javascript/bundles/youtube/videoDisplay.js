import React from 'react';

const VideoDisplay = props => {
  return (
    <div className='VideoDisplay'>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.published}</p>
    </div>
  );
}; 

export default VideoDisplay;

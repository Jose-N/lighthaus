import React from 'react';

const YoutubeVideo = props => {
  let handleClick = () => { props.selectVideo(props.id) }
  return (
    <div className='youtube-video-tile'>
      <img src={props.img} />
      <h3 onClick={handleClick}>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.published}</p>
    </div>
  );
}; 

export default YoutubeVideo;

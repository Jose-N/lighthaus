import React from 'react';

const FullVideoDisplay = props => {
  return (
    <div className='FullVideoDisplay'>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.published}</p>
      <h3>Statistics</h3>
      <p>Duration: {props.duration}</p>
      <p>View Count: {props.viewCount}</p>
      <p>Like Count: {props.likeCount}</p>
      <p>Dislike Count: {props.dislikeCount}</p>
      <p>Comment Count: {props.commentCount}</p>
    </div>
  );
}; 

export default FullVideoDisplay;

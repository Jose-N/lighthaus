import React from 'react';
import { Button } from 'react-bootstrap';

const YoutubeVideoStatisticsTile = props => {
  let handleClick = () => { props.selectVideo(props.id) }
  let analyze = () => { }
  return (
    <div className='youtube-video-statistics-tile'>
      <h4>{props.order}</h4>
      <img src={props.img} />
      <h3 onClick={handleClick}>{props.title}</h3>
      <p>{props.published}</p>
      <h3>Statistics</h3>
      <p><strong>Duration:</strong> {props.duration.slice(2, props.duration.length)}</p>
      <p><strong>View Count:</strong> {props.viewCount}</p>
      <p><strong>Like Count:</strong> {props.likeCount}</p>
      <p><strong>Dislike Count:</strong> {props.dislikeCount}</p>
      <p><strong>Comment Count:</strong> {props.commentCount}</p>
      <a className="btn btn-info" href={`/youtube/comments/${props.id}`}>Analyze Comments</a>
      <h3>Description</h3>
      <p>{props.description}</p>
    </div>
  );
}; 

export default YoutubeVideoStatisticsTile;

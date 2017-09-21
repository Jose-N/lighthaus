import React from 'react';

const CommentComponent = props => {
  return (
    <div className='CommentComponent'>
      <img src={props.profile} />
      <h4>{props.name}</h4>
      <p>{props.text}</p>
      <p>Likes: {props.likeCount}</p>
      <p>Published: {props.published}</p>
    </div>
  );
}; 

export default CommentComponent;

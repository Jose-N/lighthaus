import React from 'react';

const YoutubeChannelTile = props => {
  return (
    <div className='youtube-channel-tile'>
      <div className="title-box">
        <h1><a href={`/youtube/display/${props.channelId}`}>{props.title}</a></h1>
        <img src={props.thumbnail} />
      </div>
      <br/>
      <div className="info-box">
        <p><strong>Description:</strong> {props.description}</p>
        <p><strong>View Count:</strong> {props.viewCount}</p>
        <p><strong>Subscriber Count:</strong> {props.subscriberCount}</p>
        <p><strong>Video Count:</strong> {props.videoCount}</p>
      </div>
    </div>
  );
}; 

export default YoutubeChannelTile;

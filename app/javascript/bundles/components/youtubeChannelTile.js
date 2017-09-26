import React from 'react';

const YoutubeChannelTile = props => {
  return (
    <div className='youtube-channel-tile'>
      <div className="title-box">
        <h1><a href={`/youtube/display/${props.channelId}`}>{props.title}</a></h1>
        <img src={props.thumbnail} />
      </div>
      <div className="info-box">
        <p>Description: {props.description}</p>
        <p>View Count: {props.viewCount}</p>
        <p>Subscriber Count: {props.subscriberCount}</p>
        <p>Video Count: {props.videoCount}</p>
      </div>
    </div>
  );
}; 

export default YoutubeChannelTile;

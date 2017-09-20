import React, {Component} from 'react';
import VideoDisplay from './videoDisplay';

class channelDisplay extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
  let videos = this.props.items.map(video => {
    return(
      < VideoDisplay
        key={video.id.videoId}
        id={video.id.videoId}
        img={video.snippet.thumbnails.default.url}
        title={video.snippet.title}
        description={video.snippet.description}
        published={video.snippet.publishedAt}

      />
    )
  })
  return (
    <div className="channelDisplay">
      <h1>Latest Videos</h1>
      {videos}
    </div>
  )
  }
}
export default channelDisplay;

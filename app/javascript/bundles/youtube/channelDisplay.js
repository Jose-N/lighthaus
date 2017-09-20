import React, {Component} from 'react';
import VideoDisplay from './videoDisplay';
import FullVideoDisplay from './fullVideoDisplay.js';

class channelDisplay extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedVideo: null,
      videoStats: null
    }
    this.selectVideo = this.selectVideo.bind(this)
  }

  selectVideo(id) {
    fetch(`/youtube/video/${id}`)
      .then(response => {
        if (response.ok) {
          console.log('response ok')
          return response.json()
        }else {
          let error = new Error()
          throw(error)
        }
      })
      .then( body => {
        this.setState({selectedVideo: id, videoStats:  body})
      })
      .catch(console.log('error'))
  }

  render() {
  let videos = this.props.items.map(video => {
    if (this.state.selectedVideo == video.id.videoId) {
      return(
      < FullVideoDisplay
          key={video.id.videoId}
          id={video.id.videoId}
          img={video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          description={this.state.videoStats.items[0].snippet.description}
          duration={this.state.videoStats.items[0].contentDetails.duration}
          viewCount={this.state.videoStats.items[0].statistics.viewCount}
          likeCount={this.state.videoStats.items[0].statistics.likeCount}
          dislikeCount={this.state.videoStats.items[0].statistics.dislikeCount}
          commentCount={this.state.videoStats.items[0].statistics.commentCount}
        />
      )
    }else {
      return(
        < VideoDisplay
          key={video.id.videoId}
          id={video.id.videoId}
          img={video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          description={video.snippet.description}
          published={video.snippet.publishedAt}
          selectVideo={this.selectVideo}
        />
      )
    }
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

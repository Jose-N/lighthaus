import React, {Component} from 'react';
import YoutubeVideoTile from '../components/youtubeVideoTile.js';
import YoutubeVideoStatisticsTile from '../components/youtubeVideoStatisticsTile.js';
import PieChart from '../components/piechart.js';

class YoutubeChannelStatistics extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedVideo: null,
      videoStats: null,
      data: []
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

  componentDidMount() {
    let videoIds = '';
    this.props.items.map((video, index) => {
      if (index != this.props.items.length - 1) {
        videoIds += video.id.videoId + "%2C"
      }else {
        videoIds += video.id.videoId
      }
    })
    fetch(`/youtube/charts/videos/${videoIds}`)
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
        let data = [];
        body.items.map(info => {
          data.push({label: info.snippet.title, value: info.statistics.viewCount})
        })
        this.setState({data: data})
      })
      .catch(error => console.error())
  }

  render() {
  let videos = this.props.items.map((video, number) => {
    if (this.state.selectedVideo == video.id.videoId) {
      return(
      < YoutubeVideoStatisticsTile
          key={video.id.videoId}
          order={number + 1}
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
        < YoutubeVideoTile
          key={video.id.videoId}
          id={video.id.videoId}
          order={number + 1}
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
    <div className="youtube-channel-statistics">
      <h1>Latest Videos</h1>
      < PieChart data={this.state.data}/>
      {videos}
    </div>
  )
  }
}
export default YoutubeChannelStatistics;

import React, {Component} from 'react';
import YoutubeVideoCommentTile from '../components/youtubeVideoCommentTile.js';
import CommentBarChart from '../components/barChart.js';
class YoutubeVideoComments extends Component {
  constructor(props) {
    super(props);
    this.state={
      barData: []
    }
    this.sortCommentsArray = this.sortCommentsArray.bind(this)
  }

  componentDidMount() {
    let comments = "";
    this.props.items.map((commentInfo, Index) => {
      comments = comments + commentInfo.snippet.topLevelComment.snippet.textOriginal;
    })
    comments = comments.replace(/\W/g, ' ')
    let commentsArray = comments.split(" ")
    let garbage = ["", "the", "a", "I"]
    let data = this.sortCommentsArray(commentsArray)
    this.setState({barData: data})
  }

  sortCommentsArray(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
  }

  render() {

  let commentFragments = this.props.items.map((commentInfo, i) => {
    let prefix = commentInfo.snippet.topLevelComment.snippet
    return(
      < YoutubeVideoCommentTile
        key={i}
        profile={prefix.authorProfileImageUrl}
        name={prefix.authorDisplayName}
        text={prefix.textOriginal}
        likeCount={prefix.likeCount}
        published={prefix.publishedAt}
      />
    )
  })

  return (
    <div className="youtube-video-comments">
      <CommentBarChart data={this.state.barData}/>
      <h1>Comments</h1>
      {commentFragments}
    </div>
  )
  }
}
export default YoutubeVideoComments;

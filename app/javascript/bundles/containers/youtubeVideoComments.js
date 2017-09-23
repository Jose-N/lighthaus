import React, {Component} from 'react';
import YoutubeVideoCommentTile from '../components/youtubeVideoCommentTile.js';

class YoutubeVideoComments extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {

  let commentFragments = this.props.items.map(commentInfo => {
    let prefix = commentInfo.snippet.topLevelComment.snippet
    return(
      < YoutubeVideoCommentTile
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
      <h1>Comments</h1>
      {commentFragments}
    </div>
  )
  }
}
export default YoutubeVideoComments;

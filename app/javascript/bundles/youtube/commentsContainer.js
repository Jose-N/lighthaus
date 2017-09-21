import React, {Component} from 'react';
import CommentComponent from './commentComponent.js';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {

  let commentFragments = this.props.items.map(commentInfo => {
    let prefix = commentInfo.snippet.topLevelComment.snippet
    return(
      < CommentComponent
        profile={prefix.authorProfileImageUrl}
        name={prefix.authorDisplayName}
        text={prefix.textOriginal}
        likeCount={prefix.likeCount}
        published={prefix.publishedAt}
      />
    )
  })

  return (
    <div className="CommentContainer">
      <h1>Comments</h1>
      {commentFragments}
    </div>
  )
  }
}
export default CommentContainer;

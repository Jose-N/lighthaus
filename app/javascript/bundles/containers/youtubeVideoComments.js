import React, {Component} from 'react';
import YoutubeVideoCommentTile from '../components/youtubeVideoCommentTile.js';
import CommentBarChart from '../components/barChart.js';
import { Grid, Row, PageHeader } from 'react-bootstrap';

class YoutubeVideoComments extends Component {
  constructor(props) {
    super(props);
    this.state={
      barData: [],
      showTree: false,
      showBar: false
    }
    this.sortCommentsArray = this.sortCommentsArray.bind(this)
    this.cleanGarbageWords = this.cleanGarbageWords.bind(this)
    this.toggleTreeMap = this.toggleTreeMap.bind(this)
    this.toggleBarChart = this.toggleBarChart.bind(this)
  }

  componentDidMount() {
    let comments = "";
    this.props.items.map((commentInfo, Index) => {
      comments = comments + commentInfo.snippet.topLevelComment.snippet.textOriginal;
    })
    comments = comments.replace(/\W/g, ' ')
    let commentsArray = comments.split(" ")
    let data = this.sortCommentsArray(commentsArray)
    this.cleanGarbageWords(data)
  }

  cleanGarbageWords(arr) {
    let garbage = ["", "the", "a", "i", "and", "it", "is", "to", "this", "in", "of", "that", "you", "the", "with", "me", "for", "I", "s", "t"]
    for (let i = arr[0].length - 1; i--;) {
      garbage.map(garbo => {
        if (garbo === arr[0][i].toLowerCase() || garbo === arr[0][i]) {
          console.log(arr[0][i])
          console.log(i)
          arr[0].splice(i, 1)
          arr[1].splice(i, 1)
        }
      })
    }
    console.log(arr[0])
    this.setState({barData: arr})
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

  toggleTreeMap() {
    this.setState({showTree: !this.state.showTree})
  }

  toggleBarChart() {
    this.setState({showBar: !this.state.showBar})
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

    let treeMap;
    if (this.state.showTree === true) {
      treeMap = <CommentBarChart data={this.state.barData}/>
    }

    let barChart;
    if (this.state.showBar === true) {
      barChart = <h1>Bar Chart Goes Here!</h1> 
    }

  return (
    <Grid>
      <Row className="youtube-video-comments">
        <PageHeader>Latest 100 Comments <small>frequency of unique words</small></PageHeader>
        <h3 onClick={this.toggleTreeMap}>Treemap</h3>
        {treeMap}
        <h3 onClick={this.toggleBarChart}>BarChart</h3>
        {barChart}
        <h1>Comments</h1>
        {commentFragments}
      </Row>
    </Grid>
  )
  }
}
export default YoutubeVideoComments;

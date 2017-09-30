import React, {Component} from 'react';
import { Grid, Row, PageHeader, Button, Modal } from 'react-bootstrap';
import YoutubeVideoCommentTile from '../components/youtubeVideoCommentTile.js';
import CommentBarChart from '../components/barChart.js';
import SaveTreeMap from '../containers/saveTreeMap.js';

class YoutubeVideoComments extends Component {
  constructor(props) {
    super(props);
    this.state={
      barData: [],
      showTree: false,
      showBar: false,
      showModal: false
    }
    this.sortCommentsArray = this.sortCommentsArray.bind(this)
    this.cleanGarbageWords = this.cleanGarbageWords.bind(this)
    this.toggleTreeMap = this.toggleTreeMap.bind(this)
    this.toggleBarChart = this.toggleBarChart.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
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
    let articles = ["this", "they", "them", "that"]
    for (let i = arr[0].length - 1; i--;) {
        if ( arr[0][i].length <= 3) {
          console.log(arr[0][i].length)
          console.log(i)
          arr[0].splice(i, 1)
          arr[1].splice(i, 1)
        } else {
          articles.map(article => {
            if (arr[0][i] === article) {
              arr[0].splice(i, 1)
              arr[1].splice(i, 1)
            }
          })
        }
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

  close() {
    this.setState({showModal: false})
  }

  open() {
    this.setState({showModal: true})
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
        <Button bsStyle="success" onClick={this.open}>Save Graph</Button>
        {treeMap}
        <h1>Comments</h1>
        {commentFragments}
      </Row>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Save This Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          < SaveTreeMap data={this.state.barData}/>
        </Modal.Body>
      </Modal>
    </Grid>

  )
  }
}
export default YoutubeVideoComments;

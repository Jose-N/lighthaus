import React, {Component} from 'react';
import YoutubeChannelTile from '../components/youtubeChannelTile.js'
import { Jumbotron, Form, FormGroup,FormControl, ControlLabel, Button, Grid, Row } from 'react-bootstrap';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      youtuber: "",
      results: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch(`/youtube/result/${this.state.youtuber}`, {method: "POST", body :JSON.stringify()})
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
        console.log(body) 
        this.setState({results: body})
      })
      .catch(error => console.error())
  }

  handleChange(event) {
    event.preventDefault()
    let stateName = event.target.name
    let value = event.target.value
    this.setState({[stateName]: value})
  }

  render() {
    let displayResults;
    if (this.state.results != null) {
      let prefix = this.state.results.items[0]
      displayResults = < YoutubeChannelTile
          title={prefix.snippet.title}
          thumbnail={prefix.snippet.thumbnails.default.url}
          description={prefix.snippet.localized.description}
          viewCount={prefix.statistics.viewCount}
          subscriberCount={prefix.statistics.subscriberCount}
          videoCount={prefix.statistics.videoCount}
          channelId={this.state.youtuber}
        />
    }

  return (
    <Grid>
      <Row className="index">
        <Jumbotron>
          <h1 className="title">LightHaus</h1>
          <p className="tagline">Data is good and more data is better. Let us help you find out what it is that communities around internet personalities like.</p>
        </Jumbotron>
        <hr/>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup controlId="youtuber" bsSize="lg">
            <FormControl type="text" name="youtuber"  placeholder="Youtube Channel Id" onChange={this.handleChange}/>
          </FormGroup>
          <Button type="submit" bsSize="lg" onClick={this.handleSubmitd}>
            Submit
          </Button>
        </Form>
      </Row>
      <Row className="results">
        {displayResults}
      </Row>
    </Grid>
  )
  }
}
export default Index;

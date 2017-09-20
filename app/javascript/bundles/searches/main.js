import React, {Component} from 'react';
import YoutubeDisplay from '../youtube/resultDisplay.js';

class Main extends Component {
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
      displayResults = < YoutubeDisplay
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
    <div className="Main">
      <p className="tagline">Some cool tag line about Big Data and how awesome it is. Maybe throw in something about how awesome the app is.</p>
      <hr/>
      <form id='main-seach-form' onSubmit={this.handleSubmit}> 
        <input type='text'
           name='youtuber'
           placeholder="Enter Youtuber's Channel"
           onChange={this.handleChange}
         />
        <input type='submit' value='Submit' />
      </form>
      {displayResults}
    </div>
  )
  }
}
export default Main;

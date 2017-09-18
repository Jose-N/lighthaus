import React, {Component} from 'react';

class Main extends Component {
    search(e) {
      e.preventDefault();
      key = this.props
      console.log(key)
      url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=GoogleDevelopers&fields=items(snippet(description%2Ctitle))&key='
      fetch(url + key)
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
        })
        .catch(error => console.error())
    }

  render() {
  return (
    <div className="Main">
      <p className="tagline">Some bullshit tag line about Big Data and how awesome it is. Maybe throw in something about how awesome the app is.</p>
      <hr/>
      <form id='main-seach-form'> 
        <input type='text' name='youtuber' placeholder="Enter Youtuber's Channel" />
        <input type='submit' value='Submit' onClick={this.search} />
      </form>
    </div>
  )
  }
}
export default Main;

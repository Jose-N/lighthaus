import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class EditTreeMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: "",
      description: "",
      chart_data: this.props.data
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createPayload = this.createPayload.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    let stateName = event.target.name
    let value = event.target.value
    this.setState({[stateName]: value})
    console.log(this.state)
  }

  createPayload(event) {
    event.preventDefault()
    let payload = {
      title: this.state.title,
      description: this.state.description,
      words: this.state.chart_data[0],
      word_count: this.state.chart_data[1]
    }
    this.handleSubmit(payload)
  }

  handleSubmit(payload) {
    event.preventDefault()
    fetch("/data",
      {
        method: "POST",
        credentials: "same-origin",
        body : JSON.stringify(payload),
      })
      .then(response => {
        if (response.ok) {
          console.log('response ok')
          return response.json()
        }else {
          let error = new Error(`${response.status} (${response.statusText})`)
          throw(error)
        }
      })
      .then( body => {
        console.log(body) 
        this.setState({results: body})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

  return (
    <div className="save-tree-map">
      <form className="datum" id="datum">
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            name="title"
            value=
            onChange={this.handleChange}
          />

          <ControlLabel>Description</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="description"
            value=
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit" onClick={this.createPayload}>Submit</Button>
      </form>
    </div>
  )
  }
}
export default EditTreeMap;

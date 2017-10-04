import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class EditTreeMap extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: this.props.title,
      description: this.props.description,
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
    let payload = { datum: {
        id: this.props.id,
        title: this.state.title,
        description: this.state.description
      }
    }
    this.handleSubmit(payload)
  }

  handleSubmit(payload) {
    event.preventDefault()
    let header = ReactOnRails.authenticityHeaders({'Accept': 'application/json','Content-Type': 'application/json'});
    fetch(`/data/${this.props.id}`,
      {
        method: "PATCH",
        headers: header,
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
            value={this.state.title}
            onChange={this.handleChange}
          />

          <ControlLabel>Description</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="description"
            value={this.state.description}
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

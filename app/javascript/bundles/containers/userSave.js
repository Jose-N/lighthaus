import React, {Component} from 'react';
import { Grid, Row, Modal } from 'react-bootstrap';
import TreeMap from '../components/barChart.js';
import EditTreeMap from '../containers/editTreeMap.js';

class UserSave extends Component {
  constructor(props) {
    super(props);
    this.state={
      showModal: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  close() {
    this.setState({showModal: false})
  }

  open() {
    this.setState({showModal: true})
  }

  render() {

  return (
    <Grid>
      <Row className="user-save">
        <h1>{this.props.save.title}</h1>
        <a className="btn btn-success"
          onClick={this.open}
        >
          Edit
        </a>
        <h4>Description: {this.props.save.description}</h4>

        <p>WUBBA LUBBA DUBB</p>
        <TreeMap data={[this.props.save.words, this.props.save.word_count]} />
      </Row>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edit This Save</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTreeMap
            id={this.props.save.id}
            title={this.props.save.title}
            description={this.props.save.description}
           />
        </Modal.Body>
      </Modal>
    </Grid>
  )
  }
}
export default UserSave;

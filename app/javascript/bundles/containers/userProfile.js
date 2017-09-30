import React, {Component} from 'react';
import { Grid, Row, Modal } from 'react-bootstrap';
import SaveTile from '../components/saveTile.js';
import SaveTreeMap from '../containers/saveTreeMap.js';
import EditTreeMap from '../containers/editTreeMap.js';

class UserProfile extends Component {
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
    let savesFragment
    if (this.props.saves.length > 0) {
      savesFragment = this.props.saves.map((save, index) => {
        return(
          <SaveTile
            key={index}
            saveId={save.id}
            title={save.title}
            description={save.description}
            open={this.open}
          />
        )
      })
    }else {
      savesFragment = <p>You Have No Saves</p>
    }

  return (
    <Grid>
      <Row className="user-profile">
        <h1> Hi, {this.props.user.first_name} </h1>
        <a className="btn btn-info" href="/users/edit">Edit Your Account</a>

        <h1>Here is a list of your saved graphs</h1>
        {savesFragment}
      </Row>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edit This Save</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTreeMap
           />
        </Modal.Body>
      </Modal>
    </Grid>
  )
  }
}
export default UserProfile;

import React, {Component} from 'react';
import { Grid, Row } from 'react-bootstrap';
import SaveTile from '../components/saveTile.js';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
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
    </Grid>
  )
  }
}
export default UserProfile;

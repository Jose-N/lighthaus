import React, {Component} from 'react';
import { Grid, Row } from 'react-bootstrap';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    let savesFragment = this.props.saves.map(save => {
      return(
        <h4><a href={`/data/${save.id}`}>{save.title}</a></h4>
      )
    })

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

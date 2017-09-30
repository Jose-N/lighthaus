import React, {Component} from 'react';
import { Grid, Row } from 'react-bootstrap';
import TreeMap from '../components/barChart.js';

class UserSave extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {

  return (
    <Grid>
      <Row className="user-save">
        <h1>{this.props.save.title}</h1>
        <h4>Description: {this.props.save.description}</h4>

        <h1>Heres your fucking chart</h1>
        <p>WUBBA LUBBA DUBB</p>
        <TreeMap data={[this.props.save.words, this.props.save.word_count]} />
      </Row>
    </Grid>
  )
  }
}
export default UserSave;

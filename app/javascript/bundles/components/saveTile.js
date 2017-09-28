import React from 'react';
import { Panel } from 'react-bootstrap';

const SaveTile = props => {
  return (
    <Panel>
      <h4><a href={`/data/${props.saveId}`}>{props.title}</a></h4>
      <p>{props.description}</p>
      <a className="btn btn-success" href="#">Edit</a>
      <a className="btn btn-warning" href="#">Delete</a>
    </Panel>
  );
}; 

export default SaveTile;

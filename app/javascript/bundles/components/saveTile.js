import React from 'react';
import { Panel } from 'react-bootstrap';

const SaveTile = props => {
  return (
    <Panel>
      <h4><a href={`/data/${props.saveId}`}>{props.title}</a></h4>
      <p>{props.description}</p>
      <a className="btn btn-danger"
        data-confirm="Are you sure?"
        data-method="delete"
        href={`/data/${props.saveId}`}
       >
         Delete
       </a>
    </Panel>
  );
}; 

export default SaveTile;

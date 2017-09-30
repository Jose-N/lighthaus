import React from 'react';
import { Panel } from 'react-bootstrap';

const SaveTile = props => {
  let handleOpen = () => { props.open()}
  let handleClose = () => { props.close()}
  return (
    <Panel>
      <h4><a href={`/data/${props.saveId}`}>{props.title}</a></h4>
      <p>{props.description}</p>
      <a className="btn btn-success"
        onClick={handleOpen}
       >
         Edit
       </a>
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

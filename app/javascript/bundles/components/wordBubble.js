import React from 'react';
import { format } from 'd3-format';
import { scaleOrdinal, schemeCategory20c } from 'd3-scale';
import { pack } from 'd3-hierarchy';

const WordBubble = props => {
  const width = 960;
  const height = 960;

  const bubbleFormat = format(",d");

  const color = scaleOrdinal(schemeCategory20c)

  const bubblePack = pack()
    .size([width, height])
    .padding(1.5);

  return (
    <div className='word-bubble'>
    </div>
  );
}; 

export default WordBubble;

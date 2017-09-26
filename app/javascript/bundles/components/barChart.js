import React, {Component} from 'react';
import { BarChart } from 'react-d3';
import { Treemap } from 'react-d3';

class CommentBarChart extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: []
    }
    this.formatCommentsArray = this.formatCommentsArray.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    let formattedData = this.formatCommentsArray(nextProps.data)
    this.setState({data: formattedData})
  }

  formatCommentsArray(arr) {
    let barDataFormated = [
    ]
 
    for (let i = 0; i < arr[0].length; i++){
      let series = {label: arr[0][i], value: arr[1][i]}
      barDataFormated.push(series)
    }
    return barDataFormated
  }

  render() {
    let bar;
    if (this.state.data.length != 0) {
      bar = 
        <Treemap
          data={this.state.data}
          width={2000}
          height={2000}
          textColor="#484848"
          fontSize="12px"
          title="Treemap"
          hoverAnimation={true}
      />
    }

  return (
    <div className="comment-bar-chart">
      <h1>bar chart goes here</h1>
      {bar}
    </div>
  )
  }
}
export default CommentBarChart;

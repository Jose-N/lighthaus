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

  componentDidMount() {
    debugger
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
          width={1000}
          height={5000}
          textColor="#484848"
          fontSize="12px"
          title="Comments"
          hoverAnimation={true}
      />
    }else { bar = <h5>Something went wrong with making the tree</h5>}

  return (
    <div className="comment-bar-chart">
      {bar}
    </div>
  )
  }
}
export default CommentBarChart;

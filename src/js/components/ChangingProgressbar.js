import React from 'react'
import CircularProgressbar from 'react-circular-progressbar';

export default class ChangingProgressbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPercentageIndex: 0,
    };
  }


  componentDidMount() {


/*
    let interval = setInterval(() => {
      console.log((this.state.currentPercentageIndex + 1) % this.props.percentages.length)
      this.setState({
        currentPercentageIndex: (this.state.currentPercentageIndex + 1) % this.props.percentages.length
      });
    }, 500);
*/


  }

  render() {

    return <CircularProgressbar {...this.props} percentage={this.props.percentages[this.state.currentPercentageIndex]} />;
  }
}
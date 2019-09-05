import React from 'react';
import moment from "moment";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentDate: moment().format('dddd MMMM Do YYYY'),
      currentTime: moment().format('h:mm:ss a')
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      currentDate: moment().format('dddd MMMM Do YYYY'),
      currentTime: moment().format('h:mm:ss a')
    }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        {this.state.currentDate}<br/>
        {this.state.currentTime}
      </>
    )
  }

}


export default Home;

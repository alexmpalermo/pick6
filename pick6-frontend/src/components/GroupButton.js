import React from 'react'

class GroupButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? '' : 'FAVORITE'}
      </button>
    );
  }
}

export default GroupButton


// // thinking in react
// // the promise of a burger party

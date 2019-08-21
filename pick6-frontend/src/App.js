import React from 'react';
import './App.css';
import Login from './components/Login.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hello i'm react</h1>
        <Login />
      </div>
    );
  }
}

componentDidMount() {
  this.props.getCurrentUser()
}

export default connect(null, { getCurrentUser })(App);

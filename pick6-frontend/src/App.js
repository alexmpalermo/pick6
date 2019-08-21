import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hello i'm react</h1>
        {this.props.currentUser ? null : <Login />}
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);

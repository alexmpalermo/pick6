import React from 'react';
import './App.css';
import Login from './components/Login.js'

class App extends React.Component {

//  componentDidMount() {
//    fetch("http://localhost:3000/api/v1/users/1")
//    .then(r => r.json())
//    .then(console.log)
//  }

  render() {
    return (
      <div className="App">
        <h1>Hello i'm react</h1>
        <Login />
      </div>
    );
  }
}

export default App;

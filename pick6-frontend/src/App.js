import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Login from './components/Login.js'
import Navbar from './components/Navbar.js'
import UserShow from './components/UserShow.js'
import Home from './components/Home.js'
import Groups from './components/Groups.js'
import GroupShow from './components/GroupShow.js'
import Signup from './components/Signup.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, groups, currentUser } = this.props
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={()=> loggedIn ? <UserShow /> : <Home/>} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/groups' component={Groups} />
          <Route exact path='/groups/:id' render={props => {
              const group = groups.find(group => group.id === props.match.params.id)
              console.log(groups)
              console.log(group)
              return <GroupShow group={group} {...props}/>
            }
          }/>
        </Switch>
      </div>
    );
  }
}
//
const mapStateToProps = state => {
  return {
    currentUser: state.current_user,
    loggedIn: !!state.currentUser,
    groups: state.myGroups
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

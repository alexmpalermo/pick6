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
import Weeks from './components/Weeks.js'
import GroupShow from './components/GroupShow.js'
import GroupCodeShow from './components/GroupCodeShow.js'
import Signup from './components/Signup.js'
import NewGroupForm from './components/NewGroupForm.js'
import EditGroupForm from './components/EditGroupForm.js'
import JoinGroup from './components/JoinGroup.js'
import WeekShow from './components/WeekShow.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, groups, currentUser, weeks } = this.props
    return (
      <div className="App">
        <Navbar location={this.props.location}/>
        <Switch>
          <Route exact path='/' render={(props)=> loggedIn ? <UserShow {...props}/> : <Home {...props}/>} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/groups' component={Groups} />
          <Route exact path='/groups/join' render={props => <JoinGroup {...props} />}/>
          <Route exact path='/groups/new' component={NewGroupForm} />
          <Route exact path='/groups/:id' render={props => {
              const group = groups.find(group => group.id === props.match.params.id)
              return <GroupShow group={group} {...props}/>
            }
          }/>
          <Route exact path='/groups/:id/edit' render={props => {
              const group = groups.find(group => group.id === props.match.params.id)
              return <EditGroupForm group={group} {...props}/>
            }
          }/>
          <Route exact path='groups/:id/weeks' component={Weeks} />
          <Route exact path='groups/:id/weeks/:id' render={props => {
              console.log("props in app...", props)
              console.log("weeks in app...", weeks)
              const week = weeks.find(week => week.id === props.match.params.id)
              console.log("week in app...", week)
              return <WeekShow week={week} {...props}/>
            }
          }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.current_user,
    loggedIn: !!state.currentUser,
    groups: state.myGroups,
    weeks: state.myWeeks
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

import React from 'react';
import { Link } from 'react-router-dom'
import Login from './Login.js'
import Signup from './Signup.js'



const Home = () => (
  <div>
    <span>
      <p><Link to="/signup">Sign Up</Link></p> or <p><Link to="/login">Log In</Link></p>
    </span>
  </div>

);

export default Home;

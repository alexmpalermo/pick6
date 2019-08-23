import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
  <div>
    <span>
      <p>Sign Up</p> or <p><Link to="/login">Log In</Link></p>
    </span>
  </div>

);

export default Home;

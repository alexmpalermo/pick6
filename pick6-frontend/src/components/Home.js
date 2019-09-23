import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <br/><br/>
    <h2 className="home-desc">The football spreadsheet platform for weekly bets against friends!</h2>
    <span>
      <br/><br/><br/>
      <p id="signlog-button"><Link to="/signup">Sign Up</Link></p> <p className="or">-or-</p> <p id="signlog-button"><Link to="/login">Log In</Link></p>
    </span>
  </div>

);

export default Home;

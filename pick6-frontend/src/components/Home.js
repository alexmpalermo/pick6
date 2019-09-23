import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <br/><br/>
    <h2 className="home-desc">The football spreadsheet platform for weekly bets against friends!</h2>
    <br/><br/><br/>
    <p className="signlog-button"><Link className="signlog-button-link" to="/signup">Sign Up</Link></p> <p className="or">-or-</p> <p className="signlog-button"><Link className="signlog-button-link" to="/login">Log In</Link></p>
  </div>

);

export default Home;

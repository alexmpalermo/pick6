import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h3>The football spreadsheet platform for weekly bets against friends</h3>
    <span>
      <p><Link to="/signup">Sign Up</Link></p> or <p><Link to="/login">Log In</Link></p>
    </span>
    <footer>
      This app is not affiliated with, funded by, or in any way associated with the NFL.
    </footer>
  </div>

);

export default Home;

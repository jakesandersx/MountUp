// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';
import HomeIcon from '../icons/general/hcac.svg'; // Import the image
import NavigationSports from './NavigationSports';
import NavigationTeams from './NavigationTeams';

function Navigation() {
  const [sportsTableVisible, setSportsTableVisible] = useState(false);
  const [teamsTableVisible, setTeamsTableVisible] = useState(false);

  return (
      <nav className="navbar">
        <ul className='nav-link-list'>
          <li><Link className='nav-link' to="/about">About</Link></li>
          <li><Link className='nav-link' to="/contact">Contact</Link></li>

          <li className='nav-dropdown' onMouseEnter={() => setSportsTableVisible(true)} onMouseLeave={() => setSportsTableVisible(false)}>
            <span className='nav-dropdown-title'>Sports</span>
            <NavigationSports visible={sportsTableVisible}/>
          </li>
          <li className='nav-dropdown' onMouseEnter={() => setTeamsTableVisible(true)} onMouseLeave={() => setTeamsTableVisible(false)}>
            <span className='nav-dropdown-title'>Teams</span>
            <NavigationTeams visible={teamsTableVisible}/>
          </li>
          <li className="home-icon">
            <Link to="/">
              <img src={HomeIcon} alt="Home" />
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;

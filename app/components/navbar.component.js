import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.svg';
// import './navbar.component.less';

const NavbarComponent = (props) => {

  return (
    <nav className="navbar-client">
     <div className="navbar-container">
        <Link className="navbar-brand" to="/"><img className="navbar__brand-logo" src={logo}/></Link>
        <ul className="navbar__links-list">
          <li className="navbar__links__list-item"><NavLink to="/about">About</NavLink></li>
          <li className="navbar__links__list-item"><NavLink to="/about">Projects</NavLink></li>
          <li className="navbar__links__list-item"><a href="#"><FontAwesomeIcon icon={faEnvelope}/></a></li>
          <li className="navbar__links__list-item"><a href="#"><FontAwesomeIcon icon={faPhone}/></a></li>
        </ul>
     </div>
    </nav>
  )
}

export default NavbarComponent;

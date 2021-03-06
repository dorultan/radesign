import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import './navbar.component.less';

const NavbarComponent = (props) => {

  return (
    <nav className={`navbar-client ${props.backgroundColor ? 'navbar-colored' : ''} ${props.navbarRelative ? "navbar-relative" : ''}`}>
     <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.43 102.8">
            <title>logo</title>
            <path className="cls-1" d="M905.4,457.72h-6.06V452A12.84,12.84,0,0,1,905.4,457.72Z" transform="translate(-830.5 -452)"/>
            <path className="cls-1" d="M904.34,466.22a12.83,12.83,0,1,1-7.54-11.68v5.71a8,8,0,1,0,2.69,6,7.94,7.94,0,0,0-2.69-6h6.05A12.74,12.74,0,0,1,904.34,466.22Z" transform="translate(-830.5 -452)"/>
            <path className="cls-1" d="M903,500.94a4.9,4.9,0,1,1-.82-5.84A4.9,4.9,0,0,1,903,500.94Z" transform="translate(-830.5 -452)"/>
            <path className="cls-1" d="M903.89,519.28l8.48,3.91h-18.6l-13.26-6.43v6.43H871V502.35a20.82,20.82,0,1,1,41.29,3.74,4.89,4.89,0,0,0-7.63.25,12.83,12.83,0,1,0-17.45,5.24h0l1.52.7Z" transform="translate(-830.5 -452)"/>
            <path className="ra" d="M830.5,534.35h5v2h.3a3.53,3.53,0,0,1,3.23-2.24,3.62,3.62,0,0,1,1.53.35v4.48a6.75,6.75,0,0,0-2.42-.57c-1.54,0-2.61,1.21-2.61,3v6.9h-5Z" transform="translate(-830.5 -452)"/>
            <path className="ra" d="M841.25,544.59c0-2.69,2.19-4.12,6.74-4.74l2.43-.3v-.62a1.66,1.66,0,0,0-1.84-1.72,1.76,1.76,0,0,0-1.88,1.88h-4.88c0-3.09,2.67-5.09,6.82-5.09s6.84,2,6.84,5.12v9.14h-5.06v-1.65h-.27a4.86,4.86,0,0,1-4.26,2C843.14,548.58,841.25,547.12,841.25,544.59Zm9.17-1.53v-.84l-2.24.32c-1.48.19-2.08.76-2.08,1.57s.65,1.42,1.76,1.42A2.43,2.43,0,0,0,850.42,543.06Z" transform="translate(-830.5 -452)"/>
            <path className="design" d="M857.13,541.3c0-4.42,2.51-7.3,6.15-7.3a4.73,4.73,0,0,1,4,2h.27v-7.82h5v20.11h-5v-1.62h-.27a4.64,4.64,0,0,1-4,2C859.61,548.61,857.13,545.78,857.13,541.3Zm10.67,0a2.81,2.81,0,1,0-2.8,3.08A2.87,2.87,0,0,0,867.8,541.3Z" transform="translate(-830.5 -452)"/>
            <path className="design" d="M874.44,541.25c0-4.42,3.23-7.25,7.84-7.25s7.6,2.86,7.6,7.3a10.93,10.93,0,0,1-.08,1.38H879.64a2.82,2.82,0,0,0,2.86,2.45,2.65,2.65,0,0,0,2.5-1.51l4.34.78c-.7,2.62-3.56,4.21-7.11,4.21C877.62,548.61,874.44,545.72,874.44,541.25ZM884.79,540a2.68,2.68,0,0,0-2.62-2.5,2.63,2.63,0,0,0-2.58,2.5Z" transform="translate(-830.5 -452)"/>
            <path className="design" d="M891.13,543.67h4.28c0,1.19,1,2,2.61,2,1.19,0,2-.51,2-1.34,0-1-1.18-1.16-2.64-1.3-2.5-.24-6.19-.46-6.19-4.31,0-2.94,2.61-4.77,6.57-4.77s6.71,1.81,6.71,4.66H900c0-1-.95-1.61-2.24-1.61-1.13,0-1.94.51-1.94,1.26,0,1,1.65,1.11,3.5,1.32,2.54.27,5.72.89,5.72,4.18,0,3.1-2.72,5-7.14,5C893.74,548.71,891.13,546.8,891.13,543.67Z" transform="translate(-830.5 -452)"/>
            <path className="design" d="M906.63,530.07a2.87,2.87,0,1,1,2.85,2.77A2.7,2.7,0,0,1,906.63,530.07Zm.35,4.28h5v13.91h-5Z" transform="translate(-830.5 -452)"/>
            <path className="design" d="M914,549.71l4.85-.67A2.63,2.63,0,0,0,921.5,551a2.74,2.74,0,0,0,2.86-3v-1.43h-.27a5.06,5.06,0,0,1-4,1.8c-3.64,0-6.14-2.72-6.14-7.06,0-4.6,2.47-7.27,6.11-7.27a5,5,0,0,1,4.26,2.05h.27v-1.73h4.85v13.83c0,4.2-2.94,6.62-7.65,6.62C917.38,554.8,914.47,553,914,549.71Zm10.62-8.41a2.82,2.82,0,1,0-5.61,0,2.81,2.81,0,1,0,5.61,0Z" transform="translate(-830.5 -452)"/>
            <path className="design" d="M931.8,534.35h5v2h.27c1.11-1.62,2.27-2.37,3.91-2.37,2.88,0,4.9,2.34,4.9,5.55v8.68h-5v-7.74a2,2,0,0,0-1.95-2.26,2.17,2.17,0,0,0-2.1,2.34v7.66h-5Z" transform="translate(-830.5 -452)"/>
          </svg>
        </Link>
        <ul className="navbar__links-list">
          <li className="navbar__links__list-item"><NavLink to="/info">Info</NavLink></li>
          <li className="navbar__links__list-item"><NavLink to="/projects">Projects</NavLink></li>
          <li className="navbar__links__list-item"><a target="_blank" href="mailto:raul.cirt1993@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a></li>
          <li className="navbar__links__list-item"><a target="_blank" href="tel:+40725640513"><FontAwesomeIcon icon={faPhone}/></a></li>
        </ul>
     </div>
    </nav>
  )
}

export default NavbarComponent;

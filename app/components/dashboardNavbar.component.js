import React from 'react';
import {NavLink} from 'react-router-dom';
import Breadcrumbs from './breadCrumbsComponent';
import {Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import './dashboardNavbar.less';

const DashboardNavComponent = (props) => {
  return (
     <nav className="dashboard_nav">
			 <button type="button" onClick={props.logOut} className="btn btn-default">Log out</button>
     </nav>
  )
}




export default DashboardNavComponent;

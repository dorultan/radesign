import React from 'react';
import {NavLink} from 'react-router-dom';
import Breadcrumbs from './breadCrumbsComponent';
import {Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import './dashboardNavbar.less';

class Customtoggle extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {

		this.props.onClick(e);
	}

	render() {
		return (
				<FontAwesomeIcon icon={faSortDown} size="lg" onClick={this.handleClick}/>
		)
	}
}

const DashboardNavComponent = (props) => {
  return (
     <header className="dashboard__header">
      <nav className="dashboard__header-nav">
        <Breadcrumbs {...props}/>
        <div className="dashboard__header__nav-user">
            <div className="dashboard__header__nav__user-image">
              <img src={`${window.origin}`} alt="user image."/>
            </div>
           <Dropdown >
             <Dropdown.Toggle as={Customtoggle}></Dropdown.Toggle>

             <Dropdown.Menu>
                 <NavLink className="dropdown-item" to="/dashboard/settings">Settings</NavLink>
                 <Dropdown.Item href="#" onClick={() => {props.logout()}}>Log out</Dropdown.Item>
             </Dropdown.Menu>
         </Dropdown>
        </div>
      </nav>
     </header>
  )
}




export default DashboardNavComponent;

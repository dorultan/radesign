import React,{Component} from 'react';
import isAuthenticated from '../hooks/isAuthenticated';
import Dashboard from '../components/dashboard.component';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dashboard {...this.props}/>
    )
  }
}


export default isAuthenticated(DashboardContainer);

import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
// import DashboardNavComponent from './dashboardNavbar.component';
import './dashboard.less';

const Dashboard = (props) => {
  return (
    <main className="dashboard">
     <aside className="sidebar">
       <div className="sidebar-header">
         <h3>Portfolio</h3>
       </div>
       <ul className="sidebar-nav">
         <li><Link to="/dashboard/projects">Projects</Link></li>
       </ul>
     </aside>
     <section className="dashboard-section">
       <Switch>
         {
           props.routes.map(({path, component, exact}, key) => {
             let C = component;
             return <Route key={key} path={path} exact={exact} component={C}/>
           })
         }
         <Route>
           <h1>Nothing was routed</h1>
         </Route>
       </Switch>
     </section>
    </main>
  )
}

export default Dashboard;

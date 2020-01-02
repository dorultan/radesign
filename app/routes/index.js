import Home from '../containers/home.container';
import Login from '../containers/login.container';
import DashboardContainer from '../containers/dashboard.container';
import Project from '../containers/project.container';
import Projects from '../containers/projects.container';
import Galery from '../containers/galery.container';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },

  {
    path: '/login',
    exact: true,
    component: Login
  },

  {
    path: '/dashboard',
    exact: false,
    component: DashboardContainer,
    routes: [
      {
        path: '/dashboard/projects',
        component: Projects,
        exact: true
      },

      {
        path: '/dashboard/projects/add',
        component: Project,
        exact: true
      },

      {
        path: '/dashboard/projects/edit/:project_id',
        component: Project,
        exact: true
      },

      {
        path: '/dashboard/projects/view/:project_id',
        component: Galery,
        exact: true
      }
    ]
  }

];

export default routes;

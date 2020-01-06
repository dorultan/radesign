import Home from '../containers/home.container';
import Login from '../containers/login.container';
import DashboardContainer from '../containers/dashboard.container';
import Project from '../containers/project.container';
import Projects from '../containers/projects.container';
import Galery from '../containers/galery.container';
import ProjectView from '../containers/projectView.container';
import InfoComponent from '../components/info.component';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/projects',
    component: Home,
    exact: true
  },
  {
    path: '/info',
    component: InfoComponent,
    exact: true
  },
  {
    path: '/projects/:uid',
    exact: true,
    component: ProjectView
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
        path: '/dashboard/projects/edit/:uid',
        component: Project,
        exact: true
      },

      {
        path: '/dashboard/projects/view/:uid',
        component: Galery,
        exact: true
      }
    ]
  }

];

export default routes;

import React from 'react';
import loadable from '@loadable/component';

// import Home from '../containers/home.container';
// import Login from '../containers/login.container';
// import DashboardContainer from '../containers/dashboard.container';
// import Project from '../containers/project.container';
// import Projects from '../containers/projects.container';
// import Galery from '../containers/galery.container';
// import ProjectView from '../containers/projectView.container';
// import InfoComponent from '../components/info.component';

const Home = loadable(() => import('../containers/home.container'));
const Login = loadable(() => import('../containers/login.container'));
const DashboardContainer = loadable(() => import('../containers/dashboard.container'));
const Project = loadable(() => import('../containers/project.container'));
const Projects = loadable(() => import('../containers/projects.container'));
const Galery = loadable(() => import('../containers/galery.container'));
const ProjectView = loadable(() => import('../containers/projectView.container'));
const InfoComponent = loadable(() => import('../components/info.component'));

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

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import {Store} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import App from './components';
import { loadableReady } from '@loadable/component';

import routes from './routes';
const history = require('history').createBrowserHistory;
const initState = window.__INIT_STATE__;
delete window.__INIT_STATE__;
const store = createStore(rootReducer, initState, applyMiddleware(reduxPromise, thunk));
// Fix server slide matching element.
const render = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const Client = (props) => {
  const C = props.component;
  return (
    <main className="client">
      <C {...props}/>
    </main>
  )
}

const RenderComponent = ({route}) => {
  if(!route.path.includes('/dashboard')) {

    return (
      <Route path={route.path} exact={route.exact} render={(props) => {
          const C = route.component;

          return (
            <Client {...props} component={route.component}/>
          )

        }}/>
    )
  }
  else {
    let C = route.component;
    return (
      <Route path={route.path} exact={route.exact} routes={route.routes} render={(props) => {
          return <C routes={route.routes} {...props}/>
        }}/>
    )
  }
}

loadableReady().then(() => {

  render(
  <Provider store={store}>
   <Router history={history()}>
     <App>
       {
         routes.map((route, key) => {
           return (
             <RenderComponent key={key} route={route}/>
           )
         })
       }
     </App>
   </Router>
  </Provider>, document.getElementById('root'));
})

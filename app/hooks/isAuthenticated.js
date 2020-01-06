import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isAuthenticated, logOut, getUser} from '../actions';

const bindActionCreatorsToProps = (dispatch) => {
  return bindActionCreators({
    isAuthenticated,
    logOut,
    getUser
  }, dispatch)
};

const mapStateToProps = ({isAuthenticated, user}) => {

  return {authenticated: isAuthenticated, user}
}

export const IsAuthenticated = (ChildComponent) => {

  class _isAuthenticated extends React.Component {
    constructor(props) {
      super(props);

    }

    componentDidUpdate() {

      if(this.props.authenticated && !this.props.user) {

        this.props.getUser();
      }

    }

    componentDidMount() {
      this.props.isAuthenticated();
      this.props.getUser();
    }

    render() {

      if(this.props.authenticated === null) {
        return <h1>Checking if you're logged in ...</h1>
      }
      else if(this.props.authenticated && !this.props.user) {
        return <h1>Getting info about your profile ...</h1>
      }

      else if(this.props.authenticated || this.props.user) {
        return <ChildComponent {...this.props}/>
      }
      else {
        return <Redirect to="/"/>
      }
    }
  }

  return connect(mapStateToProps, bindActionCreatorsToProps)(_isAuthenticated)
}

export default IsAuthenticated;

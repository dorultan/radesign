import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isAuthenticated} from '../actions';

const bindActionCreatorsToProps = (dispatch) => {
  return bindActionCreators({
    isAuthenticated
  }, dispatch)
};

const mapStateToProps = ({isAuthenticated}) => {

  return {authenticated: isAuthenticated}
}

export const IsAuthenticated = (ChildComponent) => {

  class _isAuthenticated extends React.Component {
    constructor(props) {
      super(props);

    }

    componentDidMount() {
      this.props.isAuthenticated();
    }

    render() {
      if(this.props.authenticated === null) {
        return <h1>Checking if you're logged in ...</h1>
      }

      else if(this.props.authenticated) {
        return <ChildComponent {...this.props}/>
      }
      else {
        return <Redirect to="/login"/>
      }
    }
  }

  return connect(mapStateToProps, bindActionCreatorsToProps)(_isAuthenticated)
}

export default IsAuthenticated;

import React,{Component} from 'react';
import Login from '../components/login.component';
import {bindActionCreators} from 'redux';
import {login, isAuthenticated} from '../actions';
import {connect} from 'react-redux';

class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {

    if(this.props.user || this.props.authenticated) {
      this.props.history.push('/dashboard');
    }
    
  }

  componentDidMount() {
    this.props.isAuthenticated();

    if(this.props.authenticated) {
      this.props.history.push('/dashboard');
    }

  }
  render() {

    return (
      <Login {...this.props}/>
    )
  }
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({login, isAuthenticated}, dispatch);
}

const mapStateToProps = ({user, isAuthenticated}) => {
  // console.log(isAuthenticated)
  return {
    user,
    authenticated: isAuthenticated
  }
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(LoginContainer);

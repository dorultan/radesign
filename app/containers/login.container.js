import React,{Component} from 'react';
import Login from '../components/login.component';
import {bindActionCreators} from 'redux';
import {login} from '../actions';
import {connect} from 'react-redux';

class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Login {...this.props}/>
    )
  }
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({login}, dispatch);
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(LoginContainer);

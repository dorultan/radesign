import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProjects} from '../actions';
import HomeComponent from '../components/home.component';
import LoadingComponent from '../components/loading.component';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

    this.props.fetchProjects();
  }

  render() {

    if(!this.props.projects) {
      return (
        <LoadingComponent/>
      )
    }
    else if(!this.props.projects.length) {
      return (
        <LoadingComponent/>
      )
    }
    else {
      return (

        <HomeComponent {...this.props}/>

      )
    }
  }
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({fetchProjects}, dispatch)
}

const mapStateToProps = ({projects}) => {
  return {
    projects
  }
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(Home);

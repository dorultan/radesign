import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProject} from '../actions';
import ProjectViewComponent from '../components/projectView.component';

class ProjectView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.project_id;
    
    this.props.fetchProject(id);
  }

  render() {
    return (
        <ProjectViewComponent {...this.props}/>
    )
  }
}

const mapStateToProps = ({project}) => {

  return {project};
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({
    fetchProject
  }, dispatch);
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(ProjectView);

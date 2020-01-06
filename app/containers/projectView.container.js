import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProject, fetchProjects} from '../actions';
import ProjectViewComponent from '../components/projectView.component';
import LoadingComponent from '../components/loading.component';

class ProjectView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      next: null,
      previous: null,
      nextPrev: false
    }

  }

  componentDidUpdate() {
    let current_idx;

    if(
      !this.state.nextPrev &&
      this.props.projects &&
      this.props.project &&
      this.props.match.params.uid === this.props.project.uid) {

      current_idx = this.props.projects.findIndex((item) => {
        return item._id === this.props.project._id;
      });

      this.setState({
        next: current_idx + 1 === this.props.projects.length ? null : this.props.projects[current_idx + 1],
        previous: current_idx -1 === -1 ? null : this.props.projects[ current_idx -1],
        nextPrev: true
      })
    }

    if(this.props.project &&
      this.props.project.uid !== this.props.match.params.uid &&
      this.state.nextPrev) {
        
      this.props.fetchProject(this.props.match.params.uid);
      this.setState({
        next: null,
        previous: null,
        nextPrev: false
      })
    }
  }

  componentDidMount() {
    const uid = this.props.match.params.uid;
    this.props.fetchProject(uid);

    if(!this.props.projects) {
      this.props.fetchProjects();
    }
  }

  render() {

    if(!this.state.nextPrev) {
      return (
        <LoadingComponent {...this.props}/>
      )
    }
    else {
      return (
        <ProjectViewComponent {...this.props} next={this.state.next} previous={this.state.previous}/>
      )
    }
  }
}

const mapStateToProps = ({project, projects}) => {

  return {project: project, projects: projects};
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({
    fetchProject,
    fetchProjects
  }, dispatch);
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(ProjectView);

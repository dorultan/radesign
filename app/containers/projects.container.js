import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProjects, deleteProject, reorderProject} from '../actions';
import ProjectsComponent from '../components/projects.component';
import {reorder} from 'react-reorder';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: null
    }
    this.onReorder = this.onReorder.bind(this);
    this.state = {
      orderedItems: null
    }
  }

  onReorder(event, previousIndex, nextIndex, fromId, toId) {
    this.setState({
      orderedItems: reorder(this.state.orderedItems, previousIndex, nextIndex)
    })
    console.log(previousIndex, nextIndex)
    this.props.reorderProject(this.props.projects[previousIndex].uid, nextIndex);
  }

  componentDidUpdate() {

    if(this.props.projects && !this.state.orderedItems || this.props.projects.length !== this.state.orderedItems.length) {
      this.setState({
        orderedItems: this.props.projects
      })

    }
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {

    if(this.state.orderedItems === null) {
      return (
        <h1>Loading projects ...</h1>
      )
    }

    else if(!this.state.orderedItems.length) {
      return (
        <h1>Didn't find any projects.</h1>
      )
    }

    else {
      return (
        <ProjectsComponent {...this.props} orderedItems={this.state.orderedItems} onReorder={this.onReorder}/>
      )
    }
  }
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({
    fetchProjects,
    deleteProject,
    reorderProject
  }, dispatch)

}

const mapStateToProps = ({projects}) => {
  return {
    projects
  }
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(Projects);

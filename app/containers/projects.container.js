import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProjects, deleteProject} from '../actions';
import ProjectsComponent from '../components/projects.component';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: null
    }

    this.createGrid = this.createGrid.bind(this);
  }

  createGrid() {
    let grid = [[], [], []];

    this.props.projects.forEach((project, idx) => {

      if(grid[idx]) {
        grid[idx].push(project);
      }
      else {
        grid[idx % 3].push(project);
      }
    })

    return grid;
  }

  componentDidUpdate() {
    let grid;

    if(this.props.projects && !this.state.grid || this.state.grid && this.state.grid.flat().length !== this.props.projects.length) {
      grid = this.createGrid();
      this.setState({
        grid: grid
      })

    }
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {

    if(this.state.grid === null) {
      return (
        <h1>Loading projects ...</h1>
      )
    }

    else if(!this.state.grid.length) {
      return (
        <h1>Didn't find any projects.</h1>
      )
    }

    else {
      return (
        <ProjectsComponent {...this.props} grid={this.state.grid}/>
      )
    }
  }
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({
    fetchProjects,
    deleteProject
  }, dispatch)

}

const mapStateToProps = ({projects}) => {
  return {
    projects
  }
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(Projects);

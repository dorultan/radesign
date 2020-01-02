import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createProject, initializeProjectForm, removeInitialData, updateProject, updateProjectWithImage} from '../actions';
import diff from 'object-diff';

import ProjectComponent from '../components/project.component';

class Project extends Component {
  constructor(props) {
    super(props);

    this.formSubmit = this.formSubmit.bind(this);
    this.shouldRemoveInitialData = this.shouldRemoveInitialData.bind(this);
    this.shouldReceiveInitialData = this.shouldReceiveInitialData.bind(this);
    this.isFormInitialized = this.isFormInitialized.bind(this);
    this.shouldUpdateImage = this.shouldUpdateImage.bind(this);

  }

  isFormInitialized() {
    return this.props.initialData ? true : false;
  }

  shouldUpdateImage(values) {

    return values.image !== undefined;
  }

  formSubmit(props) {
    props.image = props.image ? props.image : undefined;

    if(this.isFormInitialized()) {

      if(this.shouldUpdateImage(props)) {
        this.props.updateProjectWithImage(props);
      } else {
        this.props.updateProject(props);
      }
    } else {
      this.props.createProject(props)
    }
  }

  shouldRemoveInitialData() {

    return this.props.initialData ? true : false;
  }

  shouldReceiveInitialData() {

    return this.props.match.params.project_id ? true : false;
  }

  componentDidMount() {
    if(this.shouldRemoveInitialData()) {
      this.props.removeInitialData();
    }

    if(this.shouldReceiveInitialData()) {
      this.props.initializeProjectForm(this.props.match.params.project_id);
    }
  }

  render() {

    if(this.shouldReceiveInitialData() && !this.props.initialData) {
      return (
        <h2>Loading data ...</h2>
      )
    }
    else {
      return (
        <ProjectComponent {...this.props} formSubmit={this.formSubmit}/>
      )
    }
  }

}

const bindActionCreatorsToProps = (dispatch) => {
  // Bind action creators to Project Component props.
  return bindActionCreators({createProject, initializeProjectForm, removeInitialData, updateProjectWithImage, updateProject}, dispatch);
}

const mapStateToProps = ({initialData}) => {

  return {initialData}
}


export default connect(mapStateToProps, bindActionCreatorsToProps)(Project);

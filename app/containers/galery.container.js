import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProject, addImageToGallery, removeImageFromGallery} from '../actions';
import GaleryComponent from '../components/galery.component';

class Galery extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const id = this.props.match.params.project_id;

    this.props.fetchProject(id);
  }

  render() {

    if(!this.props.project) {
      return (

        <h2>Loading ...</h2>

      )
    }
    else {

      return (
        <GaleryComponent {...this.props}/>
      )

    }
  }
}

const mapStateToProps = ({project}) => {
  return {
    project
  }
}

const bindActionCreatorsToProps = (dispatch) => {

  return bindActionCreators({fetchProject, addImageToGallery, removeImageFromGallery}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(Galery);

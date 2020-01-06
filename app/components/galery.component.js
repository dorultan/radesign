import React, {Component, PureComponent} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './galery.less';

class GaleryComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      image: React.createRef()
    }

    this.triggerInputClick = this.triggerInputClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  onChange() {
    const reader = new FileReader();
    const file = this.state.image.current.files[0];
    let data = {};
    if(file) {
      const url = reader.readAsDataURL(file);
      data.image = file;
      data.uid = this.props.match.params.uid;
      this.props.addImageToGallery(data);
    }
  }

  removeImage(path) {
    const id = this.props.match.params.uid;
    const data = {
      id: id,
      path: path
    }

    this.props.removeImageFromGallery(data)
  }

  triggerInputClick() {
    this.state.image.current.click();
  }

  render() {
    return (
      <main className="galery">
        <header className="galery-header">
          <h4>Project: {this.props.project.name}</h4>
          <div className="galery__header-action">
           <input type="file" ref={this.state.image} onChange={this.onChange}/>
           <button type="button" className="btn btn-success" onClick={this.triggerInputClick}>Add</button>
          </div>
        </header>
        <section className="gallery-collection">
         {
           this.props.project.uploads.length ?
           this.props.project.uploads.map((img, key) => {

             return (
               <div className="gallery-image" key={key}>
                 <button type="button"  onClick={() => {this.removeImage(img)}} className="remove-image"><FontAwesomeIcon icon={faTimes}/></button>
                 <img src={window.origin + '/' + img}/>
               </div>
             )
           })
           :
           <h2>No images added.</h2>
         }
        </section>
      </main>
    )
  }
}

export default GaleryComponent;

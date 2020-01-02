import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import './fileField.less';
// console.log(icons)
class FileField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileInput: React.createRef(),
      previewUrl: null
    }

    this.selectFile = this.selectFile.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setPreview = this.setPreview.bind(this);
  }

  componentDidUpdate() {

    if(!this.props.input.value && !this.props.previewUrl && this.state.previewUrl) {
			this.setPreview(null);
		}
  }

  selectFile() {
    this.state.fileInput.current.click();
  }

  componentDidMount() {
    const previewUrl = this.props.previewUrl;

    if(previewUrl) {
      this.setPreview(previewUrl);
    }
  }

  setPreview(url) {
    this.setState({
      previewUrl: url
    })
  }

  onChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setPreview(reader.result);
    }

    if(file) {
      reader.readAsDataURL(file);
      this.props.input.onChange(e);
    }

  }

  render() {

    return (
      <div className="input__wrapper">
       <input
       type="file"
       ref={this.state.fileInput}
			 onChange={this.onChange}
			 onFocus={this.props.input.onFocus}
			 defaultValue={this.props.input.value}/>

       <div className="image-preview">
        {
          this.state.previewUrl ?
          // If the preview image is available then
          // render the image and bind the selectImage function
          // in order to be able to select the file again.
          <img className="image-card" onClick={this.selectFile} src={this.state.previewUrl}/>
          :
          // Otherwise render the icon, so the user knows where to click
          // to change add a image.
          <div onClick={this.selectFile} className="image-preview-inexistent">
            <FontAwesomeIcon icon={faCloudUploadAlt}/>
          </div>
        }
       </div>
      </div>
    )
  }
}

export default FileField;

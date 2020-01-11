import React from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import FileField from './fileField.component';
import {connect} from 'react-redux';
import './project.less';

let ProjectComponent = (props) => {

  return (
    <section className="project">
     <header className="project__header">
       <h3>Add a project.</h3>
     </header>
     <section className="project__form">
       <Form onSubmit={props.handleSubmit(props.formSubmit)}>
         <Field type="file" name="image" previewUrl={props.initialData ? props.initialData.previewUrl : null} component={FileField}/>
         <Field type="text" name="name" placeholder="Project name." component={InputTextField}/>
         <Field type="text" name="tag" placeholder="Tag name e.g: logo" component={InputTextField}/>
         <Field type="text" name="color" placeholder="hex color e.g: #ffffff" component={InputTextField}/>
         <Field type="text" name="description" placeholder="Description ..." component={TextareaField}/>
         {
           props.initialized ?
           <button type="submit" className="btn btn-success">Update</button>
           :
           <button type="submit" className="btn btn-success">Create</button>
         }
         <button type="button" className="btn btn-danger">Cancel</button>
       </Form>
     </section>
    </section>
  )
}

const InputNumberField = (props) => {

  return (
    <div className="input__wrapper">
     <input type="number" placeholder={props.placeholder} {...props.input}/>
     {props.touched && props.error && <span className="error">{props.error}</span>}
    </div>
  )
}

const InputTextField = (props) => {

  return (
    <div className="input__wrapper">
     <input type="text" placeholder={props.placeholder} {...props.input}/>
     {props.touched && props.error && <span className="error">{props.error}</span>}
    </div>
  )
}

const TextareaField = (props) => {
  return (
    <div className="input__wrapper">
     <textarea placeholder={props.placeholder} {...props.input}/>
     {props.touched && props.error && <span className="error">{props.error}</span>}
    </div>
  )
}

const validate = (values) => {
  const errors = {};
  const message = "This field is required";

  if(!values.name) {
      errors.name = message;
  }


  if(!values.description) {
      errors.description = message;
  }

  if(!values.description) {
      errors.description = message;
  }

  if(!values.description) {
      errors.description = message;
  }

  if(!values.image && !values.previewUrl) {
    errors.image = message;
  }

  return errors;
}

const onSubmitSuccess = (result, dispatch, props) => {
  props.reset();
}

const onFormError = (props) => {

}

ProjectComponent = reduxForm({form:  "project-form", validate, onSubmitSuccess, enableReinitialize: true})(ProjectComponent);

const mapStateToProps = ({initialData}) => {

  if(initialData !== null) {
    if(initialData.for === "INITIALIZE_PROJECT_FORM") {
      return {
        initialValues: initialData
      }
    }
  }
  return {};

}

export default connect(mapStateToProps, null)(ProjectComponent);

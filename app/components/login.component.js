import React from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import './login.less';

const Login = (props) => {
  return (
    <main className="login">
     <h1>Log In.</h1>
     <Form className="login-form" onSubmit={props.handleSubmit(({username, password}) => props.login(username, password))}>
       <Field type="text" name="username" placeholder="username" component={InputFieldComponent}/>
       <Field type="password" name="password" placeholder="password" component={InputFieldComponent}/>
       {!props.user && props.submitSucceeded && <div>Username or password is wrong.</div>}
       <button type="submit" className="btn btn-success">Log in</button>
     </Form>
    </main>
  )
}

const InputFieldComponent = ({
  input,
  placeholder,
  type,
  meta: {
    touched,
    error
  }
}) => {
  return (
    <div className="input__wrapper">
      <input type={type} placeholder={placeholder} autoComplete="false" {...input}/>
      {touched && error && <span className="field-error">{error}</span>}
    </div>
  )
}

const validate = (values) => {
  const errors = {};

  if(!values.username) {
    errors.username = "This field is required";
  }

  if(!values.password) {
    errors.password = "This field is required";
  }

  return errors;
}

const onSubmitSuccess = (props) => {

}

const onSubmitFail = (props) => {
  console.log("The form has failed");
}

export default reduxForm({form: 'login_form', validate, onSubmitFail, onSubmitSuccess})(Login);

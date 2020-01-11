(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["containers-login-container"],{

/***/ "./app/components/login.component.js":
/*!*******************************************!*\
  !*** ./app/components/login.component.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.less */ \"./app/components/login.less\");\n/* harmony import */ var _login_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_login_less__WEBPACK_IMPORTED_MODULE_3__);\n\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nvar Login = function Login(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"main\", {\n    className: \"login\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"Log In.\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    className: \"login-form\",\n    onSubmit: props.handleSubmit(function (_ref) {\n      var username = _ref.username,\n          password = _ref.password;\n      return props.login(username, password);\n    })\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n    type: \"text\",\n    name: \"username\",\n    placeholder: \"username\",\n    component: InputFieldComponent\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n    type: \"password\",\n    name: \"password\",\n    placeholder: \"password\",\n    component: InputFieldComponent\n  }), !props.user && props.submitSucceeded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, \"Username or password is wrong.\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-success\"\n  }, \"Log in\")));\n};\n\nvar InputFieldComponent = function InputFieldComponent(_ref2) {\n  var input = _ref2.input,\n      placeholder = _ref2.placeholder,\n      type = _ref2.type,\n      _ref2$meta = _ref2.meta,\n      touched = _ref2$meta.touched,\n      error = _ref2$meta.error;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"input__wrapper\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", _extends({\n    type: type,\n    placeholder: placeholder,\n    autoComplete: \"false\"\n  }, input)), touched && error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    className: \"field-error\"\n  }, error));\n};\n\nvar validate = function validate(values) {\n  var errors = {};\n\n  if (!values.username) {\n    errors.username = \"This field is required\";\n  }\n\n  if (!values.password) {\n    errors.password = \"This field is required\";\n  }\n\n  return errors;\n};\n\nvar onSubmitSuccess = function onSubmitSuccess(props) {};\n\nvar onSubmitFail = function onSubmitFail(props) {\n  console.log(\"The form has failed\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"reduxForm\"])({\n  form: 'login_form',\n  validate: validate,\n  onSubmitFail: onSubmitFail,\n  onSubmitSuccess: onSubmitSuccess\n})(Login));\n\n//# sourceURL=webpack:///./app/components/login.component.js?");

/***/ }),

/***/ "./app/components/login.less":
/*!***********************************!*\
  !*** ./app/components/login.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/login.less?");

/***/ }),

/***/ "./app/containers/login.container.js":
/*!*******************************************!*\
  !*** ./app/containers/login.container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/login.component */ \"./app/components/login.component.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ \"./app/actions/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar LoginContainer =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LoginContainer, _Component);\n\n  function LoginContainer(props) {\n    _classCallCheck(this, LoginContainer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LoginContainer).call(this, props));\n  }\n\n  _createClass(LoginContainer, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      if (this.props.user || this.props.authenticated) {\n        this.props.history.push('/dashboard');\n      }\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.isAuthenticated();\n\n      if (this.props.authenticated) {\n        this.props.history.push('/dashboard');\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_login_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], this.props);\n    }\n  }]);\n\n  return LoginContainer;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\nvar bindActionCreatorsToProps = function bindActionCreatorsToProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_7__[\"bindActionCreators\"])({\n    login: _actions__WEBPACK_IMPORTED_MODULE_8__[\"login\"],\n    isAuthenticated: _actions__WEBPACK_IMPORTED_MODULE_8__[\"isAuthenticated\"]\n  }, dispatch);\n};\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var user = _ref.user,\n      isAuthenticated = _ref.isAuthenticated;\n  // console.log(isAuthenticated)\n  return {\n    user: user,\n    authenticated: isAuthenticated\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, bindActionCreatorsToProps)(LoginContainer));\n\n//# sourceURL=webpack:///./app/containers/login.container.js?");

/***/ })

}]);
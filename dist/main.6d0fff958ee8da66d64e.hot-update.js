webpackHotUpdate("main",{

/***/ "./app/components/dashboard.less":
/*!***************************************!*\
  !*** ./app/components/dashboard.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/dashboard.less?");

/***/ }),

/***/ "./app/components/fileField.less":
/*!***************************************!*\
  !*** ./app/components/fileField.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/fileField.less?");

/***/ }),

/***/ "./app/components/galery.less":
/*!************************************!*\
  !*** ./app/components/galery.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/galery.less?");

/***/ }),

/***/ "./app/components/home.less":
/*!**********************************!*\
  !*** ./app/components/home.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/home.less?");

/***/ }),

/***/ "./app/components/loading.less":
/*!*************************************!*\
  !*** ./app/components/loading.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/loading.less?");

/***/ }),

/***/ "./app/components/login.less":
/*!***********************************!*\
  !*** ./app/components/login.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/login.less?");

/***/ }),

/***/ "./app/components/project.less":
/*!*************************************!*\
  !*** ./app/components/project.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/project.less?");

/***/ }),

/***/ "./app/components/projects.component.less":
/*!************************************************!*\
  !*** ./app/components/projects.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/projects.component.less?");

/***/ }),

/***/ "./app/containers/projectView.container.js":
/*!*************************************************!*\
  !*** ./app/containers/projectView.container.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ \"./app/actions/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/projectView'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar ProjectView = function (_Component) {\n  _inherits(ProjectView, _Component);\n\n  function ProjectView(props) {\n    _classCallCheck(this, ProjectView);\n\n    return _possibleConstructorReturn(this, (ProjectView.__proto__ || Object.getPrototypeOf(ProjectView)).call(this, props));\n  }\n\n  _createClass(ProjectView, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {}\n  }, {\n    key: 'render',\n    value: function render() {\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/projectView'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), this.props);\n    }\n  }]);\n\n  return ProjectView;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var project = _ref.project;\n\n\n  return { project: project };\n};\n\nvar bindActionCreatorsToProps = function bindActionCreatorsToProps(dispatch) {\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"bindActionCreators\"])({\n    fetchProject: _actions__WEBPACK_IMPORTED_MODULE_3__[\"fetchProject\"]\n  }, dispatch);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, bindActionCreatorsToProps)(ProjectView));\n\n//# sourceURL=webpack:///./app/containers/projectView.container.js?");

/***/ }),

/***/ "./app/routes/index.js":
/*!*****************************!*\
  !*** ./app/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _containers_home_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/home.container */ \"./app/containers/home.container.js\");\n/* harmony import */ var _containers_login_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/login.container */ \"./app/containers/login.container.js\");\n/* harmony import */ var _containers_dashboard_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/dashboard.container */ \"./app/containers/dashboard.container.js\");\n/* harmony import */ var _containers_project_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/project.container */ \"./app/containers/project.container.js\");\n/* harmony import */ var _containers_projects_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/projects.container */ \"./app/containers/projects.container.js\");\n/* harmony import */ var _containers_galery_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/galery.container */ \"./app/containers/galery.container.js\");\n/* harmony import */ var _containers_projectView_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/projectView.container */ \"./app/containers/projectView.container.js\");\n\n\n\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  component: _containers_home_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: '/projects/:project_id',\n  exact: true,\n  component: _containers_projectView_container__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, {\n  path: '/login',\n  exact: true,\n  component: _containers_login_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/dashboard',\n  exact: false,\n  component: _containers_dashboard_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  routes: [{\n    path: '/dashboard/projects',\n    component: _containers_projects_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    exact: true\n  }, {\n    path: '/dashboard/projects/add',\n    component: _containers_project_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    exact: true\n  }, {\n    path: '/dashboard/projects/edit/:project_id',\n    component: _containers_project_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    exact: true\n  }, {\n    path: '/dashboard/projects/view/:project_id',\n    component: _containers_galery_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    exact: true\n  }]\n}];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./app/routes/index.js?");

/***/ }),

/***/ "?1d9f":
false,

/***/ "?24dc":
false,

/***/ "?4fd9":
false,

/***/ "?6a53":
false,

/***/ "?82cd":
false,

/***/ "?8a52":
false,

/***/ "?ae2f":
false,

/***/ "?e884":
false

})
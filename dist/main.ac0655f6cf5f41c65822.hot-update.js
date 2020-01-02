webpackHotUpdate("main",{

/***/ "./app/containers/projectView.container.js":
/*!*************************************************!*\
  !*** ./app/containers/projectView.container.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ \"./app/actions/index.js\");\n/* harmony import */ var _components_projectView_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/projectView.component */ \"./app/components/projectView.component.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar ProjectView = function (_Component) {\n  _inherits(ProjectView, _Component);\n\n  function ProjectView(props) {\n    _classCallCheck(this, ProjectView);\n\n    return _possibleConstructorReturn(this, (ProjectView.__proto__ || Object.getPrototypeOf(ProjectView)).call(this, props));\n  }\n\n  _createClass(ProjectView, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var id = this.props.match.params.project_id;\n      this.props.fetchProject(id);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projectView_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], this.props);\n    }\n  }]);\n\n  return ProjectView;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var project = _ref.project;\n\n\n  return { project: project };\n};\n\nvar bindActionCreatorsToProps = function bindActionCreatorsToProps(dispatch) {\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"bindActionCreators\"])({\n    fetchProject: _actions__WEBPACK_IMPORTED_MODULE_3__[\"fetchProject\"]\n  }, dispatch);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, bindActionCreatorsToProps)(ProjectView));\n\n//# sourceURL=webpack:///./app/containers/projectView.container.js?");

/***/ })

})
(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["containers-projects-container"],{

/***/ "./app/components/projects.component.js":
/*!**********************************************!*\
  !*** ./app/components/projects.component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map */ \"./node_modules/core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _projects_component_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component.less */ \"./app/components/projects.component.less\");\n/* harmony import */ var _projects_component_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_projects_component_less__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar ProjectsComponent = function ProjectsComponent(_ref) {\n  var grid = _ref.grid,\n      deleteProject = _ref.deleteProject;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"main\", {\n    className: \"projects\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"header\", {\n    className: \"projects-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h3\", null, \"Projects.\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    to: \"/dashboard/projects/add\",\n    className: \"btn btn-success\"\n  }, \"Add project\")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"section\", {\n    className: \"projects-cards\"\n  }, grid.map(function (column, key) {\n    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      key: key,\n      className: \"column\"\n    }, column.map(function (project, key) {\n      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        key: key,\n        className: \"project\"\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n        to: \"/dashboard/projects/view/\".concat(project.uid)\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n        src: project.imageUrl,\n        alt: project.name + \"'s collection of images.'\"\n      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", null, project.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"project-buttons\"\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n        to: \"/dashboard/projects/edit/\".concat(project.uid),\n        className: \"btn btn-primary btn-sm\"\n      }, \"Edit\"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-danger btn-sm\",\n        onClick: function onClick() {\n          return deleteProject(project.uid);\n        }\n      }, \"Delete\")));\n    }));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsComponent);\n\n//# sourceURL=webpack:///./app/components/projects.component.js?");

/***/ }),

/***/ "./app/components/projects.component.less":
/*!************************************************!*\
  !*** ./app/components/projects.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/projects.component.less?");

/***/ }),

/***/ "./app/containers/projects.container.js":
/*!**********************************************!*\
  !*** ./app/containers/projects.container.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.function.bind */ \"./node_modules/core-js/modules/es6.function.bind.js\");\n/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions */ \"./app/actions/index.js\");\n/* harmony import */ var _components_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/projects.component */ \"./app/components/projects.component.js\");\n\n\n\n\n\n\n\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Projects =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Projects, _Component);\n\n  function Projects(props) {\n    var _this;\n\n    _classCallCheck(this, Projects);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Projects).call(this, props));\n    _this.state = {\n      grid: null\n    };\n    _this.createGrid = _this.createGrid.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Projects, [{\n    key: \"createGrid\",\n    value: function createGrid() {\n      var grid = [[], [], []];\n      this.props.projects.forEach(function (project, idx) {\n        if (grid[idx]) {\n          grid[idx].push(project);\n        } else {\n          grid[idx % 3].push(project);\n        }\n      });\n      return grid;\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      var grid;\n\n      if (this.props.projects && !this.state.grid || this.state.grid && this.state.grid.flat().length !== this.props.projects.length) {\n        grid = this.createGrid();\n        this.setState({\n          grid: grid\n        });\n      }\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.fetchProjects();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.state.grid === null) {\n        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"h1\", null, \"Loading projects ...\");\n      } else if (!this.state.grid.length) {\n        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"h1\", null, \"Didn't find any projects.\");\n      } else {\n        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_projects_component__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _extends({}, this.props, {\n          grid: this.state.grid\n        }));\n      }\n    }\n  }]);\n\n  return Projects;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar bindActionCreatorsToProps = function bindActionCreatorsToProps(dispatch) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_10__[\"bindActionCreators\"])({\n    fetchProjects: _actions__WEBPACK_IMPORTED_MODULE_11__[\"fetchProjects\"],\n    deleteProject: _actions__WEBPACK_IMPORTED_MODULE_11__[\"deleteProject\"]\n  }, dispatch);\n};\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var projects = _ref.projects;\n  return {\n    projects: projects\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, bindActionCreatorsToProps)(Projects));\n\n//# sourceURL=webpack:///./app/containers/projects.container.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.function.bind.js?");

/***/ })

}]);
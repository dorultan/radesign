webpackHotUpdate("main",{

/***/ "./app/routes/index.js":
/*!*****************************!*\
  !*** ./app/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/@loadable/component/dist/loadable.esm.js\");\n\n // import Home from '../containers/home.container';\n// import Login from '../containers/login.container';\n// import DashboardContainer from '../containers/dashboard.container';\n// import Project from '../containers/project.container';\n// import Projects from '../containers/projects.container';\n// import Galery from '../containers/galery.container';\n// import ProjectView from '../containers/projectView.container';\n// import InfoComponent from '../components/info.component';\n\nvar Home = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"containers-home-container\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.all(/*! import() | containers-home-container */[__webpack_require__.e(\"vendors~containers-dashboard-container~containers-galery-container~containers-home-container~contain~951f9ebd\"), __webpack_require__.e(\"vendors~components-info-component~containers-dashboard-container~containers-galery-container~contain~104871a1\"), __webpack_require__.e(\"vendors~components-info-component~containers-home-container\"), __webpack_require__.e(\"vendors~containers-home-container\"), __webpack_require__.e(\"containers-dashboard-container~containers-galery-container~containers-home-container~containers-logi~f25770e1\"), __webpack_require__.e(\"containers-home-container\")]).then(__webpack_require__.bind(null, /*! ../containers/home.container */ \"./app/containers/home.container.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../containers/home.container */ \"./app/containers/home.container.js\");\n    }\n\n    return eval('require.resolve')(\"../containers/home.container\");\n  }\n});\nvar Login = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"containers-login-container\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.all(/*! import() | containers-login-container */[__webpack_require__.e(\"vendors~containers-dashboard-container~containers-galery-container~containers-home-container~contain~951f9ebd\"), __webpack_require__.e(\"containers-dashboard-container~containers-galery-container~containers-home-container~containers-logi~f25770e1\"), __webpack_require__.e(\"containers-login-container\")]).then(__webpack_require__.bind(null, /*! ../containers/login.container */ \"./app/containers/login.container.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../containers/login.container */ \"./app/containers/login.container.js\");\n    }\n\n    return eval('require.resolve')(\"../containers/login.container\");\n  }\n});\nvar DashboardContainer = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"containers-dashboard-container\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.all(/*! import() | containers-dashboard-container */[__webpack_require__.e(\"vendors~containers-dashboard-container~containers-galery-container~containers-home-container~contain~951f9ebd\"), __webpack_require__.e(\"vendors~components-info-component~containers-dashboard-container~containers-galery-container~contain~104871a1\"), __webpack_require__.e(\"vendors~containers-dashboard-container\"), __webpack_require__.e(\"containers-dashboard-container~containers-galery-container~containers-home-container~containers-logi~f25770e1\"), __webpack_require__.e(\"containers-dashboard-container\")]).then(__webpack_require__.bind(null, /*! ../containers/dashboard.container */ \"./app/containers/dashboard.container.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../containers/dashboard.container */ \"./app/containers/dashboard.container.js\");\n    }\n\n    return eval('require.resolve')(\"../containers/dashboard.container\");\n  }\n});\nvar Project = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"containers-project-container\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    Promise.all(/*! import() | containers-project-container */[__webpack_require__.e(\"vendors~containers-dashboard-container~containers-galery-container~containers-home-container~contain~951f9ebd\"), __webpack_require__.e(\"vendors~components-info-component~containers-dashboard-container~containers-galery-container~contain~104871a1\"), __webpack_require__.e(\"containers-dashboard-container~containers-galery-container~containers-home-container~containers-logi~f25770e1\"), __webpack_require__.e(\"containers-project-container\")]).then(__webpack_require__.bind(null, /*! ../containers/project.container */ \"./app/containers/project.container.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../containers/project.container */ \"./app/containers/project.container.js\");\n    }\n\n    return eval('require.resolve')(\"../containers/project.container\");\n  }\n});\nvar Projects = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"containers-projects-container\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.all(/*! import() | containers-projects-container */[__webpack_require__.e(\"vendors~containers-dashboard-container~containers-galery-container~containers-home-container~contain~951f9ebd\"), __webpack_require__.e(\"containers-dashboard-container~containers-galery-container~containers-home-container~containers-logi~f25770e1\"), __webpack_require__.e(\"containers-projects-container\")]).then(__webpack_require__.bind(null, /*! ../containers/projects.container */ \"./app/containers/projects.container.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../containers/projects.container */ \"./app/containers/projects.container.js\");\n    }\n\n    return eval('require.resolve')(\"../containers/projects.container\");\n  }\n});\nvar Galery = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"containers-galery-container\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    Promise.all(/*! import() | containers-galery-container */[__webpack_require__.e(\"vendors~containers-dashboard-container~containers-galery-container~containers-home-container~contain~951f9ebd\"), __webpack_require__.e(\"vendors~components-info-component~containers-dashboard-container~containers-galery-container~contain~104871a1\"), __webpack_require__.e(\"containers-dashboard-container~containers-galery-container~containers-home-container~containers-logi~f25770e1\"), __webpack_require__.e(\"containers-galery-container\")]).then(__webpack_require__.bind(null, /*! ../containers/galery.container */ \"./app/containers/galery.container.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../containers/galery.container */ \"./app/containers/galery.container.js\");\n    }\n\n    return eval('require.resolve')(\"../containers/galery.container\");\n  }\n});\nvar ProjectView = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"containers-projectView-container\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.all(/*! import() | containers-projectView-container */[__webpack_require__.e(\"vendors~containers-dashboard-container~containers-galery-container~containers-home-container~contain~951f9ebd\"), __webpack_require__.e(\"vendors~components-info-component~containers-dashboard-container~containers-galery-container~contain~104871a1\"), __webpack_require__.e(\"containers-dashboard-container~containers-galery-container~containers-home-container~containers-logi~f25770e1\"), __webpack_require__.e(\"containers-projectView-container\")]).then(__webpack_require__.bind(null, /*! ../containers/projectView.container */ \"./app/containers/projectView.container.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../containers/projectView.container */ \"./app/containers/projectView.container.js\");\n    }\n\n    return eval('require.resolve')(\"../containers/projectView.container\");\n  }\n});\nvar InfoComponent = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"components-info-component\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.all(/*! import() | components-info-component */[__webpack_require__.e(\"vendors~components-info-component~containers-dashboard-container~containers-galery-container~contain~104871a1\"), __webpack_require__.e(\"vendors~components-info-component~containers-home-container\"), __webpack_require__.e(\"components-info-component\")]).then(__webpack_require__.bind(null, /*! ../components/info.component */ \"./app/components/info.component.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ../components/info.component */ \"./app/components/info.component.js\");\n    }\n\n    return eval('require.resolve')(\"../components/info.component\");\n  }\n});\nvar routes = [{\n  path: '/',\n  component: Home,\n  exact: true\n}, {\n  path: '/projects',\n  component: Home,\n  exact: true\n}, {\n  path: '/info',\n  component: InfoComponent,\n  exact: true\n}, {\n  path: '/projects/:uid',\n  exact: true,\n  component: ProjectView\n}, {\n  path: '/login',\n  exact: true,\n  component: Login\n}, {\n  path: '/dashboard',\n  exact: false,\n  component: DashboardContainer,\n  routes: [{\n    path: '/dashboard/projects',\n    component: Projects,\n    exact: true\n  }, {\n    path: '/dashboard/projects/add',\n    component: Project,\n    exact: true\n  }, {\n    path: '/dashboard/projects/edit/:uid',\n    component: Project,\n    exact: true\n  }, {\n    path: '/dashboard/projects/view/:uid',\n    component: Galery,\n    exact: true\n  }]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./app/routes/index.js?");

/***/ })

})
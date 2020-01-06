webpackHotUpdate("main",{

/***/ "./app/components/breadCrumbsComponent.less":
/*!**************************************************!*\
  !*** ./app/components/breadCrumbsComponent.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/breadCrumbsComponent.less?");

/***/ }),

/***/ "./app/components/dashboard.less":
/*!***************************************!*\
  !*** ./app/components/dashboard.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/dashboard.less?");

/***/ }),

/***/ "./app/components/dashboardNavbar.less":
/*!*********************************************!*\
  !*** ./app/components/dashboardNavbar.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/dashboardNavbar.less?");

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

/***/ "./app/components/info.less":
/*!**********************************!*\
  !*** ./app/components/info.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/info.less?");

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

/***/ "./app/components/projectView.less":
/*!*****************************************!*\
  !*** ./app/components/projectView.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/projectView.less?");

/***/ }),

/***/ "./app/components/projects.component.js":
/*!**********************************************!*\
  !*** ./app/components/projects.component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _projects_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component.less */ \"./app/components/projects.component.less\");\n/* harmony import */ var _projects_component_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projects_component_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar ProjectsComponent = function ProjectsComponent(_ref) {\n  var grid = _ref.grid,\n      deleteProject = _ref.deleteProject;\n\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'main',\n    { className: 'projects' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'header',\n      { className: 'projects-header' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'h3',\n        null,\n        'Projects.'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n        { to: '/dashboard/projects/add', className: 'btn btn-success' },\n        'Add project'\n      )\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'section',\n      { className: 'projects-cards' },\n      grid.map(function (column, key) {\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'div',\n          { key: key, className: 'column' },\n          column.map(function (project, key) {\n\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { key: key, className: 'project' },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n                { to: '/dashboard/projects/view/' + project.uid },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: project.imageUrl, alt: project.name + \"'s collection of images.'\" })\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'p',\n                null,\n                project.description\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'project-buttons' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n                  { to: '/dashboard/projects/edit/' + project.uid, className: 'btn btn-primary btn-sm' },\n                  'Edit'\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  'button',\n                  { type: 'button', className: 'btn btn-danger btn-sm', onClick: function onClick() {\n                      return deleteProject(project.uid);\n                    } },\n                  'Delete'\n                )\n              )\n            );\n          })\n        );\n      })\n    )\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsComponent);\n\n//# sourceURL=webpack:///./app/components/projects.component.js?");

/***/ }),

/***/ "./app/components/projects.component.less":
/*!************************************************!*\
  !*** ./app/components/projects.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/components/projects.component.less?");

/***/ }),

/***/ "?148e":
false,

/***/ "?1d9f":
false,

/***/ "?24dc":
false,

/***/ "?4501":
false,

/***/ "?4fd9":
false,

/***/ "?6a53":
false,

/***/ "?6ba1":
false,

/***/ "?82cd":
false,

/***/ "?8a52":
false,

/***/ "?ae2f":
false,

/***/ "?b523":
false,

/***/ "?e884":
false

})
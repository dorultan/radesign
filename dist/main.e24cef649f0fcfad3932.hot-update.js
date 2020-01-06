exports.id = "main";
exports.modules = {

/***/ "./app/components/projectView.component.js":
/*!*************************************************!*\
  !*** ./app/components/projectView.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \\\"react\\\");\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\\n/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component */ \\\"./app/components/navbar.component.js\\\");\\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \\\"react-router-dom\\\");\\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\\n/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hex-to-rgba */ \\\"hex-to-rgba\\\");\\n/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_3__);\\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \\\"@fortawesome/react-fontawesome\\\");\\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);\\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \\\"@fortawesome/free-solid-svg-icons\\\");\\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);\\n/* harmony import */ var _projectView_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectView.less */ \\\"./app/components/projectView.less\\\");\\n/* harmony import */ var _projectView_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_projectView_less__WEBPACK_IMPORTED_MODULE_6__);\\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\nvar ProjectViewComponent = function ProjectViewComponent(props) {\\n  var imageUrl = window.origin + '\\\\\\\\' + props.project.imageUrl;\\n  imageUrl = imageUrl.replace('\\\\\\\\', '/');\\n  imageUrl = imageUrl.replace('\\\\\\\\', '/');\\n  imageUrl = imageUrl.replace('\\\\\\\\', '/');\\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n    'main',\\n    { className: 'project__view' },\\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_component__WEBPACK_IMPORTED_MODULE_1__[\\\"default\\\"], _extends({}, props, { backgroundColor: true, navbarRelative: true })),\\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n      'section',\\n      { className: 'project__view-images' },\\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('header', { className: 'project__view-header', style: { backgroundImage: 'url(' + imageUrl + ')' } }),\\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n        'section',\\n        { className: 'project__view-meta' },\\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n          'h1',\\n          { className: 'project_view__meta--name' },\\n          props.project.name\\n        ),\\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n          'span',\\n          { className: 'project_view__meta--tag' },\\n          props.project.tag\\n        ),\\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n          'p',\\n          { className: 'project_view__meta--description' },\\n          props.project.description\\n        )\\n      ),\\n      props.project.uploads.map(function (imgPath, key) {\\n\\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n          'section',\\n          { key: key, className: 'project__view-image' },\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: imgPath })\\n        );\\n      }),\\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n        'section',\\n        { className: 'social' },\\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n          'div',\\n          { className: 'social-links' },\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'span',\\n            null,\\n            'Share on '\\n          ),\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'a',\\n            { target: '_blank', href: 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href },\\n            'facebook'\\n          ),\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'a',\\n            { target: '_blank', href: 'https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href },\\n            'Linkedin'\\n          )\\n        )\\n      ),\\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n        'section',\\n        { className: 'nav-next--prev' },\\n        props.previous !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n          react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\\\"Link\\\"],\\n          { className: 'nav-link previous-link ' + (!props.next ? 'single-link' : ''), to: '/projects/' + props.previous.uid, style: { backgroundColor: hex_to_rgba__WEBPACK_IMPORTED_MODULE_3___default()(props.previous.color, 0.5) } },\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'div',\\n            { className: 'icon' },\\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\\\"FontAwesomeIcon\\\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\\\"faLongArrowAltLeft\\\"] })\\n          ),\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'span',\\n            { className: 'link__project-action' },\\n            'View previous project'\\n          ),\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'h2',\\n            { className: 'link__project-name' },\\n            props.previous.name\\n          )\\n        ) : null,\\n        props.next !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n          react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\\\"Link\\\"],\\n          { className: 'nav-link next-link ' + (!props.previous ? 'single-link' : ''), to: '/projects/' + props.next.uid, style: { backgroundColor: hex_to_rgba__WEBPACK_IMPORTED_MODULE_3___default()(props.next.color, 0.5) } },\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'div',\\n            { className: 'icon' },\\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\\\"FontAwesomeIcon\\\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\\\"faLongArrowAltRight\\\"] })\\n          ),\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'span',\\n            { className: 'link__project-action' },\\n            'View next project'\\n          ),\\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\\n            'h2',\\n            { className: 'link__project-name' },\\n            props.next.name\\n          )\\n        ) : null\\n      )\\n    )\\n  );\\n};\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (ProjectViewComponent);//# sourceURL=[module]\\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcm9qZWN0Vmlldy5jb21wb25lbnQuanM/NWNhYyJdLCJuYW1lcyI6WyJQcm9qZWN0Vmlld0NvbXBvbmVudCIsInByb3BzIiwiaW1hZ2VVcmwiLCJ3aW5kb3ciLCJvcmlnaW4iLCJwcm9qZWN0IiwicmVwbGFjZSIsImJhY2tncm91bmRJbWFnZSIsIm5hbWUiLCJ0YWciLCJkZXNjcmlwdGlvbiIsInVwbG9hZHMiLCJtYXAiLCJpbWdQYXRoIiwia2V5IiwibG9jYXRpb24iLCJocmVmIiwicHJldmlvdXMiLCJuZXh0IiwidWlkIiwiYmFja2dyb3VuZENvbG9yIiwiaGV4VG9SZ2JhIiwiY29sb3IiLCJmYUxvbmdBcnJvd0FsdExlZnQiLCJmYUxvbmdBcnJvd0FsdFJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUdBLElBQU1BLHVCQUF1QixTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBVztBQUN0QyxNQUFJQyxXQUFjQyxPQUFPQyxNQUFyQixVQUFnQ0gsTUFBTUksT0FBTixDQUFjSCxRQUFsRDtBQUNBQSxhQUFXQSxTQUFTSSxPQUFULENBQWlCLElBQWpCLEVBQXVCLEdBQXZCLENBQVg7QUFDQUosYUFBV0EsU0FBU0ksT0FBVCxDQUFpQixJQUFqQixFQUF1QixHQUF2QixDQUFYO0FBQ0FKLGFBQVdBLFNBQVNJLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsR0FBdkIsQ0FBWDtBQUNBLFNBQ0U7QUFBQTtBQUFBLE1BQU0sV0FBVSxlQUFoQjtBQUNFLCtEQUFDLHlEQUFELGVBQVlMLEtBQVosSUFBbUIsaUJBQWlCLElBQXBDLEVBQTBDLGdCQUFnQixJQUExRCxJQURGO0FBRUU7QUFBQTtBQUFBLFFBQVMsV0FBVSxzQkFBbkI7QUFDRSw2RUFBUSxXQUFVLHNCQUFsQixFQUF5QyxPQUFPLEVBQUNNLDBCQUF3QkwsUUFBeEIsTUFBRCxFQUFoRCxHQURGO0FBR0U7QUFBQTtBQUFBLFVBQVMsV0FBVSxvQkFBbkI7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLDBCQUFkO0FBQTBDRCxnQkFBTUksT0FBTixDQUFjRztBQUF4RCxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQU0sV0FBVSx5QkFBaEI7QUFBMkNQLGdCQUFNSSxPQUFOLENBQWNJO0FBQXpELFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBRyxXQUFVLGlDQUFiO0FBQWdEUixnQkFBTUksT0FBTixDQUFjSztBQUE5RDtBQUhGLE9BSEY7QUFTSVQsWUFBTUksT0FBTixDQUFjTSxPQUFkLENBQXNCQyxHQUF0QixDQUEwQixVQUFDQyxPQUFELEVBQVVDLEdBQVYsRUFBa0I7O0FBRTFDLGVBQ0U7QUFBQTtBQUFBLFlBQVMsS0FBS0EsR0FBZCxFQUFtQixXQUFVLHFCQUE3QjtBQUNFLDhFQUFLLEtBQUtELE9BQVY7QUFERixTQURGO0FBS0QsT0FQRCxDQVRKO0FBa0JFO0FBQUE7QUFBQSxVQUFTLFdBQVUsUUFBbkI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBRyxRQUFPLFFBQVYsRUFBbUIsd0RBQXNEVixPQUFPWSxRQUFQLENBQWdCQyxJQUF6RjtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQSxjQUFHLFFBQU8sUUFBVixFQUFtQiwrREFBNkRiLE9BQU9ZLFFBQVAsQ0FBZ0JDLElBQWhHO0FBQUE7QUFBQTtBQUhGO0FBREYsT0FsQkY7QUF5QkU7QUFBQTtBQUFBLFVBQVMsV0FBVSxnQkFBbkI7QUFFSWYsY0FBTWdCLFFBQU4sS0FBbUIsSUFBbkIsR0FDQTtBQUFDLCtEQUFEO0FBQUEsWUFBTSx3Q0FBcUMsQ0FBQ2hCLE1BQU1pQixJQUFQLEdBQWMsYUFBZCxHQUE2QixFQUFsRSxDQUFOLEVBQStFLG1CQUFpQmpCLE1BQU1nQixRQUFOLENBQWVFLEdBQS9HLEVBQXNILE9BQU8sRUFBQ0MsaUJBQWlCQyxrREFBU0EsQ0FBQ3BCLE1BQU1nQixRQUFOLENBQWVLLEtBQXpCLEVBQWdDLEdBQWhDLENBQWxCLEVBQTdIO0FBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSxNQUFmO0FBQ0UsdUVBQUMsOEVBQUQsSUFBaUIsTUFBTUMsb0ZBQXZCO0FBREYsV0FEQTtBQUlDO0FBQUE7QUFBQSxjQUFNLFdBQVUsc0JBQWhCO0FBQUE7QUFBQSxXQUpEO0FBS0M7QUFBQTtBQUFBLGNBQUksV0FBVSxvQkFBZDtBQUFvQ3RCLGtCQUFNZ0IsUUFBTixDQUFlVDtBQUFuRDtBQUxELFNBREEsR0FRRSxJQVZOO0FBYUlQLGNBQU1pQixJQUFOLEtBQWUsSUFBZixHQUNBO0FBQUMsK0RBQUQ7QUFBQSxZQUFNLG9DQUFpQyxDQUFDakIsTUFBTWdCLFFBQVAsR0FBa0IsYUFBbEIsR0FBa0MsRUFBbkUsQ0FBTixFQUErRSxtQkFBaUJoQixNQUFNaUIsSUFBTixDQUFXQyxHQUEzRyxFQUFrSCxPQUFPLEVBQUNDLGlCQUFpQkMsa0RBQVNBLENBQUNwQixNQUFNaUIsSUFBTixDQUFXSSxLQUFyQixFQUE0QixHQUE1QixDQUFsQixFQUF6SDtBQUNBO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNFLHVFQUFDLDhFQUFELElBQWlCLE1BQU1FLHFGQUF2QjtBQURGLFdBREE7QUFJQTtBQUFBO0FBQUEsY0FBTSxXQUFVLHNCQUFoQjtBQUFBO0FBQUEsV0FKQTtBQUtFO0FBQUE7QUFBQSxjQUFJLFdBQVUsb0JBQWQ7QUFBb0N2QixrQkFBTWlCLElBQU4sQ0FBV1Y7QUFBL0M7QUFMRixTQURBLEdBUUU7QUFyQk47QUF6QkY7QUFGRixHQURGO0FBdURELENBNUREOztBQThEZVIsbUZBQWYiLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9wcm9qZWN0Vmlldy5jb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBoZXhUb1JnYmEgZnJvbSAnaGV4LXRvLXJnYmEnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQge2ZhTG9uZ0Fycm93QWx0UmlnaHQsIGZhTG9uZ0Fycm93QWx0TGVmdH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuXHJcbmltcG9ydCAnLi9wcm9qZWN0Vmlldy5sZXNzJztcclxuXHJcblxyXG5jb25zdCBQcm9qZWN0Vmlld0NvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gIGxldCBpbWFnZVVybCA9IGAke3dpbmRvdy5vcmlnaW59XFxcXCR7cHJvcHMucHJvamVjdC5pbWFnZVVybH1gO1xyXG4gIGltYWdlVXJsID0gaW1hZ2VVcmwucmVwbGFjZSgnXFxcXCcsICcvJyk7XHJcbiAgaW1hZ2VVcmwgPSBpbWFnZVVybC5yZXBsYWNlKCdcXFxcJywgJy8nKTtcclxuICBpbWFnZVVybCA9IGltYWdlVXJsLnJlcGxhY2UoJ1xcXFwnLCAnLycpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJwcm9qZWN0X192aWV3XCI+XHJcbiAgICAgIDxOYXZiYXIgey4uLnByb3BzfSBiYWNrZ3JvdW5kQ29sb3I9e3RydWV9IG5hdmJhclJlbGF0aXZlPXt0cnVlfS8+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2plY3RfX3ZpZXctaW1hZ2VzXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwcm9qZWN0X192aWV3LWhlYWRlclwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWB9fT5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9qZWN0X192aWV3LW1ldGFcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9qZWN0X3ZpZXdfX21ldGEtLW5hbWVcIj57cHJvcHMucHJvamVjdC5uYW1lfTwvaDE+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0X3ZpZXdfX21ldGEtLXRhZ1wiPntwcm9wcy5wcm9qZWN0LnRhZ308L3NwYW4+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9qZWN0X3ZpZXdfX21ldGEtLWRlc2NyaXB0aW9uXCI+e3Byb3BzLnByb2plY3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm9wcy5wcm9qZWN0LnVwbG9hZHMubWFwKChpbWdQYXRoLCBrZXkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXtrZXl9IGNsYXNzTmFtZT1cInByb2plY3RfX3ZpZXctaW1hZ2VcIiA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aH0vPlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5TaGFyZSBvbiA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWB9PmZhY2Vib29rPC9hPlxyXG4gICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPSR7d2luZG93LmxvY2F0aW9uLmhyZWZ9YH0+TGlua2VkaW48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibmF2LW5leHQtLXByZXZcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcHMucHJldmlvdXMgIT09IG51bGwgP1xyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2BuYXYtbGluayBwcmV2aW91cy1saW5rICR7IXByb3BzLm5leHQgPyAnc2luZ2xlLWxpbmsnIDonJyB9YH0gdG89e2AvcHJvamVjdHMvJHtwcm9wcy5wcmV2aW91cy51aWR9YH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGhleFRvUmdiYShwcm9wcy5wcmV2aW91cy5jb2xvciwgMC41KX19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9uZ0Fycm93QWx0TGVmdH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmtfX3Byb2plY3QtYWN0aW9uXCI+VmlldyBwcmV2aW91cyBwcm9qZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxpbmtfX3Byb2plY3QtbmFtZVwiPntwcm9wcy5wcmV2aW91cy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BzLm5leHQgIT09IG51bGwgP1xyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2BuYXYtbGluayBuZXh0LWxpbmsgJHshcHJvcHMucHJldmlvdXMgPyAnc2luZ2xlLWxpbmsnIDogJyd9YH0gdG89e2AvcHJvamVjdHMvJHtwcm9wcy5uZXh0LnVpZH1gfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaGV4VG9SZ2JhKHByb3BzLm5leHQuY29sb3IsIDAuNSl9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvbmdBcnJvd0FsdFJpZ2h0fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rX19wcm9qZWN0LWFjdGlvblwiPlZpZXcgbmV4dCBwcm9qZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsaW5rX19wcm9qZWN0LW5hbWVcIj57cHJvcHMubmV4dC5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Vmlld0NvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\\n//# sourceURL=webpack-internal:///./app/components/projectView.component.js\\n\");\n\n//# sourceURL=webpack:///./app/components/projectView.component.js?");

/***/ })

};
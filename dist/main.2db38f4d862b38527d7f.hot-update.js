webpackHotUpdate("main",{

/***/ "./app/components/home.component.js":
/*!******************************************!*\
  !*** ./app/components/home.component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/js/swiper.esm.bundle.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hex-to-rgba */ \"./node_modules/hex-to-rgba/build/index.js\");\n/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar.component */ \"./app/components/navbar.component.js\");\n/* harmony import */ var _images_header_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/header.svg */ \"./app/images/header.svg\");\n/* harmony import */ var _images_header_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_header_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _home_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.less */ \"./app/components/home.less\");\n/* harmony import */ var _home_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_home_less__WEBPACK_IMPORTED_MODULE_9__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar HomeComponent = function (_Component) {\n  _inherits(HomeComponent, _Component);\n\n  function HomeComponent(props) {\n    _classCallCheck(this, HomeComponent);\n\n    var _this = _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).call(this, props));\n\n    _this.state = {\n      horizontal_container: react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(),\n      vertical_container: react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(),\n      tracker_container: react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(),\n      swiper_pager: react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(),\n      horizontalSwiper: {},\n      indexMenu: false,\n      sidebars: false\n    };\n    _this.slideToProjects = _this.slideToProjects.bind(_this);\n    _this.toggleSideMenus = _this.toggleSideMenus.bind(_this);\n    _this.openIndexMenu = _this.openIndexMenu.bind(_this);\n    _this.closeIndexMenu = _this.closeIndexMenu.bind(_this);\n    _this.onPageHover = _this.onPageHover.bind(_this);\n    return _this;\n  }\n\n  _createClass(HomeComponent, [{\n    key: 'openIndexMenu',\n    value: function openIndexMenu() {\n      this.setState({\n        indexMenu: true\n      });\n    }\n  }, {\n    key: 'slideToProjects',\n    value: function slideToProjects() {\n      this.verticalSwiper.slideTo(1);\n    }\n  }, {\n    key: 'closeIndexMenu',\n    value: function closeIndexMenu() {\n      this.setState({\n        indexMenu: false\n      });\n    }\n  }, {\n    key: 'onPageHover',\n    value: function onPageHover(idx) {\n      this.verticalSwiper.slideTo(idx + 1);\n    }\n  }, {\n    key: 'toggleSideMenus',\n    value: function toggleSideMenus() {\n      if (this.horizontalSwiper.activeIndex > 0) {\n        this.setState({\n          sidebars: true\n        });\n      } else {\n        this.setState({\n          sidebars: false\n        });\n      }\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var config = {\n        mousewheel: true,\n        simulateTouch: true,\n        speed: 300,\n        touch: true,\n        slidesPerView: 1,\n        delay: 0,\n        keyboard: true\n\n      };\n\n      config.direction = \"horizontal\";\n      this.horizontalSwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.state.horizontal_container.current, config);\n      config.centeredSlides = true;\n      this.trackerSwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.state.tracker_container.current, {\n        speed: 300,\n        initialSlide: 0,\n        onlyExternal: true,\n        centeredSlides: true,\n        slidesPerView: 1,\n        direction: 'horizontal'\n      });\n      config.direction = \"vertical\";\n      this.verticalSwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.state.vertical_container.current, config);\n\n      this.verticalSwiper.controller.control = this.horizontalSwiper;\n      this.horizontalSwiper.controller.control = this.trackerSwiper;\n      // this.verticalSwiper.controller.control = this.verticalSwiper\n      // this.verticalSwiper.controller.control = this.trackerSwiper;\n      config.centeredSlides = true;\n\n      this.horizontalSwiper.on('slideChange', function (idx) {\n        _this2.toggleSideMenus();\n      });\n      // Init\n\n      // window.addEventListener('mousewheel', (e) => {\n      //   console.log(e)\n      // })\n      this.trackerSwiper.on('slideChange', function (idx) {\n        _this2.toggleSideMenus(idx);\n      });\n\n      if (this.props.match.path === '/projects') {\n        this.verticalSwiper.slideTo(1);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'main',\n        { autoscroll: 'true', className: 'home' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_component__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _extends({}, this.props, { slideToProjects: this.slideToProjects, backgroundColor: this.state.sidebars })),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'div',\n          { className: 'home-sliders' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'aside',\n            { className: 'slides-tracker ' + (this.state.sidebars ? \"slides-tracker-show\" : '') },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'span',\n              { className: 'total-slides' },\n              this.props.projects.length\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'span',\n              { className: 'number-separator' },\n              '/'\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'swiper-container horizontal-tracker-container', ref: this.state.tracker_container },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'swiper-wrapper' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  'div',\n                  { className: 'swiper-slide' },\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'span',\n                    { className: 'slide-number' },\n                    '0'\n                  )\n                ),\n                this.props.projects.map(function (project, key) {\n                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { key: key, className: 'swiper-slide' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                      'span',\n                      { className: 'slide-number' },\n                      key + 1\n                    )\n                  );\n                })\n              )\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'home-slides ' + (this.state.indexMenu && this.state.sidebars ? 'index-menu-open' : \"\") },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'swiper-container vertical-container ' + (this.state.indexMenu ? 'right' : 'left'), ref: this.state.vertical_container },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'swiper-wrapper' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  'header',\n                  { className: 'swiper-slide home-header' },\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { className: 'home__header__intro-wrapper' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                      'h1',\n                      { className: 'intro-heading' },\n                      'Suspendisse scelerisque nunc eu justo sollicitudin, vel ornare urna tincidunt. In quis quam eget est aliquam porttitor.'\n                    )\n                  ),\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'footer',\n                    { className: 'home__header__intro-footer' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                      'ul',\n                      { className: 'footer-list' },\n                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        { className: 'footer__list-item' },\n                        'Get in touch'\n                      ),\n                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        { className: 'footer__list-item email' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                          'a',\n                          { href: '#' },\n                          'raulcirt@gmail.com'\n                        )\n                      ),\n                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        { className: 'footer__list-item phone' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                          'a',\n                          { href: 'tel:+40725640513' },\n                          '40725640513'\n                        )\n                      ),\n                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        { className: 'footer__list-item' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                          'a',\n                          { href: 'https://www.facebook.com/profile.php?id=100010341764382' },\n                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faFacebook\"] })\n                        )\n                      ),\n                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'li',\n                        { className: 'footer__list-item' },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                          'a',\n                          { href: 'https://www.linkedin.com/in/raul-cirt-b72481172/' },\n                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faLinkedin\"] })\n                        )\n                      )\n                    )\n                  )\n                ),\n                this.props.projects.map(function (project, key) {\n\n                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { key: key, className: 'content-silde swiper-slide' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                      'div',\n                      { className: 'content-wrapper', style: { background: project.color } },\n                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'span',\n                        { className: 'tag' },\n                        project.tag\n                      ),\n                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        'h1',\n                        null,\n                        project.name\n                      ),\n                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n                        { to: '/projects/' + project.uid },\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                          'div',\n                          { className: 'icon' },\n                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faLongArrowAltRight\"] })\n                        ),\n                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                          'span',\n                          { className: 'link-text' },\n                          'View project'\n                        )\n                      )\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], { className: 'image-wrapper', style: { background: hex_to_rgba__WEBPACK_IMPORTED_MODULE_6___default()(project.color, 0.5) }, to: '/projects/' + project.uid })\n                  );\n                })\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'swiper-container horizontal-container ' + (this.state.indexMenu ? 'left' : 'right'), ref: this.state.horizontal_container },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'swiper-wrapper' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'image-slide swiper-slide empty-slide' }),\n                this.props.projects.map(function (project, key) {\n\n                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'div',\n                    { key: key, className: 'image-slide swiper-slide' },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: project.imageUrl, alt: 'project image' })\n                  );\n                })\n              )\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'aside',\n            { className: 'slides-pager ' + (this.state.indexMenu ? 'pager-menu-view' : '') },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'a',\n              { href: '#', className: 'button-view-index ' + (this.state.sidebars || this.state.indexMenu ? 'button-index-show' : '') + ' ' + (this.state.indexMenu ? 'button-view-index-open' : ''), onClick: this.openIndexMenu },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                { className: 'text' },\n                'index'\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'slides__pager-wrapper' },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'slides__pager-close' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  'a',\n                  { href: '#', className: 'slides__pager__close-button', onClick: this.closeIndexMenu },\n                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faTimes\"] })\n                )\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'ul',\n                { className: 'pager' },\n                this.props.projects.map(function (project, key) {\n                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    'li',\n                    { key: key },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                      react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n                      { to: '/projects/' + project.uid, onMouseEnter: function onMouseEnter() {\n                          _this3.onPageHover(key);\n                        } },\n                      project.name\n                    ),\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                      'span',\n                      null,\n                      project.tag\n                    )\n                  );\n                })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return HomeComponent;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeComponent);\n\n//# sourceURL=webpack:///./app/components/home.component.js?");

/***/ })

})
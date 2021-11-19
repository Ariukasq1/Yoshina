webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layouts/footer.js":
/*!**************************************!*\
  !*** ./components/layouts/footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Footer = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Footer, _React$Component);\n\n  var _super = _createSuper(Footer);\n\n  function Footer() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Footer);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Footer, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var page = this.props.page;\n      return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n        className: \"footer-container\"\n      }, __jsx(\"footer\", null, __jsx(\"img\", {\n        src: \"/images/YoshinoyaLogo.svg\",\n        alt: \"Yoshinoya logo\"\n      }), __jsx(\"div\", {\n        className: \"content\"\n      }, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], null, page.acf && page.acf.tag), __jsx(\"div\", {\n        className: \"address-container\"\n      }, page && __jsx(\"div\", {\n        className: \"address\",\n        dangerouslySetInnerHTML: {\n          __html: page.content.rendered\n        }\n      }), __jsx(\"div\", {\n        className: \"left-side\"\n      }, __jsx(\"div\", {\n        className: \"icons\"\n      }, __jsx(\"p\", {\n        className: \"no-margin\"\n      }, \"Follow us:\"), __jsx(\"a\", {\n        href: page.acf && page.acf.fb,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        className: \"facebook-link\"\n      }, __jsx(\"img\", {\n        src: \"/images/facebook.svg\",\n        alt: \"facebook\"\n      })), __jsx(\"a\", {\n        href: page.acf && page.acf.twitter,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        className: \"twitter-link\"\n      }, __jsx(\"img\", {\n        src: \"/images/twitter.svg\",\n        alt: \"twitter\"\n      })), __jsx(\"a\", {\n        href: page.acf && page.acf.insta,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        className: \"instagram-link\"\n      }, __jsx(\"div\", {\n        className: \"bg\"\n      }, __jsx(\"div\", {\n        className: \"inner\"\n      }, __jsx(\"img\", {\n        src: \"/images/instagram.svg\",\n        alt: \"instagram\"\n      }))))), __jsx(\"p\", {\n        className: \"no-margin\"\n      }, \"\\u0417\\u043E\\u0445\\u0438\\u043E\\u0433\\u0447\\u0438\\u0439\\u043D \\u044D\\u0440\\u0445\\u044D\\u044D\\u0440 \\u0445\\u0430\\u043C\\u0433\\u0430\\u0430\\u043B\\u0430\\u0433\\u0434\\u0441\\u0430\\u043D 2021 \\u043E\\u043D\"))))), __jsx(\"div\", {\n        className: \"icon-scroll-down icon-scroll-up\",\n        onClick: function onClick() {\n          return _this.props.handleChange(0);\n        }\n      }, __jsx(\"span\", null, \"\\u042D\\u0445\\u043B\\u044D\\u0445\"), __jsx(\"div\", {\n        className: \"rotate\"\n      }, __jsx(\"img\", {\n        src: \"/images/arrow-up.gif\",\n        alt: \"arrow up\",\n        className: \"\"\n      }))));\n    }\n  }]);\n\n  return Footer;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvZm9vdGVyLmpzP2JkNjkiXSwibmFtZXMiOlsiRm9vdGVyIiwicGFnZSIsInByb3BzIiwiYWNmIiwidGFnIiwiX19odG1sIiwiY29udGVudCIsInJlbmRlcmVkIiwiZmIiLCJ0d2l0dGVyIiwiaW5zdGEiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxNOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUE7O0FBQUEsVUFDQ0MsSUFERCxHQUNVLEtBQUtDLEtBRGYsQ0FDQ0QsSUFERDtBQUVQLGFBQ0UsTUFBQyx1REFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FDRSxzQkFDRTtBQUFLLFdBQUcsRUFBQywyQkFBVDtBQUFxQyxXQUFHLEVBQUM7QUFBekMsUUFERixFQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0UsTUFBQyx3REFBRCxRQUFhQSxJQUFJLENBQUNFLEdBQUwsSUFBWUYsSUFBSSxDQUFDRSxHQUFMLENBQVNDLEdBQWxDLENBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHSCxJQUFJLElBQ0g7QUFDRSxpQkFBUyxFQUFDLFNBRFo7QUFFRSwrQkFBdUIsRUFBRTtBQUFFSSxnQkFBTSxFQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYUM7QUFBdkI7QUFGM0IsUUFGSixFQVFFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixzQkFERixFQUVFO0FBQ0UsWUFBSSxFQUFFTixJQUFJLENBQUNFLEdBQUwsSUFBWUYsSUFBSSxDQUFDRSxHQUFMLENBQVNLLEVBRDdCO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFHRSxXQUFHLEVBQUMscUJBSE47QUFJRSxpQkFBUyxFQUFDO0FBSlosU0FNRTtBQUFLLFdBQUcsRUFBQyxzQkFBVDtBQUFnQyxXQUFHLEVBQUM7QUFBcEMsUUFORixDQUZGLEVBVUU7QUFDRSxZQUFJLEVBQUVQLElBQUksQ0FBQ0UsR0FBTCxJQUFZRixJQUFJLENBQUNFLEdBQUwsQ0FBU00sT0FEN0I7QUFFRSxjQUFNLEVBQUMsUUFGVDtBQUdFLFdBQUcsRUFBQyxxQkFITjtBQUlFLGlCQUFTLEVBQUM7QUFKWixTQU1FO0FBQUssV0FBRyxFQUFDLHFCQUFUO0FBQStCLFdBQUcsRUFBQztBQUFuQyxRQU5GLENBVkYsRUFrQkU7QUFDRSxZQUFJLEVBQUVSLElBQUksQ0FBQ0UsR0FBTCxJQUFZRixJQUFJLENBQUNFLEdBQUwsQ0FBU08sS0FEN0I7QUFFRSxjQUFNLEVBQUMsUUFGVDtBQUdFLFdBQUcsRUFBQyxxQkFITjtBQUlFLGlCQUFTLEVBQUM7QUFKWixTQU1FO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFdBQUcsRUFBQyx1QkFBVDtBQUFpQyxXQUFHLEVBQUM7QUFBckMsUUFERixDQURGLENBTkYsQ0FsQkYsQ0FERixFQWdDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYiw4TUFoQ0YsQ0FSRixDQUZGLENBRkYsQ0FERixFQW9ERTtBQUNFLGlCQUFTLEVBQUMsaUNBRFo7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxLQUFJLENBQUNSLEtBQUwsQ0FBV1MsWUFBWCxDQUF3QixDQUF4QixDQUFOO0FBQUE7QUFGWCxTQUlFLHFEQUpGLEVBS0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFdBQUcsRUFBQyxzQkFBVDtBQUFnQyxXQUFHLEVBQUMsVUFBcEM7QUFBK0MsaUJBQVMsRUFBQztBQUF6RCxRQURGLENBTEYsQ0FwREYsQ0FERjtBQWdFRDs7OztFQW5Fa0JDLDRDQUFLLENBQUNDLFM7O0FBc0VaYixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0cy9mb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWluZXJcIj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvWW9zaGlub3lhTG9nby5zdmdcIiBhbHQ9XCJZb3NoaW5veWEgbG9nb1wiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57cGFnZS5hY2YgJiYgcGFnZS5hY2YudGFnfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAge3BhZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwYWdlLmNvbnRlbnQucmVuZGVyZWQgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCI+Rm9sbG93IHVzOjwvcD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3BhZ2UuYWNmICYmIHBhZ2UuYWNmLmZifVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjZWJvb2stbGlua1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIiBhbHQ9XCJmYWNlYm9va1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtwYWdlLmFjZiAmJiBwYWdlLmFjZi50d2l0dGVyfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdpdHRlci1saW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIuc3ZnXCIgYWx0PVwidHdpdHRlclwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtwYWdlLmFjZiAmJiBwYWdlLmFjZi5pbnN0YX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImluc3RhZ3JhbS1saW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiaW5zdGFncmFtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgICAgICDQl9C+0YXQuNC+0LPRh9C40LnQvSDRjdGA0YXRjdGN0YAg0YXQsNC80LPQsNCw0LvQsNCz0LTRgdCw0L0gMjAyMSDQvtC9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tc2Nyb2xsLWRvd24gaWNvbi1zY3JvbGwtdXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKDApfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+0K3RhdC70Y3RhTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdGF0ZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Fycm93LXVwLmdpZlwiIGFsdD1cImFycm93IHVwXCIgY2xhc3NOYW1lPVwiXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/footer.js\n");

/***/ })

})
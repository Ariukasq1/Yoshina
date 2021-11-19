webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/map.js":
/*!********************************!*\
  !*** ./components/home/map.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Map = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Map, _React$Component);\n\n  var _super = _createSuper(Map);\n\n  function Map() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Map);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Map, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$props = this.props,\n          cat = _this$props.cat,\n          posts = _this$props.posts;\n      console.log(posts, \"posts\");\n      return __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], null, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n        container: true,\n        spacing: 2,\n        alignItems: \"center\",\n        justifyContent: \"center\"\n      }, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        md: 5\n      }, __jsx(\"div\", {\n        className: \"content\"\n      }, __jsx(\"div\", {\n        className: \"tag\"\n      }, __jsx(\"p\", {\n        className: \"no-margin\"\n      }, cat && cat.acf && cat.acf.tag)), __jsx(\"div\", {\n        className: \"title\"\n      }, __jsx(\"h1\", {\n        className: \"title-margin\"\n      }, cat && cat.name)), __jsx(\"p\", {\n        className: \"text\"\n      }, cat && cat.description)), __jsx(\"div\", {\n        className: \"icon-scroll-down\",\n        onClick: function onClick() {\n          return _this.props.handleChange(5);\n        }\n      }, __jsx(\"span\", null, \"Scroll down\"), __jsx(\"img\", {\n        src: \"/images/arrow-down.gif\",\n        alt: \"arrow down\"\n      }))), __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        md: 7,\n        className: \"grid-map\"\n      }, __jsx(\"img\", {\n        src: \"/images/map.svg\",\n        alt: \"map\"\n      }), __jsx(\"img\", {\n        src: \"/images/location1.svg\",\n        alt: \"\",\n        className: \"location1\",\n        style: {}\n      }), __jsx(\"img\", {\n        src: \"/images/location2.svg\",\n        alt: \"\",\n        className: \"pin\"\n      }), __jsx(\"img\", {\n        src: \"/images/location3.svg\",\n        alt: \"\",\n        className: \"location3\"\n      }), __jsx(\"img\", {\n        src: \"/images/location4.svg\",\n        alt: \"\",\n        className: \"location4\"\n      }), __jsx(\"img\", {\n        src: \"/images/location5.svg\",\n        alt: \"\",\n        className: \"location5\"\n      }), __jsx(\"img\", {\n        src: \"/images/locationCan.svg\",\n        alt: \"\",\n        className: \"locationCan\"\n      }), __jsx(\"img\", {\n        src: \"/images/locationCN.svg\",\n        alt: \"\",\n        className: \"locationCN\"\n      }), __jsx(\"img\", {\n        src: \"/images/locationEN.svg\",\n        alt: \"\",\n        className: \"locationEN\"\n      }), __jsx(\"img\", {\n        src: \"/images/locationJP2.svg\",\n        alt: \"\",\n        className: \"locationJP\"\n      }), __jsx(\"img\", {\n        src: \"/images/locationJP2.svg\",\n        alt: \"\",\n        className: \"locationJP2\"\n      }))));\n    }\n  }]);\n\n  return Map;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvbWFwLmpzPzEyNWYiXSwibmFtZXMiOlsiTWFwIiwicHJvcHMiLCJjYXQiLCJwb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJhY2YiLCJ0YWciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxHOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUE7O0FBQUEsd0JBQ2dCLEtBQUtDLEtBRHJCO0FBQUEsVUFDQ0MsR0FERCxlQUNDQSxHQUREO0FBQUEsVUFDTUMsS0FETixlQUNNQSxLQUROO0FBRVBDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLE9BQW5CO0FBQ0EsYUFDRSxNQUFDLHVEQUFELFFBQ0UsTUFBQyxrREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENBQXpCO0FBQTRCLGtCQUFVLEVBQUMsUUFBdkM7QUFBZ0Qsc0JBQWMsRUFBQztBQUEvRCxTQUNFLE1BQUMsa0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUU7QUFBdkIsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FBMEJELEdBQUcsSUFBSUEsR0FBRyxDQUFDSSxHQUFYLElBQWtCSixHQUFHLENBQUNJLEdBQUosQ0FBUUMsR0FBcEQsQ0FERixDQURGLEVBSUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUE4QkwsR0FBRyxJQUFJQSxHQUFHLENBQUNNLElBQXpDLENBREYsQ0FKRixFQU9FO0FBQUcsaUJBQVMsRUFBQztBQUFiLFNBQXFCTixHQUFHLElBQUlBLEdBQUcsQ0FBQ08sV0FBaEMsQ0FQRixDQURGLEVBVUU7QUFDRSxpQkFBUyxFQUFDLGtCQURaO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU0sS0FBSSxDQUFDUixLQUFMLENBQVdTLFlBQVgsQ0FBd0IsQ0FBeEIsQ0FBTjtBQUFBO0FBRlgsU0FJRSxrQ0FKRixFQUtFO0FBQUssV0FBRyxFQUFDLHdCQUFUO0FBQWtDLFdBQUcsRUFBQztBQUF0QyxRQUxGLENBVkYsQ0FERixFQW1CRSxNQUFDLGtEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQTBCLGlCQUFTLEVBQUM7QUFBcEMsU0FDRTtBQUFLLFdBQUcsRUFBQyxpQkFBVDtBQUEyQixXQUFHLEVBQUM7QUFBL0IsUUFERixFQUVFO0FBQ0UsV0FBRyxFQUFDLHVCQUROO0FBRUUsV0FBRyxFQUFDLEVBRk47QUFHRSxpQkFBUyxFQUFDLFdBSFo7QUFJRSxhQUFLLEVBQUU7QUFKVCxRQUZGLEVBUUU7QUFBSyxXQUFHLEVBQUMsdUJBQVQ7QUFBaUMsV0FBRyxFQUFDLEVBQXJDO0FBQXdDLGlCQUFTLEVBQUM7QUFBbEQsUUFSRixFQVNFO0FBQUssV0FBRyxFQUFDLHVCQUFUO0FBQWlDLFdBQUcsRUFBQyxFQUFyQztBQUF3QyxpQkFBUyxFQUFDO0FBQWxELFFBVEYsRUFVRTtBQUFLLFdBQUcsRUFBQyx1QkFBVDtBQUFpQyxXQUFHLEVBQUMsRUFBckM7QUFBd0MsaUJBQVMsRUFBQztBQUFsRCxRQVZGLEVBV0U7QUFBSyxXQUFHLEVBQUMsdUJBQVQ7QUFBaUMsV0FBRyxFQUFDLEVBQXJDO0FBQXdDLGlCQUFTLEVBQUM7QUFBbEQsUUFYRixFQVlFO0FBQUssV0FBRyxFQUFDLHlCQUFUO0FBQW1DLFdBQUcsRUFBQyxFQUF2QztBQUEwQyxpQkFBUyxFQUFDO0FBQXBELFFBWkYsRUFhRTtBQUFLLFdBQUcsRUFBQyx3QkFBVDtBQUFrQyxXQUFHLEVBQUMsRUFBdEM7QUFBeUMsaUJBQVMsRUFBQztBQUFuRCxRQWJGLEVBY0U7QUFBSyxXQUFHLEVBQUMsd0JBQVQ7QUFBa0MsV0FBRyxFQUFDLEVBQXRDO0FBQXlDLGlCQUFTLEVBQUM7QUFBbkQsUUFkRixFQWVFO0FBQUssV0FBRyxFQUFDLHlCQUFUO0FBQW1DLFdBQUcsRUFBQyxFQUF2QztBQUEwQyxpQkFBUyxFQUFDO0FBQXBELFFBZkYsRUFnQkU7QUFBSyxXQUFHLEVBQUMseUJBQVQ7QUFBbUMsV0FBRyxFQUFDLEVBQXZDO0FBQTBDLGlCQUFTLEVBQUM7QUFBcEQsUUFoQkYsQ0FuQkYsQ0FERixDQURGO0FBMENEOzs7O0VBOUNlQyw0Q0FBSyxDQUFDQyxTOztBQWlEVFosa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvbWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY2xhc3MgTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2F0LCBwb3N0cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyhwb3N0cywgXCJwb3N0c1wiKTtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1tYXJnaW5cIj57Y2F0ICYmIGNhdC5hY2YgJiYgY2F0LmFjZi50YWd9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS1tYXJnaW5cIj57Y2F0ICYmIGNhdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e2NhdCAmJiBjYXQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tc2Nyb2xsLWRvd25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUNoYW5nZSg1KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+U2Nyb2xsIGRvd248L3NwYW4+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hcnJvdy1kb3duLmdpZlwiIGFsdD1cImFycm93IGRvd25cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30gY2xhc3NOYW1lPVwiZ3JpZC1tYXBcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tYXAuc3ZnXCIgYWx0PVwibWFwXCIgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2NhdGlvbjEuc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9jYXRpb24xXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2NhdGlvbjIuc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwicGluXCIgLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2NhdGlvbjMuc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwibG9jYXRpb24zXCIgLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2NhdGlvbjQuc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwibG9jYXRpb240XCIgLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2NhdGlvbjUuc3ZnXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwibG9jYXRpb241XCIgLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2NhdGlvbkNhbi5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJsb2NhdGlvbkNhblwiIC8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9jYXRpb25DTi5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJsb2NhdGlvbkNOXCIgLz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2NhdGlvbkVOLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImxvY2F0aW9uRU5cIiAvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvY2F0aW9uSlAyLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImxvY2F0aW9uSlBcIiAvPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvY2F0aW9uSlAyLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImxvY2F0aW9uSlAyXCIgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/map.js\n");

/***/ })

})
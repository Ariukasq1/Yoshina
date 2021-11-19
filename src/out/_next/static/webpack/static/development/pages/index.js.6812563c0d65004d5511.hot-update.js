webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wpapi */ \"./node_modules/wpapi/wpapi.js\");\n/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wpapi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layouts/Layout */ \"./components/layouts/Layout.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_react_page_scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/react-page-scroller */ \"./components/react-page-scroller/index.js\");\n/* harmony import */ var _components_home_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/about */ \"./components/home/about.js\");\n/* harmony import */ var _components_home_special__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/special */ \"./components/home/special.js\");\n/* harmony import */ var _app_cover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-cover */ \"./pages/app-cover.js\");\n/* harmony import */ var _components_home_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/map */ \"./components/home/map.js\");\n/* harmony import */ var _components_home_products__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home/products */ \"./components/home/products.js\");\n/* harmony import */ var _components_home_history__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/home/history */ \"./components/home/history.js\");\n/* harmony import */ var _components_home_revolution__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/home/revolution */ \"./components/home/revolution.js\");\n/* harmony import */ var _components_layouts_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/layouts/footer */ \"./components/layouts/footer.js\");\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar wp = new wpapi__WEBPACK_IMPORTED_MODULE_2___default.a({\n  endpoint: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].apiUrl\n});\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var loading = _ref.loading,\n      about = _ref.about,\n      contact = _ref.contact,\n      history = _ref.history,\n      historyCat = _ref.historyCat,\n      revolution = _ref.revolution,\n      featureCat = _ref.featureCat,\n      features = _ref.features,\n      productCat = _ref.productCat,\n      products = _ref.products,\n      mapCat = _ref.mapCat,\n      locations = _ref.locations;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      currentPage = _useState[0],\n      setCurrentPage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      blockScrollUp = _useState2[0],\n      setBlockScrollUp = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (true) {\n      setBlockScrollUp(window.innerWidth < 768);\n    }\n  });\n\n  var handlePageChange = function handlePageChange(pageNumber) {\n    setCurrentPage(Number(pageNumber));\n  };\n\n  var handleBeforePageChange = function handleBeforePageChange(number) {\n    console.log(number);\n  };\n\n  return __jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    loading: loading,\n    title: \"Yoshinaya\"\n  }, __jsx(_components_react_page_scroller__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    pageOnChange: handlePageChange,\n    onBeforePageScroll: handleBeforePageChange,\n    customPageNumber: currentPage,\n    renderAllPagesOnFirstRender: true,\n    blockScrollUp: blockScrollUp\n  }, __jsx(\"div\", {\n    className: \"component center home-about\",\n    key: \"home-about\"\n  }, __jsx(\"div\", {\n    className: \"ellipse\"\n  }), __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], null, __jsx(_components_home_about__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    page: about,\n    handleChange: handlePageChange\n  }))), __jsx(\"div\", {\n    className: \"component center home-products\",\n    key: \"home-products\"\n  }, __jsx(\"div\", {\n    className: \"ellipse\"\n  }), __jsx(\"div\", {\n    className: \"overflow-right component center\"\n  }, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], null, __jsx(_components_home_products__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    cat: productCat,\n    posts: products,\n    handleChange: handlePageChange\n  })))), revolution && __jsx(\"div\", {\n    className: \"component center home-revolution\"\n  }, __jsx(\"div\", {\n    className: \"ellipse\"\n  }), __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], null, __jsx(_components_home_revolution__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    page: revolution,\n    handleChange: handlePageChange\n  }))), history && __jsx(\"div\", {\n    className: \"component center history\",\n    key: \"home-history\"\n  }, __jsx(\"div\", {\n    className: \"ellipse\"\n  }), __jsx(\"div\", {\n    className: \"overflow-right component center\"\n  }, __jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], null, __jsx(_components_home_history__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    cat: historyCat,\n    posts: history,\n    handleChange: handlePageChange\n  }))), __jsx(\"div\", {\n    className: \"section-shape-line\"\n  }, __jsx(\"img\", {\n    src: \"/images/Vector5.svg\",\n    alt: \"vector\",\n    className: \"section-shape-line\"\n  }), __jsx(\"img\", {\n    src: \"/images/Vector6.svg\",\n    alt: \"vector\",\n    className: \"section-shape-line\"\n  }))), __jsx(\"div\", {\n    className: \"component center\",\n    key: \"home-map\"\n  }, __jsx(\"div\", {\n    className: \"ellipse\"\n  }), __jsx(_components_home_map__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    handleChange: handlePageChange,\n    posts: locations,\n    cat: mapCat\n  })), __jsx(\"div\", {\n    className: \"component center\",\n    key: \"home-special\"\n  }, __jsx(\"div\", {\n    className: \"ellipse\"\n  }), __jsx(_components_home_special__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    posts: features,\n    cat: featureCat,\n    handleChange: handlePageChange\n  })), __jsx(\"div\", {\n    className: \"component center\",\n    key: \"home-AppCover\"\n  }, __jsx(\"div\", {\n    className: \"app-cover-footer h-100\"\n  }, __jsx(_app_cover__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null), __jsx(_components_layouts_footer__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n    page: contact,\n    handleChange: handlePageChange\n  })))));\n};\n\n_s(Index, \"WkcHoqjr2Ci6OnU0f4cgPxfvvbk=\");\n\n_c = Index;\n\nIndex.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var about, revolution, contact, historyCat, history, featureCat, features, productCat, products, mapCat, locations;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return wp.pages().slug(\"about\").embed().then(function (data) {\n              return data[0];\n            });\n\n          case 2:\n            about = _context.sent;\n            _context.next = 5;\n            return wp.pages().slug(\"revolution\").embed().then(function (data) {\n              return data[0];\n            });\n\n          case 5:\n            revolution = _context.sent;\n            _context.next = 8;\n            return wp.pages().slug(\"contact\").embed().then(function (data) {\n              return data[0];\n            });\n\n          case 8:\n            contact = _context.sent;\n            _context.next = 11;\n            return wp.categories().slug(\"history\").embed().then(function (data) {\n              return data[0];\n            });\n\n          case 11:\n            historyCat = _context.sent;\n            _context.next = 14;\n            return wp.posts().categories(historyCat.id).embed().perPage(100).then(function (data) {\n              return data;\n            })[\"catch\"](function (err) {\n              return console.log(err);\n            });\n\n          case 14:\n            history = _context.sent;\n            _context.next = 17;\n            return wp.categories().slug(\"feature\").embed().then(function (data) {\n              return data[0];\n            });\n\n          case 17:\n            featureCat = _context.sent;\n            _context.next = 20;\n            return wp.posts().categories(featureCat.id).embed().perPage(100).then(function (data) {\n              return data;\n            })[\"catch\"](function (err) {\n              return console.log(err);\n            });\n\n          case 20:\n            features = _context.sent;\n            _context.next = 23;\n            return wp.categories().slug(\"products\").embed().then(function (data) {\n              return data[0];\n            });\n\n          case 23:\n            productCat = _context.sent;\n            _context.next = 26;\n            return wp.posts().categories(productCat.id).embed().perPage(100).then(function (data) {\n              return data;\n            });\n\n          case 26:\n            products = _context.sent;\n            _context.next = 29;\n            return wp.categories().slug(\"map\").embed().then(function (data) {\n              return data[0];\n            })[\"catch\"](function (err) {\n              return console.log(err);\n            });\n\n          case 29:\n            mapCat = _context.sent;\n            _context.next = 32;\n            return wp.posts().categories(mapCat.id).embed().perPage(100).then(function (data) {\n              return data;\n            });\n\n          case 32:\n            locations = _context.sent;\n            return _context.abrupt(\"return\", {\n              about: about,\n              contact: contact,\n              history: history,\n              historyCat: historyCat,\n              revolution: revolution,\n              featureCat: featureCat,\n              features: features,\n              productCat: productCat,\n              products: products,\n              mapCat: mapCat,\n              locations: locations\n            });\n\n          case 34:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIndwIiwiV1BBUEkiLCJlbmRwb2ludCIsIkNvbmZpZyIsImFwaVVybCIsIkluZGV4IiwibG9hZGluZyIsImFib3V0IiwiY29udGFjdCIsImhpc3RvcnkiLCJoaXN0b3J5Q2F0IiwicmV2b2x1dGlvbiIsImZlYXR1cmVDYXQiLCJmZWF0dXJlcyIsInByb2R1Y3RDYXQiLCJwcm9kdWN0cyIsIm1hcENhdCIsImxvY2F0aW9ucyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImJsb2NrU2Nyb2xsVXAiLCJzZXRCbG9ja1Njcm9sbFVwIiwidXNlRWZmZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlTnVtYmVyIiwiTnVtYmVyIiwiaGFuZGxlQmVmb3JlUGFnZUNoYW5nZSIsIm51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYWdlcyIsInNsdWciLCJlbWJlZCIsInRoZW4iLCJkYXRhIiwiY2F0ZWdvcmllcyIsInBvc3RzIiwiaWQiLCJwZXJQYWdlIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxFQUFFLEdBQUcsSUFBSUMsNENBQUosQ0FBVTtBQUFFQyxVQUFRLEVBQUVDLCtDQUFNLENBQUNDO0FBQW5CLENBQVYsQ0FBWDs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQWFSO0FBQUE7O0FBQUEsTUFaSkMsT0FZSSxRQVpKQSxPQVlJO0FBQUEsTUFYSkMsS0FXSSxRQVhKQSxLQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsT0FTSSxRQVRKQSxPQVNJ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QUFUO0FBQUEsYUFQWSxDQTFFQzs7QUFBQTtBQTBFaEI1QixrQkExRWdCO0FBQUE7QUFBQSxtQkFrRkVoQixFQUFFLENBQ3ZCeUMsS0FEcUIsR0FFckJELFVBRnFCLENBRVZ4QixNQUFNLENBQUMwQixFQUZHLEVBR3JCTCxLQUhxQixHQUlyQk0sT0FKcUIsQ0FJYixHQUphLEVBS3JCTCxJQUxxQixDQUtoQixVQUFDQyxJQUFELEVBQVU7QUFDZCxxQkFBT0EsSUFBUDtBQUNELGFBUHFCLENBbEZGOztBQUFBO0FBa0ZoQnRCLHFCQWxGZ0I7QUFBQSw2Q0EwRmY7QUFDTFYsbUJBQUssRUFBTEEsS0FESztBQUVMQyxxQkFBTyxFQUFQQSxPQUZLO0FBR0xDLHFCQUFPLEVBQVBBLE9BSEs7QUFJTEMsd0JBQVUsRUFBVkEsVUFKSztBQUtMQyx3QkFBVSxFQUFWQSxVQUxLO0FBTUxDLHdCQUFVLEVBQVZBLFVBTks7QUFPTEMsc0JBQVEsRUFBUkEsUUFQSztBQVFMQyx3QkFBVSxFQUFWQSxVQVJLO0FBU0xDLHNCQUFRLEVBQVJBLFFBVEs7QUFVTEMsb0JBQU0sRUFBTkEsTUFWSztBQVdMQyx1QkFBUyxFQUFUQTtBQVhLLGFBMUZlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXlHZVosb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXUEFQSSBmcm9tIFwid3BhcGlcIjtcclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0UGFnZVNjcm9sbGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3JlYWN0LXBhZ2Utc2Nyb2xsZXJcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvYWJvdXRcIjtcclxuaW1wb3J0IFNwZWNpYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9zcGVjaWFsXCI7XHJcbmltcG9ydCBBcHBDb3ZlciBmcm9tIFwiLi9hcHAtY292ZXJcIjtcclxuaW1wb3J0IE1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL21hcFwiO1xyXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9wcm9kdWN0c1wiO1xyXG5pbXBvcnQgSGlzdG9yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2hpc3RvcnlcIjtcclxuaW1wb3J0IFJldm9sdXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9yZXZvbHV0aW9uXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9mb290ZXJcIjtcclxuXHJcbmNvbnN0IHdwID0gbmV3IFdQQVBJKHsgZW5kcG9pbnQ6IENvbmZpZy5hcGlVcmwgfSk7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7XHJcbiAgbG9hZGluZyxcclxuICBhYm91dCxcclxuICBjb250YWN0LFxyXG4gIGhpc3RvcnksXHJcbiAgaGlzdG9yeUNhdCxcclxuICByZXZvbHV0aW9uLFxyXG4gIGZlYXR1cmVDYXQsXHJcbiAgZmVhdHVyZXMsXHJcbiAgcHJvZHVjdENhdCxcclxuICBwcm9kdWN0cyxcclxuICBtYXBDYXQsXHJcbiAgbG9jYXRpb25zLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYmxvY2tTY3JvbGxVcCwgc2V0QmxvY2tTY3JvbGxVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNldEJsb2NrU2Nyb2xsVXAod2luZG93LmlubmVyV2lkdGggPCA3NjgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2VOdW1iZXIpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKE51bWJlcihwYWdlTnVtYmVyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmVmb3JlUGFnZUNoYW5nZSA9IChudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG51bWJlcik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBsb2FkaW5nPXtsb2FkaW5nfSB0aXRsZT17XCJZb3NoaW5heWFcIn0+XHJcbiAgICAgIDxSZWFjdFBhZ2VTY3JvbGxlclxyXG4gICAgICAgIHBhZ2VPbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICBvbkJlZm9yZVBhZ2VTY3JvbGw9e2hhbmRsZUJlZm9yZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgY3VzdG9tUGFnZU51bWJlcj17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgcmVuZGVyQWxsUGFnZXNPbkZpcnN0UmVuZGVyPXt0cnVlfVxyXG4gICAgICAgIGJsb2NrU2Nyb2xsVXA9e2Jsb2NrU2Nyb2xsVXB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudCBjZW50ZXIgaG9tZS1hYm91dFwiIGtleT1cImhvbWUtYWJvdXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEFib3V0IHBhZ2U9e2Fib3V0fSBoYW5kbGVDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudCBjZW50ZXIgaG9tZS1wcm9kdWN0c1wiIGtleT1cImhvbWUtcHJvZHVjdHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1yaWdodCBjb21wb25lbnQgY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICBjYXQ9e3Byb2R1Y3RDYXR9XHJcbiAgICAgICAgICAgICAgICBwb3N0cz17cHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cmV2b2x1dGlvbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudCBjZW50ZXIgaG9tZS1yZXZvbHV0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxsaXBzZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxSZXZvbHV0aW9uIHBhZ2U9e3Jldm9sdXRpb259IGhhbmRsZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7aGlzdG9yeSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudCBjZW50ZXIgaGlzdG9yeVwiIGtleT1cImhvbWUtaGlzdG9yeVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsbGlwc2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1yaWdodCBjb21wb25lbnQgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxIaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAgIGNhdD17aGlzdG9yeUNhdH1cclxuICAgICAgICAgICAgICAgICAgcG9zdHM9e2hpc3Rvcnl9XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tc2hhcGUtbGluZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvVmVjdG9yNS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwidmVjdG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24tc2hhcGUtbGluZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL1ZlY3RvcjYuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInZlY3RvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uLXNoYXBlLWxpbmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudCBjZW50ZXJcIiBrZXk9XCJob21lLW1hcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGxpcHNlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8TWFwIGhhbmRsZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX0gcG9zdHM9e2xvY2F0aW9uc30gY2F0PXttYXBDYXR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQgY2VudGVyXCIga2V5PVwiaG9tZS1zcGVjaWFsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsbGlwc2VcIj48L2Rpdj5cclxuICAgICAgICAgIDxTcGVjaWFsXHJcbiAgICAgICAgICAgIHBvc3RzPXtmZWF0dXJlc31cclxuICAgICAgICAgICAgY2F0PXtmZWF0dXJlQ2F0fVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50IGNlbnRlclwiIGtleT1cImhvbWUtQXBwQ292ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvdmVyLWZvb3RlciBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8QXBwQ292ZXIgLz5cclxuICAgICAgICAgICAgPEZvb3RlciBwYWdlPXtjb250YWN0fSBoYW5kbGVDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdFBhZ2VTY3JvbGxlcj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgYWJvdXQgPSBhd2FpdCB3cFxyXG4gICAgLnBhZ2VzKClcclxuICAgIC5zbHVnKFwiYWJvdXRcIilcclxuICAgIC5lbWJlZCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCByZXZvbHV0aW9uID0gYXdhaXQgd3BcclxuICAgIC5wYWdlcygpXHJcbiAgICAuc2x1ZyhcInJldm9sdXRpb25cIilcclxuICAgIC5lbWJlZCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBjb250YWN0ID0gYXdhaXQgd3BcclxuICAgIC5wYWdlcygpXHJcbiAgICAuc2x1ZyhcImNvbnRhY3RcIilcclxuICAgIC5lbWJlZCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCBoaXN0b3J5Q2F0ID0gYXdhaXQgd3BcclxuICAgIC5jYXRlZ29yaWVzKClcclxuICAgIC5zbHVnKFwiaGlzdG9yeVwiKVxyXG4gICAgLmVtYmVkKClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhWzBdO1xyXG4gICAgfSk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHdwXHJcbiAgICAucG9zdHMoKVxyXG4gICAgLmNhdGVnb3JpZXMoaGlzdG9yeUNhdC5pZClcclxuICAgIC5lbWJlZCgpXHJcbiAgICAucGVyUGFnZSgxMDApXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblxyXG4gIGNvbnN0IGZlYXR1cmVDYXQgPSBhd2FpdCB3cFxyXG4gICAgLmNhdGVnb3JpZXMoKVxyXG4gICAgLnNsdWcoXCJmZWF0dXJlXCIpXHJcbiAgICAuZW1iZWQoKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGFbMF07XHJcbiAgICB9KTtcclxuICBjb25zdCBmZWF0dXJlcyA9IGF3YWl0IHdwXHJcbiAgICAucG9zdHMoKVxyXG4gICAgLmNhdGVnb3JpZXMoZmVhdHVyZUNhdC5pZClcclxuICAgIC5lbWJlZCgpXHJcbiAgICAucGVyUGFnZSgxMDApXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RDYXQgPSBhd2FpdCB3cFxyXG4gICAgLmNhdGVnb3JpZXMoKVxyXG4gICAgLnNsdWcoXCJwcm9kdWN0c1wiKVxyXG4gICAgLmVtYmVkKClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhWzBdO1xyXG4gICAgfSk7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB3cFxyXG4gICAgLnBvc3RzKClcclxuICAgIC5jYXRlZ29yaWVzKHByb2R1Y3RDYXQuaWQpXHJcbiAgICAuZW1iZWQoKVxyXG4gICAgLnBlclBhZ2UoMTAwKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTtcclxuICBjb25zdCBtYXBDYXQgPSBhd2FpdCB3cFxyXG4gICAgLmNhdGVnb3JpZXMoKVxyXG4gICAgLnNsdWcoXCJtYXBcIilcclxuICAgIC5lbWJlZCgpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YVswXTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgd3BcclxuICAgIC5wb3N0cygpXHJcbiAgICAuY2F0ZWdvcmllcyhtYXBDYXQuaWQpXHJcbiAgICAuZW1iZWQoKVxyXG4gICAgLnBlclBhZ2UoMTAwKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgYWJvdXQsXHJcbiAgICBjb250YWN0LFxyXG4gICAgaGlzdG9yeSxcclxuICAgIGhpc3RvcnlDYXQsXHJcbiAgICByZXZvbHV0aW9uLFxyXG4gICAgZmVhdHVyZUNhdCxcclxuICAgIGZlYXR1cmVzLFxyXG4gICAgcHJvZHVjdENhdCxcclxuICAgIHByb2R1Y3RzLFxyXG4gICAgbWFwQ2F0LFxyXG4gICAgbG9jYXRpb25zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MenuItem.js":
/*!************************************!*\
  !*** ./src/components/MenuItem.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/common */ \"./src/styles/common.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction MenuItem(param) {\n    var product = param.product;\n    //   const handleClick = Router.push();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_common__WEBPACK_IMPORTED_MODULE_1__.MenuCard, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\MartaMansfeld\\\\Development\\\\ecom\\\\crwn-clothing\\\\src\\\\components\\\\MenuItem.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_common__WEBPACK_IMPORTED_MODULE_1__.BackgroundImage, {\n                    style: {\n                        backgroundImage: \"url(\".concat(product.imageUrl, \")\")\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\MartaMansfeld\\\\Development\\\\ecom\\\\crwn-clothing\\\\src\\\\components\\\\MenuItem.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_common__WEBPACK_IMPORTED_MODULE_1__.MenuCardContent, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\MartaMansfeld\\\\Development\\\\ecom\\\\crwn-clothing\\\\src\\\\components\\\\MenuItem.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_common__WEBPACK_IMPORTED_MODULE_1__.MenuCardContentTitle, {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\MartaMansfeld\\\\Development\\\\ecom\\\\crwn-clothing\\\\src\\\\components\\\\MenuItem.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                \" \",\n                                product.title.toUpperCase()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_common__WEBPACK_IMPORTED_MODULE_1__.MenuCardContentSubtitle, {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\MartaMansfeld\\\\Development\\\\ecom\\\\crwn-clothing\\\\src\\\\components\\\\MenuItem.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"SHOP NOW\"\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_c = MenuItem;\nvar _c;\n$RefreshReg$(_c, \"MenuItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51SXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU15QjtBQUNPO0FBRWpCLFFBQVEsQ0FBQ00sUUFBUSxDQUFDLEtBQVcsRUFBRSxDQUFDO1FBQVpDLE9BQU8sR0FBVCxLQUFXLENBQVRBLE9BQU87SUFDeEMsRUFBdUM7SUFDdkMsTUFBTTt3RkFFREwsb0RBQVE7Ozs7Ozs7O3FGQUNORSwyREFBZTtvQkFDZEksS0FBSyxFQUFFLENBQUM7d0JBQUNDLGVBQWUsRUFBRyxDQUFJLE1BQW1CLE1BQUMsQ0FBbEJGLE9BQU8sQ0FBQ0csUUFBUSxFQUFDLENBQUM7b0JBQUUsQ0FBQzs7Ozs7Ozs7c0ZBRXZEViwyREFBZTs7Ozs7Ozs7OEZBQ2JHLGdFQUFvQjs7Ozs7Ozs7Z0NBQ2xCLENBQUc7Z0NBQ0hJLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDQyxXQUFXOzs7NkZBRTNCWCxtRUFBdUI7Ozs7Ozs7c0NBQUMsQ0FBUTs7Ozs7OztBQUszQyxDQUFDO0tBbEJ1QkssUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZW51SXRlbS5qcz81M2Q3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE1lbnVDYXJkQ29udGVudCxcbiAgTWVudUNhcmRDb250ZW50U3VidGl0bGUsXG4gIE1lbnVDYXJkLFxuICBNZW51Q2FyZENvbnRlbnRUaXRsZSxcbiAgQmFja2dyb3VuZEltYWdlLFxufSBmcm9tIFwiLi4vc3R5bGVzL2NvbW1vblwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0oeyBwcm9kdWN0IH0pIHtcbiAgLy8gICBjb25zdCBoYW5kbGVDbGljayA9IFJvdXRlci5wdXNoKCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZW51Q2FyZD5cbiAgICAgICAgPEJhY2tncm91bmRJbWFnZVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2R1Y3QuaW1hZ2VVcmx9KWAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1lbnVDYXJkQ29udGVudD5cbiAgICAgICAgICA8TWVudUNhcmRDb250ZW50VGl0bGU+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICB7cHJvZHVjdC50aXRsZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgIDwvTWVudUNhcmRDb250ZW50VGl0bGU+XG4gICAgICAgICAgPE1lbnVDYXJkQ29udGVudFN1YnRpdGxlPlNIT1AgTk9XPC9NZW51Q2FyZENvbnRlbnRTdWJ0aXRsZT5cbiAgICAgICAgPC9NZW51Q2FyZENvbnRlbnQ+XG4gICAgICA8L01lbnVDYXJkPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1lbnVDYXJkQ29udGVudCIsIk1lbnVDYXJkQ29udGVudFN1YnRpdGxlIiwiTWVudUNhcmQiLCJNZW51Q2FyZENvbnRlbnRUaXRsZSIsIkJhY2tncm91bmRJbWFnZSIsIlJvdXRlciIsIk1lbnVJdGVtIiwicHJvZHVjdCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MenuItem.js\n");

/***/ })

});
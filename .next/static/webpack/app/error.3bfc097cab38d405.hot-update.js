"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/error",{

/***/ "(app-pages-browser)/./src/components/Error.tsx":
/*!**********************************!*\
  !*** ./src/components/Error.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Error; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Error(param) {\n    let { error, reset } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center pt-10 bg-slate-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mt-5\",\n                children: \"OOPS! Something went wrong.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\components\\\\Error.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/dog.webp\",\n                alt: \"A dog of pug breed standing in the raind\",\n                width: 500,\n                height: 500,\n                className: \"mx-auto my-10 w-11/12 sm:max-w-md\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\components\\\\Error.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>reset(),\n                className: \"transition duration-200 ease-in-out uppercase tracking-wide inline-block bg-indigo-500 text-white rounded py-4 px-8 mx-auto mt-4 hover:bg-indigo-400 font-semibold active:bg-indigo-300\",\n                children: \"Try again\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\components\\\\Error.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\components\\\\Error.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Error;\nvar _c;\n$RefreshReg$(_c, \"Error\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Vycm9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQytCO0FBT2hCLFNBQVNDLE1BQU0sS0FBNEI7UUFBNUIsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQWMsR0FBNUI7SUFDMUIscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBTzs7Ozs7OzBCQUNyQiw4REFBQ0wsa0RBQUtBO2dCQUNGTyxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSTCxXQUFVOzs7Ozs7MEJBRWQsOERBQUNNO2dCQUNHQyxTQUFTLElBQU1UO2dCQUNmRSxXQUFVOzBCQUNiOzs7Ozs7Ozs7Ozs7QUFLYjtLQW5Cd0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Vycm9yLnRzeD9jNTE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmludGVyZmFjZSBFcnJvclByb3BzIHtcclxuICAgIGVycm9yOiBFcnJvciAmIHsgZGlnZXN0Pzogc3RyaW5nIH07XHJcbiAgICByZXNldDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3IoeyBlcnJvciwgcmVzZXQgfTogRXJyb3JQcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTEwIGJnLXNsYXRlLTMwMFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNVwiPk9PUFMhIFNvbWV0aGluZyB3ZW50IHdyb25nLjwvaDI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2RvZy53ZWJwXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkEgZG9nIG9mIHB1ZyBicmVlZCBzdGFuZGluZyBpbiB0aGUgcmFpbmRcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBteS0xMCB3LTExLzEyIHNtOm1heC13LW1kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVzZXQoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGlubGluZS1ibG9jayBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgcm91bmRlZCBweS00IHB4LTggbXgtYXV0byBtdC00IGhvdmVyOmJnLWluZGlnby00MDAgZm9udC1zZW1pYm9sZCBhY3RpdmU6YmctaW5kaWdvLTMwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFRyeSBhZ2FpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRXJyb3IiLCJlcnJvciIsInJlc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Error.tsx\n"));

/***/ })

});
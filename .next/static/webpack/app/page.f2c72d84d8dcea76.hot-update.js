"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Breed.tsx":
/*!**********************************!*\
  !*** ./src/components/Breed.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Breed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\nfunction Breed(param) {\n    let { breedName } = param;\n    //console.log(profileImage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-2 border-slate-950 text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"uppercase text-xl\",\n                children: breedName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\components\\\\Breed.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: {\n                    pathname: \"/breed-images\",\n                    query: {\n                        breedName: breedName,\n                        subBreedExists: false\n                    }\n                },\n                className: \"transition duration-200 ease-in-out uppercase tracking-wide inline-block bg-indigo-500 text-white rounded py-4 px-8 ml-5 mt-4 hover:bg-indigo-400 font-semibold active:bg-indigo-300\",\n                children: [\n                    \"See more images of \",\n                    breedName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\components\\\\Breed.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\components\\\\Breed.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = Breed;\nvar _c;\n$RefreshReg$(_c, \"Breed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JyZWVkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFFZjtBQU9kLFNBQVNFLE1BQVUsS0FBb0I7UUFBcEIsRUFBRUMsU0FBUyxFQUFTLEdBQXBCO0lBQzlCLDRCQUE0QjtJQUM1QixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQkY7Ozs7OzswQkFDbkMsOERBQUNGLGlEQUFJQTtnQkFDRE0sTUFBTTtvQkFDRkMsVUFBVTtvQkFDVkMsT0FBTzt3QkFBRU4sV0FBV0E7d0JBQVdPLGdCQUFnQjtvQkFBTTtnQkFDekQ7Z0JBQ0FMLFdBQVU7O29CQUNiO29CQUN1QkY7Ozs7Ozs7Ozs7Ozs7QUFJcEM7S0FoQndCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CcmVlZC50c3g/MmNlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdWJCcmVlZCBmcm9tIFwiLi9TdWJCcmVlZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuaW50ZXJmYWNlIEJyZWVkIHtcclxuICAgIGJyZWVkTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmVlZDxGQz4oeyBicmVlZE5hbWUgfTogQnJlZWQpIHtcclxuICAgIC8vY29uc29sZS5sb2cocHJvZmlsZUltYWdlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItc2xhdGUtOTUwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC14bFwiPnticmVlZE5hbWV9PC9oND5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvYnJlZWQtaW1hZ2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgYnJlZWROYW1lOiBicmVlZE5hbWUsIHN1YkJyZWVkRXhpc3RzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGlubGluZS1ibG9jayBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgcm91bmRlZCBweS00IHB4LTggbWwtNSBtdC00IGhvdmVyOmJnLWluZGlnby00MDAgZm9udC1zZW1pYm9sZCBhY3RpdmU6YmctaW5kaWdvLTMwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNlZSBtb3JlIGltYWdlcyBvZiB7YnJlZWROYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJCcmVlZCIsImJyZWVkTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiaHJlZiIsInBhdGhuYW1lIiwicXVlcnkiLCJzdWJCcmVlZEV4aXN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Breed.tsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Breed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/Breed */ \"(app-pages-browser)/./src/components/Breed.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [breeds, setBreeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [breedWithProfile, setBreedWithProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const first = async ()=>{\n            try {\n                const data = await fetch(\"https://dog.ceo/api/breeds/list/all\");\n                const response = await data.json();\n                const hey = Object.entries(response.message);\n                setBreeds(hey);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        first();\n    }, []);\n    console.logs(breeds);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: breeds.map((breed)=>{\n            const [name, collection] = breed;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    breedName: name,\n                    collection: collection\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 25\n                }, this)\n            }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"unM7ad/6B8TqkgBWbdlxL+krT+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkQ7QUFDbEI7QUFDUDtBQUVyQixTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUF1QixFQUFFO0lBQzdELE1BQU0sQ0FBQ1Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQVcsRUFBRTtJQUVyRUMsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxRQUFRO1lBQ1YsSUFBSTtnQkFDQSxNQUFNQyxPQUFPLE1BQU1DLE1BQU07Z0JBQ3pCLE1BQU1DLFdBQVcsTUFBTUYsS0FBS0csSUFBSTtnQkFDaEMsTUFBTUMsTUFBV0MsT0FBT0MsT0FBTyxDQUFXSixTQUFTSyxPQUFPO2dCQUMxRFgsVUFBVVE7WUFDZCxFQUFFLE9BQU9JLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7WUFDbEI7UUFDSjtRQUVBVDtJQUNKLEdBQUcsRUFBRTtJQUVMVSxRQUFRQyxJQUFJLENBQUNmO0lBRWIscUJBQ0ksOERBQUNnQjtrQkFDSWhCLE9BQU9pQixHQUFHLENBQUMsQ0FBQ0M7WUFDVCxNQUFNLENBQUNDLE1BQU1DLFdBQVcsR0FBR0Y7WUFDM0IscUJBQ0ksOERBQUN2QiwyQ0FBUUE7MEJBQ0wsNEVBQUNDLDZEQUFLQTtvQkFBQ3lCLFdBQVdGO29CQUFNQyxZQUFZQTs7Ozs7O2VBRHpCdEIsZ0RBQU1BOzs7OztRQUk3Qjs7Ozs7O0FBR1o7R0FqQ3dCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCcmVlZCBmcm9tIFwiQC9zcmMvY29tcG9uZW50cy9CcmVlZFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbYnJlZWRzLCBzZXRCcmVlZHNdID0gdXNlU3RhdGU8W3N0cmluZywgc3RyaW5nW11dW10+KFtdKTtcbiAgICBjb25zdCBbYnJlZWRXaXRoUHJvZmlsZSwgc2V0QnJlZWRXaXRoUHJvZmlsZV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGV5OiBhbnkgPSBPYmplY3QuZW50cmllczxzdHJpbmdbXT4ocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgc2V0QnJlZWRzKGhleSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZpcnN0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2dzKGJyZWVkcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIHticmVlZHMubWFwKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW25hbWUsIGNvbGxlY3Rpb25dID0gYnJlZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWVkIGJyZWVkTmFtZT17bmFtZX0gY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGcmFnbWVudCIsIkJyZWVkIiwidjQiLCJ1dWlkdjQiLCJIb21lIiwiYnJlZWRzIiwic2V0QnJlZWRzIiwiYnJlZWRXaXRoUHJvZmlsZSIsInNldEJyZWVkV2l0aFByb2ZpbGUiLCJmaXJzdCIsImRhdGEiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImhleSIsIk9iamVjdCIsImVudHJpZXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9ncyIsIm1haW4iLCJtYXAiLCJicmVlZCIsIm5hbWUiLCJjb2xsZWN0aW9uIiwiYnJlZWROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Breed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/Breed */ \"(app-pages-browser)/./src/components/Breed.tsx\");\n/* harmony import */ var _components_SubBreed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubBreed */ \"(app-pages-browser)/./src/components/SubBreed.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [breeds, setBreeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [breedWithProfile, setBreedWithProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const first = async ()=>{\n            try {\n                const data = await fetch(\"https://dog.ceo/api/breeds/list/all\");\n                const response = await data.json();\n                const hey = Object.entries(response.message);\n                setBreeds(hey);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        first();\n    }, []);\n    const withoutSubBreed = breeds.filter((breed)=>{\n        const [name, subBreeds] = breed;\n        return subBreeds.length === 0;\n    });\n    const withSubBreed = breeds.filter((breed)=>{\n        const [name, subBreeds] = breed;\n        return subBreeds.length > 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Without sub-breed:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            withoutSubBreed.map((breed)=>{\n                const [name, collection] = breed;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"grid grid-cols-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        breedName: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, this)\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), false, {\n                    fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"With sub-breed:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            withSubBreed.map((breed)=>{\n                const [name, collection] = breed;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            breedName: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 25\n                        }, this),\n                        collection.length != 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubBreed__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            breedName: name,\n                            collection: collection\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), true, {\n                    fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"unM7ad/6B8TqkgBWbdlxL+krT+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZEO0FBQ2xCO0FBQ0c7QUFDVjtBQUVyQixTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUF1QixFQUFFO0lBQzdELE1BQU0sQ0FBQ1Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQVcsRUFBRTtJQUVyRUMsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxRQUFRO1lBQ1YsSUFBSTtnQkFDQSxNQUFNQyxPQUFPLE1BQU1DLE1BQU07Z0JBQ3pCLE1BQU1DLFdBQVcsTUFBTUYsS0FBS0csSUFBSTtnQkFDaEMsTUFBTUMsTUFBV0MsT0FBT0MsT0FBTyxDQUFXSixTQUFTSyxPQUFPO2dCQUMxRFgsVUFBVVE7WUFDZCxFQUFFLE9BQU9JLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7WUFDbEI7UUFDSjtRQUVBVDtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1XLGtCQUFrQmYsT0FBT2dCLE1BQU0sQ0FBQyxDQUFDQztRQUNuQyxNQUFNLENBQUNDLE1BQU1DLFVBQVUsR0FBR0Y7UUFDMUIsT0FBT0UsVUFBVUMsTUFBTSxLQUFLO0lBQ2hDO0lBRUEsTUFBTUMsZUFBZXJCLE9BQU9nQixNQUFNLENBQUMsQ0FBQ0M7UUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxVQUFVLEdBQUdGO1FBQzFCLE9BQU9FLFVBQVVDLE1BQU0sR0FBRztJQUM5QjtJQUVBLHFCQUNJLDhEQUFDRTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7WUFDSFIsZ0JBQWdCUyxHQUFHLENBQUMsQ0FBQ1A7Z0JBQ2xCLE1BQU0sQ0FBQ0MsTUFBTU8sV0FBVyxHQUFHUjtnQkFDM0IscUJBQ0ksOERBQUNTO29CQUF1QkMsV0FBVTs4QkFDOUIsNEVBQUNoQyw2REFBS0E7d0JBQUNpQyxXQUFXVjs7Ozs7O21CQURScEIsZ0RBQU1BOzs7OztZQUk1QjswQkFDQSw4REFBQ3lCOzBCQUFHOzs7Ozs7WUFDSEYsYUFBYUcsR0FBRyxDQUFDLENBQUNQO2dCQUNmLE1BQU0sQ0FBQ0MsTUFBTU8sV0FBVyxHQUFHUjtnQkFDM0IscUJBQ0ksOERBQUNTOztzQ0FDRyw4REFBQy9CLDZEQUFLQTs0QkFBQ2lDLFdBQVdWOzs7Ozs7d0JBQ2pCTyxXQUFXTCxNQUFNLElBQUksbUJBQ2xCLDhEQUFDeEIsNERBQVFBOzRCQUNMZ0MsV0FBV1Y7NEJBQ1hPLFlBQVlBOzs7Ozs7O21CQUxWM0IsZ0RBQU1BOzs7OztZQVU1Qjs7Ozs7OztBQUdaO0dBekR3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnJlZWQgZnJvbSBcIkAvc3JjL2NvbXBvbmVudHMvQnJlZWRcIjtcbmltcG9ydCBTdWJCcmVlZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdWJCcmVlZFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbYnJlZWRzLCBzZXRCcmVlZHNdID0gdXNlU3RhdGU8W3N0cmluZywgc3RyaW5nW11dW10+KFtdKTtcbiAgICBjb25zdCBbYnJlZWRXaXRoUHJvZmlsZSwgc2V0QnJlZWRXaXRoUHJvZmlsZV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGV5OiBhbnkgPSBPYmplY3QuZW50cmllczxzdHJpbmdbXT4ocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgc2V0QnJlZWRzKGhleSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZpcnN0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgd2l0aG91dFN1YkJyZWVkID0gYnJlZWRzLmZpbHRlcigoYnJlZWQpID0+IHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1YkJyZWVkc10gPSBicmVlZDtcbiAgICAgICAgcmV0dXJuIHN1YkJyZWVkcy5sZW5ndGggPT09IDA7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3aXRoU3ViQnJlZWQgPSBicmVlZHMuZmlsdGVyKChicmVlZCkgPT4ge1xuICAgICAgICBjb25zdCBbbmFtZSwgc3ViQnJlZWRzXSA9IGJyZWVkO1xuICAgICAgICByZXR1cm4gc3ViQnJlZWRzLmxlbmd0aCA+IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxoMj5XaXRob3V0IHN1Yi1icmVlZDo8L2gyPlxuICAgICAgICAgICAge3dpdGhvdXRTdWJCcmVlZC5tYXAoKGJyZWVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbmFtZSwgY29sbGVjdGlvbl0gPSBicmVlZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlZWQgYnJlZWROYW1lPXtuYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGgyPldpdGggc3ViLWJyZWVkOjwvaDI+XG4gICAgICAgICAgICB7d2l0aFN1YkJyZWVkLm1hcCgoYnJlZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBjb2xsZWN0aW9uXSA9IGJyZWVkO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWVkIGJyZWVkTmFtZT17bmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsZWN0aW9uLmxlbmd0aCAhPSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3ViQnJlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlZWROYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnJlZWQiLCJTdWJCcmVlZCIsInY0IiwidXVpZHY0IiwiSG9tZSIsImJyZWVkcyIsInNldEJyZWVkcyIsImJyZWVkV2l0aFByb2ZpbGUiLCJzZXRCcmVlZFdpdGhQcm9maWxlIiwiZmlyc3QiLCJkYXRhIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJoZXkiLCJPYmplY3QiLCJlbnRyaWVzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsIndpdGhvdXRTdWJCcmVlZCIsImZpbHRlciIsImJyZWVkIiwibmFtZSIsInN1YkJyZWVkcyIsImxlbmd0aCIsIndpdGhTdWJCcmVlZCIsIm1haW4iLCJoMiIsIm1hcCIsImNvbGxlY3Rpb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiYnJlZWROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
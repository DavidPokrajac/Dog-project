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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Breed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/Breed */ \"(app-pages-browser)/./src/components/Breed.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [breeds, setBreeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [breedWithProfile, setBreedWithProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const first = async ()=>{\n            try {\n                const data = await fetch(\"https://dog.ceo/api/breeds/list/all\");\n                const response = await data.json();\n                const hey = Object.entries(response.message);\n                setBreeds(hey);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        first();\n    }, []);\n    const withoutSubBreed = breeds.filter((breed)=>{\n        const [name, subBreeds] = breed;\n        return subBreeds.length === 0;\n    });\n    const withSubBreed = breeds.filter((breed)=>{\n        const [name, subBreeds] = breed;\n        return subBreeds.length > 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Without sub-breed:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid grid-cols-2 gap-5 p-5\",\n                children: withoutSubBreed.map((breed)=>{\n                    const [name, collection] = breed;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            breedName: name,\n                            collection: collection\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 29\n                        }, this)\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"With sub-breed:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid grid-cols-2 gap-5 p-5 grid-rows-auto\",\n                children: withSubBreed.map((breed)=>{\n                    const [name, collection] = breed;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            breedName: name,\n                            collection: collection\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 29\n                        }, this)\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"unM7ad/6B8TqkgBWbdlxL+krT+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkQ7QUFDbEI7QUFDUDtBQUVyQixTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUF1QixFQUFFO0lBQzdELE1BQU0sQ0FBQ1Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQVcsRUFBRTtJQUVyRUMsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxRQUFRO1lBQ1YsSUFBSTtnQkFDQSxNQUFNQyxPQUFPLE1BQU1DLE1BQU07Z0JBQ3pCLE1BQU1DLFdBQVcsTUFBTUYsS0FBS0csSUFBSTtnQkFDaEMsTUFBTUMsTUFBV0MsT0FBT0MsT0FBTyxDQUFXSixTQUFTSyxPQUFPO2dCQUMxRFgsVUFBVVE7WUFDZCxFQUFFLE9BQU9JLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7WUFDbEI7UUFDSjtRQUVBVDtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1XLGtCQUFrQmYsT0FBT2dCLE1BQU0sQ0FBQyxDQUFDQztRQUNuQyxNQUFNLENBQUNDLE1BQU1DLFVBQVUsR0FBR0Y7UUFDMUIsT0FBT0UsVUFBVUMsTUFBTSxLQUFLO0lBQ2hDO0lBRUEsTUFBTUMsZUFBZXJCLE9BQU9nQixNQUFNLENBQUMsQ0FBQ0M7UUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxVQUFVLEdBQUdGO1FBQzFCLE9BQU9FLFVBQVVDLE1BQU0sR0FBRztJQUM5QjtJQUVBLHFCQUNJLDhEQUFDRTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFRQyxXQUFVOzBCQUNkVixnQkFBZ0JXLEdBQUcsQ0FBQyxDQUFDVDtvQkFDbEIsTUFBTSxDQUFDQyxNQUFNUyxXQUFXLEdBQUdWO29CQUMzQixxQkFDSSw4REFBQ3RCLDJDQUFRQTtrQ0FDTCw0RUFBQ0MsNkRBQUtBOzRCQUFDZ0MsV0FBV1Y7NEJBQU1TLFlBQVlBOzs7Ozs7dUJBRHpCN0IsZ0RBQU1BOzs7OztnQkFJN0I7Ozs7OzswQkFFSiw4REFBQ3lCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFRQyxXQUFVOzBCQUNkSixhQUFhSyxHQUFHLENBQUMsQ0FBQ1Q7b0JBQ2YsTUFBTSxDQUFDQyxNQUFNUyxXQUFXLEdBQUdWO29CQUMzQixxQkFDSSw4REFBQ3RCLDJDQUFRQTtrQ0FDTCw0RUFBQ0MsNkRBQUtBOzRCQUFDZ0MsV0FBV1Y7NEJBQU1TLFlBQVlBOzs7Ozs7dUJBRHpCN0IsZ0RBQU1BOzs7OztnQkFJN0I7Ozs7Ozs7Ozs7OztBQUloQjtHQXZEd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJyZWVkIGZyb20gXCJAL3NyYy9jb21wb25lbnRzL0JyZWVkXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFticmVlZHMsIHNldEJyZWVkc10gPSB1c2VTdGF0ZTxbc3RyaW5nLCBzdHJpbmdbXV1bXT4oW10pO1xuICAgIGNvbnN0IFticmVlZFdpdGhQcm9maWxlLCBzZXRCcmVlZFdpdGhQcm9maWxlXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZXk6IGFueSA9IE9iamVjdC5lbnRyaWVzPHN0cmluZ1tdPihyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRCcmVlZHMoaGV5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlyc3QoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCB3aXRob3V0U3ViQnJlZWQgPSBicmVlZHMuZmlsdGVyKChicmVlZCkgPT4ge1xuICAgICAgICBjb25zdCBbbmFtZSwgc3ViQnJlZWRzXSA9IGJyZWVkO1xuICAgICAgICByZXR1cm4gc3ViQnJlZWRzLmxlbmd0aCA9PT0gMDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdpdGhTdWJCcmVlZCA9IGJyZWVkcy5maWx0ZXIoKGJyZWVkKSA9PiB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWJCcmVlZHNdID0gYnJlZWQ7XG4gICAgICAgIHJldHVybiBzdWJCcmVlZHMubGVuZ3RoID4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgyPldpdGhvdXQgc3ViLWJyZWVkOjwvaDI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHAtNVwiPlxuICAgICAgICAgICAgICAgIHt3aXRob3V0U3ViQnJlZWQubWFwKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBjb2xsZWN0aW9uXSA9IGJyZWVkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVlZCBicmVlZE5hbWU9e25hbWV9IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPGgyPldpdGggc3ViLWJyZWVkOjwvaDI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHAtNSBncmlkLXJvd3MtYXV0b1wiPlxuICAgICAgICAgICAgICAgIHt3aXRoU3ViQnJlZWQubWFwKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBjb2xsZWN0aW9uXSA9IGJyZWVkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVlZCBicmVlZE5hbWU9e25hbWV9IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRnJhZ21lbnQiLCJCcmVlZCIsInY0IiwidXVpZHY0IiwiSG9tZSIsImJyZWVkcyIsInNldEJyZWVkcyIsImJyZWVkV2l0aFByb2ZpbGUiLCJzZXRCcmVlZFdpdGhQcm9maWxlIiwiZmlyc3QiLCJkYXRhIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJoZXkiLCJPYmplY3QiLCJlbnRyaWVzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsIndpdGhvdXRTdWJCcmVlZCIsImZpbHRlciIsImJyZWVkIiwibmFtZSIsInN1YkJyZWVkcyIsImxlbmd0aCIsIndpdGhTdWJCcmVlZCIsIm1haW4iLCJoMiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJtYXAiLCJjb2xsZWN0aW9uIiwiYnJlZWROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
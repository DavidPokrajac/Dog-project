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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Breed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/Breed */ \"(app-pages-browser)/./src/components/Breed.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [breeds, setBreeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [breedWithProfile, setBreedWithProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const first = async ()=>{\n            try {\n                const data = await fetch(\"https://dog.ceo/api/breeds/list/all\");\n                const response = await data.json();\n                const hey = Object.entries(response.message);\n                setBreeds(hey);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        first();\n    }, []);\n    const withoutSubBreed = breeds.filter((breed)=>{\n        const [name, subBreeds] = breed;\n        return subBreeds.length === 0;\n    });\n    const withSubBreed = breeds.filter((breed)=>{\n        const [name, subBreeds] = breed;\n        return subBreeds.length > 0;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"ml-4 my-10\",\n                children: \"Without sub-breed:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid grid-cols-2 gap-5 p-5\",\n                children: withoutSubBreed.map((breed)=>{\n                    const [name, collection] = breed;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            breedName: name,\n                            collection: collection\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 29\n                        }, this)\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"ml-4 my-10\",\n                children: \"With sub-breed:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid grid-cols-2 gap-5 p-5 auto-rows-min\",\n                children: withSubBreed.map((breed)=>{\n                    const [name, collection] = breed;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            breedName: name,\n                            collection: collection\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 29\n                        }, this)\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"unM7ad/6B8TqkgBWbdlxL+krT+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkQ7QUFDbEI7QUFDUDtBQUVyQixTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUF1QixFQUFFO0lBQzdELE1BQU0sQ0FBQ1Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQVcsRUFBRTtJQUVyRUMsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxRQUFRO1lBQ1YsSUFBSTtnQkFDQSxNQUFNQyxPQUFPLE1BQU1DLE1BQU07Z0JBQ3pCLE1BQU1DLFdBQVcsTUFBTUYsS0FBS0csSUFBSTtnQkFDaEMsTUFBTUMsTUFBV0MsT0FBT0MsT0FBTyxDQUFXSixTQUFTSyxPQUFPO2dCQUMxRFgsVUFBVVE7WUFDZCxFQUFFLE9BQU9JLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7WUFDbEI7UUFDSjtRQUVBVDtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1XLGtCQUFrQmYsT0FBT2dCLE1BQU0sQ0FBQyxDQUFDQztRQUNuQyxNQUFNLENBQUNDLE1BQU1DLFVBQVUsR0FBR0Y7UUFDMUIsT0FBT0UsVUFBVUMsTUFBTSxLQUFLO0lBQ2hDO0lBRUEsTUFBTUMsZUFBZXJCLE9BQU9nQixNQUFNLENBQUMsQ0FBQ0M7UUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxVQUFVLEdBQUdGO1FBQzFCLE9BQU9FLFVBQVVDLE1BQU0sR0FBRztJQUM5QjtJQUVBLHFCQUNJLDhEQUFDRTs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFhOzs7Ozs7MEJBQzNCLDhEQUFDQztnQkFBUUQsV0FBVTswQkFDZFQsZ0JBQWdCVyxHQUFHLENBQUMsQ0FBQ1Q7b0JBQ2xCLE1BQU0sQ0FBQ0MsTUFBTVMsV0FBVyxHQUFHVjtvQkFDM0IscUJBQ0ksOERBQUN0QiwyQ0FBUUE7a0NBQ0wsNEVBQUNDLDZEQUFLQTs0QkFBQ2dDLFdBQVdWOzRCQUFNUyxZQUFZQTs7Ozs7O3VCQUR6QjdCLGdEQUFNQTs7Ozs7Z0JBSTdCOzs7Ozs7MEJBRUosOERBQUN5QjtnQkFBR0MsV0FBVTswQkFBYTs7Ozs7OzBCQUMzQiw4REFBQ0M7Z0JBQVFELFdBQVU7MEJBQ2RILGFBQWFLLEdBQUcsQ0FBQyxDQUFDVDtvQkFDZixNQUFNLENBQUNDLE1BQU1TLFdBQVcsR0FBR1Y7b0JBQzNCLHFCQUNJLDhEQUFDdEIsMkNBQVFBO2tDQUNMLDRFQUFDQyw2REFBS0E7NEJBQUNnQyxXQUFXVjs0QkFBTVMsWUFBWUE7Ozs7Ozt1QkFEekI3QixnREFBTUE7Ozs7O2dCQUk3Qjs7Ozs7Ozs7Ozs7O0FBSWhCO0dBdkR3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnJlZWQgZnJvbSBcIkAvc3JjL2NvbXBvbmVudHMvQnJlZWRcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2JyZWVkcywgc2V0QnJlZWRzXSA9IHVzZVN0YXRlPFtzdHJpbmcsIHN0cmluZ1tdXVtdPihbXSk7XG4gICAgY29uc3QgW2JyZWVkV2l0aFByb2ZpbGUsIHNldEJyZWVkV2l0aFByb2ZpbGVdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhleTogYW55ID0gT2JqZWN0LmVudHJpZXM8c3RyaW5nW10+KHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHNldEJyZWVkcyhoZXkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmaXJzdCgpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHdpdGhvdXRTdWJCcmVlZCA9IGJyZWVkcy5maWx0ZXIoKGJyZWVkKSA9PiB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWJCcmVlZHNdID0gYnJlZWQ7XG4gICAgICAgIHJldHVybiBzdWJCcmVlZHMubGVuZ3RoID09PSAwO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd2l0aFN1YkJyZWVkID0gYnJlZWRzLmZpbHRlcigoYnJlZWQpID0+IHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1YkJyZWVkc10gPSBicmVlZDtcbiAgICAgICAgcmV0dXJuIHN1YkJyZWVkcy5sZW5ndGggPiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWwtNCBteS0xMFwiPldpdGhvdXQgc3ViLWJyZWVkOjwvaDI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHAtNVwiPlxuICAgICAgICAgICAgICAgIHt3aXRob3V0U3ViQnJlZWQubWFwKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBjb2xsZWN0aW9uXSA9IGJyZWVkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVlZCBicmVlZE5hbWU9e25hbWV9IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1sLTQgbXktMTBcIj5XaXRoIHN1Yi1icmVlZDo8L2gyPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwLTUgYXV0by1yb3dzLW1pblwiPlxuICAgICAgICAgICAgICAgIHt3aXRoU3ViQnJlZWQubWFwKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBjb2xsZWN0aW9uXSA9IGJyZWVkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVlZCBicmVlZE5hbWU9e25hbWV9IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRnJhZ21lbnQiLCJCcmVlZCIsInY0IiwidXVpZHY0IiwiSG9tZSIsImJyZWVkcyIsInNldEJyZWVkcyIsImJyZWVkV2l0aFByb2ZpbGUiLCJzZXRCcmVlZFdpdGhQcm9maWxlIiwiZmlyc3QiLCJkYXRhIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJoZXkiLCJPYmplY3QiLCJlbnRyaWVzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsIndpdGhvdXRTdWJCcmVlZCIsImZpbHRlciIsImJyZWVkIiwibmFtZSIsInN1YkJyZWVkcyIsImxlbmd0aCIsIndpdGhTdWJCcmVlZCIsIm1haW4iLCJoMiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJtYXAiLCJjb2xsZWN0aW9uIiwiYnJlZWROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
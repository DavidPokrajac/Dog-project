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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Breed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/Breed */ \"(app-pages-browser)/./src/components/Breed.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [breeds, setBreeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [breedWithProfile, setBreedWithProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const first = async ()=>{\n            try {\n                const data = await fetch(\"https://dog.ceo/api/breeds/list/all\");\n                const response = await data.json();\n                const hey = Object.entries(response.message);\n                setBreeds(hey);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        first();\n        Promise.all(breeds).then(()=>{\n            const hi = [];\n            const yello = [\n                ...breeds\n            ].map((breed)=>{\n                console.log(breed);\n                const [br] = breed;\n                //console.log(br);\n                fetch(\"https://dog.ceo/api/breed/\".concat(br, \"/images/\")).then((response)=>response.json()).then((data)=>{\n                    //console.log(data);\n                    const [firstPhoto] = data.message;\n                    //console.log(firstPhoto);\n                    hi.push(firstPhoto);\n                    //console.log(data.message);\n                    //setBreedWithProfile([data.message]);\n                    //console.log(\"HEY\", hi);\n                    setBreedWithProfile(hi);\n                }).catch((error)=>console.error(error));\n            });\n            console.log(yello);\n        });\n    }, []);\n    /*useEffect(() => {\n        // console.log(breedsProfilePicture);\n        const hi: any[] = [];\n        const yello = [...breeds].forEach((breed: any) => {\n            //console.log(breed);\n            const [br] = breed;\n            //console.log(br);\n            fetch(`https://dog.ceo/api/breed/${br}/images/`)\n                .then((response) => response.json())\n                .then((data) => {\n                    //console.log(data);\n                    const [firstPhoto] = data.message;\n                    //console.log(firstPhoto);\n                    hi.push(firstPhoto);\n                    //console.log(data.message);\n                    //setBreedWithProfile([data.message]);\n                    //console.log(\"HEY\", hi);\n                    setBreedWithProfile(hi);\n                })\n                .catch((error) => console.error(error));\n        });\n    }, [breeds]);*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: breeds.map((breed)=>{\n            const [name, collection] = breed;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    breedName: name,\n                    collection: collection\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 25\n                }, this)\n            }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"unM7ad/6B8TqkgBWbdlxL+krT+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDUjtBQUNQO0FBRXJCLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQXVCLEVBQUU7SUFDN0QsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRXJFQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLFFBQVE7WUFDVixJQUFJO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUMsTUFBTTtnQkFDekIsTUFBTUMsV0FBVyxNQUFNRixLQUFLRyxJQUFJO2dCQUNoQyxNQUFNQyxNQUFXQyxPQUFPQyxPQUFPLENBQVdKLFNBQVNLLE9BQU87Z0JBQzFEWCxVQUFVUTtZQUNkLEVBQUUsT0FBT0ksT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDQTtZQUNsQjtRQUNKO1FBRUFUO1FBQ0FXLFFBQVFDLEdBQUcsQ0FBQ2hCLFFBQVFpQixJQUFJLENBQUM7WUFDckIsTUFBTUMsS0FBWSxFQUFFO1lBQ3BCLE1BQU1DLFFBQVE7bUJBQUluQjthQUFPLENBQUNvQixHQUFHLENBQUMsQ0FBQ0M7Z0JBQzNCUCxRQUFRUSxHQUFHLENBQUNEO2dCQUNaLE1BQU0sQ0FBQ0UsR0FBRyxHQUFHRjtnQkFDYixrQkFBa0I7Z0JBQ2xCZixNQUFNLDZCQUFnQyxPQUFIaUIsSUFBRyxhQUNqQ04sSUFBSSxDQUFDLENBQUNWLFdBQWFBLFNBQVNDLElBQUksSUFDaENTLElBQUksQ0FBQyxDQUFDWjtvQkFDSCxvQkFBb0I7b0JBQ3BCLE1BQU0sQ0FBQ21CLFdBQVcsR0FBR25CLEtBQUtPLE9BQU87b0JBQ2pDLDBCQUEwQjtvQkFDMUJNLEdBQUdPLElBQUksQ0FBQ0Q7b0JBQ1IsNEJBQTRCO29CQUM1QixzQ0FBc0M7b0JBQ3RDLHlCQUF5QjtvQkFDekJyQixvQkFBb0JlO2dCQUN4QixHQUNDUSxLQUFLLENBQUMsQ0FBQ2IsUUFBVUMsUUFBUUQsS0FBSyxDQUFDQTtZQUN4QztZQUNBQyxRQUFRUSxHQUFHLENBQUNIO1FBQ2hCO0lBQ0osR0FBRyxFQUFFO0lBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFxQmEsR0FFYixxQkFDSSw4REFBQ1E7a0JBQ0kzQixPQUFPb0IsR0FBRyxDQUFDLENBQUNDO1lBQ1QsTUFBTSxDQUFDTyxNQUFNQyxXQUFXLEdBQUdSO1lBQzNCLHFCQUNJLDhEQUFDUzswQkFDRyw0RUFBQ2xDLDZEQUFLQTtvQkFBQ21DLFdBQVdIO29CQUFNQyxZQUFZQTs7Ozs7O2VBRDlCL0IsZ0RBQU1BOzs7OztRQUl4Qjs7Ozs7O0FBR1o7R0E1RXdCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJyZWVkIGZyb20gXCJAL3NyYy9jb21wb25lbnRzL0JyZWVkXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFticmVlZHMsIHNldEJyZWVkc10gPSB1c2VTdGF0ZTxbc3RyaW5nLCBzdHJpbmdbXV1bXT4oW10pO1xuICAgIGNvbnN0IFticmVlZFdpdGhQcm9maWxlLCBzZXRCcmVlZFdpdGhQcm9maWxlXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZXk6IGFueSA9IE9iamVjdC5lbnRyaWVzPHN0cmluZ1tdPihyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRCcmVlZHMoaGV5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlyc3QoKTtcbiAgICAgICAgUHJvbWlzZS5hbGwoYnJlZWRzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgeWVsbG8gPSBbLi4uYnJlZWRzXS5tYXAoKGJyZWVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhicmVlZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgW2JyXSA9IGJyZWVkO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYnIpO1xuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7YnJ9L2ltYWdlcy9gKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbZmlyc3RQaG90b10gPSBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpcnN0UGhvdG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGkucHVzaChmaXJzdFBob3RvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0QnJlZWRXaXRoUHJvZmlsZShbZGF0YS5tZXNzYWdlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSEVZXCIsIGhpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyZWVkV2l0aFByb2ZpbGUoaGkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHllbGxvKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgLyp1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhicmVlZHNQcm9maWxlUGljdHVyZSk7XG4gICAgICAgIGNvbnN0IGhpOiBhbnlbXSA9IFtdO1xuICAgICAgICBjb25zdCB5ZWxsbyA9IFsuLi5icmVlZHNdLmZvckVhY2goKGJyZWVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYnJlZWQpO1xuICAgICAgICAgICAgY29uc3QgW2JyXSA9IGJyZWVkO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhicik7XG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke2JyfS9pbWFnZXMvYClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbZmlyc3RQaG90b10gPSBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZmlyc3RQaG90byk7XG4gICAgICAgICAgICAgICAgICAgIGhpLnB1c2goZmlyc3RQaG90byk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgLy9zZXRCcmVlZFdpdGhQcm9maWxlKFtkYXRhLm1lc3NhZ2VdKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkhFWVwiLCBoaSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEJyZWVkV2l0aFByb2ZpbGUoaGkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICB9KTtcbiAgICB9LCBbYnJlZWRzXSk7Ki9cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgICAge2JyZWVkcy5tYXAoKGJyZWVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbmFtZSwgY29sbGVjdGlvbl0gPSBicmVlZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWVkIGJyZWVkTmFtZT17bmFtZX0gY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnJlZWQiLCJ2NCIsInV1aWR2NCIsIkhvbWUiLCJicmVlZHMiLCJzZXRCcmVlZHMiLCJicmVlZFdpdGhQcm9maWxlIiwic2V0QnJlZWRXaXRoUHJvZmlsZSIsImZpcnN0IiwiZGF0YSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiaGV5IiwiT2JqZWN0IiwiZW50cmllcyIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImhpIiwieWVsbG8iLCJtYXAiLCJicmVlZCIsImxvZyIsImJyIiwiZmlyc3RQaG90byIsInB1c2giLCJjYXRjaCIsIm1haW4iLCJuYW1lIiwiY29sbGVjdGlvbiIsImRpdiIsImJyZWVkTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
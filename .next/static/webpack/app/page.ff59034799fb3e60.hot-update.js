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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Breed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/Breed */ \"(app-pages-browser)/./src/components/Breed.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [breeds, setBreeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [breedWithProfile, setBreedWithProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const first = async ()=>{\n            try {\n                const data = await fetch(\"https://dog.ceo/api/breeds/list/all\");\n                const response = await data.json();\n                const hey = Object.entries(response.message);\n                setBreeds(hey);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        first();\n        Promise.all(breeds).then(()=>{\n            const hi = [];\n            const yello1 = [\n                ...breeds\n            ].forEach((breed)=>{\n                //console.log(breed);\n                const [br] = breed;\n                //console.log(br);\n                fetch(\"https://dog.ceo/api/breed/\".concat(br, \"/images/\")).then((response)=>response.json()).then((data)=>{\n                    //console.log(data);\n                    const [firstPhoto] = data.message;\n                    //console.log(firstPhoto);\n                    hi.push(firstPhoto);\n                    //console.log(data.message);\n                    //setBreedWithProfile([data.message]);\n                    //console.log(\"HEY\", hi);\n                    setBreedWithProfile(hi);\n                }).catch((error)=>console.error(error));\n            });\n        });\n        console.log(yello);\n    }, []);\n    /*useEffect(() => {\n        // console.log(breedsProfilePicture);\n        const hi: any[] = [];\n        const yello = [...breeds].forEach((breed: any) => {\n            //console.log(breed);\n            const [br] = breed;\n            //console.log(br);\n            fetch(`https://dog.ceo/api/breed/${br}/images/`)\n                .then((response) => response.json())\n                .then((data) => {\n                    //console.log(data);\n                    const [firstPhoto] = data.message;\n                    //console.log(firstPhoto);\n                    hi.push(firstPhoto);\n                    //console.log(data.message);\n                    //setBreedWithProfile([data.message]);\n                    //console.log(\"HEY\", hi);\n                    setBreedWithProfile(hi);\n                })\n                .catch((error) => console.error(error));\n        });\n    }, [breeds]);*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: breeds.map((breed)=>{\n            const [name, collection] = breed;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    breedName: name,\n                    collection: collection\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 25\n                }, this)\n            }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 75,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"unM7ad/6B8TqkgBWbdlxL+krT+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDUjtBQUNQO0FBRXJCLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQXVCLEVBQUU7SUFDN0QsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRXJFQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLFFBQVE7WUFDVixJQUFJO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUMsTUFBTTtnQkFDekIsTUFBTUMsV0FBVyxNQUFNRixLQUFLRyxJQUFJO2dCQUNoQyxNQUFNQyxNQUFXQyxPQUFPQyxPQUFPLENBQVdKLFNBQVNLLE9BQU87Z0JBQzFEWCxVQUFVUTtZQUNkLEVBQUUsT0FBT0ksT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDQTtZQUNsQjtRQUNKO1FBRUFUO1FBQ0FXLFFBQVFDLEdBQUcsQ0FBQ2hCLFFBQVFpQixJQUFJLENBQUM7WUFDckIsTUFBTUMsS0FBWSxFQUFFO1lBQ3BCLE1BQU1DLFNBQVE7bUJBQUluQjthQUFPLENBQUNvQixPQUFPLENBQUMsQ0FBQ0M7Z0JBQy9CLHFCQUFxQjtnQkFDckIsTUFBTSxDQUFDQyxHQUFHLEdBQUdEO2dCQUNiLGtCQUFrQjtnQkFDbEJmLE1BQU0sNkJBQWdDLE9BQUhnQixJQUFHLGFBQ2pDTCxJQUFJLENBQUMsQ0FBQ1YsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ1MsSUFBSSxDQUFDLENBQUNaO29CQUNILG9CQUFvQjtvQkFDcEIsTUFBTSxDQUFDa0IsV0FBVyxHQUFHbEIsS0FBS08sT0FBTztvQkFDakMsMEJBQTBCO29CQUMxQk0sR0FBR00sSUFBSSxDQUFDRDtvQkFDUiw0QkFBNEI7b0JBQzVCLHNDQUFzQztvQkFDdEMseUJBQXlCO29CQUN6QnBCLG9CQUFvQmU7Z0JBQ3hCLEdBQ0NPLEtBQUssQ0FBQyxDQUFDWixRQUFVQyxRQUFRRCxLQUFLLENBQUNBO1lBQ3hDO1FBQ0o7UUFDQUMsUUFBUVksR0FBRyxDQUFDUDtJQUNoQixHQUFHLEVBQUU7SUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQXFCYSxHQUViLHFCQUNJLDhEQUFDUTtrQkFDSTNCLE9BQU80QixHQUFHLENBQUMsQ0FBQ1A7WUFDVCxNQUFNLENBQUNRLE1BQU1DLFdBQVcsR0FBR1Q7WUFDM0IscUJBQ0ksOERBQUNVOzBCQUNHLDRFQUFDbkMsNkRBQUtBO29CQUFDb0MsV0FBV0g7b0JBQU1DLFlBQVlBOzs7Ozs7ZUFEOUJoQyxnREFBTUE7Ozs7O1FBSXhCOzs7Ozs7QUFHWjtHQTVFd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnJlZWQgZnJvbSBcIkAvc3JjL2NvbXBvbmVudHMvQnJlZWRcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2JyZWVkcywgc2V0QnJlZWRzXSA9IHVzZVN0YXRlPFtzdHJpbmcsIHN0cmluZ1tdXVtdPihbXSk7XG4gICAgY29uc3QgW2JyZWVkV2l0aFByb2ZpbGUsIHNldEJyZWVkV2l0aFByb2ZpbGVdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhleTogYW55ID0gT2JqZWN0LmVudHJpZXM8c3RyaW5nW10+KHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHNldEJyZWVkcyhoZXkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmaXJzdCgpO1xuICAgICAgICBQcm9taXNlLmFsbChicmVlZHMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGk6IGFueVtdID0gW107XG4gICAgICAgICAgICBjb25zdCB5ZWxsbyA9IFsuLi5icmVlZHNdLmZvckVhY2goKGJyZWVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJyZWVkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbYnJdID0gYnJlZWQ7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhicik7XG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHticn0vaW1hZ2VzL2ApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtmaXJzdFBob3RvXSA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZmlyc3RQaG90byk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaS5wdXNoKGZpcnN0UGhvdG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRCcmVlZFdpdGhQcm9maWxlKFtkYXRhLm1lc3NhZ2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJIRVlcIiwgaGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnJlZWRXaXRoUHJvZmlsZShoaSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coeWVsbG8pO1xuICAgIH0sIFtdKTtcblxuICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYnJlZWRzUHJvZmlsZVBpY3R1cmUpO1xuICAgICAgICBjb25zdCBoaTogYW55W10gPSBbXTtcbiAgICAgICAgY29uc3QgeWVsbG8gPSBbLi4uYnJlZWRzXS5mb3JFYWNoKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJyZWVkKTtcbiAgICAgICAgICAgIGNvbnN0IFticl0gPSBicmVlZDtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYnIpO1xuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHticn0vaW1hZ2VzL2ApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2ZpcnN0UGhvdG9dID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpcnN0UGhvdG8pO1xuICAgICAgICAgICAgICAgICAgICBoaS5wdXNoKGZpcnN0UGhvdG8pO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vc2V0QnJlZWRXaXRoUHJvZmlsZShbZGF0YS5tZXNzYWdlXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJIRVlcIiwgaGkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRCcmVlZFdpdGhQcm9maWxlKGhpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW2JyZWVkc10pOyovXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIHticmVlZHMubWFwKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW25hbWUsIGNvbGxlY3Rpb25dID0gYnJlZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVlZCBicmVlZE5hbWU9e25hbWV9IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJyZWVkIiwidjQiLCJ1dWlkdjQiLCJIb21lIiwiYnJlZWRzIiwic2V0QnJlZWRzIiwiYnJlZWRXaXRoUHJvZmlsZSIsInNldEJyZWVkV2l0aFByb2ZpbGUiLCJmaXJzdCIsImRhdGEiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImhleSIsIk9iamVjdCIsImVudHJpZXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJoaSIsInllbGxvIiwiZm9yRWFjaCIsImJyZWVkIiwiYnIiLCJmaXJzdFBob3RvIiwicHVzaCIsImNhdGNoIiwibG9nIiwibWFpbiIsIm1hcCIsIm5hbWUiLCJjb2xsZWN0aW9uIiwiZGl2IiwiYnJlZWROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
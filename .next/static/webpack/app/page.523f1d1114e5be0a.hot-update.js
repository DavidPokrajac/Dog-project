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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Breed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/Breed */ \"(app-pages-browser)/./src/components/Breed.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [breeds, setBreeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [breedWithProfile, setBreedWithProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const first = async ()=>{\n            try {\n                const data = await fetch(\"https://dog.ceo/api/breeds/list/all\");\n                const response = await data.json();\n                const hey = Object.entries(response.message);\n                //console.log(hey);\n                setBreeds(hey);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        first();\n        const second = async ()=>{\n            const hi = [];\n            const yello = [\n                ...breeds\n            ].map(async (breed)=>{\n                console.log(breed);\n                try {\n                    const [br] = breed;\n                    const data = await fetch(\"https://dog.ceo/api/breed/\".concat(br, \"/images/\"));\n                    const response = await data.json();\n                    const [firstPhoto] = response.message;\n                    hi.push(firstPhoto);\n                    setBreedWithProfile(hi);\n                    console.log(breedWithProfile);\n                } catch (error) {\n                    console.error(error);\n                }\n            });\n        };\n        if (breeds) {\n            second();\n            console.log(\"OK\");\n        }\n    /*fetch(\"https://dog.ceo/api/breeds/list/all\")\n            .then((response) => response.json())\n            .then((data) => {\n                // console.log(data.message);\n                const hey: any = Object.entries<string[]>(data.message);\n                // console.log(hey);\n                const hi = Object.keys(data.message);\n                const hello = Object.values(data.message);\n                // console.log(hello);\n                setBreeds(hey);\n            })\n            .catch((error) => console.error(error)); */ }, []);\n    /*useEffect(() => {\n        // console.log(breedsProfilePicture);\n        const hi: any[] = [];\n        const yello = [...breeds].forEach((breed: any) => {\n            //console.log(breed);\n            const [br] = breed;\n            //console.log(br);\n            fetch(`https://dog.ceo/api/breed/${br}/images/`)\n                .then((response) => response.json())\n                .then((data) => {\n                    //console.log(data);\n                    const [firstPhoto] = data.message;\n                    //console.log(firstPhoto);\n                    hi.push(firstPhoto);\n                    //console.log(data.message);\n                    //setBreedWithProfile([data.message]);\n                    //console.log(\"HEY\", hi);\n                    setBreedWithProfile(hi);\n                })\n                .catch((error) => console.error(error));\n        });\n    }, [breeds]);*/ //console.log(breedWithProfile);\n    const yo = [];\n    const ey = [\n        ...breeds\n    ].map((breed)=>{\n        const [name] = breed;\n        //console.log(name);\n        //console.log(\"NAME:\", name);\n        const hey = [];\n        const hi = breedWithProfile.map((photo)=>{\n        //console.log(\"photo\", photo);\n        //const [firstPhoto] = photo;\n        //console.log(\"NAME:\", name);\n        //console.log(\"PHOTO:\", photo);\n        /*if (firstPhoto.includes(name)) {\n                hey.push(name, firstPhoto);\n            }\n            return;*/ });\n        //console.log(hi);\n        //console.log(hi);\n        return hi;\n    });\n    //const hijab = breedWithProfile.forEach((photo) => console.log(photo));\n    //console.log(Array.isArray(breedWithProfile));\n    //console.log(ey);\n    //console.log(hijab);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: breeds.map((breed)=>{\n            const [name, collection] = breed;\n            //console.log(breed);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    breedName: name,\n                    collection: collection\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 25\n                }, this)\n            }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 120,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 115,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"unM7ad/6B8TqkgBWbdlxL+krT+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDUjtBQUNQO0FBRXJCLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQXVCLEVBQUU7SUFDN0QsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRXJFQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLFFBQVE7WUFDVixJQUFJO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUMsTUFBTTtnQkFDekIsTUFBTUMsV0FBVyxNQUFNRixLQUFLRyxJQUFJO2dCQUNoQyxNQUFNQyxNQUFXQyxPQUFPQyxPQUFPLENBQVdKLFNBQVNLLE9BQU87Z0JBQzFELG1CQUFtQjtnQkFDbkJYLFVBQVVRO1lBQ2QsRUFBRSxPQUFPSSxPQUFPO2dCQUNaQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2xCO1FBQ0o7UUFFQVQ7UUFFQSxNQUFNVyxTQUFTO1lBQ1gsTUFBTUMsS0FBWSxFQUFFO1lBQ3BCLE1BQU1DLFFBQVE7bUJBQUlqQjthQUFPLENBQUNrQixHQUFHLENBQUMsT0FBT0M7Z0JBQ2pDTCxRQUFRTSxHQUFHLENBQUNEO2dCQUNaLElBQUk7b0JBQ0EsTUFBTSxDQUFDRSxHQUFHLEdBQUdGO29CQUNiLE1BQU1kLE9BQU8sTUFBTUMsTUFDZiw2QkFBZ0MsT0FBSGUsSUFBRztvQkFFcEMsTUFBTWQsV0FBVyxNQUFNRixLQUFLRyxJQUFJO29CQUNoQyxNQUFNLENBQUNjLFdBQVcsR0FBR2YsU0FBU0ssT0FBTztvQkFDckNJLEdBQUdPLElBQUksQ0FBQ0Q7b0JBQ1JuQixvQkFBb0JhO29CQUNwQkYsUUFBUU0sR0FBRyxDQUFDbEI7Z0JBQ2hCLEVBQUUsT0FBT1csT0FBTztvQkFDWkMsUUFBUUQsS0FBSyxDQUFDQTtnQkFDbEI7WUFDSjtRQUNKO1FBRUEsSUFBSWIsUUFBUTtZQUNSZTtZQUNBRCxRQUFRTSxHQUFHLENBQUM7UUFDaEI7SUFFQTs7Ozs7Ozs7Ozs7cURBVzZDLEdBQ2pELEdBQUcsRUFBRTtJQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBcUJhLEdBRWIsZ0NBQWdDO0lBQ2hDLE1BQU1JLEtBQVUsRUFBRTtJQUNsQixNQUFNQyxLQUFLO1dBQUl6QjtLQUFPLENBQUNrQixHQUFHLENBQUMsQ0FBQ0M7UUFDeEIsTUFBTSxDQUFDTyxLQUFLLEdBQUdQO1FBQ2Ysb0JBQW9CO1FBQ3BCLDZCQUE2QjtRQUM3QixNQUFNVixNQUFXLEVBQUU7UUFDbkIsTUFBTU8sS0FBS2QsaUJBQWlCZ0IsR0FBRyxDQUFDLENBQUNTO1FBQzdCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLCtCQUErQjtRQUMvQjs7O21CQUdPLEdBQ1g7UUFDQSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLE9BQU9YO0lBQ1g7SUFFQSx3RUFBd0U7SUFDeEUsK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFFckIscUJBQ0ksOERBQUNZO2tCQUNJNUIsT0FBT2tCLEdBQUcsQ0FBQyxDQUFDQztZQUNULE1BQU0sQ0FBQ08sTUFBTUcsV0FBVyxHQUFHVjtZQUMzQixxQkFBcUI7WUFDckIscUJBQ0ksOERBQUNXOzBCQUNHLDRFQUFDbEMsNkRBQUtBO29CQUFDbUMsV0FBV0w7b0JBQU1HLFlBQVlBOzs7Ozs7ZUFEOUIvQixnREFBTUE7Ozs7O1FBSXhCOzs7Ozs7QUFHWjtHQXpId0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnJlZWQgZnJvbSBcIkAvc3JjL2NvbXBvbmVudHMvQnJlZWRcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2JyZWVkcywgc2V0QnJlZWRzXSA9IHVzZVN0YXRlPFtzdHJpbmcsIHN0cmluZ1tdXVtdPihbXSk7XG4gICAgY29uc3QgW2JyZWVkV2l0aFByb2ZpbGUsIHNldEJyZWVkV2l0aFByb2ZpbGVdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhleTogYW55ID0gT2JqZWN0LmVudHJpZXM8c3RyaW5nW10+KHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaGV5KTtcbiAgICAgICAgICAgICAgICBzZXRCcmVlZHMoaGV5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlyc3QoKTtcblxuICAgICAgICBjb25zdCBzZWNvbmQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaTogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHllbGxvID0gWy4uLmJyZWVkc10ubWFwKGFzeW5jIChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYnJlZWQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFticl0gPSBicmVlZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHticn0vaW1hZ2VzL2BcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2ZpcnN0UGhvdG9dID0gcmVzcG9uc2UubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgaGkucHVzaChmaXJzdFBob3RvKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnJlZWRXaXRoUHJvZmlsZShoaSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJyZWVkV2l0aFByb2ZpbGUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChicmVlZHMpIHtcbiAgICAgICAgICAgIHNlY29uZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPS1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qZmV0Y2goXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGV5OiBhbnkgPSBPYmplY3QuZW50cmllczxzdHJpbmdbXT4oZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpID0gT2JqZWN0LmtleXMoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWxsbyA9IE9iamVjdC52YWx1ZXMoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoZWxsbyk7XG4gICAgICAgICAgICAgICAgc2V0QnJlZWRzKGhleSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpOyAqL1xuICAgIH0sIFtdKTtcblxuICAgIC8qdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYnJlZWRzUHJvZmlsZVBpY3R1cmUpO1xuICAgICAgICBjb25zdCBoaTogYW55W10gPSBbXTtcbiAgICAgICAgY29uc3QgeWVsbG8gPSBbLi4uYnJlZWRzXS5mb3JFYWNoKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJyZWVkKTtcbiAgICAgICAgICAgIGNvbnN0IFticl0gPSBicmVlZDtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYnIpO1xuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHticn0vaW1hZ2VzL2ApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2ZpcnN0UGhvdG9dID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpcnN0UGhvdG8pO1xuICAgICAgICAgICAgICAgICAgICBoaS5wdXNoKGZpcnN0UGhvdG8pO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vc2V0QnJlZWRXaXRoUHJvZmlsZShbZGF0YS5tZXNzYWdlXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJIRVlcIiwgaGkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRCcmVlZFdpdGhQcm9maWxlKGhpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW2JyZWVkc10pOyovXG5cbiAgICAvL2NvbnNvbGUubG9nKGJyZWVkV2l0aFByb2ZpbGUpO1xuICAgIGNvbnN0IHlvOiBhbnkgPSBbXTtcbiAgICBjb25zdCBleSA9IFsuLi5icmVlZHNdLm1hcCgoYnJlZWQpID0+IHtcbiAgICAgICAgY29uc3QgW25hbWVdID0gYnJlZWQ7XG4gICAgICAgIC8vY29uc29sZS5sb2cobmFtZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJOQU1FOlwiLCBuYW1lKTtcbiAgICAgICAgY29uc3QgaGV5OiBhbnkgPSBbXTtcbiAgICAgICAgY29uc3QgaGkgPSBicmVlZFdpdGhQcm9maWxlLm1hcCgocGhvdG86IGFueSkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInBob3RvXCIsIHBob3RvKTtcbiAgICAgICAgICAgIC8vY29uc3QgW2ZpcnN0UGhvdG9dID0gcGhvdG87XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTkFNRTpcIiwgbmFtZSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUEhPVE86XCIsIHBob3RvKTtcbiAgICAgICAgICAgIC8qaWYgKGZpcnN0UGhvdG8uaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBoZXkucHVzaChuYW1lLCBmaXJzdFBob3RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjsqL1xuICAgICAgICB9KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhoaSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coaGkpO1xuICAgICAgICByZXR1cm4gaGk7XG4gICAgfSk7XG5cbiAgICAvL2NvbnN0IGhpamFiID0gYnJlZWRXaXRoUHJvZmlsZS5mb3JFYWNoKChwaG90bykgPT4gY29uc29sZS5sb2cocGhvdG8pKTtcbiAgICAvL2NvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkoYnJlZWRXaXRoUHJvZmlsZSkpO1xuICAgIC8vY29uc29sZS5sb2coZXkpO1xuICAgIC8vY29uc29sZS5sb2coaGlqYWIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICB7YnJlZWRzLm1hcCgoYnJlZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBjb2xsZWN0aW9uXSA9IGJyZWVkO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYnJlZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1dWlkdjQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlZWQgYnJlZWROYW1lPXtuYW1lfSBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCcmVlZCIsInY0IiwidXVpZHY0IiwiSG9tZSIsImJyZWVkcyIsInNldEJyZWVkcyIsImJyZWVkV2l0aFByb2ZpbGUiLCJzZXRCcmVlZFdpdGhQcm9maWxlIiwiZmlyc3QiLCJkYXRhIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJoZXkiLCJPYmplY3QiLCJlbnRyaWVzIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsInNlY29uZCIsImhpIiwieWVsbG8iLCJtYXAiLCJicmVlZCIsImxvZyIsImJyIiwiZmlyc3RQaG90byIsInB1c2giLCJ5byIsImV5IiwibmFtZSIsInBob3RvIiwibWFpbiIsImNvbGxlY3Rpb24iLCJkaXYiLCJicmVlZE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Breed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/Breed */ \"(app-pages-browser)/./src/components/Breed.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [breeds, setBreeds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [breedWithProfile, setBreedWithProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const first = async ()=>{\n            try {\n                const data = await fetch(\"https://dog.ceo/api/breeds/list/all\");\n                const response = await data.json();\n                const hey = Object.entries(response.message);\n                setBreeds(hey);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        first();\n        const second = ()=>{\n            const hi = [];\n            const hey = breeds.map(async (breed)=>{\n                const [br] = breed;\n                console.log(br);\n                const data = await fetch(\"https://dog.ceo/api/breed/\".concat(br, \"/images/\"));\n                const response = await data.json();\n                const [firstPhoto] = response.message;\n                hi.push(firstPhoto);\n                setBreedWithProfile(hi);\n                console.log(breedWithProfile);\n            });\n            console.log(hey);\n        };\n        second();\n        console.log(breedWithProfile);\n    /*fetch(\"https://dog.ceo/api/breeds/list/all\")\n            .then((response) => response.json())\n            .then((data) => {\n                // console.log(data.message);\n                const hey: any = Object.entries<string[]>(data.message);\n                // console.log(hey);\n                const hi = Object.keys(data.message);\n                const hello = Object.values(data.message);\n                // console.log(hello);\n                setBreeds(hey);\n            })\n            .catch((error) => console.error(error)); */ }, []);\n    /*useEffect(() => {\n        // console.log(breedsProfilePicture);\n        const hi: any[] = [];\n        const yello = [...breeds].forEach((breed: any) => {\n            //console.log(breed);\n            const [br] = breed;\n            //console.log(br);\n            fetch(`https://dog.ceo/api/breed/${br}/images/`)\n                .then((response) => response.json())\n                .then((data) => {\n                    //console.log(data);\n                    const [firstPhoto] = data.message;\n                    //console.log(firstPhoto);\n                    hi.push(firstPhoto);\n                    //console.log(data.message);\n                    //setBreedWithProfile([data.message]);\n                    //console.log(\"HEY\", hi);\n                    setBreedWithProfile(hi);\n                })\n                .catch((error) => console.error(error));\n        });\n    }, [breeds]);*/ //console.log(breedWithProfile);\n    const yo = [];\n    const ey = [\n        ...breeds\n    ].map((breed)=>{\n        const [name] = breed;\n        //console.log(name);\n        //console.log(\"NAME:\", name);\n        const hey = [];\n        const hi = breedWithProfile.map((photo)=>{\n        //console.log(\"photo\", photo);\n        //const [firstPhoto] = photo;\n        //console.log(\"NAME:\", name);\n        //console.log(\"PHOTO:\", photo);\n        /*if (firstPhoto.includes(name)) {\n                hey.push(name, firstPhoto);\n            }\n            return;*/ });\n        return hi;\n    });\n    //const hijab = breedWithProfile.forEach((photo) => console.log(photo));\n    //console.log(Array.isArray(breedWithProfile));\n    //console.log(ey);\n    //console.log(hijab);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: breeds.map((breed)=>{\n            const [name, collection] = breed;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Breed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    breedName: name,\n                    collection: collection\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 25\n                }, this)\n            }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 111,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"unM7ad/6B8TqkgBWbdlxL+krT+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDUjtBQUNQO0FBRXJCLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQXVCLEVBQUU7SUFDN0QsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRXJFQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLFFBQVE7WUFDVixJQUFJO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUMsTUFBTTtnQkFDekIsTUFBTUMsV0FBVyxNQUFNRixLQUFLRyxJQUFJO2dCQUNoQyxNQUFNQyxNQUFXQyxPQUFPQyxPQUFPLENBQVdKLFNBQVNLLE9BQU87Z0JBQzFEWCxVQUFVUTtZQUNkLEVBQUUsT0FBT0ksT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDQTtZQUNsQjtRQUNKO1FBRUFUO1FBRUEsTUFBTVcsU0FBUztZQUNYLE1BQU1DLEtBQVksRUFBRTtZQUNwQixNQUFNUCxNQUFNVCxPQUFPaUIsR0FBRyxDQUFDLE9BQU9DO2dCQUMxQixNQUFNLENBQUNDLEdBQUcsR0FBR0Q7Z0JBQ2JKLFFBQVFNLEdBQUcsQ0FBQ0Q7Z0JBQ1osTUFBTWQsT0FBTyxNQUFNQyxNQUNmLDZCQUFnQyxPQUFIYSxJQUFHO2dCQUVwQyxNQUFNWixXQUFXLE1BQU1GLEtBQUtHLElBQUk7Z0JBQ2hDLE1BQU0sQ0FBQ2EsV0FBVyxHQUFHZCxTQUFTSyxPQUFPO2dCQUNyQ0ksR0FBR00sSUFBSSxDQUFDRDtnQkFDUmxCLG9CQUFvQmE7Z0JBQ3BCRixRQUFRTSxHQUFHLENBQUNsQjtZQUNoQjtZQUVBWSxRQUFRTSxHQUFHLENBQUNYO1FBQ2hCO1FBRUFNO1FBQ0FELFFBQVFNLEdBQUcsQ0FBQ2xCO0lBQ1o7Ozs7Ozs7Ozs7O3FEQVc2QyxHQUNqRCxHQUFHLEVBQUU7SUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQXFCYSxHQUViLGdDQUFnQztJQUNoQyxNQUFNcUIsS0FBVSxFQUFFO0lBQ2xCLE1BQU1DLEtBQUs7V0FBSXhCO0tBQU8sQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDQztRQUN4QixNQUFNLENBQUNPLEtBQUssR0FBR1A7UUFDZixvQkFBb0I7UUFDcEIsNkJBQTZCO1FBQzdCLE1BQU1ULE1BQVcsRUFBRTtRQUNuQixNQUFNTyxLQUFLZCxpQkFBaUJlLEdBQUcsQ0FBQyxDQUFDUztRQUM3Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0I7OzttQkFHTyxHQUNYO1FBQ0EsT0FBT1Y7SUFDWDtJQUVBLHdFQUF3RTtJQUN4RSwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUVyQixxQkFDSSw4REFBQ1c7a0JBQ0kzQixPQUFPaUIsR0FBRyxDQUFDLENBQUNDO1lBQ1QsTUFBTSxDQUFDTyxNQUFNRyxXQUFXLEdBQUdWO1lBQzNCLHFCQUNJLDhEQUFDVzswQkFDRyw0RUFBQ2pDLDZEQUFLQTtvQkFBQ2tDLFdBQVdMO29CQUFNRyxZQUFZQTs7Ozs7O2VBRDlCOUIsZ0RBQU1BOzs7OztRQUl4Qjs7Ozs7O0FBR1o7R0FoSHdCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJyZWVkIGZyb20gXCJAL3NyYy9jb21wb25lbnRzL0JyZWVkXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFticmVlZHMsIHNldEJyZWVkc10gPSB1c2VTdGF0ZTxbc3RyaW5nLCBzdHJpbmdbXV1bXT4oW10pO1xuICAgIGNvbnN0IFticmVlZFdpdGhQcm9maWxlLCBzZXRCcmVlZFdpdGhQcm9maWxlXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoZXk6IGFueSA9IE9iamVjdC5lbnRyaWVzPHN0cmluZ1tdPihyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRCcmVlZHMoaGV5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmlyc3QoKTtcblxuICAgICAgICBjb25zdCBzZWNvbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaTogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGhleSA9IGJyZWVkcy5tYXAoYXN5bmMgKGJyZWVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYnJdID0gYnJlZWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYnIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWQvJHticn0vaW1hZ2VzL2BcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgW2ZpcnN0UGhvdG9dID0gcmVzcG9uc2UubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBoaS5wdXNoKGZpcnN0UGhvdG8pO1xuICAgICAgICAgICAgICAgIHNldEJyZWVkV2l0aFByb2ZpbGUoaGkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJyZWVkV2l0aFByb2ZpbGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhleSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2Vjb25kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJyZWVkV2l0aFByb2ZpbGUpO1xuICAgICAgICAvKmZldGNoKFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvbGlzdC9hbGxcIilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhleTogYW55ID0gT2JqZWN0LmVudHJpZXM8c3RyaW5nW10+KGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGV5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBoaSA9IE9iamVjdC5rZXlzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVsbG8gPSBPYmplY3QudmFsdWVzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGVsbG8pO1xuICAgICAgICAgICAgICAgIHNldEJyZWVkcyhoZXkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsgKi9cbiAgICB9LCBbXSk7XG5cbiAgICAvKnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJyZWVkc1Byb2ZpbGVQaWN0dXJlKTtcbiAgICAgICAgY29uc3QgaGk6IGFueVtdID0gW107XG4gICAgICAgIGNvbnN0IHllbGxvID0gWy4uLmJyZWVkc10uZm9yRWFjaCgoYnJlZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhicmVlZCk7XG4gICAgICAgICAgICBjb25zdCBbYnJdID0gYnJlZWQ7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJyKTtcbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkLyR7YnJ9L2ltYWdlcy9gKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtmaXJzdFBob3RvXSA9IGRhdGEubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhmaXJzdFBob3RvKTtcbiAgICAgICAgICAgICAgICAgICAgaGkucHVzaChmaXJzdFBob3RvKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAvL3NldEJyZWVkV2l0aFByb2ZpbGUoW2RhdGEubWVzc2FnZV0pO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSEVZXCIsIGhpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnJlZWRXaXRoUHJvZmlsZShoaSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFticmVlZHNdKTsqL1xuXG4gICAgLy9jb25zb2xlLmxvZyhicmVlZFdpdGhQcm9maWxlKTtcbiAgICBjb25zdCB5bzogYW55ID0gW107XG4gICAgY29uc3QgZXkgPSBbLi4uYnJlZWRzXS5tYXAoKGJyZWVkKSA9PiB7XG4gICAgICAgIGNvbnN0IFtuYW1lXSA9IGJyZWVkO1xuICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiTkFNRTpcIiwgbmFtZSk7XG4gICAgICAgIGNvbnN0IGhleTogYW55ID0gW107XG4gICAgICAgIGNvbnN0IGhpID0gYnJlZWRXaXRoUHJvZmlsZS5tYXAoKHBob3RvOiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwaG90b1wiLCBwaG90byk7XG4gICAgICAgICAgICAvL2NvbnN0IFtmaXJzdFBob3RvXSA9IHBob3RvO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5BTUU6XCIsIG5hbWUpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBIT1RPOlwiLCBwaG90byk7XG4gICAgICAgICAgICAvKmlmIChmaXJzdFBob3RvLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgaGV5LnB1c2gobmFtZSwgZmlyc3RQaG90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47Ki9cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoaTtcbiAgICB9KTtcblxuICAgIC8vY29uc3QgaGlqYWIgPSBicmVlZFdpdGhQcm9maWxlLmZvckVhY2goKHBob3RvKSA9PiBjb25zb2xlLmxvZyhwaG90bykpO1xuICAgIC8vY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShicmVlZFdpdGhQcm9maWxlKSk7XG4gICAgLy9jb25zb2xlLmxvZyhleSk7XG4gICAgLy9jb25zb2xlLmxvZyhoaWphYik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIHticmVlZHMubWFwKChicmVlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW25hbWUsIGNvbGxlY3Rpb25dID0gYnJlZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVlZCBicmVlZE5hbWU9e25hbWV9IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJyZWVkIiwidjQiLCJ1dWlkdjQiLCJIb21lIiwiYnJlZWRzIiwic2V0QnJlZWRzIiwiYnJlZWRXaXRoUHJvZmlsZSIsInNldEJyZWVkV2l0aFByb2ZpbGUiLCJmaXJzdCIsImRhdGEiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImhleSIsIk9iamVjdCIsImVudHJpZXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwic2Vjb25kIiwiaGkiLCJtYXAiLCJicmVlZCIsImJyIiwibG9nIiwiZmlyc3RQaG90byIsInB1c2giLCJ5byIsImV5IiwibmFtZSIsInBob3RvIiwibWFpbiIsImNvbGxlY3Rpb24iLCJkaXYiLCJicmVlZE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
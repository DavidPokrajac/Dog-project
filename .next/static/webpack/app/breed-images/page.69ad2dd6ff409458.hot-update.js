"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/breed-images/page",{

/***/ "(app-pages-browser)/./src/app/breed-images/page.tsx":
/*!***************************************!*\
  !*** ./src/app/breed-images/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BreedImages; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _src_components_DogNotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/components/DogNotFound */ \"(app-pages-browser)/./src/components/DogNotFound.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction BreedImages(param) {\n    let { searchParams } = param;\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const breedNameExists = searchParams.breedName ? searchParams.breedName + \"/\" : \"\";\n    const nameExists = !searchParams.name ? \"\" : searchParams.name + \"/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchRequest = \"https://dog.ceo/api/breed/\".concat(breedNameExists).concat(nameExists, \"images\");\n        fetch(fetchRequest).then((response)=>response.json()).then((data)=>{\n            setImages(data.message);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    }, [\n        breedNameExists,\n        nameExists\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl md:text-2xl mt-10 mb-10 sm:mb-20 ml-5 md:ml-10\",\n                children: [\n                    \"Collection of images for\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold capitalize\",\n                        children: [\n                            searchParams.breedName,\n                            \" \",\n                            searchParams.subBreedExists && searchParams.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\breed-images\\\\page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\breed-images\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            typeof images !== \"string\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 px-5 md:px-8 pb-8 mt-6 md:mt-8\",\n                children: images.map((image)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative min-h-80\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: image,\n                            alt: \"\",\n                            fill: true,\n                            className: \"object-cover cursor-pointer transition ease-in-out hover:scale-110 hover:shadow-md rounded\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\breed-images\\\\page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 33\n                        }, this)\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), false, {\n                        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\breed-images\\\\page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\breed-images\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_DogNotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\breed-images\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\d0pok\\\\OneDrive\\\\Radna površina\\\\dog-project\\\\src\\\\app\\\\breed-images\\\\page.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(BreedImages, \"ScKwoilS3xNJP1q5r1COmrAdDIM=\");\n_c = BreedImages;\nvar _c;\n$RefreshReg$(_c, \"BreedImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYnJlZWQtaW1hZ2VzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNiO0FBQ0s7QUFDbUI7QUFFeEMsU0FBU00sWUFBWSxLQVFuQztRQVJtQyxFQUNoQ0MsWUFBWSxFQU9mLEdBUm1DOztJQVNoQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNVSxrQkFBa0JILGFBQWFJLFNBQVMsR0FDeENKLGFBQWFJLFNBQVMsR0FBRyxNQUN6QjtJQUNOLE1BQU1DLGFBQWEsQ0FBQ0wsYUFBYU0sSUFBSSxHQUFHLEtBQUtOLGFBQWFNLElBQUksR0FBRztJQUVqRVosZ0RBQVNBLENBQUM7UUFDTixNQUFNYSxlQUFlLDZCQUErQ0YsT0FBbEJGLGlCQUE2QixPQUFYRSxZQUFXO1FBQy9FRyxNQUFNRCxjQUNERSxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHO1lBQ0hWLFVBQVVVLEtBQUtDLE9BQU87UUFDMUIsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ0pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDbEI7SUFDUixHQUFHO1FBQUNaO1FBQWlCRTtLQUFXO0lBRWhDLHFCQUNJLDhEQUFDWTs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOztvQkFBeUQ7b0JBQzFDO2tDQUN6Qiw4REFBQ0M7d0JBQUtELFdBQVU7OzRCQUNYbkIsYUFBYUksU0FBUzs0QkFBRTs0QkFDeEJKLGFBQWFxQixjQUFjLElBQUlyQixhQUFhTSxJQUFJOzs7Ozs7Ozs7Ozs7O1lBR3hELE9BQU9MLFdBQVcseUJBQ2YsOERBQUNxQjtnQkFBR0gsV0FBVTswQkFDVGxCLE9BQU9zQixHQUFHLENBQUMsQ0FBQ0M7b0JBQ1QscUJBQ0ksOERBQUNDO3dCQUFrQk4sV0FBVTtrQ0FDekIsNEVBQUN4QixrREFBS0E7NEJBQ0YrQixLQUFLRjs0QkFDTEcsS0FBSTs0QkFDSkMsTUFBTTs0QkFDTlQsV0FBVTs7Ozs7O3VCQUxUdEIsZ0RBQU1BOzs7OztnQkFTdkI7Ozs7O3FDQUdKLDhEQUFDQyxtRUFBV0E7Ozs7Ozs7Ozs7O0FBSTVCO0dBeER3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9icmVlZC1pbWFnZXMvcGFnZS50c3g/MzJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IERvZ05vdEZvdW5kIGZyb20gXCJAL3NyYy9jb21wb25lbnRzL0RvZ05vdEZvdW5kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmVlZEltYWdlcyh7XHJcbiAgICBzZWFyY2hQYXJhbXMsXHJcbn06IHtcclxuICAgIHNlYXJjaFBhcmFtczoge1xyXG4gICAgICAgIGJyZWVkTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBzdWJCcmVlZEV4aXN0czogYm9vbGVhbjtcclxuICAgIH07XHJcbn0pIHtcclxuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBicmVlZE5hbWVFeGlzdHMgPSBzZWFyY2hQYXJhbXMuYnJlZWROYW1lXHJcbiAgICAgICAgPyBzZWFyY2hQYXJhbXMuYnJlZWROYW1lICsgXCIvXCJcclxuICAgICAgICA6IFwiXCI7XHJcbiAgICBjb25zdCBuYW1lRXhpc3RzID0gIXNlYXJjaFBhcmFtcy5uYW1lID8gXCJcIiA6IHNlYXJjaFBhcmFtcy5uYW1lICsgXCIvXCI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBgaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZC8ke2JyZWVkTmFtZUV4aXN0c30ke25hbWVFeGlzdHN9aW1hZ2VzYDtcclxuICAgICAgICBmZXRjaChmZXRjaFJlcXVlc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFticmVlZE5hbWVFeGlzdHMsIG5hbWVFeGlzdHNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBtdC0xMCBtYi0xMCBzbTptYi0yMCBtbC01IG1kOm1sLTEwXCI+XHJcbiAgICAgICAgICAgICAgICBDb2xsZWN0aW9uIG9mIGltYWdlcyBmb3J7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgY2FwaXRhbGl6ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWFyY2hQYXJhbXMuYnJlZWROYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7c2VhcmNoUGFyYW1zLnN1YkJyZWVkRXhpc3RzICYmIHNlYXJjaFBhcmFtcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICB7dHlwZW9mIGltYWdlcyAhPT0gXCJzdHJpbmdcIiA/IChcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC04IG1kOmdyaWQtY29scy0yIG1kOmdhcC0xMCBweC01IG1kOnB4LTggcGItOCBtdC02IG1kOm10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC04MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6c2hhZG93LW1kIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxEb2dOb3RGb3VuZCAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJ2NCIsInV1aWR2NCIsIkRvZ05vdEZvdW5kIiwiQnJlZWRJbWFnZXMiLCJzZWFyY2hQYXJhbXMiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJicmVlZE5hbWVFeGlzdHMiLCJicmVlZE5hbWUiLCJuYW1lRXhpc3RzIiwibmFtZSIsImZldGNoUmVxdWVzdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIiwiaDEiLCJjbGFzc05hbWUiLCJzcGFuIiwic3ViQnJlZWRFeGlzdHMiLCJ1bCIsIm1hcCIsImltYWdlIiwibGkiLCJzcmMiLCJhbHQiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/breed-images/page.tsx\n"));

/***/ })

});
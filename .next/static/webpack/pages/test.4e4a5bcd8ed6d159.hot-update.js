"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap-trial */ \"./node_modules/gsap-trial/index.js\");\n/* harmony import */ var gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap-trial/dist/ScrollTrigger */ \"./node_modules/gsap-trial/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap-trial/dist/MotionPathPlugin */ \"./node_modules/gsap-trial/dist/MotionPathPlugin.js\");\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/isomorphicEffect */ \"./helpers/isomorphicEffect.js\");\n/* harmony import */ var _context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SmootherContext */ \"./context/SmootherContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\ngsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin((gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default()));\n\n\nfunction Home() {\n    _s();\n    const { smootherReady } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const main = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const rx = 1;\n    const ry = 1;\n    const path = [\n        // 1\n        {\n            x: 300,\n            y: 100\n        },\n        {\n            x: 500,\n            y: 20\n        },\n        {\n            x: 100,\n            y: 100\n        }\n    ];\n    const path2 = [\n        // 1\n        {\n            x: -300,\n            y: 100\n        },\n        {\n            x: 100,\n            y: 20\n        },\n        {\n            x: 0,\n            y: 100\n        }\n    ];\n    const scaledPath = path.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    const scaledPath2 = path2.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    (0,_helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(()=>{\n        if (!smootherReady) return;\n        const ctx = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].context(()=>{\n            const box4Tl = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline().to(\".box-4\", {\n                motionPath: {\n                    path: scaledPath,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n            const box2Tl = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline().to(\".box-2\", {\n                motionPath: {\n                    path: scaledPath2,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n            //\n            gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default().create({\n                animation: box4Tl,\n                trigger: \".container-2\",\n                scrub: true,\n                start: \"top center\",\n                markers: true\n            });\n            gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default().create({\n                animation: box2Tl,\n                trigger: \".container-2\",\n                pin: true,\n                scrub: true,\n                start: \"top center\"\n            });\n        }, main);\n        return ()=>ctx.revert();\n    }, [\n        smootherReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            ref: main,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container container-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box box-2\",\n                        children: \"2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                        lineNumber: 92,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box box-4\",\n                        children: \"4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                        lineNumber: 93,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"dMW+cbZi+/IhDh8O498AP7kdRyA=\", false, function() {\n    return [\n        _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ3BCO0FBQzRCO0FBQ007QUFDaEVHLGlFQUFtQkcsQ0FBQ0QseUVBQWdCQTtBQUVvQztBQUNmO0FBRXpELFNBQVNJOztJQUNQLE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdSLGlEQUFVQSxDQUFDTSxnRUFBZUE7SUFDcEQsTUFBTUcsT0FBT1YsNkNBQU1BO0lBQ25CLE1BQU1XLEtBQUs7SUFDWCxNQUFNQyxLQUFNO0lBQ1osTUFBTUMsT0FBTztRQUNYLElBQUk7UUFDSjtZQUFFQyxHQUFHO1lBQUtDLEdBQUc7UUFBSTtRQUNqQjtZQUFFRCxHQUFHO1lBQUtDLEdBQUc7UUFBRztRQUNoQjtZQUFFRCxHQUFHO1lBQUtDLEdBQUc7UUFBSTtLQUVwQjtJQUNELE1BQU1DLFFBQVE7UUFDVixJQUFJO1FBQ0o7WUFBRUYsR0FBRyxDQUFDO1lBQUtDLEdBQUc7UUFBSTtRQUNsQjtZQUFFRCxHQUFHO1lBQUtDLEdBQUc7UUFBRztRQUNoQjtZQUFFRCxHQUFHO1lBQUdDLEdBQUc7UUFBSTtLQUVsQjtJQUNELE1BQU1FLGFBQWFKLEtBQUtLLElBQUk7WUFBQyxFQUFFSixDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNyQyxPQUFPO1lBQ1BELEdBQUdBLElBQUlIO1lBQ1BJLEdBQUdBLElBQUlIO1FBQ1A7SUFDQTtJQUNBLE1BQU1PLGNBQWNILE1BQU1FLElBQUk7WUFBQyxFQUFFSixDQUFDLEVBQUVDLENBQUMsRUFBRTtRQUNyQyxPQUFPO1lBQ1BELEdBQUdBLElBQUlIO1lBQ1BJLEdBQUdBLElBQUlIO1FBQ1A7SUFDQTtJQUNBTixvRkFBeUJBLENBQUM7UUFDeEIsSUFBSSxDQUFDRyxlQUFlO1FBQ3BCLE1BQU1XLE1BQU1sQiwwREFBWW1CLENBQUM7WUFHdkIsTUFBTUMsU0FBU3BCLDJEQUFhcUIsR0FBR0MsR0FBRyxVQUFVO2dCQUMxQ0MsWUFBWTtvQkFDUlosTUFBTUk7b0JBQ05TLE9BQU87b0JBQ1BDLGFBQWE7d0JBQUM7d0JBQUs7cUJBQUk7b0JBQ3ZCQyxZQUFZO2dCQUNoQjtnQkFDQUMsVUFBVTtnQkFDVkMsaUJBQWlCO1lBRW5CO1lBQ0EsTUFBTUMsU0FBUzdCLDJEQUFhcUIsR0FBR0MsR0FBRyxVQUFVO2dCQUMxQ0MsWUFBWTtvQkFDUlosTUFBTU07b0JBQ05PLE9BQU87b0JBQ1BDLGFBQWE7d0JBQUM7d0JBQUs7cUJBQUk7b0JBQ3ZCQyxZQUFZO2dCQUNoQjtnQkFDQUMsVUFBVTtnQkFDVkMsaUJBQWlCO1lBRW5CO1lBQ0EsRUFBRTtZQUNGM0IsMkVBQW9CNkIsQ0FBQztnQkFDbkJDLFdBQVdYO2dCQUNYWSxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxPQUFPO2dCQUNQQyxTQUFTO1lBQ1g7WUFDQWxDLDJFQUFvQjZCLENBQUM7Z0JBQ25CQyxXQUFXRjtnQkFDWEcsU0FBUztnQkFDVEksS0FBSztnQkFDTEgsT0FBTztnQkFDUEMsT0FBTztZQUNUO1FBQ0YsR0FBRzFCO1FBRUgsT0FBTyxJQUFNVSxJQUFJbUI7SUFDbkIsR0FBRztRQUFDOUI7S0FBYztJQUVsQixxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSzhCLEtBQUs5QjtzQkFDWCw0RUFBQytCO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVk7Ozs7OztrQ0FDM0IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakM7R0F6RlNsQzs7UUErQlBGLGdGQUF5QkE7OztLQS9CbEJFO0FBMkZULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3QuanM/ZDA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXAtdHJpYWxcIjtcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gXCJnc2FwLXRyaWFsL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IE1vdGlvblBhdGhQbHVnaW4gZnJvbSBcImdzYXAtdHJpYWwvZGlzdC9Nb3Rpb25QYXRoUGx1Z2luXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKE1vdGlvblBhdGhQbHVnaW4pO1xuXG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vaGVscGVycy9pc29tb3JwaGljRWZmZWN0JztcbmltcG9ydCBTbW9vdGhlckNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9TbW9vdGhlckNvbnRleHQnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHNtb290aGVyUmVhZHkgfSA9IHVzZUNvbnRleHQoU21vb3RoZXJDb250ZXh0KTtcbiAgY29uc3QgbWFpbiA9IHVzZVJlZigpO1xuICBjb25zdCByeCA9IDFcbiAgY29uc3QgcnkgPSAgMVxuICBjb25zdCBwYXRoID0gW1xuICAgIC8vIDFcbiAgICB7IHg6IDMwMCwgeTogMTAwIH0sXG4gICAgeyB4OiA1MDAsIHk6IDIwIH0sXG4gICAgeyB4OiAxMDAsIHk6IDEwMCB9LFxuXG5dXG5jb25zdCBwYXRoMiA9IFtcbiAgICAvLyAxXG4gICAgeyB4OiAtMzAwLCB5OiAxMDAgfSxcbiAgICB7IHg6IDEwMCwgeTogMjAgfSxcbiAgICB7IHg6IDAsIHk6IDEwMCB9LFxuXG5dXG5jb25zdCBzY2FsZWRQYXRoID0gcGF0aC5tYXAoKHsgeCwgeSB9KSA9PiB7XG5yZXR1cm4ge1xueDogeCAqIHJ4LFxueTogeSAqIHJ5XG59XG59KVxuY29uc3Qgc2NhbGVkUGF0aDIgPSBwYXRoMi5tYXAoKHsgeCwgeSB9KSA9PiB7XG4gIHJldHVybiB7XG4gIHg6IHggKiByeCxcbiAgeTogeSAqIHJ5XG4gIH1cbiAgfSlcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzbW9vdGhlclJlYWR5KSByZXR1cm47XG4gICAgY29uc3QgY3R4ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcblxuXG4gICAgICBjb25zdCBib3g0VGwgPSBnc2FwLnRpbWVsaW5lKCkudG8oJy5ib3gtNCcsIHtcbiAgICAgICAgbW90aW9uUGF0aDoge1xuICAgICAgICAgICAgcGF0aDogc2NhbGVkUGF0aCxcbiAgICAgICAgICAgIGFsaWduOiAnc2VsZicsXG4gICAgICAgICAgICBhbGlnbk9yaWdpbjogWzAuNSwgMC41XSxcbiAgICAgICAgICAgIGF1dG9Sb3RhdGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgIC8vIGVhc2U6ICdwb3dlcjQnXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGJveDJUbCA9IGdzYXAudGltZWxpbmUoKS50bygnLmJveC0yJywge1xuICAgICAgICBtb3Rpb25QYXRoOiB7XG4gICAgICAgICAgICBwYXRoOiBzY2FsZWRQYXRoMixcbiAgICAgICAgICAgIGFsaWduOiAnc2VsZicsXG4gICAgICAgICAgICBhbGlnbk9yaWdpbjogWzAuNSwgMC41XSxcbiAgICAgICAgICAgIGF1dG9Sb3RhdGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgIC8vIGVhc2U6ICdwb3dlcjQnXG4gICAgICB9KTtcbiAgICAgIC8vXG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIGFuaW1hdGlvbjogYm94NFRsLFxuICAgICAgICB0cmlnZ2VyOiAnLmNvbnRhaW5lci0yJyxcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIHN0YXJ0OiAndG9wIGNlbnRlcicsXG4gICAgICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgYW5pbWF0aW9uOiBib3gyVGwsXG4gICAgICAgIHRyaWdnZXI6ICcuY29udGFpbmVyLTInLFxuICAgICAgICBwaW46IHRydWUsXG4gICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICBzdGFydDogJ3RvcCBjZW50ZXInLFxuICAgICAgfSk7XG4gICAgfSwgbWFpbik7XG5cbiAgICByZXR1cm4gKCkgPT4gY3R4LnJldmVydCgpO1xuICB9LCBbc21vb3RoZXJSZWFkeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIHJlZj17bWFpbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggYm94LTJcIj4yPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBib3gtNFwiPjQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIk1vdGlvblBhdGhQbHVnaW4iLCJyZWdpc3RlclBsdWdpbiIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJTbW9vdGhlckNvbnRleHQiLCJIb21lIiwic21vb3RoZXJSZWFkeSIsIm1haW4iLCJyeCIsInJ5IiwicGF0aCIsIngiLCJ5IiwicGF0aDIiLCJzY2FsZWRQYXRoIiwibWFwIiwic2NhbGVkUGF0aDIiLCJjdHgiLCJjb250ZXh0IiwiYm94NFRsIiwidGltZWxpbmUiLCJ0byIsIm1vdGlvblBhdGgiLCJhbGlnbiIsImFsaWduT3JpZ2luIiwiYXV0b1JvdGF0ZSIsImR1cmF0aW9uIiwiaW1tZWRpYXRlUmVuZGVyIiwiYm94MlRsIiwiY3JlYXRlIiwiYW5pbWF0aW9uIiwidHJpZ2dlciIsInNjcnViIiwic3RhcnQiLCJtYXJrZXJzIiwicGluIiwicmV2ZXJ0IiwicmVmIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.js\n"));

/***/ })

});
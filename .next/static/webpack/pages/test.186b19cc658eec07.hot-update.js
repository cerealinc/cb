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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap-trial */ \"./node_modules/gsap-trial/index.js\");\n/* harmony import */ var gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap-trial/dist/ScrollTrigger */ \"./node_modules/gsap-trial/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap-trial/dist/MotionPathPlugin */ \"./node_modules/gsap-trial/dist/MotionPathPlugin.js\");\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/isomorphicEffect */ \"./helpers/isomorphicEffect.js\");\n/* harmony import */ var _context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SmootherContext */ \"./context/SmootherContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\ngsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin((gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default()));\n\n\nfunction Home() {\n    _s();\n    const { smootherReady } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const main = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const rx = 1;\n    const ry = 1;\n    const path = [\n        // 1\n        {\n            x: 300,\n            y: 100\n        },\n        {\n            x: 500,\n            y: 2000\n        },\n        {\n            x: 100,\n            y: 2600\n        }\n    ];\n    const path2 = [\n        // 1\n        {\n            x: -300,\n            y: 1000\n        },\n        {\n            x: 100,\n            y: 2000\n        },\n        {\n            x: 0,\n            y: 3100\n        }\n    ];\n    const scaledPath = path.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    const scaledPath2 = path2.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    (0,_helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(()=>{\n        if (!smootherReady) return;\n        const ctx = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].context(()=>{\n            const box4Tl = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline().to(\".box-4\", {\n                motionPath: {\n                    path: scaledPath,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n            const box2Tl = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline().to(\".box-2\", {\n                motionPath: {\n                    path: scaledPath2,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n            //\n            gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default().create({\n                animation: box4Tl,\n                trigger: \".container-2\",\n                scrub: true,\n                start: \"center center\",\n                markers: true\n            });\n            gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default().create({\n                animation: box2Tl,\n                trigger: \".container-2\",\n                scrub: true,\n                start: \"center center\"\n            });\n            gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default().create({\n                animation: box2Tl,\n                trigger: \".container-3\",\n                scrub: true,\n                start: \"center center\"\n            });\n            gsap_trial_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default().create({\n                animation: box4Tl,\n                trigger: \".container-3\",\n                scrub: true,\n                start: \"center center\",\n                markers: true\n            });\n        }, main);\n        return ()=>ctx.revert();\n    }, [\n        smootherReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            ref: main,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"box box-2\",\n                            children: \"2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 104,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"box box-4\",\n                            children: \"4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 105,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 103,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container container-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 107,\n                    columnNumber: 7\n                }, this),\n                \"      \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container container-3\"\n                }, void 0, false, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 109,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"dMW+cbZi+/IhDh8O498AP7kdRyA=\", false, function() {\n    return [\n        _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkU7QUEyR1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcz9kMDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcC10cmlhbFwiO1xuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAtdHJpYWwvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgTW90aW9uUGF0aFBsdWdpbiBmcm9tIFwiZ3NhcC10cmlhbC9kaXN0L01vdGlvblBhdGhQbHVnaW5cIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oTW90aW9uUGF0aFBsdWdpbik7XG5cbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICcuLi9oZWxwZXJzL2lzb21vcnBoaWNFZmZlY3QnO1xuaW1wb3J0IFNtb290aGVyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L1Ntb290aGVyQ29udGV4dCc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc21vb3RoZXJSZWFkeSB9ID0gdXNlQ29udGV4dChTbW9vdGhlckNvbnRleHQpO1xuICBjb25zdCBtYWluID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJ4ID0gMVxuICBjb25zdCByeSA9ICAxXG4gIGNvbnN0IHBhdGggPSBbXG4gICAgLy8gMVxuICAgIHsgeDogMzAwLCB5OiAxMDAgfSxcbiAgICB7IHg6IDUwMCwgeTogMjAwMCB9LFxuICAgIHsgeDogMTAwLCB5OiAyNjAwIH0sXG5cbl1cbmNvbnN0IHBhdGgyID0gW1xuICAgIC8vIDFcbiAgICB7IHg6IC0zMDAsIHk6IDEwMDAgfSxcbiAgICB7IHg6IDEwMCwgeTogMjAwMCB9LFxuICAgIHsgeDogMCwgeTogMzEwMCB9LFxuXG5dXG5jb25zdCBzY2FsZWRQYXRoID0gcGF0aC5tYXAoKHsgeCwgeSB9KSA9PiB7XG5yZXR1cm4ge1xueDogeCAqIHJ4LFxueTogeSAqIHJ5XG59XG59KVxuY29uc3Qgc2NhbGVkUGF0aDIgPSBwYXRoMi5tYXAoKHsgeCwgeSB9KSA9PiB7XG4gIHJldHVybiB7XG4gIHg6IHggKiByeCxcbiAgeTogeSAqIHJ5XG4gIH1cbiAgfSlcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzbW9vdGhlclJlYWR5KSByZXR1cm47XG4gICAgY29uc3QgY3R4ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcblxuXG4gICAgICBjb25zdCBib3g0VGwgPSBnc2FwLnRpbWVsaW5lKCkudG8oJy5ib3gtNCcsIHtcbiAgICAgICAgbW90aW9uUGF0aDoge1xuICAgICAgICAgICAgcGF0aDogc2NhbGVkUGF0aCxcbiAgICAgICAgICAgIGFsaWduOiAnc2VsZicsXG4gICAgICAgICAgICBhbGlnbk9yaWdpbjogWzAuNSwgMC41XSxcbiAgICAgICAgICAgIGF1dG9Sb3RhdGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgIC8vIGVhc2U6ICdwb3dlcjQnXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGJveDJUbCA9IGdzYXAudGltZWxpbmUoKS50bygnLmJveC0yJywge1xuICAgICAgICBtb3Rpb25QYXRoOiB7XG4gICAgICAgICAgICBwYXRoOiBzY2FsZWRQYXRoMixcbiAgICAgICAgICAgIGFsaWduOiAnc2VsZicsXG4gICAgICAgICAgICBhbGlnbk9yaWdpbjogWzAuNSwgMC41XSxcbiAgICAgICAgICAgIGF1dG9Sb3RhdGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgIC8vIGVhc2U6ICdwb3dlcjQnXG4gICAgICB9KTtcbiAgICAgIC8vXG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIGFuaW1hdGlvbjogYm94NFRsLFxuICAgICAgICB0cmlnZ2VyOiAnLmNvbnRhaW5lci0yJyxcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIHN0YXJ0OiAnY2VudGVyIGNlbnRlcicsXG4gICAgICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgYW5pbWF0aW9uOiBib3gyVGwsXG4gICAgICAgIHRyaWdnZXI6ICcuY29udGFpbmVyLTInLFxuICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgc3RhcnQ6ICdjZW50ZXIgY2VudGVyJyxcbiAgICAgIH0pO1xuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICBhbmltYXRpb246IGJveDJUbCxcbiAgICAgICAgdHJpZ2dlcjogJy5jb250YWluZXItMycsXG4gICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICBzdGFydDogJ2NlbnRlciBjZW50ZXInLFxuICAgICAgfSk7XG4gICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIGFuaW1hdGlvbjogYm94NFRsLFxuICAgICAgICB0cmlnZ2VyOiAnLmNvbnRhaW5lci0zJyxcbiAgICAgICAgc2NydWI6IHRydWUsXG4gICAgICAgIHN0YXJ0OiAnY2VudGVyIGNlbnRlcicsXG4gICAgICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICB9KTtcbiAgICB9LCBtYWluKTtcblxuICAgIHJldHVybiAoKSA9PiBjdHgucmV2ZXJ0KCk7XG4gIH0sIFtzbW9vdGhlclJlYWR5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gcmVmPXttYWlufT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggYm94LTJcIj4yPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBib3gtNFwiPjQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLTJcIj5cblxuICAgICAgICA8L2Rpdj4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItM1wiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlQ29udGV4dCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiTW90aW9uUGF0aFBsdWdpbiIsInJlZ2lzdGVyUGx1Z2luIiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsIlNtb290aGVyQ29udGV4dCIsIkhvbWUiLCJzbW9vdGhlclJlYWR5IiwibWFpbiIsInJ4IiwicnkiLCJwYXRoIiwieCIsInkiLCJwYXRoMiIsInNjYWxlZFBhdGgiLCJtYXAiLCJzY2FsZWRQYXRoMiIsImN0eCIsImNvbnRleHQiLCJib3g0VGwiLCJ0aW1lbGluZSIsInRvIiwibW90aW9uUGF0aCIsImFsaWduIiwiYWxpZ25PcmlnaW4iLCJhdXRvUm90YXRlIiwiZHVyYXRpb24iLCJpbW1lZGlhdGVSZW5kZXIiLCJib3gyVGwiLCJjcmVhdGUiLCJhbmltYXRpb24iLCJ0cmlnZ2VyIiwic2NydWIiLCJzdGFydCIsIm1hcmtlcnMiLCJyZXZlcnQiLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/test.js\n"));

/***/ })

});
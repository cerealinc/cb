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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap-trial */ \"./node_modules/gsap-trial/index.js\");\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap-trial/dist/MotionPathPlugin */ \"./node_modules/gsap-trial/dist/MotionPathPlugin.js\");\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/isomorphicEffect */ \"./helpers/isomorphicEffect.js\");\n/* harmony import */ var _context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SmootherContext */ \"./context/SmootherContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\ngsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin((gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default()));\n\n\n\nfunction Home() {\n    _s();\n    const { smootherReady } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const main = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const rx = 1;\n    const ry = 1;\n    const path = [\n        // 1\n        {\n            y: \"40vh\",\n            x: \"43vw\"\n        },\n        {\n            y: \"40vh\",\n            x: \"43vw\"\n        },\n        {\n            y: \"40vh\",\n            x: \"43vw\"\n        },\n        // 2\n        {\n            y: \"40vh\",\n            x: \"43vw\"\n        },\n        {\n            x: -90,\n            y: 20\n        },\n        {\n            x: 10,\n            y: 0\n        },\n        // 3\n        {\n            x: -300,\n            y: -300\n        },\n        {\n            x: -100,\n            y: 0\n        },\n        {\n            x: 0,\n            y: 0\n        },\n        // 4\n        {\n            x: 1100,\n            y: 300\n        },\n        {\n            x: 400,\n            y: 400\n        },\n        {\n            x: 200,\n            y: 250\n        },\n        // 5\n        {\n            x: 100,\n            y: 300\n        },\n        {\n            x: 500,\n            y: 450\n        },\n        {\n            x: 1100,\n            y: 500\n        }\n    ];\n    const path2 = [\n        // 1\n        {\n            x: 800,\n            y: 200\n        },\n        {\n            x: 900,\n            y: 20\n        },\n        {\n            x: 1100,\n            y: 100\n        },\n        // 2\n        {\n            x: 700,\n            y: 20\n        },\n        {\n            x: 1100,\n            y: 20\n        },\n        {\n            x: 100,\n            y: 800\n        },\n        // 3\n        {\n            x: 100,\n            y: 300\n        },\n        {\n            x: 500,\n            y: 400\n        },\n        {\n            x: 1000,\n            y: 200\n        },\n        // 4\n        {\n            x: 1100,\n            y: 300\n        },\n        {\n            x: 400,\n            y: 400\n        },\n        {\n            x: 200,\n            y: 250\n        },\n        // 5\n        {\n            x: 100,\n            y: 300\n        },\n        {\n            x: 500,\n            y: 450\n        },\n        {\n            x: 1100,\n            y: 500\n        }\n    ];\n    const scaledPath = path.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    const scaledPath2 = path2.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    (0,_helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(()=>{\n        const ctx = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].context(()=>{\n            const tl = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n                scrollTrigger: {\n                    scrub: 1.5\n                }\n            });\n            const tll = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n                scrollTrigger: {\n                    scrub: 1.5\n                }\n            });\n            tl.to(\".box-1\", {\n                motionPath: {\n                    path: scaledPath,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n            tll.to(\".box-2\", {\n                motionPath: {\n                    path: scaledPath2,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n        }, main);\n        return ()=>ctx.revert();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            ref: main,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                            src: \"/Asset-1-3x.png\",\n                            alt: \"Vercel Logo\",\n                            className: \"asset-1 box-1\",\n                            initial: {\n                                y: \"79vh\",\n                                x: \"-43vw\"\n                            },\n                            animate: {\n                                y: \"40vh\",\n                                x: \"43vw\",\n                                rotate: [\n                                    0,\n                                    180,\n                                    360,\n                                    270,\n                                    0\n                                ]\n                            },\n                            exit: {},\n                            onAnimationComplete: (definition)=>{\n                                document.body.classList.add(\"loaded\");\n                                console.log(\"Completed animating\", definition);\n                            },\n                            transition: {\n                                delay: 0.6,\n                                ease: \"linear\",\n                                duration: 4\n                            },\n                            width: 300,\n                            height: 286,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 121,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                            src: \"/Asset-2-3x.png\",\n                            alt: \"Vercel Logo\",\n                            className: \"asset-2 box-2\",\n                            initial: {\n                                y: \"9vh\",\n                                x: \"63vw\"\n                            },\n                            animate: {\n                                y: 0,\n                                x: 0,\n                                rotate: [\n                                    170,\n                                    0\n                                ]\n                            },\n                            exit: {},\n                            transition: {\n                                delay: 0.4,\n                                ease: \"easeIn\",\n                                duration: 4.2\n                            },\n                            width: 300,\n                            height: 322,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                            src: \"/Asset-3-3x.png\",\n                            alt: \"Vercel Logo\",\n                            className: \"asset-3\",\n                            initial: {\n                                y: \"-59vh\",\n                                x: \"-33vw\"\n                            },\n                            animate: {\n                                y: 0,\n                                x: 0,\n                                rotate: [\n                                    360,\n                                    0\n                                ]\n                            },\n                            exit: {},\n                            transition: {\n                                delay: 0.6,\n                                ease: \"easeIn\",\n                                duration: 4\n                            },\n                            width: 300,\n                            height: 412,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 157,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 120,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container container-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 174,\n                    columnNumber: 7\n                }, this),\n                \"      \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container container-3\"\n                }, void 0, false, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 176,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n            lineNumber: 118,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"dMW+cbZi+/IhDh8O498AP7kdRyA=\", false, function() {\n    return [\n        _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUFPQyxHQUFHOzRCQUFPOzRCQUMvQjJCLFNBQVM7Z0NBQUU1QixHQUFHO2dDQUFHQyxHQUFHO2dDQUFHNEIsUUFBUTtvQ0FBQztvQ0FBSztpQ0FBRTs0QkFBQzs0QkFDeENDLE1BQU0sQ0FBQzs0QkFDUFMsWUFBWTtnQ0FDVkMsT0FBTztnQ0FDUEMsTUFBTTtnQ0FDTnZCLFVBQVU7NEJBQ1o7NEJBQ0F3QixPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxRQUFROzs7Ozs7c0NBRVYsOERBQUN2RCxpREFBTUEsQ0FBQ21DOzRCQUNOQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKSCxXQUFVOzRCQUNWSSxTQUFTO2dDQUFFM0IsR0FBRztnQ0FBU0MsR0FBRzs0QkFBUTs0QkFDbEMyQixTQUFTO2dDQUFFNUIsR0FBRztnQ0FBR0MsR0FBRztnQ0FBRzRCLFFBQVE7b0NBQUM7b0NBQUs7aUNBQUU7NEJBQUM7NEJBQ3hDQyxNQUFNLENBQUM7NEJBQ1BTLFlBQVk7Z0NBQ1ZDLE9BQU87Z0NBQ1BDLE1BQU07Z0NBQ052QixVQUFVOzRCQUNaOzRCQUNBd0IsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsUUFBUTs7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDdEI7b0JBQUlDLFdBQVU7Ozs7OztnQkFFUDs4QkFBTSw4REFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFNbkM7R0F4S1M3Qjs7UUE2RFBGLGdGQUF5QkE7OztLQTdEbEJFO0FBMEtULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3QuanM/ZDA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXAtdHJpYWxcIjtcbmltcG9ydCBTY3JvbGxUcmlnZ2VyIGZyb20gXCJnc2FwLXRyaWFsL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IE1vdGlvblBhdGhQbHVnaW4gZnJvbSBcImdzYXAtdHJpYWwvZGlzdC9Nb3Rpb25QYXRoUGx1Z2luXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKE1vdGlvblBhdGhQbHVnaW4pO1xuaW1wb3J0IHtcbiAgbW90aW9uLFxuICBBbmltYXRlUHJlc2VuY2UsXG4gIHVzZVRyYW5zZm9ybSxcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICcuLi9oZWxwZXJzL2lzb21vcnBoaWNFZmZlY3QnO1xuaW1wb3J0IFNtb290aGVyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L1Ntb290aGVyQ29udGV4dCc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc21vb3RoZXJSZWFkeSB9ID0gdXNlQ29udGV4dChTbW9vdGhlckNvbnRleHQpO1xuICBjb25zdCBtYWluID0gdXNlUmVmKCk7XG4gIGNvbnN0IHJ4ID0gMVxuICBjb25zdCByeSA9ICAxXG4gIGNvbnN0IHBhdGggPSBbXG4gICAgLy8gMVxuICAgIHsgIHk6IFwiNDB2aFwiLCB4OiBcIjQzdndcIiB9LFxuICAgIHsgIHk6IFwiNDB2aFwiLCB4OiBcIjQzdndcIiB9LFxuICAgIHsgIHk6IFwiNDB2aFwiLCB4OiBcIjQzdndcIiB9LFxuICAgIC8vIDJcbiAgICB7ICB5OiBcIjQwdmhcIiwgeDogXCI0M3Z3XCIgfSxcbiAgICB7IHg6IC05MCwgeTogMjAgfSxcbiAgICB7IHg6IDEwLCB5OiAwIH0sXG4gICAgLy8gM1xuICAgIHsgeDogLTMwMCwgeTogLTMwMCB9LFxuICAgIHsgeDogLTEwMCwgeTogMCB9LFxuICAgIHsgeDogMCwgeTogMCB9LFxuICAgIC8vIDRcbiAgICB7IHg6IDExMDAsIHk6IDMwMCB9LFxuICAgIHsgeDogNDAwLCB5OiA0MDAgfSxcbiAgICB7IHg6IDIwMCwgeTogMjUwIH0sXG4gICAgLy8gNVxuICAgIHsgeDogMTAwLCB5OiAzMDAgfSxcbiAgICB7IHg6IDUwMCwgeTogNDUwIH0sXG4gICAgeyB4OiAxMTAwLCB5OiA1MDAgfVxuICBdXG4gIGNvbnN0IHBhdGgyID0gW1xuICAgIC8vIDFcbiAgICB7IHg6IDgwMCwgeTogMjAwIH0sXG4gICAgeyB4OiA5MDAsIHk6IDIwIH0sXG4gICAgeyB4OiAxMTAwLCB5OiAxMDAgfSxcbiAgICAvLyAyXG4gICAgeyB4OiA3MDAsIHk6IDIwIH0sXG4gICAgeyB4OiAxMTAwLCB5OiAyMCB9LFxuICAgIHsgeDogMTAwLCB5OiA4MDAgfSxcbiAgICAvLyAzXG4gICAgeyB4OiAxMDAsIHk6IDMwMCB9LFxuICAgIHsgeDogNTAwLCB5OiA0MDAgfSxcbiAgICB7IHg6IDEwMDAsIHk6IDIwMCB9LFxuICAgIC8vIDRcbiAgICB7IHg6IDExMDAsIHk6IDMwMCB9LFxuICAgIHsgeDogNDAwLCB5OiA0MDAgfSxcbiAgICB7IHg6IDIwMCwgeTogMjUwIH0sXG4gICAgLy8gNVxuICAgIHsgeDogMTAwLCB5OiAzMDAgfSxcbiAgICB7IHg6IDUwMCwgeTogNDUwIH0sXG4gICAgeyB4OiAxMTAwLCB5OiA1MDAgfVxuICBdXG5jb25zdCBzY2FsZWRQYXRoID0gcGF0aC5tYXAoKHsgeCwgeSB9KSA9PiB7XG5yZXR1cm4ge1xueDogeCAqIHJ4LFxueTogeSAqIHJ5XG59XG59KVxuY29uc3Qgc2NhbGVkUGF0aDIgPSBwYXRoMi5tYXAoKHsgeCwgeSB9KSA9PiB7XG4gIHJldHVybiB7XG4gIHg6IHggKiByeCxcbiAgeTogeSAqIHJ5XG4gIH1cbiAgfSlcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3R4ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcbiAgICAgIFxuICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHNjcnViOiAxLjUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgY29uc3QgdGxsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICBzY3J1YjogMS41LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIHRsLnRvKCcuYm94LTEnLCB7XG4gICAgICAgIG1vdGlvblBhdGg6IHtcbiAgICAgICAgICBwYXRoOiBzY2FsZWRQYXRoLFxuICAgICAgICAgIGFsaWduOiAnc2VsZicsXG4gICAgICAgICAgYWxpZ25PcmlnaW46IFswLjUsIDAuNV0sXG4gICAgICAgICAgYXV0b1JvdGF0ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogMTAsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgLy8gZWFzZTogJ3Bvd2VyNCdcbiAgICAgIH0pXG4gICAgICB0bGwudG8oJy5ib3gtMicsIHtcbiAgICAgICAgbW90aW9uUGF0aDoge1xuICAgICAgICAgIHBhdGg6IHNjYWxlZFBhdGgyLFxuICAgICAgICAgIGFsaWduOiAnc2VsZicsXG4gICAgICAgICAgYWxpZ25PcmlnaW46IFswLjUsIDAuNV0sXG4gICAgICAgICAgYXV0b1JvdGF0ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogMTAsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgLy8gZWFzZTogJ3Bvd2VyNCdcbiAgICAgIH0pXG5cbiAgICB9LCBtYWluKTtcblxuICAgIHJldHVybiAoKSA9PiBjdHgucmV2ZXJ0KCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIHJlZj17bWFpbn0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxuICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgIHNyYz1cIi9Bc3NldC0xLTN4LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhc3NldC0xIGJveC0xXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogXCI3OXZoXCIsIHg6IFwiLTQzdndcIiB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiBcIjQwdmhcIiwgeDogXCI0M3Z3XCIgLCByb3RhdGU6IFswLCAxODAsIDM2MCwgMjcwLCAwXSB9fVxuICAgICAgICAgICAgZXhpdD17e319XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkNvbXBsZXRlPXsoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGVkIGFuaW1hdGluZ1wiLCBkZWZpbml0aW9uKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgIGRlbGF5OiAwLjYsXG4gICAgICAgICAgICAgIGVhc2U6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA0LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezI4Nn1cbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bW90aW9uLmltZ1xuICAgICAgICAgICAgc3JjPVwiL0Fzc2V0LTItM3gucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzc2V0LTIgYm94LTJcIlxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiBcIjl2aFwiLCB4OiBcIjYzdndcIiB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCB4OiAwLCByb3RhdGU6IFsxNzAsIDBdIH19XG4gICAgICAgICAgICBleGl0PXt7fX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgZGVsYXk6IDAuNCxcbiAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5cIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDQuMixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXszMjJ9XG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgIHNyYz1cIi9Bc3NldC0zLTN4LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhc3NldC0zXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogXCItNTl2aFwiLCB4OiBcIi0zM3Z3XCIgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgeDogMCwgcm90YXRlOiBbMzYwLCAwXSB9fVxuICAgICAgICAgICAgZXhpdD17e319XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgIGRlbGF5OiAwLjYsXG4gICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA0LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezQxMn1cbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLTJcIj5cblxuICAgICAgICA8L2Rpdj4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItM1wiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlQ29udGV4dCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiTW90aW9uUGF0aFBsdWdpbiIsInJlZ2lzdGVyUGx1Z2luIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlVHJhbnNmb3JtIiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsIlNtb290aGVyQ29udGV4dCIsIkhvbWUiLCJzbW9vdGhlclJlYWR5IiwibWFpbiIsInJ4IiwicnkiLCJwYXRoIiwieSIsIngiLCJwYXRoMiIsInNjYWxlZFBhdGgiLCJtYXAiLCJzY2FsZWRQYXRoMiIsImN0eCIsImNvbnRleHQiLCJ0bCIsInRpbWVsaW5lIiwic2Nyb2xsVHJpZ2dlciIsInNjcnViIiwidGxsIiwidG8iLCJtb3Rpb25QYXRoIiwiYWxpZ24iLCJhbGlnbk9yaWdpbiIsImF1dG9Sb3RhdGUiLCJkdXJhdGlvbiIsImltbWVkaWF0ZVJlbmRlciIsInJldmVydCIsInJlZiIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImluaXRpYWwiLCJhbmltYXRlIiwicm90YXRlIiwiZXhpdCIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJkZWZpbml0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInRyYW5zaXRpb24iLCJkZWxheSIsImVhc2UiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.js\n"));

/***/ })

});
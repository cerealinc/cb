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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap-trial */ \"./node_modules/gsap-trial/index.js\");\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap-trial/dist/MotionPathPlugin */ \"./node_modules/gsap-trial/dist/MotionPathPlugin.js\");\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/isomorphicEffect */ \"./helpers/isomorphicEffect.js\");\n/* harmony import */ var _context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SmootherContext */ \"./context/SmootherContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\ngsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin((gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default()));\n\n\n\nfunction Home() {\n    _s();\n    const { smootherReady } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const main = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const rx = 1;\n    const ry = 1;\n    const path = [\n        // 1\n        {\n            x: 0,\n            y: 0\n        },\n        {\n            x: -90,\n            y: 20\n        },\n        {\n            x: 100,\n            y: -100\n        },\n        // 2\n        {\n            x: 0,\n            y: -200\n        },\n        {\n            x: -90,\n            y: 20\n        },\n        {\n            x: 10,\n            y: 0\n        },\n        // 3\n        {\n            x: -300,\n            y: -300\n        },\n        {\n            x: -100,\n            y: 0\n        },\n        {\n            x: 0,\n            y: 0\n        },\n        // 4\n        {\n            x: 1100,\n            y: 300\n        },\n        {\n            x: 400,\n            y: 400\n        },\n        {\n            x: 200,\n            y: 250\n        },\n        // 5\n        {\n            x: 100,\n            y: 300\n        },\n        {\n            x: 500,\n            y: 450\n        },\n        {\n            x: 1100,\n            y: 500\n        }\n    ];\n    const path2 = [\n        // 1\n        {\n            x: 800,\n            y: 200\n        },\n        {\n            x: 900,\n            y: 20\n        },\n        {\n            x: 1100,\n            y: 100\n        },\n        // 2\n        {\n            x: 700,\n            y: 20\n        },\n        {\n            x: 1100,\n            y: 20\n        },\n        {\n            x: 100,\n            y: 800\n        },\n        // 3\n        {\n            x: 100,\n            y: 300\n        },\n        {\n            x: 500,\n            y: 400\n        },\n        {\n            x: 1000,\n            y: 200\n        },\n        // 4\n        {\n            x: 1100,\n            y: 300\n        },\n        {\n            x: 400,\n            y: 400\n        },\n        {\n            x: 200,\n            y: 250\n        },\n        // 5\n        {\n            x: 100,\n            y: 300\n        },\n        {\n            x: 500,\n            y: 450\n        },\n        {\n            x: 1100,\n            y: 500\n        }\n    ];\n    const scaledPath = path.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    const scaledPath2 = path2.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    (0,_helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(()=>{\n        const ctx = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].context(()=>{\n            const tl = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n                scrollTrigger: {\n                    scrub: 1.5\n                }\n            });\n            const tll = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n                scrollTrigger: {\n                    scrub: 1.5\n                }\n            });\n            tl.to(\".box-1\", {\n                motionPath: {\n                    path: scaledPath,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n            tll.to(\".box-2\", {\n                motionPath: {\n                    path: scaledPath2,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n        }, main);\n        return ()=>ctx.revert();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            ref: main,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                            src: \"/Asset-1-3x.png\",\n                            alt: \"Vercel Logo\",\n                            className: \"asset-1 box-1\",\n                            initial: {\n                                y: \"79vh\",\n                                x: \"-43vw\"\n                            },\n                            animate: {\n                                y: 0,\n                                x: 0,\n                                rotate: [\n                                    0,\n                                    180,\n                                    360,\n                                    270,\n                                    0\n                                ]\n                            },\n                            exit: {},\n                            onAnimationComplete: (definition)=>{\n                                document.body.classList.add(\"loaded\");\n                                console.log(\"Completed animating\", definition);\n                            },\n                            transition: {\n                                delay: 0.6,\n                                ease: \"linear\",\n                                duration: 4\n                            },\n                            width: 300,\n                            height: 286,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 121,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                            src: \"/Asset-2-3x.png\",\n                            alt: \"Vercel Logo\",\n                            className: \"asset-2 box-2\",\n                            initial: {\n                                y: \"9vh\",\n                                x: \"63vw\"\n                            },\n                            animate: {\n                                y: 0,\n                                x: 0,\n                                rotate: [\n                                    170,\n                                    0\n                                ]\n                            },\n                            exit: {},\n                            transition: {\n                                delay: 0.4,\n                                ease: \"easeIn\",\n                                duration: 4.2\n                            },\n                            width: 300,\n                            height: 322,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.img, {\n                            src: \"/Asset-3-3x.png\",\n                            alt: \"Vercel Logo\",\n                            className: \"asset-3\",\n                            initial: {\n                                y: \"-59vh\",\n                                x: \"-33vw\"\n                            },\n                            animate: {\n                                y: 0,\n                                x: 0,\n                                rotate: [\n                                    360,\n                                    0\n                                ]\n                            },\n                            exit: {},\n                            transition: {\n                                delay: 0.6,\n                                ease: \"easeIn\",\n                                duration: 4\n                            },\n                            width: 300,\n                            height: 412,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 157,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 120,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container container-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 174,\n                    columnNumber: 7\n                }, this),\n                \"      \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container container-3\"\n                }, void 0, false, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 176,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n            lineNumber: 118,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"dMW+cbZi+/IhDh8O498AP7kdRyA=\", false, function() {\n    return [\n        _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztnQ0FBRTFCLEdBQUc7Z0NBQU9ELEdBQUc7NEJBQU87NEJBQy9CNEIsU0FBUztnQ0FBRTNCLEdBQUc7Z0NBQUdELEdBQUc7Z0NBQUc2QixRQUFRO29DQUFDO29DQUFLO2lDQUFFOzRCQUFDOzRCQUN4Q0MsTUFBTSxDQUFDOzRCQUNQUyxZQUFZO2dDQUNWQyxPQUFPO2dDQUNQQyxNQUFNO2dDQUNOdkIsVUFBVTs0QkFDWjs0QkFDQXdCLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFFBQVE7Ozs7OztzQ0FFViw4REFBQ3ZELGlEQUFNQSxDQUFDbUM7NEJBQ05DLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pILFdBQVU7NEJBQ1ZJLFNBQVM7Z0NBQUUxQixHQUFHO2dDQUFTRCxHQUFHOzRCQUFROzRCQUNsQzRCLFNBQVM7Z0NBQUUzQixHQUFHO2dDQUFHRCxHQUFHO2dDQUFHNkIsUUFBUTtvQ0FBQztvQ0FBSztpQ0FBRTs0QkFBQzs0QkFDeENDLE1BQU0sQ0FBQzs0QkFDUFMsWUFBWTtnQ0FDVkMsT0FBTztnQ0FDUEMsTUFBTTtnQ0FDTnZCLFVBQVU7NEJBQ1o7NEJBQ0F3QixPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxRQUFROzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUN0QjtvQkFBSUMsV0FBVTs7Ozs7O2dCQUVQOzhCQUFNLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OztBQU1uQztHQXhLUzdCOztRQTZEUEYsZ0ZBQXlCQTs7O0tBN0RsQkU7QUEwS1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcz9kMDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcC10cmlhbFwiO1xuaW1wb3J0IFNjcm9sbFRyaWdnZXIgZnJvbSBcImdzYXAtdHJpYWwvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgTW90aW9uUGF0aFBsdWdpbiBmcm9tIFwiZ3NhcC10cmlhbC9kaXN0L01vdGlvblBhdGhQbHVnaW5cIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oTW90aW9uUGF0aFBsdWdpbik7XG5pbXBvcnQge1xuICBtb3Rpb24sXG4gIEFuaW1hdGVQcmVzZW5jZSxcbiAgdXNlVHJhbnNmb3JtLFxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL2hlbHBlcnMvaXNvbW9ycGhpY0VmZmVjdCc7XG5pbXBvcnQgU21vb3RoZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvU21vb3RoZXJDb250ZXh0JztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBzbW9vdGhlclJlYWR5IH0gPSB1c2VDb250ZXh0KFNtb290aGVyQ29udGV4dCk7XG4gIGNvbnN0IG1haW4gPSB1c2VSZWYoKTtcbiAgY29uc3QgcnggPSAxXG4gIGNvbnN0IHJ5ID0gIDFcbiAgY29uc3QgcGF0aCA9IFtcbiAgICAvLyAxXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB4OiAtOTAsIHk6IDIwIH0sXG4gICAgeyB4OiAxMDAsIHk6IC0xMDAgfSxcbiAgICAvLyAyXG4gICAgeyB4OiAwLCB5OiAtMjAwIH0sXG4gICAgeyB4OiAtOTAsIHk6IDIwIH0sXG4gICAgeyB4OiAxMCwgeTogMCB9LFxuICAgIC8vIDNcbiAgICB7IHg6IC0zMDAsIHk6IC0zMDAgfSxcbiAgICB7IHg6IC0xMDAsIHk6IDAgfSxcbiAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAvLyA0XG4gICAgeyB4OiAxMTAwLCB5OiAzMDAgfSxcbiAgICB7IHg6IDQwMCwgeTogNDAwIH0sXG4gICAgeyB4OiAyMDAsIHk6IDI1MCB9LFxuICAgIC8vIDVcbiAgICB7IHg6IDEwMCwgeTogMzAwIH0sXG4gICAgeyB4OiA1MDAsIHk6IDQ1MCB9LFxuICAgIHsgeDogMTEwMCwgeTogNTAwIH1cbiAgXVxuICBjb25zdCBwYXRoMiA9IFtcbiAgICAvLyAxXG4gICAgeyB4OiA4MDAsIHk6IDIwMCB9LFxuICAgIHsgeDogOTAwLCB5OiAyMCB9LFxuICAgIHsgeDogMTEwMCwgeTogMTAwIH0sXG4gICAgLy8gMlxuICAgIHsgeDogNzAwLCB5OiAyMCB9LFxuICAgIHsgeDogMTEwMCwgeTogMjAgfSxcbiAgICB7IHg6IDEwMCwgeTogODAwIH0sXG4gICAgLy8gM1xuICAgIHsgeDogMTAwLCB5OiAzMDAgfSxcbiAgICB7IHg6IDUwMCwgeTogNDAwIH0sXG4gICAgeyB4OiAxMDAwLCB5OiAyMDAgfSxcbiAgICAvLyA0XG4gICAgeyB4OiAxMTAwLCB5OiAzMDAgfSxcbiAgICB7IHg6IDQwMCwgeTogNDAwIH0sXG4gICAgeyB4OiAyMDAsIHk6IDI1MCB9LFxuICAgIC8vIDVcbiAgICB7IHg6IDEwMCwgeTogMzAwIH0sXG4gICAgeyB4OiA1MDAsIHk6IDQ1MCB9LFxuICAgIHsgeDogMTEwMCwgeTogNTAwIH1cbiAgXVxuY29uc3Qgc2NhbGVkUGF0aCA9IHBhdGgubWFwKCh7IHgsIHkgfSkgPT4ge1xucmV0dXJuIHtcbng6IHggKiByeCxcbnk6IHkgKiByeVxufVxufSlcbmNvbnN0IHNjYWxlZFBhdGgyID0gcGF0aDIubWFwKCh7IHgsIHkgfSkgPT4ge1xuICByZXR1cm4ge1xuICB4OiB4ICogcngsXG4gIHk6IHkgKiByeVxuICB9XG4gIH0pXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IGdzYXAuY29udGV4dCgoKSA9PiB7XG4gICAgICBcbiAgICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICBzY3J1YjogMS41LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIGNvbnN0IHRsbCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgc2NydWI6IDEuNSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICB0bC50bygnLmJveC0xJywge1xuICAgICAgICBtb3Rpb25QYXRoOiB7XG4gICAgICAgICAgcGF0aDogc2NhbGVkUGF0aCxcbiAgICAgICAgICBhbGlnbjogJ3NlbGYnLFxuICAgICAgICAgIGFsaWduT3JpZ2luOiBbMC41LCAwLjVdLFxuICAgICAgICAgIGF1dG9Sb3RhdGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgIC8vIGVhc2U6ICdwb3dlcjQnXG4gICAgICB9KVxuICAgICAgdGxsLnRvKCcuYm94LTInLCB7XG4gICAgICAgIG1vdGlvblBhdGg6IHtcbiAgICAgICAgICBwYXRoOiBzY2FsZWRQYXRoMixcbiAgICAgICAgICBhbGlnbjogJ3NlbGYnLFxuICAgICAgICAgIGFsaWduT3JpZ2luOiBbMC41LCAwLjVdLFxuICAgICAgICAgIGF1dG9Sb3RhdGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgIC8vIGVhc2U6ICdwb3dlcjQnXG4gICAgICB9KVxuXG4gICAgfSwgbWFpbik7XG5cbiAgICByZXR1cm4gKCkgPT4gY3R4LnJldmVydCgpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiByZWY9e21haW59PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cbiAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICBzcmM9XCIvQXNzZXQtMS0zeC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNzZXQtMSBib3gtMVwiXG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IFwiNzl2aFwiLCB4OiBcIi00M3Z3XCIgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgeDogMCwgcm90YXRlOiBbMCwgMTgwLCAzNjAsIDI3MCwgMF0gfX1cbiAgICAgICAgICAgIGV4aXQ9e3t9fVxuICAgICAgICAgICAgb25BbmltYXRpb25Db21wbGV0ZT17KGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCBhbmltYXRpbmdcIiwgZGVmaW5pdGlvbik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICBkZWxheTogMC42LFxuICAgICAgICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsyODZ9XG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgIHNyYz1cIi9Bc3NldC0yLTN4LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhc3NldC0yIGJveC0yXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogXCI5dmhcIiwgeDogXCI2M3Z3XCIgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgeDogMCwgcm90YXRlOiBbMTcwLCAwXSB9fVxuICAgICAgICAgICAgZXhpdD17e319XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgIGRlbGF5OiAwLjQsXG4gICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA0LjIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIGhlaWdodD17MzIyfVxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICBzcmM9XCIvQXNzZXQtMy0zeC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNzZXQtM1wiXG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IFwiLTU5dmhcIiwgeDogXCItMzN2d1wiIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIHg6IDAsIHJvdGF0ZTogWzM2MCwgMF0gfX1cbiAgICAgICAgICAgIGV4aXQ9e3t9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICBkZWxheTogMC42LFxuICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJblwiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogNCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXs0MTJ9XG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci0yXCI+XG5cbiAgICAgICAgPC9kaXY+ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLTNcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIk1vdGlvblBhdGhQbHVnaW4iLCJyZWdpc3RlclBsdWdpbiIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVRyYW5zZm9ybSIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJTbW9vdGhlckNvbnRleHQiLCJIb21lIiwic21vb3RoZXJSZWFkeSIsIm1haW4iLCJyeCIsInJ5IiwicGF0aCIsIngiLCJ5IiwicGF0aDIiLCJzY2FsZWRQYXRoIiwibWFwIiwic2NhbGVkUGF0aDIiLCJjdHgiLCJjb250ZXh0IiwidGwiLCJ0aW1lbGluZSIsInNjcm9sbFRyaWdnZXIiLCJzY3J1YiIsInRsbCIsInRvIiwibW90aW9uUGF0aCIsImFsaWduIiwiYWxpZ25PcmlnaW4iLCJhdXRvUm90YXRlIiwiZHVyYXRpb24iLCJpbW1lZGlhdGVSZW5kZXIiLCJyZXZlcnQiLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInJvdGF0ZSIsImV4aXQiLCJvbkFuaW1hdGlvbkNvbXBsZXRlIiwiZGVmaW5pdGlvbiIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJlYXNlIiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap_trial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap-trial */ \"./node_modules/gsap-trial/index.js\");\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap-trial/dist/MotionPathPlugin */ \"./node_modules/gsap-trial/dist/MotionPathPlugin.js\");\n/* harmony import */ var gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/isomorphicEffect */ \"./helpers/isomorphicEffect.js\");\n/* harmony import */ var _context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SmootherContext */ \"./context/SmootherContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\ngsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].registerPlugin((gsap_trial_dist_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3___default()));\n\n\nfunction Home() {\n    _s();\n    const { smootherReady } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_SmootherContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const main = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const rx = 1.2;\n    const ry = 1.2;\n    const path = [\n        // 1\n        {\n            x: 800,\n            y: 200\n        },\n        {\n            x: 900,\n            y: 20\n        },\n        {\n            x: 1100,\n            y: 100\n        },\n        // 2\n        {\n            x: 1000,\n            y: 200\n        },\n        {\n            x: 900,\n            y: 20\n        },\n        {\n            x: 10,\n            y: 500\n        },\n        // 3\n        {\n            x: 100,\n            y: 300\n        },\n        {\n            x: 500,\n            y: 400\n        },\n        {\n            x: 1000,\n            y: 200\n        },\n        // 4\n        {\n            x: 1100,\n            y: 300\n        },\n        {\n            x: 400,\n            y: 400\n        },\n        {\n            x: 200,\n            y: 250\n        },\n        // 5\n        {\n            x: 100,\n            y: 300\n        },\n        {\n            x: 500,\n            y: 450\n        },\n        {\n            x: 1100,\n            y: 500\n        }\n    ];\n    const path2 = [\n        // 1\n        {\n            x: -300,\n            y: 1000\n        },\n        {\n            x: 100,\n            y: 2000\n        },\n        {\n            x: 0,\n            y: 3100\n        }\n    ];\n    const scaledPath = path.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    const scaledPath2 = path2.map((param)=>{\n        let { x, y } = param;\n        return {\n            x: x * rx,\n            y: y * ry\n        };\n    });\n    (0,_helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(()=>{\n        const ctx = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].context(()=>{\n            const tl = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n                scrollTrigger: {\n                    scrub: 1.5\n                }\n            });\n            const tll = gsap_trial__WEBPACK_IMPORTED_MODULE_2__[\"default\"].timeline({\n                scrollTrigger: {\n                    scrub: 1.5\n                }\n            });\n            tl.to(\".box-1\", {\n                motionPath: {\n                    path: scaledPath,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n            tll.to(\".box-2\", {\n                motionPath: {\n                    path: scaledPath,\n                    align: \"self\",\n                    alignOrigin: [\n                        0.5,\n                        0.5\n                    ],\n                    autoRotate: true\n                },\n                duration: 10,\n                immediateRender: true\n            });\n        }, main);\n        return ()=>ctx.revert();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            ref: main,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"box box-1\",\n                            children: \"12e12e\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 102,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"box box-2\",\n                            children: \"2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                            lineNumber: 103,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 101,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container container-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 105,\n                    columnNumber: 7\n                }, this),\n                \"      \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container container-3\"\n                }, void 0, false, {\n                    fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n                    lineNumber: 107,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paularbuthnot/Documents/GitHub/cb/pages/test.js\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"dMW+cbZi+/IhDh8O498AP7kdRyA=\", false, function() {\n    return [\n        _helpers_isomorphicEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFFM0IsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7Z0JBRVA7OEJBQU0sOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7O0FBTW5DO0dBdkdTN0I7O1FBOENQRixnRkFBeUJBOzs7S0E5Q2xCRTtBQXlHVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0LmpzP2QwOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwLXRyaWFsXCI7XG5pbXBvcnQgU2Nyb2xsVHJpZ2dlciBmcm9tIFwiZ3NhcC10cmlhbC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBNb3Rpb25QYXRoUGx1Z2luIGZyb20gXCJnc2FwLXRyaWFsL2Rpc3QvTW90aW9uUGF0aFBsdWdpblwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihNb3Rpb25QYXRoUGx1Z2luKTtcblxuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL2hlbHBlcnMvaXNvbW9ycGhpY0VmZmVjdCc7XG5pbXBvcnQgU21vb3RoZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvU21vb3RoZXJDb250ZXh0JztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBzbW9vdGhlclJlYWR5IH0gPSB1c2VDb250ZXh0KFNtb290aGVyQ29udGV4dCk7XG4gIGNvbnN0IG1haW4gPSB1c2VSZWYoKTtcbiAgY29uc3QgcnggPSAxLjJcbiAgY29uc3QgcnkgPSAgMS4yXG4gIGNvbnN0IHBhdGggPSBbXG4gICAgLy8gMVxuICAgIHsgeDogODAwLCB5OiAyMDAgfSxcbiAgICB7IHg6IDkwMCwgeTogMjAgfSxcbiAgICB7IHg6IDExMDAsIHk6IDEwMCB9LFxuICAgIC8vIDJcbiAgICB7IHg6IDEwMDAsIHk6IDIwMCB9LFxuICAgIHsgeDogOTAwLCB5OiAyMCB9LFxuICAgIHsgeDogMTAsIHk6IDUwMCB9LFxuICAgIC8vIDNcbiAgICB7IHg6IDEwMCwgeTogMzAwIH0sXG4gICAgeyB4OiA1MDAsIHk6IDQwMCB9LFxuICAgIHsgeDogMTAwMCwgeTogMjAwIH0sXG4gICAgLy8gNFxuICAgIHsgeDogMTEwMCwgeTogMzAwIH0sXG4gICAgeyB4OiA0MDAsIHk6IDQwMCB9LFxuICAgIHsgeDogMjAwLCB5OiAyNTAgfSxcbiAgICAvLyA1XG4gICAgeyB4OiAxMDAsIHk6IDMwMCB9LFxuICAgIHsgeDogNTAwLCB5OiA0NTAgfSxcbiAgICB7IHg6IDExMDAsIHk6IDUwMCB9XG4gIF1cbmNvbnN0IHBhdGgyID0gW1xuICAgIC8vIDFcbiAgICB7IHg6IC0zMDAsIHk6IDEwMDAgfSxcbiAgICB7IHg6IDEwMCwgeTogMjAwMCB9LFxuICAgIHsgeDogMCwgeTogMzEwMCB9LFxuXG5dXG5jb25zdCBzY2FsZWRQYXRoID0gcGF0aC5tYXAoKHsgeCwgeSB9KSA9PiB7XG5yZXR1cm4ge1xueDogeCAqIHJ4LFxueTogeSAqIHJ5XG59XG59KVxuY29uc3Qgc2NhbGVkUGF0aDIgPSBwYXRoMi5tYXAoKHsgeCwgeSB9KSA9PiB7XG4gIHJldHVybiB7XG4gIHg6IHggKiByeCxcbiAgeTogeSAqIHJ5XG4gIH1cbiAgfSlcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3R4ID0gZ3NhcC5jb250ZXh0KCgpID0+IHtcbiAgICAgIFxuICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHNjcnViOiAxLjUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgY29uc3QgdGxsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICBzY3J1YjogMS41LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIHRsLnRvKCcuYm94LTEnLCB7XG4gICAgICAgIG1vdGlvblBhdGg6IHtcbiAgICAgICAgICBwYXRoOiBzY2FsZWRQYXRoLFxuICAgICAgICAgIGFsaWduOiAnc2VsZicsXG4gICAgICAgICAgYWxpZ25PcmlnaW46IFswLjUsIDAuNV0sXG4gICAgICAgICAgYXV0b1JvdGF0ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogMTAsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgLy8gZWFzZTogJ3Bvd2VyNCdcbiAgICAgIH0pXG4gICAgICB0bGwudG8oJy5ib3gtMicsIHtcbiAgICAgICAgbW90aW9uUGF0aDoge1xuICAgICAgICAgIHBhdGg6IHNjYWxlZFBhdGgsXG4gICAgICAgICAgYWxpZ246ICdzZWxmJyxcbiAgICAgICAgICBhbGlnbk9yaWdpbjogWzAuNSwgMC41XSxcbiAgICAgICAgICBhdXRvUm90YXRlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiAxMCxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiB0cnVlLFxuICAgICAgICAvLyBlYXNlOiAncG93ZXI0J1xuICAgICAgfSlcblxuICAgIH0sIG1haW4pO1xuXG4gICAgcmV0dXJuICgpID0+IGN0eC5yZXZlcnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gcmVmPXttYWlufT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBib3gtMVwiPjEyZTEyZTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggYm94LTJcIj4yPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lci0yXCI+XG5cbiAgICAgICAgPC9kaXY+ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLTNcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsIk1vdGlvblBhdGhQbHVnaW4iLCJyZWdpc3RlclBsdWdpbiIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJTbW9vdGhlckNvbnRleHQiLCJIb21lIiwic21vb3RoZXJSZWFkeSIsIm1haW4iLCJyeCIsInJ5IiwicGF0aCIsIngiLCJ5IiwicGF0aDIiLCJzY2FsZWRQYXRoIiwibWFwIiwic2NhbGVkUGF0aDIiLCJjdHgiLCJjb250ZXh0IiwidGwiLCJ0aW1lbGluZSIsInNjcm9sbFRyaWdnZXIiLCJzY3J1YiIsInRsbCIsInRvIiwibW90aW9uUGF0aCIsImFsaWduIiwiYWxpZ25PcmlnaW4iLCJhdXRvUm90YXRlIiwiZHVyYXRpb24iLCJpbW1lZGlhdGVSZW5kZXIiLCJyZXZlcnQiLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/test.js\n"));

/***/ })

});
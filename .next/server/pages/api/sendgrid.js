"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendgrid";
exports.ids = ["pages/api/sendgrid"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "(api)/./pages/api/sendgrid.js":
/*!*******************************!*\
  !*** ./pages/api/sendgrid.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey(process.env.SENDGRID_API_KEY);\nasync function sendEmail(req, res) {\n    try {\n        // console.log(\"REQ.BODY\", req.body);\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send({\n            to: \"info@carvingblockpr.com\",\n            from: \"paul@madebycereal.com\",\n            subject: `NEW CONTACT - WEBSITE FORM`,\n            html: `<div>EMAIL: ✉️${req.body.email}</div>`\n        });\n    } catch (error) {\n        // console.log(error);\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZGdyaWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDQSwrREFBa0JDLENBQUNDLFFBQVFDLElBQUlDO0FBRS9CLGVBQWVDLFVBQVVDLEdBQUcsRUFBRUMsR0FBRztJQUMvQixJQUFJO1FBQ0YscUNBQXFDO1FBQ3JDLE1BQU1QLDBEQUFhUSxDQUFDO1lBQ2xCQyxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsU0FBUyxDQUFDLDBCQUEwQixDQUFDO1lBQ3JDQyxNQUFNLENBQUMsY0FBYyxFQUFFTixJQUFJTyxLQUFLQyxNQUFNLE1BQU0sQ0FBQztRQUMvQztJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLHNCQUFzQjtRQUN0QixPQUFPUixJQUFJUyxPQUFPRCxNQUFNRSxjQUFjLEtBQUtDLEtBQUs7WUFBRUgsT0FBT0EsTUFBTUk7UUFBUTtJQUN6RTtJQUVBLE9BQU9aLElBQUlTLE9BQU8sS0FBS0UsS0FBSztRQUFFSCxPQUFPO0lBQUc7QUFDMUM7QUFFQSxpRUFBZVYsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWZ1bGxwYWdlLW5leHQtZXhhbXBsZS8uL3BhZ2VzL2FwaS9zZW5kZ3JpZC5qcz81MDIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZW5kZ3JpZCBmcm9tIFwiQHNlbmRncmlkL21haWxcIjtcblxuc2VuZGdyaWQuc2V0QXBpS2V5KHByb2Nlc3MuZW52LlNFTkRHUklEX0FQSV9LRVkpO1xuXG5hc3luYyBmdW5jdGlvbiBzZW5kRW1haWwocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlJFUS5CT0RZXCIsIHJlcS5ib2R5KTtcbiAgICBhd2FpdCBzZW5kZ3JpZC5zZW5kKHtcbiAgICAgIHRvOiBcImluZm9AY2FydmluZ2Jsb2NrcHIuY29tXCIsIC8vIFlvdXIgZW1haWwgd2hlcmUgeW91J2xsIHJlY2VpdmUgZW1haWxzXG4gICAgICBmcm9tOiBcInBhdWxAbWFkZWJ5Y2VyZWFsLmNvbVwiLCAvLyB5b3VyIHdlYnNpdGUgZW1haWwgYWRkcmVzcyBoZXJlXG4gICAgICBzdWJqZWN0OiBgTkVXIENPTlRBQ1QgLSBXRUJTSVRFIEZPUk1gLFxuICAgICAgaHRtbDogYDxkaXY+RU1BSUw6IOKcie+4jyR7cmVxLmJvZHkuZW1haWx9PC9kaXY+YCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGVycm9yOiBcIlwiIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZW5kRW1haWw7Il0sIm5hbWVzIjpbInNlbmRncmlkIiwic2V0QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlNFTkRHUklEX0FQSV9LRVkiLCJzZW5kRW1haWwiLCJyZXEiLCJyZXMiLCJzZW5kIiwidG8iLCJmcm9tIiwic3ViamVjdCIsImh0bWwiLCJib2R5IiwiZW1haWwiLCJlcnJvciIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendgrid.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendgrid.js"));
module.exports = __webpack_exports__;

})();
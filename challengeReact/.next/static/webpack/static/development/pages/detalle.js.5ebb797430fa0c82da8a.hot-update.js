webpackHotUpdate("static\\development\\pages\\detalle.js",{

/***/ "./pages/detalle.js":
/*!**************************!*\
  !*** ./pages/detalle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _context_posts_postContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/posts/postContext */ "./context/posts/postContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\pages\\detalle.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Detalle = function Detalle() {
  _s();

  // extraer posts de state inicial
  var postsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_posts_postContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var post = postsContext.post;
  var _post$ = post[0],
      userId = _post$.userId,
      id = _post$.id,
      title = _post$.title,
      body = _post$.body;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Detalles Del Post"), __jsx("p", {
    className: "flex-1 text-sm lg:text-base font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "userId: ", __jsx("span", {
    className: "font-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 82
    }
  }, userId)), __jsx("p", {
    className: "flex-1 text-sm lg:text-base font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "id: ", __jsx("span", {
    className: "font-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 78
    }
  }, id)), __jsx("p", {
    className: "flex-1 text-sm lg:text-base font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "title: ", __jsx("span", {
    className: "font-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 81
    }
  }, title)), __jsx("p", {
    className: "flex-1 text-sm lg:text-base font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "body: ", __jsx("span", {
    className: "font-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 80
    }
  }, body))));
};

_s(Detalle, "ZRBewzw2xMRTRoPThIEPTXBdsEc=");

_c = Detalle;
/* harmony default export */ __webpack_exports__["default"] = (Detalle);

var _c;

$RefreshReg$(_c, "Detalle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhbGxlLmpzIl0sIm5hbWVzIjpbIkRldGFsbGUiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJwb3N0IiwidXNlcklkIiwiaWQiLCJ0aXRsZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBRWxCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUEvQjtBQUhrQixNQUlWQyxJQUpVLEdBSURILFlBSkMsQ0FJVkcsSUFKVTtBQUFBLGVBS2tCQSxJQUFJLENBQUMsQ0FBRCxDQUx0QjtBQUFBLE1BS1ZDLE1BTFUsVUFLVkEsTUFMVTtBQUFBLE1BS0ZDLEVBTEUsVUFLRkEsRUFMRTtBQUFBLE1BS0VDLEtBTEYsVUFLRUEsS0FMRjtBQUFBLE1BS1NDLElBTFQsVUFLU0EsSUFMVDtBQU9sQixTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxxRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBSVE7QUFBRyxhQUFTLEVBQUMsdUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNkQ7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQkgsTUFBL0IsQ0FBN0QsQ0FKUixFQUtRO0FBQUcsYUFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBeUQ7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQkMsRUFBL0IsQ0FBekQsQ0FMUixFQU1RO0FBQUcsYUFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTREO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JDLEtBQS9CLENBQTVELENBTlIsRUFPUTtBQUFHLGFBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTJEO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JDLElBQS9CLENBQTNELENBUFIsQ0FESixDQURKO0FBZUgsQ0F0QkQ7O0dBQU1SLE87O0tBQUFBLE87QUF3QlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkZXRhbGxlLmpzLjVlYmI3OTc0MzBmYTBjODJkYThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVywqB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IHBvc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcG9zdHMvcG9zdENvbnRleHQnO1xyXG5cclxuY29uc3QgRGV0YWxsZSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBleHRyYWVyIHBvc3RzIGRlIHN0YXRlIGluaWNpYWxcclxuICAgIGNvbnN0IHBvc3RzQ29udGV4dCA9IHVzZUNvbnRleHQocG9zdENvbnRleHQpO1xyXG4gICAgY29uc3QgeyBwb3N0IH0gPSBwb3N0c0NvbnRleHQ7XHJcbiAgICBjb25zdCB7IHVzZXJJZCwgaWQsIHRpdGxlLCBib2R5IH0gPSBwb3N0WzBdO1xyXG5cclxuICAgIHJldHVybiAoICBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctMy81IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibGFjay01MDAgdGV4dC1jZW50ZXIgbXktNFwiPkRldGFsbGVzIERlbCBQb3N0PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1zbSBsZzp0ZXh0LWJhc2UgZm9udC1ib2xkXCI+dXNlcklkOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPnt1c2VySWR9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1zbSBsZzp0ZXh0LWJhc2UgZm9udC1ib2xkXCI+aWQ6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+e2lkfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtc20gbGc6dGV4dC1iYXNlIGZvbnQtYm9sZFwiPnRpdGxlOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPnt0aXRsZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LXNtIGxnOnRleHQtYmFzZSBmb250LWJvbGRcIj5ib2R5OiA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPntib2R5fTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IERldGFsbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==
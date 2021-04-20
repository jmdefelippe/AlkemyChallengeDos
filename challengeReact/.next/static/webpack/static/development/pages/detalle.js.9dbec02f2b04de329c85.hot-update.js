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
  }, "Detalles Del Post"), __jsx("div", {
    className: "flex flex-wrap my-2 items-center border-b-2 py-2 border-blue-500 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "flex-1 text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, title)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "userId: ", userId)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhbGxlLmpzIl0sIm5hbWVzIjpbIkRldGFsbGUiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJwb3N0IiwidXNlcklkIiwiaWQiLCJ0aXRsZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBRWxCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUEvQjtBQUhrQixNQUlWQyxJQUpVLEdBSURILFlBSkMsQ0FJVkcsSUFKVTtBQUFBLGVBS2tCQSxJQUFJLENBQUMsQ0FBRCxDQUx0QjtBQUFBLE1BS1ZDLE1BTFUsVUFLVkEsTUFMVTtBQUFBLE1BS0ZDLEVBTEUsVUFLRkEsRUFMRTtBQUFBLE1BS0VDLEtBTEYsVUFLRUEsS0FMRjtBQUFBLE1BS1NDLElBTFQsVUFLU0EsSUFMVDtBQU9sQixTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxxRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBR0k7QUFBSyxhQUFTLEVBQUMsbUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLDZCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENELEtBQTVDLENBREosQ0FISixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWNGLE1BQWQsQ0FQSixDQURKLENBREo7QUFjSCxDQXJCRDs7R0FBTUwsTzs7S0FBQUEsTztBQXVCU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRldGFsbGUuanMuOWRiZWMwMmYyYjA0ZGUzMjljODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXLCoH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9wb3N0cy9wb3N0Q29udGV4dCc7XHJcblxyXG5jb25zdCBEZXRhbGxlID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIGV4dHJhZXIgcG9zdHMgZGUgc3RhdGUgaW5pY2lhbFxyXG4gICAgY29uc3QgcG9zdHNDb250ZXh0ID0gdXNlQ29udGV4dChwb3N0Q29udGV4dCk7XHJcbiAgICBjb25zdCB7IHBvc3QgfSA9IHBvc3RzQ29udGV4dDtcclxuICAgIGNvbnN0IHsgdXNlcklkLCBpZCwgdGl0bGUsIGJvZHkgfSA9IHBvc3RbMF07XHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy00LzUgeGw6dy0zLzUgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgbGc6dGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTUwMCB0ZXh0LWNlbnRlciBteS00XCI+RGV0YWxsZXMgRGVsIFBvc3Q8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXktMiBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBweS0yIGJvcmRlci1ibHVlLTUwMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1zbSBsZzp0ZXh0LWJhc2VcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj51c2VySWQ6IHt1c2VySWR9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBEZXRhbGxlOyJdLCJzb3VyY2VSb290IjoiIn0=
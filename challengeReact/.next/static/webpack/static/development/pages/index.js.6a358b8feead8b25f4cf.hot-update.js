webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ListadoPosts.js":
/*!************************************!*\
  !*** ./components/ListadoPosts.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ "./components/Post.js");
/* harmony import */ var _context_posts_postContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/posts/postContext */ "./context/posts/postContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\components\\ListadoPosts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ListadoPosts = function ListadoPosts() {
  _s();

  // extraer posts de state inicial
  var postsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_posts_postContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var posts = postsContext.posts,
      mensaje = postsContext.mensaje,
      obtenerPosts = postsContext.obtenerPosts;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    obtenerPosts(); // eslint-disable-next-line
  }, [mensaje]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, posts.length === 0 ? __jsx("p", {
    className: "text-2xl font-sans font-bold text-blue-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 18
    }
  }, "No hay posts") : __jsx("div", {
    className: "bg-gray-300 rounded-lg px-5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, posts.map(function (post) {
    return __jsx("div", {
      key: post.id,
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, " ", __jsx(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 62
      }
    }));
  })));
};

_s(ListadoPosts, "CUOkrbRaD3Aqq9MmOX2A1uEyyE4=");

_c = ListadoPosts;
/* harmony default export */ __webpack_exports__["default"] = (ListadoPosts);

var _c;

$RefreshReg$(_c, "ListadoPosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3RhZG9Qb3N0cy5qcyJdLCJuYW1lcyI6WyJMaXN0YWRvUG9zdHMiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJwb3N0cyIsIm1lbnNhamUiLCJvYnRlbmVyUG9zdHMiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFFdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQS9CO0FBSHVCLE1BSWZDLEtBSmUsR0FJa0JILFlBSmxCLENBSWZHLEtBSmU7QUFBQSxNQUlSQyxPQUpRLEdBSWtCSixZQUpsQixDQUlSSSxPQUpRO0FBQUEsTUFJQ0MsWUFKRCxHQUlrQkwsWUFKbEIsQ0FJQ0ssWUFKRDtBQU12QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELGdCQUFZLEdBREEsQ0FFWjtBQUNILEdBSFEsRUFHTixDQUFDRCxPQUFELENBSE0sQ0FBVDtBQUtBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPRCxLQUFLLENBQUNJLE1BQU4sS0FBaUIsQ0FBbEIsR0FDRztBQUFHLGFBQVMsRUFBQyw2REFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILEdBR007QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSixLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FDWDtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFmO0FBQW1CLGVBQVMsRUFBQyxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWlDLE1BQUMsNkNBQUQ7QUFBTSxVQUFJLEVBQUVELElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFqQyxDQURXO0FBQUEsR0FBZCxDQURMLENBSlosQ0FESjtBQWNILENBekJEOztHQUFNVixZOztLQUFBQSxZO0FBMkJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNmEzNThiOGZlZWFkOGIyNWY0Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnO1xyXG5cclxuaW1wb3J0IHBvc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcG9zdHMvcG9zdENvbnRleHQnO1xyXG5cclxuY29uc3QgTGlzdGFkb1Bvc3RzID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIGV4dHJhZXIgcG9zdHMgZGUgc3RhdGUgaW5pY2lhbFxyXG4gICAgY29uc3QgcG9zdHNDb250ZXh0ID0gdXNlQ29udGV4dChwb3N0Q29udGV4dCk7XHJcbiAgICBjb25zdCB7IHBvc3RzLCBtZW5zYWplLCBvYnRlbmVyUG9zdHMgfSA9IHBvc3RzQ29udGV4dDtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG9idGVuZXJQb3N0cygpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgfSwgW21lbnNhamVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsgKHBvc3RzLmxlbmd0aCA9PT0gMCkgP1xyXG4gICAgICAgICAgICAgICAgKDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBteS00XCI+Tm8gaGF5IHBvc3RzPC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6ICggIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cIlwiPiA8UG9zdCBwb3N0PXtwb3N0fS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMaXN0YWRvUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==
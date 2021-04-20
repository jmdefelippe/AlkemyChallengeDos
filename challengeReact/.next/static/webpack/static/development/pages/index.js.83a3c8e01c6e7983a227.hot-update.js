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
    className: "text-2xl font-sans font-bold text-blue-500 text-center my-4 mb-8",
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
      key: post._id,
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
        columnNumber: 63
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3RhZG9Qb3N0cy5qcyJdLCJuYW1lcyI6WyJMaXN0YWRvUG9zdHMiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJwb3N0cyIsIm1lbnNhamUiLCJvYnRlbmVyUG9zdHMiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBRXZCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUEvQjtBQUh1QixNQUlmQyxLQUplLEdBSWtCSCxZQUpsQixDQUlmRyxLQUplO0FBQUEsTUFJUkMsT0FKUSxHQUlrQkosWUFKbEIsQ0FJUkksT0FKUTtBQUFBLE1BSUNDLFlBSkQsR0FJa0JMLFlBSmxCLENBSUNLLFlBSkQ7QUFNdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxnQkFBWSxHQURBLENBRVo7QUFDSCxHQUhRLEVBR04sQ0FBQ0QsT0FBRCxDQUhNLENBQVQ7QUFLQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDT0QsS0FBSyxDQUFDSSxNQUFOLEtBQWlCLENBQWxCLEdBQ0c7QUFBRyxhQUFTLEVBQUMsa0VBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESCxHQUdNO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0osS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQ1g7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBZjtBQUFvQixlQUFTLEVBQUMsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFrQyxNQUFDLDZDQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbEMsQ0FEVztBQUFBLEdBQWQsQ0FETCxDQUpaLENBREo7QUFjSCxDQXpCRDs7R0FBTVYsWTs7S0FBQUEsWTtBQTJCU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjgzYTNjOGUwMWM2ZTc5ODNhMjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0JztcclxuXHJcbmltcG9ydCBwb3N0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3Bvc3RzL3Bvc3RDb250ZXh0JztcclxuXHJcbmNvbnN0IExpc3RhZG9Qb3N0cyA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBleHRyYWVyIHBvc3RzIGRlIHN0YXRlIGluaWNpYWxcclxuICAgIGNvbnN0IHBvc3RzQ29udGV4dCA9IHVzZUNvbnRleHQocG9zdENvbnRleHQpO1xyXG4gICAgY29uc3QgeyBwb3N0cywgbWVuc2FqZSwgb2J0ZW5lclBvc3RzIH0gPSBwb3N0c0NvbnRleHQ7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBvYnRlbmVyUG9zdHMoKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIH0sIFttZW5zYWplXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IChwb3N0cy5sZW5ndGggPT09IDApID9cclxuICAgICAgICAgICAgICAgICg8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgbXktNCBtYi04XCI+Tm8gaGF5IHBvc3RzPC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6ICggIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgcm91bmRlZC1sZyBweC01IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuX2lkfSBjbGFzc05hbWU9XCJcIj4gPFBvc3QgcG9zdD17cG9zdH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFkb1Bvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=
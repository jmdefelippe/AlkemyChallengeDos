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

  var postsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_posts_postContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var posts = postsContext.posts,
      message = postsContext.message,
      getPosts = postsContext.getPosts;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPosts(); // eslint-disable-next-line
  }, [message]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3RhZG9Qb3N0cy5qcyJdLCJuYW1lcyI6WyJMaXN0YWRvUG9zdHMiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJwb3N0cyIsIm1lc3NhZ2UiLCJnZXRQb3N0cyIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUV2QixNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQS9CO0FBRnVCLE1BR2ZDLEtBSGUsR0FHY0gsWUFIZCxDQUdmRyxLQUhlO0FBQUEsTUFHUkMsT0FIUSxHQUdjSixZQUhkLENBR1JJLE9BSFE7QUFBQSxNQUdDQyxRQUhELEdBR2NMLFlBSGQsQ0FHQ0ssUUFIRDtBQUt2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELFlBQVEsR0FESSxDQUdaO0FBQ0gsR0FKUSxFQUlOLENBQUNELE9BQUQsQ0FKTSxDQUFUO0FBTUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ09ELEtBQUssQ0FBQ0ksTUFBTixLQUFpQixDQUFsQixHQUNHO0FBQUcsYUFBUyxFQUFDLGtFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsR0FHTTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNYO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQWY7QUFBbUIsZUFBUyxFQUFDLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBaUMsTUFBQyw2Q0FBRDtBQUFNLFVBQUksRUFBRUQsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWpDLENBRFc7QUFBQSxHQUFkLENBREwsQ0FKWixDQURKO0FBY0gsQ0F6QkQ7O0dBQU1WLFk7O0tBQUFBLFk7QUEyQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42MzA2MmZiMWUxMzI4MDFjNGUwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBQb3N0IGZyb20gJy4vUG9zdCc7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9wb3N0cy9wb3N0Q29udGV4dCc7XHJcblxyXG5jb25zdCBMaXN0YWRvUG9zdHMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcG9zdHNDb250ZXh0ID0gdXNlQ29udGV4dChwb3N0Q29udGV4dCk7XHJcbiAgICBjb25zdCB7IHBvc3RzLCBtZXNzYWdlLCBnZXRQb3N0cyB9ID0gcG9zdHNDb250ZXh0O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UG9zdHMoKTtcclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB9LCBbbWVzc2FnZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyAocG9zdHMubGVuZ3RoID09PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIG15LTQgbWItOFwiPk5vIGhheSBwb3N0czwvcD5cclxuICAgICAgICAgICAgICAgICkgOiAoICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHJvdW5kZWQtbGcgcHgtNSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9XCJcIj4gPFBvc3QgcG9zdD17cG9zdH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgTGlzdGFkb1Bvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=
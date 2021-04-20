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
  var posts = postsContext.posts,
      post = postsContext.post;
  var userId = post.userId,
      id = post.id,
      title = post.title,
      body = post.body;
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
  }, posts.length === 0 ? __jsx("p", {
    className: "text-2xl font-sans font-bold text-blue-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 18
    }
  }, "Ning\xFAn Post Seleccionado") : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 1
    }
  }, __jsx("h2", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-blue-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Detalles Del Post"), __jsx("div", {
    className: "my-2 items-center border-b-2 py-2 bg-gray-300 px-5 rounded-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "flex-1 text-sm lg:text-base font-bold text-blue-500 mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, "userId: ", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 105
    }
  }, userId)), __jsx("p", {
    className: "flex-1 text-sm lg:text-base font-bold text-blue-500 mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "id: ", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 101
    }
  }, id)), __jsx("p", {
    className: "flex-1 text-sm lg:text-base font-bold text-blue-500 mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "title: ", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 104
    }
  }, title)), __jsx("p", {
    className: "flex-1 text-sm lg:text-base font-bold text-blue-500 mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "body: ", __jsx("span", {
    className: "font-normal text-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 103
    }
  }, body))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhbGxlLmpzIl0sIm5hbWVzIjpbIkRldGFsbGUiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJwb3N0cyIsInBvc3QiLCJ1c2VySWQiLCJpZCIsInRpdGxlIiwiYm9keSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFFbEI7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQS9CO0FBSGtCLE1BSVZDLEtBSlUsR0FJTUgsWUFKTixDQUlWRyxLQUpVO0FBQUEsTUFJSEMsSUFKRyxHQUlNSixZQUpOLENBSUhJLElBSkc7QUFBQSxNQUtWQyxNQUxVLEdBS2tCRCxJQUxsQixDQUtWQyxNQUxVO0FBQUEsTUFLRkMsRUFMRSxHQUtrQkYsSUFMbEIsQ0FLRkUsRUFMRTtBQUFBLE1BS0VDLEtBTEYsR0FLa0JILElBTGxCLENBS0VHLEtBTEY7QUFBQSxNQUtTQyxJQUxULEdBS2tCSixJQUxsQixDQUtTSSxJQUxUO0FBT2xCLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHTCxLQUFLLENBQUNNLE1BQU4sS0FBaUIsQ0FBbEIsR0FDRztBQUFHLGFBQVMsRUFBQyw2REFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURILEdBR2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNvQjtBQUFJLGFBQVMsRUFBQyxvRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURwQixFQUdvQjtBQUFLLGFBQVMsRUFBQywrREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsMERBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZ0Y7QUFBTSxhQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMENKLE1BQTFDLENBQWhGLENBREosRUFFSTtBQUFHLGFBQVMsRUFBQywwREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTRFO0FBQU0sYUFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBDQyxFQUExQyxDQUE1RSxDQUZKLEVBR0k7QUFBRyxhQUFTLEVBQUMsMERBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBK0U7QUFBTSxhQUFTLEVBQUMsd0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMENDLEtBQTFDLENBQS9FLENBSEosRUFJSTtBQUFHLGFBQVMsRUFBQywwREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQThFO0FBQU0sYUFBUyxFQUFDLHdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBDQyxJQUExQyxDQUE5RSxDQUpKLENBSHBCLENBTFksQ0FESixDQURKO0FBOEJILENBckNEOztHQUFNVCxPOztLQUFBQSxPO0FBdUNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGV0YWxsZS5qcy5lZjJjNWQyYTM4NDhlZWU1MGZjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlcsKgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmltcG9ydCBwb3N0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3Bvc3RzL3Bvc3RDb250ZXh0JztcclxuXHJcbmNvbnN0IERldGFsbGUgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gZXh0cmFlciBwb3N0cyBkZSBzdGF0ZSBpbmljaWFsXHJcbiAgICBjb25zdCBwb3N0c0NvbnRleHQgPSB1c2VDb250ZXh0KHBvc3RDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgcG9zdHMsIHBvc3QgfSA9IHBvc3RzQ29udGV4dDtcclxuICAgIGNvbnN0IHsgdXNlcklkLCBpZCwgdGl0bGUsIGJvZHkgfSA9IHBvc3Q7XHJcblxyXG4gICAgcmV0dXJuICggIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy00LzUgeGw6dy0zLzUgbXgtYXV0b1wiPlxyXG5cclxuICAgICAgICAgICAgeyAocG9zdHMubGVuZ3RoID09PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAoPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIHRleHQtY2VudGVyIG15LTRcIj5OaW5nw7puIFBvc3QgU2VsZWNjaW9uYWRvPC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6ICggIFxyXG48ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciBteS00XCI+RGV0YWxsZXMgRGVsIFBvc3Q8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgcHktMiBiZy1ncmF5LTMwMCBweC01IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtc20gbGc6dGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIG1iLTJcIj51c2VySWQ6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj57dXNlcklkfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LXNtIGxnOnRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1ibHVlLTUwMCBtYi0yXCI+aWQ6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj57aWR9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtc20gbGc6dGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIG1iLTJcIj50aXRsZTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ibGFja1wiPnt0aXRsZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1zbSBsZzp0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgbWItMlwiPmJvZHk6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtYmxhY2tcIj57Ym9keX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgXHJcbjwvZGl2PiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IERldGFsbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==
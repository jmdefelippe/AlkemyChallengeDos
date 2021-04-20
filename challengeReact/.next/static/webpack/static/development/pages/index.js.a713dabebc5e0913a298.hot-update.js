webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ListadoPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ListadoPosts */ "./components/ListadoPosts.js");
/* harmony import */ var _context_posts_postContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/posts/postContext */ "./context/posts/postContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Index = function Index() {
  _s();

  // routing 
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // extraer posts de state inicial

  var postsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_posts_postContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var posts = postsContext.posts,
      mensaje = postsContext.mensaje;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mensaje.categoria === 'alerta-ok') {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        position: 'center',
        icon: 'success',
        title: mensaje.msg,
        width: 400,
        timer: 3000,
        confirmButtonColor: '#60A5FA',
        confirmButtonText: 'Ok!'
      });
    } // eslint-disable-next-line

  }, [mensaje]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-4/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-blue-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, "Listado de Posts"), __jsx(_components_ListadoPosts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }))));
};

_s(Index, "y0BUAaUEJBX4qI0WohkgXsgnv4g=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInBvc3RzQ29udGV4dCIsInVzZUNvbnRleHQiLCJwb3N0Q29udGV4dCIsInBvc3RzIiwibWVuc2FqZSIsInVzZUVmZmVjdCIsImNhdGVnb3JpYSIsIlN3YWwiLCJmaXJlIiwicG9zaXRpb24iLCJpY29uIiwidGl0bGUiLCJtc2ciLCJ3aWR0aCIsInRpbWVyIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVoQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FIZ0IsQ0FLaEI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUEvQjtBQU5nQixNQU9SQyxLQVBRLEdBT1dILFlBUFgsQ0FPUkcsS0FQUTtBQUFBLE1BT0RDLE9BUEMsR0FPV0osWUFQWCxDQU9ESSxPQVBDO0FBU2hCQyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFJRCxPQUFPLENBQUNFLFNBQVIsS0FBc0IsV0FBMUIsRUFBdUM7QUFDckNDLHdEQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxnQkFBUSxFQUFFLFFBREo7QUFFTkMsWUFBSSxFQUFFLFNBRkE7QUFHTkMsYUFBSyxFQUFFUCxPQUFPLENBQUNRLEdBSFQ7QUFJTkMsYUFBSyxFQUFFLEdBSkQ7QUFLTkMsYUFBSyxFQUFFLElBTEQ7QUFNTkMsMEJBQWtCLEVBQUUsU0FOZDtBQU9OQyx5QkFBaUIsRUFBRTtBQVBiLE9BQVY7QUFTSCxLQVplLENBYWQ7O0FBQ0gsR0FkVSxFQWNSLENBQUNaLE9BQUQsQ0FkUSxDQUFUO0FBZ0JBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFJLGFBQVMsRUFBQyxvRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLEVBT0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FESixDQUZKLENBREo7QUFtQkgsQ0E1Q0Q7O0dBQU1QLEs7VUFHYUUscUQ7OztLQUhiRixLO0FBOENTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTcxM2RhYmViYzVlMDkxM2EyOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGlzdGFkb1Bvc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdGFkb1Bvc3RzJztcblxuaW1wb3J0IHBvc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcG9zdHMvcG9zdENvbnRleHQnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIC8vIHJvdXRpbmcgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvLyBleHRyYWVyIHBvc3RzIGRlIHN0YXRlIGluaWNpYWxcbiAgICBjb25zdCBwb3N0c0NvbnRleHQgPSB1c2VDb250ZXh0KHBvc3RDb250ZXh0KTtcbiAgICBjb25zdCB7IHBvc3RzLCBtZW5zYWplIH0gPSBwb3N0c0NvbnRleHQ7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgXG4gICAgICBpZiAobWVuc2FqZS5jYXRlZ29yaWEgPT09ICdhbGVydGEtb2snKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICB0aXRsZTogbWVuc2FqZS5tc2csXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgdGltZXI6IDMwMDAsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjNjBBNUZBJyxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT2shJyxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgfSwgW21lbnNhamVdKTtcblxuICAgIHJldHVybiAoIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy00LzUgeGw6dy00LzUgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgdGV4dC1jZW50ZXIgbXktNFwiXG4gICAgICAgICAgICAgICAgICA+TGlzdGFkbyBkZSBQb3N0c1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgPExpc3RhZG9Qb3N0cyAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICk7XG59XG4gXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuICAgIFxuXG4iXSwic291cmNlUm9vdCI6IiJ9
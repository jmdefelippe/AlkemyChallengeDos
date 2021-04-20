webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/posts/postReducer.js":
/*!**************************************!*\
  !*** ./context/posts/postReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./types/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_2__["OBTENER_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["OBTENER_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["AGREGAR_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.posts), [action.payload]),
        formulario: false,
        errorformulario: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["POST_ACTUAL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        post: state.posts.filter(function (post) {
          return post.id === action.payload;
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["ACTUALIZAR_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: state.posts.map(function (post) {
          return post.id === action.payload.id ? action.payload : post;
        })
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["ELIMINAR_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: state.posts.filter(function (post) {
          return post.id !== action.payload;
        }),
        post: null,
        alerta: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: {}
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["POST_EXITOSO"]:
    case _types__WEBPACK_IMPORTED_MODULE_2__["POST_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    default:
      return state;
  }
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Bvc3RzL3Bvc3RSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9CVEVORVJfUE9TVFMiLCJwb3N0cyIsInBheWxvYWQiLCJPQlRFTkVSX1BPU1QiLCJBR1JFR0FSX1BPU1QiLCJmb3JtdWxhcmlvIiwiZXJyb3Jmb3JtdWxhcmlvIiwiUE9TVF9BQ1RVQUwiLCJwb3N0IiwiZmlsdGVyIiwiaWQiLCJBQ1RVQUxJWkFSX1BPU1QiLCJtYXAiLCJFTElNSU5BUl9QT1NUIiwiYWxlcnRhIiwiT0NVTFRBUl9BTEVSVEEiLCJtZW5zYWplIiwiUE9TVF9FWElUT1NPIiwiUE9TVF9FUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFZZSx5RUFBQ0EsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzlCLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUtDLG9EQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSUksYUFBSyxFQUFFSCxNQUFNLENBQUNJO0FBRmxCOztBQUlKLFNBQUtDLG1EQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSUksYUFBSyxFQUFFSCxNQUFNLENBQUNJO0FBRmxCOztBQUlKLFNBQUtFLG1EQUFMO0FBQ0ksNkNBQ09QLEtBRFA7QUFFSUksYUFBSyx5R0FBTUosS0FBSyxDQUFDSSxLQUFaLElBQW1CSCxNQUFNLENBQUNJLE9BQTFCLEVBRlQ7QUFHSUcsa0JBQVUsRUFBRSxLQUhoQjtBQUlJQyx1QkFBZSxFQUFFO0FBSnJCOztBQU1KLFNBQUtDLGtEQUFMO0FBQ0ksNkNBQ09WLEtBRFA7QUFFSVcsWUFBSSxFQUFFWCxLQUFLLENBQUNJLEtBQU4sQ0FBWVEsTUFBWixDQUFtQixVQUFBRCxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ0UsRUFBTCxLQUNqQ1osTUFBTSxDQUFDSSxPQURzQjtBQUFBLFNBQXZCO0FBRlY7O0FBS0osU0FBS1Msc0RBQUw7QUFDSSw2Q0FDT2QsS0FEUDtBQUVJSSxhQUFLLEVBQUVKLEtBQUssQ0FBQ0ksS0FBTixDQUFZVyxHQUFaLENBQWdCLFVBQUFKLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDRSxFQUFMLEtBQVlaLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlUSxFQUEzQixHQUM3QlosTUFBTSxDQUFDSSxPQURzQixHQUNaTSxJQURRO0FBQUEsU0FBcEI7QUFGWDs7QUFLSixTQUFLSyxvREFBTDtBQUNJLDZDQUNPaEIsS0FEUDtBQUVJSSxhQUFLLEVBQUVKLEtBQUssQ0FBQ0ksS0FBTixDQUFZUSxNQUFaLENBQW1CLFVBQUFELElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDRSxFQUFMLEtBQ2xDWixNQUFNLENBQUNJLE9BRHVCO0FBQUEsU0FBdkIsQ0FGWDtBQUlJTSxZQUFJLEVBQUUsSUFKVjtBQUtJTSxjQUFNLEVBQUVoQixNQUFNLENBQUNJO0FBTG5COztBQU9KLFNBQUthLHFEQUFMO0FBQ0ksNkNBQ09sQixLQURQO0FBRUltQixlQUFPLEVBQUU7QUFGYjs7QUFJSixTQUFLQyxtREFBTDtBQUNBLFNBQUtDLGlEQUFMO0FBQ0ksNkNBQ09yQixLQURQO0FBRUltQixlQUFPLEVBQUVsQixNQUFNLENBQUNJO0FBRnBCOztBQUlKO0FBQ0ksYUFBT0wsS0FBUDtBQWxEUjtBQW9ESCxDQXJERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy43Zjg1OWU0Y2E1YWNhYmQzMDVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIE9CVEVORVJfUE9TVFMsXHJcbiAgICBPQlRFTkVSX1BPU1QsXHJcbiAgICBBR1JFR0FSX1BPU1QsXHJcbiAgICBQT1NUX0VYSVRPU08sXHJcbiAgICBPQ1VMVEFSX0FMRVJUQSxcclxuICAgIFBPU1RfRVJST1IsXHJcbiAgICBQT1NUX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX1BPU1QsXHJcbiAgICBBQ1RVQUxJWkFSX1BPU1RcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBPQlRFTkVSX1BPU1RTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0czogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0JURU5FUl9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0czogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUdSRUdBUl9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0czogWy4uLnN0YXRlLnBvc3RzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgICAgICAgICBmb3JtdWxhcmlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVycm9yZm9ybXVsYXJpbzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUE9TVF9BQ1RVQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3Q6IHN0YXRlLnBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QuaWQgPT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUNUVUFMSVpBUl9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0czogc3RhdGUucG9zdHMubWFwKHBvc3QgPT4gcG9zdC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgICAgID8gYWN0aW9uLnBheWxvYWQgOiBwb3N0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBFTElNSU5BUl9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0czogc3RhdGUucG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC5pZCAhPT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKSxcclxuICAgICAgICAgICAgICAgIHBvc3Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhbGVydGE6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE9DVUxUQVJfQUxFUlRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiB7fVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIGNhc2UgUE9TVF9FWElUT1NPOlxyXG4gICAgICAgIGNhc2UgUE9TVF9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
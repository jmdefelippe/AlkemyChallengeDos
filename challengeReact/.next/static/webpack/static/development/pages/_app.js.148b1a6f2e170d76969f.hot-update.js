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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Bvc3RzL3Bvc3RSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9CVEVORVJfUE9TVFMiLCJwb3N0cyIsInBheWxvYWQiLCJBR1JFR0FSX1BPU1QiLCJmb3JtdWxhcmlvIiwiZXJyb3Jmb3JtdWxhcmlvIiwiUE9TVF9BQ1RVQUwiLCJwb3N0IiwiZmlsdGVyIiwiaWQiLCJBQ1RVQUxJWkFSX1BPU1QiLCJtYXAiLCJFTElNSU5BUl9QT1NUIiwiYWxlcnRhIiwiT0NVTFRBUl9BTEVSVEEiLCJtZW5zYWplIiwiUE9TVF9FWElUT1NPIiwiUE9TVF9FUlJPUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFZZSx5RUFBQ0EsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzlCLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUtDLG9EQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSUksYUFBSyxFQUFFSCxNQUFNLENBQUNJO0FBRmxCOztBQUlKLFNBQUtDLG1EQUFMO0FBQ0ksNkNBQ09OLEtBRFA7QUFFSUksYUFBSyx5R0FBTUosS0FBSyxDQUFDSSxLQUFaLElBQW1CSCxNQUFNLENBQUNJLE9BQTFCLEVBRlQ7QUFHSUUsa0JBQVUsRUFBRSxLQUhoQjtBQUlJQyx1QkFBZSxFQUFFO0FBSnJCOztBQU1KLFNBQUtDLGtEQUFMO0FBQ0ksNkNBQ09ULEtBRFA7QUFFSVUsWUFBSSxFQUFFVixLQUFLLENBQUNJLEtBQU4sQ0FBWU8sTUFBWixDQUFtQixVQUFBRCxJQUFJO0FBQUEsaUJBQUlBLElBQUksQ0FBQ0UsRUFBTCxLQUNqQ1gsTUFBTSxDQUFDSSxPQURzQjtBQUFBLFNBQXZCO0FBRlY7O0FBS0osU0FBS1Esc0RBQUw7QUFDSSw2Q0FDT2IsS0FEUDtBQUVJSSxhQUFLLEVBQUVKLEtBQUssQ0FBQ0ksS0FBTixDQUFZVSxHQUFaLENBQWdCLFVBQUFKLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDRSxFQUFMLEtBQVlYLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTyxFQUEzQixHQUM3QlgsTUFBTSxDQUFDSSxPQURzQixHQUNaSyxJQURRO0FBQUEsU0FBcEI7QUFGWDs7QUFLSixTQUFLSyxvREFBTDtBQUNJLDZDQUNPZixLQURQO0FBRUlJLGFBQUssRUFBRUosS0FBSyxDQUFDSSxLQUFOLENBQVlPLE1BQVosQ0FBbUIsVUFBQUQsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNFLEVBQUwsS0FDbENYLE1BQU0sQ0FBQ0ksT0FEdUI7QUFBQSxTQUF2QixDQUZYO0FBSUlLLFlBQUksRUFBRSxJQUpWO0FBS0lNLGNBQU0sRUFBRWYsTUFBTSxDQUFDSTtBQUxuQjs7QUFPSixTQUFLWSxxREFBTDtBQUNJLDZDQUNPakIsS0FEUDtBQUVJa0IsZUFBTyxFQUFFO0FBRmI7O0FBSUosU0FBS0MsbURBQUw7QUFDQSxTQUFLQyxpREFBTDtBQUNJLDZDQUNPcEIsS0FEUDtBQUVJa0IsZUFBTyxFQUFFakIsTUFBTSxDQUFDSTtBQUZwQjs7QUFJSjtBQUNJLGFBQU9MLEtBQVA7QUE3Q1I7QUErQ0gsQ0FoREQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMTQ4YjFhNmYyZTE3MGQ3Njk2OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBPQlRFTkVSX1BPU1RTLFxyXG4gICAgT0JURU5FUl9QT1NULFxyXG4gICAgQUdSRUdBUl9QT1NULFxyXG4gICAgUE9TVF9FWElUT1NPLFxyXG4gICAgT0NVTFRBUl9BTEVSVEEsXHJcbiAgICBQT1NUX0VSUk9SLFxyXG4gICAgUE9TVF9BQ1RVQUwsXHJcbiAgICBFTElNSU5BUl9QT1NULFxyXG4gICAgQUNUVUFMSVpBUl9QT1NUXHJcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgT0JURU5FUl9QT1NUUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdHM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFHUkVHQVJfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdHM6IFsuLi5zdGF0ZS5wb3N0cywgYWN0aW9uLnBheWxvYWRdLFxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXJpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcmZvcm11bGFyaW86IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFBPU1RfQUNUVUFMOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0OiBzdGF0ZS5wb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmlkID09PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFDVFVBTElaQVJfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdHM6IHN0YXRlLnBvc3RzLm1hcChwb3N0ID0+IHBvc3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkIDogcG9zdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRUxJTUlOQVJfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdHM6IHN0YXRlLnBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QuaWQgIT09XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZCksXHJcbiAgICAgICAgICAgICAgICBwb3N0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYWxlcnRhOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBPQ1VMVEFSX0FMRVJUQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZToge31cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICBjYXNlIFBPU1RfRVhJVE9TTzpcclxuICAgICAgICBjYXNlIFBPU1RfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
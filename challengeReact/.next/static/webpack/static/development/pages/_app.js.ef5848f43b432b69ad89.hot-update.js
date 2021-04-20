webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./context/posts/postState.js":
/*!************************************!*\
  !*** ./context/posts/postState.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _postContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postContext */ "./context/posts/postContext.js");
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postReducer */ "./context/posts/postReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\context\\posts\\postState.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PostState = function PostState(props) {
  _s();

  var initialState = {
    posts: [],
    post: [{}],
    mensaje: {}
  };
  var timeOut = 2000; // dispatch para ejecutar las acciones

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_postReducer__WEBPACK_IMPORTED_MODULE_4__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // obtener los posts


  var obtenerPosts = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var url, resultado, alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              url = "https://jsonplaceholder.typicode.com/posts";
              _context.next = 4;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url);

            case 4:
              resultado = _context.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OBTENER_POSTS"],
                payload: resultado.data
              });
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_ERROR"],
                payload: alerta
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function obtenerPosts() {
      return _ref.apply(this, arguments);
    };
  }(); // agregar nueva post


  var agregarPost = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(post) {
      var url, resultado, alerta, _alerta;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              url = "https://jsonplaceholder.typicode.com/posts";
              _context2.next = 4;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, post);

            case 4:
              resultado = _context2.sent;
              alerta = {
                msg: 'Post agregado exitosamente',
                categoria: 'alerta-ok'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_EXITOSO"],
                payload: alerta
              }); // insertar el post en el state

              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["AGREGAR_POST"],
                payload: resultado.data
              });
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              _alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_ERROR"],
                payload: _alerta
              });

            case 14:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, timeOut);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function agregarPost(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // selecciona el post que el usuario dio click


  var postActual = function postActual(postId) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_ACTUAL"],
      payload: postId
    });
  }; // edita o modifica una post


  var actualizarPost = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(post) {
      var url, resultado, alerta, _alerta2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              url = "https://jsonplaceholder.typicode.com/posts/".concat(post.id);
              _context3.next = 4;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].put(url, post);

            case 4:
              resultado = _context3.sent;
              alerta = {
                msg: 'Post editado exitosamente',
                categoria: 'alerta-ok'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_EXITOSO"],
                payload: alerta
              });
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ACTUALIZAR_POST"],
                payload: resultado.data
              });
              _context3.next = 14;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              _alerta2 = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_ERROR"],
                payload: _alerta2
              });

            case 14:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, timeOut);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function actualizarPost(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // elimina un post


  var eliminarPost = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(postId) {
      var url, alerta, _alerta3;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              url = "https://jsonplaceholder.typicode.com/posts/:".concat(postId);
              _context4.next = 4;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"](url);

            case 4:
              alerta = {
                msg: 'Post eliminado exitosamente',
                categoria: 'alerta-ok'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_EXITOSO"],
                payload: alerta
              });
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["ELIMINAR_POST"],
                payload: postId
              });
              _context4.next = 13;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              _alerta3 = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
              };
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_ERROR"],
                payload: _alerta3
              });

            case 13:
              // Limpia la alerta después de 3 segundos
              setTimeout(function () {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["OCULTAR_ALERTA"]
                });
              }, timeOut);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    return function eliminarPost(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx(_postContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      posts: state.posts,
      post: state.post,
      mensaje: state.mensaje,
      obtenerPosts: obtenerPosts,
      agregarPost: agregarPost,
      postActual: postActual,
      actualizarPost: actualizarPost,
      eliminarPost: eliminarPost
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, props.children);
};

_s(PostState, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = PostState;
/* harmony default export */ __webpack_exports__["default"] = (PostState);

var _c;

$RefreshReg$(_c, "PostState");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Bvc3RzL3Bvc3RTdGF0ZS5qcyJdLCJuYW1lcyI6WyJQb3N0U3RhdGUiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInBvc3RzIiwicG9zdCIsIm1lbnNhamUiLCJ0aW1lT3V0IiwidXNlUmVkdWNlciIsInBvc3RSZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm9idGVuZXJQb3N0cyIsInVybCIsImNsaWVudGVBeGlvcyIsImdldCIsInJlc3VsdGFkbyIsInR5cGUiLCJPQlRFTkVSX1BPU1RTIiwicGF5bG9hZCIsImRhdGEiLCJhbGVydGEiLCJtc2ciLCJjYXRlZ29yaWEiLCJQT1NUX0VSUk9SIiwiYWdyZWdhclBvc3QiLCJQT1NUX0VYSVRPU08iLCJBR1JFR0FSX1BPU1QiLCJzZXRUaW1lb3V0IiwiT0NVTFRBUl9BTEVSVEEiLCJwb3N0QWN0dWFsIiwicG9zdElkIiwiUE9TVF9BQ1RVQUwiLCJhY3R1YWxpemFyUG9zdCIsImlkIiwicHV0IiwiQUNUVUFMSVpBUl9QT1NUIiwiZWxpbWluYXJQb3N0IiwiRUxJTUlOQVJfUE9TVCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFXQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFFdkIsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxTQUFLLEVBQUcsRUFEUztBQUVqQkMsUUFBSSxFQUFFLENBQUMsRUFBRCxDQUZXO0FBR2pCQyxXQUFPLEVBQUU7QUFIUSxHQUFyQjtBQU1BLE1BQU1DLE9BQU8sR0FBRyxJQUFoQixDQVJ1QixDQVV2Qjs7QUFWdUIsb0JBV0dDLHdEQUFVLENBQUNDLG9EQUFELEVBQWNOLFlBQWQsQ0FYYjtBQUFBLE1BV2hCTyxLQVhnQjtBQUFBLE1BV1RDLFFBWFMsbUJBYXZCOzs7QUFDQSxNQUFNQyxZQUFZO0FBQUEs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LENBQUM7QUFDTE0sb0JBQUksRUFBRU8saURBREQ7QUFFTEwsdUJBQU8sRUFBRUU7QUFGSixlQUFELENBQVI7O0FBMUJhO0FBZ0NqQjtBQUNBTyx3QkFBVSxDQUFDLFlBQU07QUFDYmpCLHdCQUFRLENBQUM7QUFDTE0sc0JBQUksRUFBRVkscURBQWNBO0FBRGYsaUJBQUQsQ0FBUjtBQUdILGVBSlMsRUFJUHRCLE9BSk8sQ0FBVjs7QUFqQ2lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVo4QixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQXdDQSxTQUNJLE1BQUMsb0RBQUQsQ0FBYSxRQUFiO0FBQ0ksU0FBSyxFQUFFO0FBQ0hqQyxXQUFLLEVBQUVNLEtBQUssQ0FBQ04sS0FEVjtBQUVIQyxVQUFJLEVBQUVLLEtBQUssQ0FBQ0wsSUFGVDtBQUdIQyxhQUFPLEVBQUVJLEtBQUssQ0FBQ0osT0FIWjtBQUlITSxrQkFBWSxFQUFaQSxZQUpHO0FBS0hhLGlCQUFXLEVBQVhBLFdBTEc7QUFNSEssZ0JBQVUsRUFBVkEsVUFORztBQU9IRyxvQkFBYyxFQUFkQSxjQVBHO0FBUUhJLGtCQUFZLEVBQVpBO0FBUkcsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUtuQyxLQUFLLENBQUNxQyxRQVpYLENBREo7QUFnQkgsQ0FyTEQ7O0dBQU10QyxTOztLQUFBQSxTO0FBdUxTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5lZjU4NDhmNDNiNDMyYjY5YWQ4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi9wb3N0Q29udGV4dCc7XHJcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tICcuL3Bvc3RSZWR1Y2VyJztcclxuaW1wb3J0IHtcclxuICAgIE9CVEVORVJfUE9TVFMsXHJcbiAgICBBR1JFR0FSX1BPU1QsXHJcbiAgICBQT1NUX0VYSVRPU08sXHJcbiAgICBQT1NUX0VSUk9SLFxyXG4gICAgT0NVTFRBUl9BTEVSVEEsXHJcbiAgICBQT1NUX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX1BPU1QsXHJcbiAgICBBQ1RVQUxJWkFSX1BPU1RcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5jb25zdCBQb3N0U3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIHBvc3RzIDogW10sXHJcbiAgICAgICAgcG9zdDogW3t9XSxcclxuICAgICAgICBtZW5zYWplOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbWVPdXQgPSAyMDAwO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoIHBhcmEgZWplY3V0YXIgbGFzIGFjY2lvbmVzXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocG9zdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3MgcG9zdHNcclxuICAgIGNvbnN0IG9idGVuZXJQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0JURU5FUl9QT1NUUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFncmVnYXIgbnVldmEgcG9zdFxyXG4gICAgY29uc3QgYWdyZWdhclBvc3QgPSBhc3luYyBwb3N0ID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCh1cmwsIHBvc3QpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnUG9zdCBhZ3JlZ2FkbyBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VYSVRPU08sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIGluc2VydGFyIGVsIHBvc3QgZW4gZWwgc3RhdGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9QT1NULFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aW1lT3V0KTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWNjaW9uYSBlbCBwb3N0IHF1ZSBlbCB1c3VhcmlvIGRpbyBjbGlja1xyXG4gICAgY29uc3QgcG9zdEFjdHVhbCA9IHBvc3RJZCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBQT1NUX0FDVFVBTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogcG9zdElkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBwb3N0XHJcbiAgICBjb25zdCBhY3R1YWxpemFyUG9zdCA9IGFzeW5jIHBvc3QgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtwb3N0LmlkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wdXQodXJsLCBwb3N0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1Bvc3QgZWRpdGFkbyBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VYSVRPU08sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfUE9TVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgdGltZU91dCk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsaW1pbmEgdW4gcG9zdFxyXG4gICAgY29uc3QgZWxpbWluYXJQb3N0ID0gYXN5bmMgcG9zdElkID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzoke3Bvc3RJZH1gO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgY2xpZW50ZUF4aW9zLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnUG9zdCBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FWElUT1NPLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBFTElNSU5BUl9QT1NULFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcG9zdElkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHRpbWVPdXQpOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwb3N0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zdHM6IHN0YXRlLnBvc3RzLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogc3RhdGUucG9zdCxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXHJcbiAgICAgICAgICAgICAgICBvYnRlbmVyUG9zdHMsXHJcbiAgICAgICAgICAgICAgICBhZ3JlZ2FyUG9zdCxcclxuICAgICAgICAgICAgICAgIHBvc3RBY3R1YWwsXHJcbiAgICAgICAgICAgICAgICBhY3R1YWxpemFyUG9zdCxcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyUG9zdFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvcG9zdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RTdGF0ZTsiXSwic291cmNlUm9vdCI6IiJ9
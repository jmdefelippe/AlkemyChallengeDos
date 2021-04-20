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
    post: {},
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
  }(); // obtener post por id


  var obtenerPost = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var url, resultado, alerta;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              url = "https://jsonplaceholder.typicode.com/posts/".concat(id);
              _context2.next = 4;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url);

            case 4:
              resultado = _context2.sent;
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_5__["OBTENER_POST"],
                payload: resultado.data
              });
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
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
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function obtenerPost(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // agregar nueva post


  var agregarPost = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(post) {
      var url, resultado, alerta, _alerta;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              url = "https://jsonplaceholder.typicode.com/posts";
              _context3.next = 4;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(url, post);

            case 4:
              resultado = _context3.sent;
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
              _context3.next = 14;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
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
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function agregarPost(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // selecciona el post que el usuario dio click


  var postActual = function postActual(postId) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["POST_ACTUAL"],
      payload: postId
    });
  }; // edita o modifica una post


  var actualizarPost = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(post) {
      var url, resultado, alerta, _alerta2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              url = "https://jsonplaceholder.typicode.com/posts/".concat(post.id);
              _context4.next = 4;
              return _config_axios__WEBPACK_IMPORTED_MODULE_6__["default"].put(url, post);

            case 4:
              resultado = _context4.sent;
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
              _context4.next = 14;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
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
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function actualizarPost(_x3) {
      return _ref4.apply(this, arguments);
    };
  }(); // elimina un post


  var eliminarPost = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(postId) {
      var url, alerta, _alerta3;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              url = "https://jsonplaceholder.typicode.com/posts/:".concat(postId);
              _context5.next = 4;
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
              _context5.next = 13;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
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
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    }));

    return function eliminarPost(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return __jsx(_postContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      posts: state.posts,
      post: state.post,
      mensaje: state.mensaje,
      obtenerPosts: obtenerPosts,
      obtenerPost: obtenerPost,
      agregarPost: agregarPost,
      postActual: postActual,
      actualizarPost: actualizarPost,
      eliminarPost: eliminarPost
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Bvc3RzL3Bvc3RTdGF0ZS5qcyJdLCJuYW1lcyI6WyJQb3N0U3RhdGUiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInBvc3RzIiwicG9zdCIsIm1lbnNhamUiLCJ0aW1lT3V0IiwidXNlUmVkdWNlciIsInBvc3RSZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm9idGVuZXJQb3N0cyIsInVybCIsImNsaWVudGVBeGlvcyIsImdldCIsInJlc3VsdGFkbyIsInR5cGUiLCJPQlRFTkVSX1BPU1RTIiwicGF5bG9hZCIsImRhdGEiLCJhbGVydGEiLCJtc2ciLCJjYXRlZ29yaWEiLCJQT1NUX0VSUk9SIiwib2J0ZW5lclBvc3QiLCJpZCIsIk9CVEVORVJfUE9TVCIsImFncmVnYXJQb3N0IiwiUE9TVF9FWElUT1NPIiwiQUdSRUdBUl9QT1NUIiwic2V0VGltZW91dCIsIk9DVUxUQVJfQUxFUlRBIiwicG9zdEFjdHVhbCIsInBvc3RJZCIsIlBPU1RfQUNUVUFMIiwiYWN0dWFsaXphclBvc3QiLCJwdXQiLCJBQ1RVQUxJWkFSX1BPU1QiLCJlbGltaW5hclBvc3QiLCJFTElNSU5BUl9QT1NUIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVlBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUV2QixNQUFNQyxZQUFZLEdBQUc7QUFDakJDLFNBQUssRUFBRyxFQURTO0FBRWpCQyxRQUFJLEVBQUUsRUFGVztBQUdqQkMsV0FBTyxFQUFFO0FBSFEsR0FBckI7QUFNQSxNQUFNQyxPQUFPLEdBQUcsSUFBaEIsQ0FSdUIsQ0FVdkI7O0FBVnVCLG9CQVdHQyx3REFBVSxDQUFDQyxvREFBRCxFQUFjTixZQUFkLENBWGI7QUFBQSxNQVdoQk8sS0FYZ0I7QUFBQSxNQVdUQyxRQVhTLG1CQWF2Qjs7O0FB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QUFLLENBQUNMLElBRlQ7QUFHSEMsYUFBTyxFQUFFSSxLQUFLLENBQUNKLE9BSFo7QUFJSE0sa0JBQVksRUFBWkEsWUFKRztBQUtIYSxpQkFBVyxFQUFYQSxXQUxHO0FBTUhHLGlCQUFXLEVBQVhBLFdBTkc7QUFPSEssZ0JBQVUsRUFBVkEsVUFQRztBQVFIRyxvQkFBYyxFQUFkQSxjQVJHO0FBU0hHLGtCQUFZLEVBQVpBO0FBVEcsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYUtyQyxLQUFLLENBQUN1QyxRQWJYLENBREo7QUFpQkgsQ0E1TUQ7O0dBQU14QyxTOztLQUFBQSxTO0FBOE1TQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5kMmEyZGU1OWJkZmNiNWQ5YWJiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi9wb3N0Q29udGV4dCc7XHJcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tICcuL3Bvc3RSZWR1Y2VyJztcclxuaW1wb3J0IHtcclxuICAgIE9CVEVORVJfUE9TVFMsXHJcbiAgICBPQlRFTkVSX1BPU1QsXHJcbiAgICBBR1JFR0FSX1BPU1QsXHJcbiAgICBQT1NUX0VYSVRPU08sXHJcbiAgICBQT1NUX0VSUk9SLFxyXG4gICAgT0NVTFRBUl9BTEVSVEEsXHJcbiAgICBQT1NUX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX1BPU1QsXHJcbiAgICBBQ1RVQUxJWkFSX1BPU1RcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5jb25zdCBQb3N0U3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIHBvc3RzIDogW10sXHJcbiAgICAgICAgcG9zdDoge30sXHJcbiAgICAgICAgbWVuc2FqZToge31cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aW1lT3V0ID0gMjAwMDtcclxuXHJcbiAgICAvLyBkaXNwYXRjaCBwYXJhIGVqZWN1dGFyIGxhcyBhY2Npb25lc1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHBvc3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICAgIC8vIG9idGVuZXIgbG9zIHBvc3RzXHJcbiAgICBjb25zdCBvYnRlbmVyUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c2A7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQodXJsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9CVEVORVJfUE9TVFMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9idGVuZXIgcG9zdCBwb3IgaWRcclxuICAgIGNvbnN0IG9idGVuZXJQb3N0ID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtpZH1gO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQlRFTkVSX1BPU1QsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBhZ3JlZ2FyIG51ZXZhIHBvc3RcclxuICAgIGNvbnN0IGFncmVnYXJQb3N0ID0gYXN5bmMgcG9zdCA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLnBvc3QodXJsLCBwb3N0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1Bvc3QgYWdyZWdhZG8gZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FWElUT1NPLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvLyBpbnNlcnRhciBlbCBwb3N0IGVuIGVsIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFHUkVHQVJfUE9TVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgdGltZU91dCk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNlbGVjY2lvbmEgZWwgcG9zdCBxdWUgZWwgdXN1YXJpbyBkaW8gY2xpY2tcclxuICAgIGNvbnN0IHBvc3RBY3R1YWwgPSBwb3N0SWQgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUE9TVF9BQ1RVQUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHBvc3RJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWRpdGEgbyBtb2RpZmljYSB1bmEgcG9zdFxyXG4gICAgY29uc3QgYWN0dWFsaXphclBvc3QgPSBhc3luYyBwb3N0ID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cG9zdC5pZH1gO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucHV0KHVybCwgcG9zdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdQb3N0IGVkaXRhZG8gZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FWElUT1NPLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBQ1RVQUxJWkFSX1BPU1QsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHRhZG8uZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHRpbWVPdXQpOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIHVuIHBvc3RcclxuICAgIGNvbnN0IGVsaW1pbmFyUG9zdCA9IGFzeW5jIHBvc3RJZCA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy86JHtwb3N0SWR9YDtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGNsaWVudGVBeGlvcy5kZWxldGUodXJsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1Bvc3QgZWxpbWluYWRvIGV4aXRvc2FtZW50ZScsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtb2snXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVhJVE9TTyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRUxJTUlOQVJfUE9TVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHBvc3RJZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aW1lT3V0KTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8cG9zdENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cyxcclxuICAgICAgICAgICAgICAgIHBvc3Q6IHN0YXRlLnBvc3QsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBzdGF0ZS5tZW5zYWplLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lclBvc3RzLFxyXG4gICAgICAgICAgICAgICAgb2J0ZW5lclBvc3QsXHJcbiAgICAgICAgICAgICAgICBhZ3JlZ2FyUG9zdCxcclxuICAgICAgICAgICAgICAgIHBvc3RBY3R1YWwsXHJcbiAgICAgICAgICAgICAgICBhY3R1YWxpemFyUG9zdCxcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyUG9zdFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvcG9zdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RTdGF0ZTsiXSwic291cmNlUm9vdCI6IiJ9
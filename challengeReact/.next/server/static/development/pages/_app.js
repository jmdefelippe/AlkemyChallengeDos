module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/axios.js":
/*!*************************!*\
  !*** ./config/axios.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const clienteAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:4000"
});
/* harmony default export */ __webpack_exports__["default"] = (clienteAxios);

/***/ }),

/***/ "./context/posts/postContext.js":
/*!**************************************!*\
  !*** ./context/posts/postContext.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const postContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (postContext);

/***/ }),

/***/ "./context/posts/postReducer.js":
/*!**************************************!*\
  !*** ./context/posts/postReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./types/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["OBTENER_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OBTENER_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        post: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AGREGAR_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: [...state.posts, action.payload],
        formulario: false,
        errorformulario: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["POST_ACTUAL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        post: state.posts.filter(post => post.id === action.payload)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ACTUALIZAR_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["ELIMINAR_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: state.posts.filter(post => post.id !== action.payload),
        post: null,
        alerta: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["OCULTAR_ALERTA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: {}
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["POST_EXITOSO"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["POST_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        mensaje: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/posts/postState.js":
/*!************************************!*\
  !*** ./context/posts/postState.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postContext */ "./context/posts/postContext.js");
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postReducer */ "./context/posts/postReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ "./types/index.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\context\\posts\\postState.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PostState = props => {
  const initialState = {
    posts: [],
    post: [{}],
    mensaje: {}
  };
  const timeOut = 2000; // dispatch para ejecutar las acciones

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_postReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // obtener los posts

  const obtenerPosts = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(url);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OBTENER_POSTS"],
        payload: resultado.data
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alerta
      });
    }
  }; // obtener post por id


  const obtenerPost = async id => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(url);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OBTENER_POST"],
        payload: resultado.data
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alerta
      });
    }
  }; // agregar nueva post


  const agregarPost = async post => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(url, post);
      const alerta = {
        msg: 'Post agregado exitosamente',
        categoria: 'alerta-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_EXITOSO"],
        payload: alerta
      }); // insertar el post en el state

      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["AGREGAR_POST"],
        payload: resultado.data
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alerta
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, timeOut);
  }; // selecciona el post que el usuario dio click


  const postActual = postId => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ACTUAL"],
      payload: postId
    });
  }; // edita o modifica una post


  const actualizarPost = async post => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(url, post);
      const alerta = {
        msg: 'Post editado exitosamente',
        categoria: 'alerta-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_EXITOSO"],
        payload: alerta
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["ACTUALIZAR_POST"],
        payload: resultado.data
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alerta
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, timeOut);
  }; // elimina un post


  const eliminarPost = async postId => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/:${postId}`;
      await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].delete(url);
      const alerta = {
        msg: 'Post eliminado exitosamente',
        categoria: 'alerta-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_EXITOSO"],
        payload: alerta
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["ELIMINAR_POST"],
        payload: postId
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error',
        categoria: 'alerta-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alerta
      });
    } // Limpia la alerta después de 3 segundos


    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["OCULTAR_ALERTA"]
      });
    }, timeOut);
  };

  return __jsx(_postContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      posts: state.posts,
      post: state.post,
      mensaje: state.mensaje,
      obtenerPosts,
      obtenerPost,
      agregarPost,
      postActual,
      actualizarPost,
      eliminarPost
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (PostState);

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_posts_postState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/posts/postState */ "./context/posts/postState.js");
var _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_context_posts_postState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/*! exports provided: OCULTAR_ALERTA, OBTENER_POSTS, OBTENER_POST, AGREGAR_POST, POST_EXITOSO, POST_ERROR, POST_ACTUAL, ELIMINAR_POST, ACTUALIZAR_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCULTAR_ALERTA", function() { return OCULTAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBTENER_POSTS", function() { return OBTENER_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBTENER_POST", function() { return OBTENER_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_POST", function() { return AGREGAR_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_EXITOSO", function() { return POST_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ERROR", function() { return POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ACTUAL", function() { return POST_ACTUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELIMINAR_POST", function() { return ELIMINAR_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTUALIZAR_POST", function() { return ACTUALIZAR_POST; });
const OCULTAR_ALERTA = 'OCULTAR_ALERTA';
const OBTENER_POSTS = 'OBTENER_POSTS';
const OBTENER_POST = 'OBTENER_POST';
const AGREGAR_POST = 'AGREGAR_POST';
const POST_EXITOSO = 'POST_EXITOSO';
const POST_ERROR = 'POST_ERROR';
const POST_ACTUAL = 'POST_ACTUAL';
const ELIMINAR_POST = 'ELIMINAR_POST';
const ACTUALIZAR_POST = 'ACTUALIZAR_POST';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcG9zdHMvcG9zdENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9wb3N0cy9wb3N0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Bvc3RzL3Bvc3RTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjbGllbnRlQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYmFja2VuZFVSTCIsInBvc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9CVEVORVJfUE9TVFMiLCJwb3N0cyIsInBheWxvYWQiLCJPQlRFTkVSX1BPU1QiLCJwb3N0IiwiQUdSRUdBUl9QT1NUIiwiZm9ybXVsYXJpbyIsImVycm9yZm9ybXVsYXJpbyIsIlBPU1RfQUNUVUFMIiwiZmlsdGVyIiwiaWQiLCJBQ1RVQUxJWkFSX1BPU1QiLCJtYXAiLCJFTElNSU5BUl9QT1NUIiwiYWxlcnRhIiwiT0NVTFRBUl9BTEVSVEEiLCJtZW5zYWplIiwiUE9TVF9FWElUT1NPIiwiUE9TVF9FUlJPUiIsIlBvc3RTdGF0ZSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwidGltZU91dCIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInBvc3RSZWR1Y2VyIiwib2J0ZW5lclBvc3RzIiwidXJsIiwicmVzdWx0YWRvIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwibXNnIiwiY2F0ZWdvcmlhIiwib2J0ZW5lclBvc3QiLCJhZ3JlZ2FyUG9zdCIsInNldFRpbWVvdXQiLCJwb3N0QWN0dWFsIiwicG9zdElkIiwiYWN0dWFsaXphclBvc3QiLCJwdXQiLCJlbGltaW5hclBvc3QiLCJkZWxldGUiLCJjaGlsZHJlbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDOUJDLFNBQU8sRUFBRUMsdUJBQXNCQztBQURELENBQWIsQ0FBckI7QUFJZUwsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNTSxXQUFXLEdBQUdDLDJEQUFhLEVBQWpDO0FBRWVELDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFZZSxnRUFBQ0UsS0FBRCxFQUFRQyxNQUFS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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFAsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjbGllbnRlQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRlQXhpb3M7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHBvc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdENvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIE9CVEVORVJfUE9TVFMsXHJcbiAgICBPQlRFTkVSX1BPU1QsXHJcbiAgICBBR1JFR0FSX1BPU1QsXHJcbiAgICBQT1NUX0VYSVRPU08sXHJcbiAgICBPQ1VMVEFSX0FMRVJUQSxcclxuICAgIFBPU1RfRVJST1IsXHJcbiAgICBQT1NUX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX1BPU1QsXHJcbiAgICBBQ1RVQUxJWkFSX1BPU1RcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBPQlRFTkVSX1BPU1RTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0czogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0JURU5FUl9QT1NUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwb3N0OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBR1JFR0FSX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBbLi4uc3RhdGUucG9zdHMsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBQT1NUX0FDVFVBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogc3RhdGUucG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC5pZCA9PT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBQ1RVQUxJWkFSX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiBwb3N0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZCA6IHBvc3QpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEVMSU1JTkFSX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmlkICE9PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFsZXJ0YTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHt9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSBQT1NUX0VYSVRPU086XHJcbiAgICAgICAgY2FzZSBQT1NUX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi9wb3N0Q29udGV4dCc7XHJcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tICcuL3Bvc3RSZWR1Y2VyJztcclxuaW1wb3J0IHtcclxuICAgIE9CVEVORVJfUE9TVFMsXHJcbiAgICBPQlRFTkVSX1BPU1QsXHJcbiAgICBBR1JFR0FSX1BPU1QsXHJcbiAgICBQT1NUX0VYSVRPU08sXHJcbiAgICBQT1NUX0VSUk9SLFxyXG4gICAgT0NVTFRBUl9BTEVSVEEsXHJcbiAgICBQT1NUX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX1BPU1QsXHJcbiAgICBBQ1RVQUxJWkFSX1BPU1RcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5jb25zdCBQb3N0U3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIHBvc3RzIDogW10sXHJcbiAgICAgICAgcG9zdDogW3t9XSxcclxuICAgICAgICBtZW5zYWplOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbWVPdXQgPSAyMDAwO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoIHBhcmEgZWplY3V0YXIgbGFzIGFjY2lvbmVzXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocG9zdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3MgcG9zdHNcclxuICAgIGNvbnN0IG9idGVuZXJQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0JURU5FUl9QT1NUUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb2J0ZW5lciBwb3N0IHBvciBpZFxyXG4gICAgY29uc3Qgb2J0ZW5lclBvc3QgPSBhc3luYyBpZCA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2lkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5nZXQodXJsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9CVEVORVJfUE9TVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFncmVnYXIgbnVldmEgcG9zdFxyXG4gICAgY29uc3QgYWdyZWdhclBvc3QgPSBhc3luYyBwb3N0ID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCh1cmwsIHBvc3QpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnUG9zdCBhZ3JlZ2FkbyBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VYSVRPU08sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIGluc2VydGFyIGVsIHBvc3QgZW4gZWwgc3RhdGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9QT1NULFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aW1lT3V0KTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWNjaW9uYSBlbCBwb3N0IHF1ZSBlbCB1c3VhcmlvIGRpbyBjbGlja1xyXG4gICAgY29uc3QgcG9zdEFjdHVhbCA9IHBvc3RJZCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBQT1NUX0FDVFVBTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogcG9zdElkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBwb3N0XHJcbiAgICBjb25zdCBhY3R1YWxpemFyUG9zdCA9IGFzeW5jIHBvc3QgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtwb3N0LmlkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGNsaWVudGVBeGlvcy5wdXQodXJsLCBwb3N0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1Bvc3QgZWRpdGFkbyBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VYSVRPU08sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfUE9TVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgdGltZU91dCk7IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVsaW1pbmEgdW4gcG9zdFxyXG4gICAgY29uc3QgZWxpbWluYXJQb3N0ID0gYXN5bmMgcG9zdElkID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzoke3Bvc3RJZH1gO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgY2xpZW50ZUF4aW9zLmRlbGV0ZSh1cmwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnUG9zdCBlbGltaW5hZG8gZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FWElUT1NPLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBFTElNSU5BUl9QT1NULFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcG9zdElkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExpbXBpYSBsYSBhbGVydGEgZGVzcHXDqXMgZGUgMyBzZWd1bmRvc1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPQ1VMVEFSX0FMRVJUQVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHRpbWVPdXQpOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwb3N0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zdHM6IHN0YXRlLnBvc3RzLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogc3RhdGUucG9zdCxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHN0YXRlLm1lbnNhamUsXHJcbiAgICAgICAgICAgICAgICBvYnRlbmVyUG9zdHMsXHJcbiAgICAgICAgICAgICAgICBvYnRlbmVyUG9zdCxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJQb3N0LFxyXG4gICAgICAgICAgICAgICAgcG9zdEFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGFjdHVhbGl6YXJQb3N0LFxyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJQb3N0XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9wb3N0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFN0YXRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi4vaW5kZXguY3NzJztcblxuaW1wb3J0IFBvc3RTdGF0ZSBmcm9tICcuLi9jb250ZXh0L3Bvc3RzL3Bvc3RTdGF0ZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQb3N0U3RhdGU+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUG9zdFN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBPQ1VMVEFSX0FMRVJUQSA9ICdPQ1VMVEFSX0FMRVJUQSc7XG5cbmV4cG9ydCBjb25zdCBPQlRFTkVSX1BPU1RTID0gJ09CVEVORVJfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IE9CVEVORVJfUE9TVCA9ICdPQlRFTkVSX1BPU1QnO1xuZXhwb3J0IGNvbnN0IEFHUkVHQVJfUE9TVCA9ICdBR1JFR0FSX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFBPU1RfRVhJVE9TTyA9ICdQT1NUX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFBPU1RfRVJST1IgPSAnUE9TVF9FUlJPUic7XG5leHBvcnQgY29uc3QgUE9TVF9BQ1RVQUwgPSAnUE9TVF9BQ1RVQUwnO1xuZXhwb3J0IGNvbnN0IEVMSU1JTkFSX1BPU1QgPSAnRUxJTUlOQVJfUE9TVCc7XG5leHBvcnQgY29uc3QgQUNUVUFMSVpBUl9QT1NUID0gJ0FDVFVBTElaQVJfUE9TVCc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
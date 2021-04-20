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
      const url = `https://jsonplaceholder.typicode.com/posts/:${post.id}`;
      const resultado = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(url, post); //            const resultado = await clienteAxios.put(`/api/posts/${post.id}`, post);

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
        payload: resultado.data.post
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
      agregarPost,
      postActual,
      actualizarPost,
      eliminarPost
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
/*! exports provided: OCULTAR_ALERTA, OBTENER_POSTS, AGREGAR_POST, POST_EXITOSO, POST_ERROR, POST_ACTUAL, ELIMINAR_POST, ACTUALIZAR_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCULTAR_ALERTA", function() { return OCULTAR_ALERTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBTENER_POSTS", function() { return OBTENER_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGREGAR_POST", function() { return AGREGAR_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_EXITOSO", function() { return POST_EXITOSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ERROR", function() { return POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ACTUAL", function() { return POST_ACTUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELIMINAR_POST", function() { return ELIMINAR_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTUALIZAR_POST", function() { return ACTUALIZAR_POST; });
const OCULTAR_ALERTA = 'OCULTAR_ALERTA';
const OBTENER_POSTS = 'OBTENER_POSTS';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcG9zdHMvcG9zdENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9wb3N0cy9wb3N0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Bvc3RzL3Bvc3RTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjbGllbnRlQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYmFja2VuZFVSTCIsInBvc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9CVEVORVJfUE9TVFMiLCJwb3N0cyIsInBheWxvYWQiLCJBR1JFR0FSX1BPU1QiLCJmb3JtdWxhcmlvIiwiZXJyb3Jmb3JtdWxhcmlvIiwiUE9TVF9BQ1RVQUwiLCJwb3N0IiwiZmlsdGVyIiwiaWQiLCJBQ1RVQUxJWkFSX1BPU1QiLCJtYXAiLCJFTElNSU5BUl9QT1NUIiwiYWxlcnRhIiwiT0NVTFRBUl9BTEVSVEEiLCJtZW5zYWplIiwiUE9TVF9FWElUT1NPIiwiUE9TVF9FUlJPUiIsIlBvc3RTdGF0ZSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwidGltZU91dCIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInBvc3RSZWR1Y2VyIiwib2J0ZW5lclBvc3RzIiwidXJsIiwicmVzdWx0YWRvIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwibXNnIiwiY2F0ZWdvcmlhIiwiYWdyZWdhclBvc3QiLCJzZXRUaW1lb3V0IiwicG9zdEFjdHVhbCIsInBvc3RJZCIsImFjdHVhbGl6YXJQb3N0IiwiZWxpbWluYXJQb3N0IiwiZGVsZXRlIiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzlCQyxTQUFPLEVBQUVDLHVCQUFzQkM7QUFERCxDQUFiLENBQXJCO0FBSWVMLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTU0sV0FBVyxHQUFHQywyREFBYSxFQUFqQztBQUVlRCwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBV2UsZ0VBQUNFLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7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QSxLQURKLENBREo7QUFLSCxDQU5EOztBQU9lRixvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNM0IsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1kLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1HLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1hLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1YLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1NLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1GLGVBQWUsR0FBRyxpQkFBeEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGNsaWVudGVBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuYmFja2VuZFVSTFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudGVBeGlvczsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgcG9zdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0Q29udGV4dDsiLCJpbXBvcnQge1xyXG4gICAgT0JURU5FUl9QT1NUUyxcclxuICAgIEFHUkVHQVJfUE9TVCxcclxuICAgIFBPU1RfRVhJVE9TTyxcclxuICAgIE9DVUxUQVJfQUxFUlRBLFxyXG4gICAgUE9TVF9FUlJPUixcclxuICAgIFBPU1RfQUNUVUFMLFxyXG4gICAgRUxJTUlOQVJfUE9TVCxcclxuICAgIEFDVFVBTElaQVJfUE9TVFxyXG59IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE9CVEVORVJfUE9TVFM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBR1JFR0FSX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBbLi4uc3RhdGUucG9zdHMsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBQT1NUX0FDVFVBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogc3RhdGUucG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC5pZCA9PT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBQ1RVQUxJWkFSX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiBwb3N0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICAgICAgICAgPyBhY3Rpb24ucGF5bG9hZCA6IHBvc3QpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEVMSU1JTkFSX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmlkICE9PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFsZXJ0YTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgT0NVTFRBUl9BTEVSVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbnNhamU6IHt9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSBQT1NUX0VYSVRPU086XHJcbiAgICAgICAgY2FzZSBQT1NUX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW5zYWplOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi9wb3N0Q29udGV4dCc7XHJcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tICcuL3Bvc3RSZWR1Y2VyJztcclxuaW1wb3J0IHtcclxuICAgIE9CVEVORVJfUE9TVFMsXHJcbiAgICBBR1JFR0FSX1BPU1QsXHJcbiAgICBQT1NUX0VYSVRPU08sXHJcbiAgICBQT1NUX0VSUk9SLFxyXG4gICAgT0NVTFRBUl9BTEVSVEEsXHJcbiAgICBQT1NUX0FDVFVBTCxcclxuICAgIEVMSU1JTkFSX1BPU1QsXHJcbiAgICBBQ1RVQUxJWkFSX1BPU1RcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5jb25zdCBQb3N0U3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIHBvc3RzIDogW10sXHJcbiAgICAgICAgcG9zdDogW3t9XSxcclxuICAgICAgICBtZW5zYWplOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbWVPdXQgPSAyMDAwO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoIHBhcmEgZWplY3V0YXIgbGFzIGFjY2lvbmVzXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocG9zdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsb3MgcG9zdHNcclxuICAgIGNvbnN0IG9idGVuZXJQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0JURU5FUl9QT1NUUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGFncmVnYXIgbnVldmEgcG9zdFxyXG4gICAgY29uc3QgYWdyZWdhclBvc3QgPSBhc3luYyBwb3N0ID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCh1cmwsIHBvc3QpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnUG9zdCBhZ3JlZ2FkbyBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VYSVRPU08sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIGluc2VydGFyIGVsIHBvc3QgZW4gZWwgc3RhdGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUdSRUdBUl9QT1NULFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0YWRvLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aW1lT3V0KTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2VsZWNjaW9uYSBlbCBwb3N0IHF1ZSBlbCB1c3VhcmlvIGRpbyBjbGlja1xyXG4gICAgY29uc3QgcG9zdEFjdHVhbCA9IHBvc3RJZCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBQT1NUX0FDVFVBTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogcG9zdElkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0YSBvIG1vZGlmaWNhIHVuYSBwb3N0XHJcbiAgICBjb25zdCBhY3R1YWxpemFyUG9zdCA9IGFzeW5jIHBvc3QgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvOiR7cG9zdC5pZH1gO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucG9zdCh1cmwsIHBvc3QpO1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICBjb25zdCByZXN1bHRhZG8gPSBhd2FpdCBjbGllbnRlQXhpb3MucHV0KGAvYXBpL3Bvc3RzLyR7cG9zdC5pZH1gLCBwb3N0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1Bvc3QgZWRpdGFkbyBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VYSVRPU08sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVFVBTElaQVJfUE9TVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdGFkby5kYXRhLnBvc3RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogJ2FsZXJ0YS1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMaW1waWEgbGEgYWxlcnRhIGRlc3B1w6lzIGRlIDMgc2VndW5kb3NcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogT0NVTFRBUl9BTEVSVEFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aW1lT3V0KTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZWxpbWluYSB1biBwb3N0XHJcbiAgICBjb25zdCBlbGltaW5hclBvc3QgPSBhc3luYyBwb3N0SWQgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvOiR7cG9zdElkfWA7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBjbGllbnRlQXhpb3MuZGVsZXRlKHVybCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydGEgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdQb3N0IGVsaW1pbmFkbyBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiAnYWxlcnRhLW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VYSVRPU08sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEVMSU1JTkFSX1BPU1QsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwb3N0SWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRhID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWE6ICdhbGVydGEtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGltcGlhIGxhIGFsZXJ0YSBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE9DVUxUQVJfQUxFUlRBXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgdGltZU91dCk7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHBvc3RDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3N0czogc3RhdGUucG9zdHMsXHJcbiAgICAgICAgICAgICAgICBwb3N0OiBzdGF0ZS5wb3N0LFxyXG4gICAgICAgICAgICAgICAgbWVuc2FqZTogc3RhdGUubWVuc2FqZSxcclxuICAgICAgICAgICAgICAgIG9idGVuZXJQb3N0cyxcclxuICAgICAgICAgICAgICAgIGFncmVnYXJQb3N0LFxyXG4gICAgICAgICAgICAgICAgcG9zdEFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGFjdHVhbGl6YXJQb3N0LFxyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJQb3N0XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9wb3N0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFN0YXRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi4vaW5kZXguY3NzJztcblxuaW1wb3J0IFBvc3RTdGF0ZSBmcm9tICcuLi9jb250ZXh0L3Bvc3RzL3Bvc3RTdGF0ZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQb3N0U3RhdGU+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUG9zdFN0YXRlPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyIsImV4cG9ydCBjb25zdCBPQ1VMVEFSX0FMRVJUQSA9ICdPQ1VMVEFSX0FMRVJUQSc7XG5cbmV4cG9ydCBjb25zdCBPQlRFTkVSX1BPU1RTID0gJ09CVEVORVJfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IEFHUkVHQVJfUE9TVCA9ICdBR1JFR0FSX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFBPU1RfRVhJVE9TTyA9ICdQT1NUX0VYSVRPU08nO1xuZXhwb3J0IGNvbnN0IFBPU1RfRVJST1IgPSAnUE9TVF9FUlJPUic7XG5leHBvcnQgY29uc3QgUE9TVF9BQ1RVQUwgPSAnUE9TVF9BQ1RVQUwnO1xuZXhwb3J0IGNvbnN0IEVMSU1JTkFSX1BPU1QgPSAnRUxJTUlOQVJfUE9TVCc7XG5leHBvcnQgY29uc3QgQUNUVUFMSVpBUl9QT1NUID0gJ0FDVFVBTElaQVJfUE9TVCc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
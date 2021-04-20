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
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        post: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: [...state.posts, action.payload],
        formulario: false,
        errorformulario: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["SELECT_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        post: state.posts.filter(post => post.id === action.payload)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: state.posts.filter(post => post.id !== action.payload),
        post: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["HIDE_ALERT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: {}
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["POST_OK"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["POST_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        message: action.payload
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
    message: {}
  };
  const timeOut = 2000; // dispatch para ejecutar las acciones

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_postReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState); // obtener todos los posts

  const getPosts = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const result = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(url);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["GET_POSTS"],
        payload: result.data
      });
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'alert-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alert
      });
    }
  }; // obtener post por id


  const getPost = async id => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const result = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(url);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["GET_POST"],
        payload: result.data
      });
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'alert-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alert
      });
    }
  }; // crear nuevo post


  const createPost = async post => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const result = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(url, post);
      const alert = {
        msg: 'Post agregado exitosamente',
        category: 'alert-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_OK"],
        payload: alert
      }); // insertar el post en el state

      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["CREATE_POST"],
        payload: result.data
      });
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'alert-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alert
      });
    }

    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["HIDE_ALERT"]
      });
    }, timeOut);
  }; // selecciona el post que el usuario dio click


  const selectPost = postId => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_3__["SELECT_POST"],
      payload: postId
    });
  }; // edita un post


  const updatePost = async post => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
      const result = await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(url, post);
      const alert = {
        msg: 'Post editado exitosamente',
        category: 'alert-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_OK"],
        payload: alert
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_POST"],
        payload: result.data
      });
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'alert-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alert
      });
    }

    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["HIDE_ALERT"]
      });
    }, timeOut);
  }; // elimina un post


  const deletePost = async postId => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/:${postId}`;
      await _config_axios__WEBPACK_IMPORTED_MODULE_4__["default"].delete(url);
      const alert = {
        msg: 'Post eliminado exitosamente',
        category: 'alert-ok'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_OK"],
        payload: alert
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST"],
        payload: postId
      });
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'alert-error'
      };
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["POST_ERROR"],
        payload: alert
      });
    }

    setTimeout(() => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_3__["HIDE_ALERT"]
      });
    }, timeOut);
  };

  return __jsx(_postContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      posts: state.posts,
      post: state.post,
      message: state.message,
      getPosts,
      getPost,
      createPost,
      selectPost,
      updatePost,
      deletePost
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
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
/*! exports provided: HIDE_ALERT, GET_POSTS, GET_POST, CREATE_POST, POST_OK, POST_ERROR, SELECT_POST, DELETE_POST, UPDATE_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_ALERT", function() { return HIDE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST", function() { return GET_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_OK", function() { return POST_OK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ERROR", function() { return POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_POST", function() { return SELECT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
const HIDE_ALERT = 'HIDE_ALERT';
const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';
const CREATE_POST = 'CREATE_POST';
const POST_OK = 'POST_OK';
const POST_ERROR = 'POST_ERROR';
const SELECT_POST = 'SELECT_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2F4aW9zLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvcG9zdHMvcG9zdENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9wb3N0cy9wb3N0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L3Bvc3RzL3Bvc3RTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJjbGllbnRlQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYmFja2VuZFVSTCIsInBvc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkdFVF9QT1NUUyIsInBvc3RzIiwicGF5bG9hZCIsIkdFVF9QT1NUIiwicG9zdCIsIkNSRUFURV9QT1NUIiwiZm9ybXVsYXJpbyIsImVycm9yZm9ybXVsYXJpbyIsIlNFTEVDVF9QT1NUIiwiZmlsdGVyIiwiaWQiLCJVUERBVEVfUE9TVCIsIm1hcCIsIkRFTEVURV9QT1NUIiwiSElERV9BTEVSVCIsIm1lc3NhZ2UiLCJQT1NUX09LIiwiUE9TVF9FUlJPUiIsIlBvc3RTdGF0ZSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwidGltZU91dCIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInBvc3RSZWR1Y2VyIiwiZ2V0UG9zdHMiLCJ1cmwiLCJyZXN1bHQiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsIm1zZyIsImNhdGVnb3J5IiwiZ2V0UG9zdCIsImNyZWF0ZVBvc3QiLCJzZXRUaW1lb3V0Iiwic2VsZWN0UG9zdCIsInBvc3RJZCIsInVwZGF0ZVBvc3QiLCJwdXQiLCJkZWxldGVQb3N0IiwiZGVsZXRlIiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzlCQyxTQUFPLEVBQUVDLHVCQUFzQkM7QUFERCxDQUFiLENBQXJCO0FBSWVMLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTU0sV0FBVyxHQUFHQywyREFBYSxFQUFqQztBQUVlRCwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBWWUsZ0VBQUNFLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUM5QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFL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QUFLLENBQUNrQixPQUhaO0FBSUhVLGNBSkc7QUFLSFMsYUFMRztBQU1IQyxnQkFORztBQU9IRSxnQkFQRztBQVFIRSxnQkFSRztBQVNIRTtBQVRHLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFLdEIsS0FBSyxDQUFDd0IsUUFiWCxDQURKO0FBaUJILENBeE1EOztBQTBNZXpCLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TkE7QUFFQTtBQUVBOztBQUVBLE1BQU0wQixLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUN4QyxTQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQURKO0FBS0gsQ0FORDs7QUFPZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNOUIsVUFBVSxHQUFHLFlBQW5CO0FBRUEsTUFBTWQsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTVcsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTVQsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUssV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUYsV0FBVyxHQUFHLGFBQXBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFAsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjbGllbnRlQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LmJhY2tlbmRVUkxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRlQXhpb3M7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHBvc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdENvbnRleHQ7IiwiaW1wb3J0IHtcclxuICAgIEdFVF9QT1NUUyxcclxuICAgIEdFVF9QT1NULFxyXG4gICAgQ1JFQVRFX1BPU1QsXHJcbiAgICBQT1NUX09LLFxyXG4gICAgSElERV9BTEVSVCxcclxuICAgIFBPU1RfRVJST1IsXHJcbiAgICBTRUxFQ1RfUE9TVCxcclxuICAgIERFTEVURV9QT1NULFxyXG4gICAgVVBEQVRFX1BPU1RcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBHRVRfUE9TVFM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBHRVRfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ1JFQVRFX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBbLi4uc3RhdGUucG9zdHMsIGFjdGlvbi5wYXlsb2FkXSxcclxuICAgICAgICAgICAgICAgIGZvcm11bGFyaW86IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3Jmb3JtdWxhcmlvOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTRUxFQ1RfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogc3RhdGUucG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC5pZCA9PT1cclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVUERBVEVfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdHM6IHN0YXRlLnBvc3RzLm1hcChwb3N0ID0+IHBvc3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgICAgICAgICA/IGFjdGlvbi5wYXlsb2FkIDogcG9zdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgREVMRVRFX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmlkICE9PVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgICAgICAgICAgcG9zdDogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgSElERV9BTEVSVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZToge31cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICBjYXNlIFBPU1RfT0s6XHJcbiAgICAgICAgY2FzZSBQT1NUX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi9wb3N0Q29udGV4dCc7XHJcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tICcuL3Bvc3RSZWR1Y2VyJztcclxuaW1wb3J0IHtcclxuICAgIEdFVF9QT1NUUyxcclxuICAgIEdFVF9QT1NULFxyXG4gICAgQ1JFQVRFX1BPU1QsXHJcbiAgICBQT1NUX09LLFxyXG4gICAgUE9TVF9FUlJPUixcclxuICAgIEhJREVfQUxFUlQsXHJcbiAgICBTRUxFQ1RfUE9TVCxcclxuICAgIERFTEVURV9QT1NULFxyXG4gICAgVVBEQVRFX1BPU1RcclxufSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY2xpZW50ZUF4aW9zIGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XHJcblxyXG5jb25zdCBQb3N0U3RhdGUgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIHBvc3RzIDogW10sXHJcbiAgICAgICAgcG9zdDogW3t9XSxcclxuICAgICAgICBtZXNzYWdlOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbWVPdXQgPSAyMDAwO1xyXG5cclxuICAgIC8vIGRpc3BhdGNoIHBhcmEgZWplY3V0YXIgbGFzIGFjY2lvbmVzXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocG9zdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gb2J0ZW5lciB0b2RvcyBsb3MgcG9zdHNcclxuICAgIGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnRlQXhpb3MuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBHRVRfUE9TVFMsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydCA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdhbGVydC1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb2J0ZW5lciBwb3N0IHBvciBpZFxyXG4gICAgY29uc3QgZ2V0UG9zdCA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YDtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50ZUF4aW9zLmdldCh1cmwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogR0VUX1BPU1QsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydCA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ0h1Ym8gdW4gZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdhbGVydC1lcnJvcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGNyZWFyIG51ZXZvIHBvc3RcclxuICAgIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyBwb3N0ID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c2A7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudGVBeGlvcy5wb3N0KHVybCwgcG9zdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydCA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1Bvc3QgYWdyZWdhZG8gZXhpdG9zYW1lbnRlJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnYWxlcnQtb2snXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfT0ssXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gaW5zZXJ0YXIgZWwgcG9zdCBlbiBlbCBzdGF0ZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDUkVBVEVfUE9TVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnQgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnYWxlcnQtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSElERV9BTEVSVFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHRpbWVPdXQpOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZWxlY2Npb25hIGVsIHBvc3QgcXVlIGVsIHVzdWFyaW8gZGlvIGNsaWNrXHJcbiAgICBjb25zdCBzZWxlY3RQb3N0ID0gcG9zdElkID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFTEVDVF9QT1NULFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBwb3N0SWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVkaXRhIHVuIHBvc3RcclxuICAgIGNvbnN0IHVwZGF0ZVBvc3QgPSBhc3luYyBwb3N0ID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cG9zdC5pZH1gO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnRlQXhpb3MucHV0KHVybCwgcG9zdCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGVydCA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1Bvc3QgZWRpdGFkbyBleGl0b3NhbWVudGUnLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdhbGVydC1vaydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9PSyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVUERBVEVfUE9TVCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnQgPSB7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdIdWJvIHVuIGVycm9yJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnYWxlcnQtZXJyb3InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUE9TVF9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGFsZXJ0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSElERV9BTEVSVFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHRpbWVPdXQpOyBcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbGltaW5hIHVuIHBvc3RcclxuICAgIGNvbnN0IGRlbGV0ZVBvc3QgPSBhc3luYyBwb3N0SWQgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvOiR7cG9zdElkfWA7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBjbGllbnRlQXhpb3MuZGVsZXRlKHVybCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBhbGVydCA9IHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1Bvc3QgZWxpbWluYWRvIGV4aXRvc2FtZW50ZScsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ2FsZXJ0LW9rJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQT1NUX09LLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogYWxlcnRcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURV9QT1NULFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcG9zdElkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgbXNnOiAnSHVibyB1biBlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ2FsZXJ0LWVycm9yJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBPU1RfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBhbGVydFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEhJREVfQUxFUlRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aW1lT3V0KTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8cG9zdENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBzdGF0ZS5wb3N0cyxcclxuICAgICAgICAgICAgICAgIHBvc3Q6IHN0YXRlLnBvc3QsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgZ2V0UG9zdHMsXHJcbiAgICAgICAgICAgICAgICBnZXRQb3N0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlUG9zdCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdFBvc3QsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVQb3N0LFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUG9zdFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvcG9zdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RTdGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4uL2luZGV4LmNzcyc7XG5cbmltcG9ydCBQb3N0U3RhdGUgZnJvbSAnLi4vY29udGV4dC9wb3N0cy9wb3N0U3RhdGUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UG9zdFN0YXRlPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1Bvc3RTdGF0ZT5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiLCJleHBvcnQgY29uc3QgSElERV9BTEVSVCA9ICdISURFX0FMRVJUJztcblxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUUyA9ICdHRVRfUE9TVFMnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUID0gJ0dFVF9QT1NUJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVCA9ICdDUkVBVEVfUE9TVCc7XG5leHBvcnQgY29uc3QgUE9TVF9PSyA9ICdQT1NUX09LJztcbmV4cG9ydCBjb25zdCBQT1NUX0VSUk9SID0gJ1BPU1RfRVJST1InO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9QT1NUID0gJ1NFTEVDVF9QT1NUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVCA9ICdERUxFVEVfUE9TVCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1QgPSAnVVBEQVRFX1BPU1QnOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
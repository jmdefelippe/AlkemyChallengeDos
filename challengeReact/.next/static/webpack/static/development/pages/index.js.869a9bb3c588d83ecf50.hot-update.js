webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
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
/* harmony import */ var _context_posts_postContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/posts/postContext */ "./context/posts/postContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\components\\Post.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Post = function Post(_ref) {
  _s();

  var post = _ref.post;
  // Next router
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // obtener la función del context de posts

  var postsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_posts_postContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  var obtenerPost = postsContext.obtenerPost,
      postActual = postsContext.postActual,
      eliminarPost = postsContext.eliminarPost;
  var id = post.id,
      title = post.title;

  var detallesPost = function detallesPost(id) {
    obtenerPost(id);
    router.push('/detalle');
  };

  var editarPost = function editarPost(post) {
    postActual(post);
    router.push('/editarpost');
  }; // confirmar si desea eliminarlo


  var confirmarEliminarPost = function confirmarEliminarPost(id) {
    // preguntar al usuario
    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
      title: 'Estás seguro?',
      text: "Un post que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#60A5FA',
      cancelButtonColor: '#000000',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar',
      width: 400,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then(function (result) {
      if (result.isConfirmed) {
        eliminarPost(id);
      }
    });
  };

  var idNo = 99999;
  return __jsx("div", {
    className: "flex flex-wrap my-2 items-center border-b-2 py-2 border-blue-500 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "flex-1 text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, title), __jsx("img", {
    className: "w-6 mr-5 cursor-pointer",
    src: "/detalles.png",
    onClick: function onClick() {
      return detallesPost(id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("img", {
    className: "w-6 mr-5 cursor-pointer",
    src: "/editar.png",
    onClick: function onClick() {
      return editarPost(idNo);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx("img", {
    className: "w-6 cursor-pointer",
    src: "/eliminar.png" //onClick={() => eliminar() }
    ,
    onClick: function onClick() {
      return confirmarEliminarPost(id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }));
};

_s(Post, "JDcStw66KgrRRgHXIi80KcuCUj0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJvYnRlbmVyUG9zdCIsInBvc3RBY3R1YWwiLCJlbGltaW5hclBvc3QiLCJpZCIsInRpdGxlIiwiZGV0YWxsZXNQb3N0IiwicHVzaCIsImVkaXRhclBvc3QiLCJjb25maXJtYXJFbGltaW5hclBvc3QiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0Iiwid2lkdGgiLCJzaG93Q2xhc3MiLCJwb3B1cCIsImhpZGVDbGFzcyIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsImlkTm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUV2QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEIsQ0FIdUIsQ0FLdkI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUEvQjtBQU51QixNQU9mQyxXQVBlLEdBTzJCSCxZQVAzQixDQU9mRyxXQVBlO0FBQUEsTUFPRkMsVUFQRSxHQU8yQkosWUFQM0IsQ0FPRkksVUFQRTtBQUFBLE1BT1VDLFlBUFYsR0FPMkJMLFlBUDNCLENBT1VLLFlBUFY7QUFBQSxNQVNmQyxFQVRlLEdBU0RULElBVEMsQ0FTZlMsRUFUZTtBQUFBLE1BU1hDLEtBVFcsR0FTRFYsSUFUQyxDQVNYVSxLQVRXOztBQVd2QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBRixFQUFFLEVBQUk7QUFDdkJILGVBQVcsQ0FBQ0csRUFBRCxDQUFYO0FBQ0FSLFVBQU0sQ0FBQ1csSUFBUCxDQUFZLFVBQVo7QUFDSCxHQUhEOztBQUtBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFiLElBQUksRUFBSTtBQUN2Qk8sY0FBVSxDQUFDUCxJQUFELENBQVY7QUFDQUMsVUFBTSxDQUFDVyxJQUFQLENBQVksYUFBWjtBQUNILEdBSEQsQ0FoQnVCLENBcUJ2Qjs7O0FBQ0EsTUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBTCxFQUFFLEVBQUk7QUFDaEM7QUFDQU0sc0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05OLFdBQUssRUFBRSxlQUREO0FBRU5PLFVBQUksRUFBRSw4Q0FGQTtBQUdOQyxVQUFJLEVBQUUsU0FIQTtBQUlOQyxzQkFBZ0IsRUFBRSxJQUpaO0FBS05DLHdCQUFrQixFQUFFLFNBTGQ7QUFNTkMsdUJBQWlCLEVBQUUsU0FOYjtBQU9OQyx1QkFBaUIsRUFBRSxlQVBiO0FBUU5DLHNCQUFnQixFQUFFLFVBUlo7QUFTTkMsV0FBSyxFQUFFLEdBVEQ7QUFVTkMsZUFBUyxFQUFFO0FBQ1BDLGFBQUssRUFBRTtBQURBLE9BVkw7QUFhTkMsZUFBUyxFQUFFO0FBQ1BELGFBQUssRUFBRTtBQURBO0FBYkwsS0FBVixFQWlCR0UsSUFqQkgsQ0FpQlEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLFVBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUNwQnRCLG9CQUFZLENBQUNDLEVBQUQsQ0FBWjtBQUNIO0FBQ0osS0FyQkQ7QUFzQkgsR0F4QkQ7O0FBMEJKLE1BQU1zQixJQUFJLEdBQUcsS0FBYjtBQUVJLFNBQ0k7QUFBSyxhQUFTLEVBQUMsbUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLDZCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENyQixLQUE1QyxDQURKLEVBR0k7QUFDSSxhQUFTLEVBQUMseUJBRGQ7QUFDd0MsT0FBRyxFQUFDLGVBRDVDO0FBRUksV0FBTyxFQUFHO0FBQUEsYUFBTUMsWUFBWSxDQUFDRixFQUFELENBQWxCO0FBQUEsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFRSTtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUN3QyxPQUFHLEVBQUMsYUFENUM7QUFFSSxXQUFPLEVBQUc7QUFBQSxhQUFNSSxVQUFVLENBQUNrQixJQUFELENBQWhCO0FBQUEsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFhSTtBQUNJLGFBQVMsRUFBQyxvQkFEZDtBQUNtQyxPQUFHLEVBQUMsZUFEdkMsQ0FFSTtBQUZKO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTWpCLHFCQUFxQixDQUFDTCxFQUFELENBQTNCO0FBQUEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosQ0FESjtBQXNCSCxDQXhFRDs7R0FBTVYsSTtVQUdhRyxxRDs7O0tBSGJILEk7QUEwRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44NjlhOWJiM2M1ODhkODNlY2Y1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVywqB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmltcG9ydCBwb3N0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3Bvc3RzL3Bvc3RDb250ZXh0JztcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuXHJcbiAgICAvLyBOZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsYSBmdW5jacOzbiBkZWwgY29udGV4dCBkZSBwb3N0c1xyXG4gICAgY29uc3QgcG9zdHNDb250ZXh0ID0gdXNlQ29udGV4dChwb3N0Q29udGV4dCk7XHJcbiAgICBjb25zdCB7IG9idGVuZXJQb3N0LCBwb3N0QWN0dWFsLCBlbGltaW5hclBvc3QgfSA9IHBvc3RzQ29udGV4dDtcclxuXHJcbiAgICBjb25zdCB7IGlkLCB0aXRsZSB9ID0gcG9zdDtcclxuIFxyXG4gICAgY29uc3QgZGV0YWxsZXNQb3N0ID0gaWQgPT4ge1xyXG4gICAgICAgIG9idGVuZXJQb3N0KGlkKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2RldGFsbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0YXJQb3N0ID0gcG9zdCA9PiB7XHJcbiAgICAgICAgcG9zdEFjdHVhbChwb3N0KTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2VkaXRhcnBvc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25maXJtYXIgc2kgZGVzZWEgZWxpbWluYXJsb1xyXG4gICAgY29uc3QgY29uZmlybWFyRWxpbWluYXJQb3N0ID0gaWQgPT4ge1xyXG4gICAgICAgIC8vIHByZWd1bnRhciBhbCB1c3VhcmlvXHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdFc3TDoXMgc2VndXJvPycsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVW4gcG9zdCBxdWUgc2UgZWxpbWluYSBubyBzZSBwdWVkZSByZWN1cGVyYXJcIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjNjBBNUZBJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdTw60sIGVsaW1pbmFyIScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWxhcicsXHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgICAgIHNob3dDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5Eb3duJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGVDbGFzczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXA6ICdhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlT3V0VXAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsaW1pbmFyUG9zdChpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuY29uc3QgaWRObyA9IDk5OTk5O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBteS0yIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIHB5LTIgYm9yZGVyLWJsdWUtNTAwIFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1zbSBsZzp0ZXh0LWJhc2VcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBtci01IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2RldGFsbGVzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gZGV0YWxsZXNQb3N0KGlkKSB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG1yLTUgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvZWRpdGFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gZWRpdGFyUG9zdChpZE5vKSB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2VsaW1pbmFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eygpID0+IGVsaW1pbmFyKCkgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybWFyRWxpbWluYXJQb3N0KGlkKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=
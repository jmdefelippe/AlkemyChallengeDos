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
  var eliminarPost = postsContext.eliminarPost,
      postActual = postsContext.postActual;
  var userId = post.userId,
      id = post.id,
      title = post.title,
      body = post.body;

  var detallesPost = function detallesPost(post) {
    postActual(post);
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

  return __jsx("div", {
    className: "flex flex-wrap my-2 items-center border-b-2 py-2 border-blue-500 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "flex-1 text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("img", {
    className: "w-6 mr-5 cursor-pointer",
    src: "/editar.png",
    onClick: function onClick() {
      return editarPost(id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJlbGltaW5hclBvc3QiLCJwb3N0QWN0dWFsIiwidXNlcklkIiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJkZXRhbGxlc1Bvc3QiLCJwdXNoIiwiZWRpdGFyUG9zdCIsImNvbmZpcm1hckVsaW1pbmFyUG9zdCIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ3aWR0aCIsInNob3dDbGFzcyIsInBvcHVwIiwiaGlkZUNsYXNzIiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFdkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSHVCLENBS3ZCOztBQUNBLE1BQU1DLFlBQVksR0FBR0Msd0RBQVUsQ0FBQ0Msa0VBQUQsQ0FBL0I7QUFOdUIsTUFPZkMsWUFQZSxHQU9lSCxZQVBmLENBT2ZHLFlBUGU7QUFBQSxNQU9EQyxVQVBDLEdBT2VKLFlBUGYsQ0FPREksVUFQQztBQUFBLE1BU2ZDLE1BVGUsR0FTYVIsSUFUYixDQVNmUSxNQVRlO0FBQUEsTUFTUEMsRUFUTyxHQVNhVCxJQVRiLENBU1BTLEVBVE87QUFBQSxNQVNIQyxLQVRHLEdBU2FWLElBVGIsQ0FTSFUsS0FURztBQUFBLE1BU0lDLElBVEosR0FTYVgsSUFUYixDQVNJVyxJQVRKOztBQVd2QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBWixJQUFJLEVBQUk7QUFDekJPLGNBQVUsQ0FBQ1AsSUFBRCxDQUFWO0FBQ0FDLFVBQU0sQ0FBQ1ksSUFBUCxDQUFZLFVBQVo7QUFDSCxHQUhEOztBQUtBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFkLElBQUksRUFBSTtBQUN2Qk8sY0FBVSxDQUFDUCxJQUFELENBQVY7QUFDQUMsVUFBTSxDQUFDWSxJQUFQLENBQVksYUFBWjtBQUNILEdBSEQsQ0FoQnVCLENBcUJ2Qjs7O0FBQ0EsTUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBTixFQUFFLEVBQUk7QUFDaEM7QUFDQU8sc0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05QLFdBQUssRUFBRSxlQUREO0FBRU5RLFVBQUksRUFBRSw4Q0FGQTtBQUdOQyxVQUFJLEVBQUUsU0FIQTtBQUlOQyxzQkFBZ0IsRUFBRSxJQUpaO0FBS05DLHdCQUFrQixFQUFFLFNBTGQ7QUFNTkMsdUJBQWlCLEVBQUUsU0FOYjtBQU9OQyx1QkFBaUIsRUFBRSxlQVBiO0FBUU5DLHNCQUFnQixFQUFFLFVBUlo7QUFTTkMsV0FBSyxFQUFFLEdBVEQ7QUFVTkMsZUFBUyxFQUFFO0FBQ1BDLGFBQUssRUFBRTtBQURBLE9BVkw7QUFhTkMsZUFBUyxFQUFFO0FBQ1BELGFBQUssRUFBRTtBQURBO0FBYkwsS0FBVixFQWlCR0UsSUFqQkgsQ0FpQlEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLFVBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUNwQnpCLG9CQUFZLENBQUNHLEVBQUQsQ0FBWjtBQUNIO0FBQ0osS0FyQkQ7QUFzQkgsR0F4QkQ7O0FBMEJBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsbUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLDZCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNENDLEtBQTVDLENBREosRUFHSTtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUN3QyxPQUFHLEVBQUMsZUFENUM7QUFFSSxXQUFPLEVBQUc7QUFBQSxhQUFNRSxZQUFZLENBQUNILEVBQUQsQ0FBbEI7QUFBQSxLQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQVFJO0FBQ0ksYUFBUyxFQUFDLHlCQURkO0FBQ3dDLE9BQUcsRUFBQyxhQUQ1QztBQUVJLFdBQU8sRUFBRztBQUFBLGFBQU1LLFVBQVUsQ0FBQ0wsRUFBRCxDQUFoQjtBQUFBLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBYUk7QUFDSSxhQUFTLEVBQUMsb0JBRGQ7QUFDbUMsT0FBRyxFQUFDLGVBRHZDLENBRUk7QUFGSjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1NLHFCQUFxQixDQUFDTixFQUFELENBQTNCO0FBQUEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosQ0FESjtBQXNCSCxDQXRFRDs7R0FBTVYsSTtVQUdhRyxxRDs7O0tBSGJILEk7QUF3RVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45YzZkMjE0YzllMDhkYmU2NjJmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVywqB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmltcG9ydCBwb3N0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3Bvc3RzL3Bvc3RDb250ZXh0JztcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuXHJcbiAgICAvLyBOZXh0IHJvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gb2J0ZW5lciBsYSBmdW5jacOzbiBkZWwgY29udGV4dCBkZSBwb3N0c1xyXG4gICAgY29uc3QgcG9zdHNDb250ZXh0ID0gdXNlQ29udGV4dChwb3N0Q29udGV4dCk7XHJcbiAgICBjb25zdCB7IGVsaW1pbmFyUG9zdCwgcG9zdEFjdHVhbCwgfSA9IHBvc3RzQ29udGV4dDtcclxuXHJcbiAgICBjb25zdCB7IHVzZXJJZCwgaWQsIHRpdGxlLCBib2R5IH0gPSBwb3N0O1xyXG4gXHJcbiAgICBjb25zdCBkZXRhbGxlc1Bvc3QgPSBwb3N0ID0+IHtcclxuICAgICAgICBwb3N0QWN0dWFsKHBvc3QpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGV0YWxsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRhclBvc3QgPSBwb3N0ID0+IHtcclxuICAgICAgICBwb3N0QWN0dWFsKHBvc3QpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZWRpdGFycG9zdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbmZpcm1hciBzaSBkZXNlYSBlbGltaW5hcmxvXHJcbiAgICBjb25zdCBjb25maXJtYXJFbGltaW5hclBvc3QgPSBpZCA9PiB7XHJcbiAgICAgICAgLy8gcHJlZ3VudGFyIGFsIHVzdWFyaW9cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VzdMOhcyBzZWd1cm8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJVbiBwb3N0IHF1ZSBzZSBlbGltaW5hIG5vIHNlIHB1ZWRlIHJlY3VwZXJhclwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM2MEE1RkEnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1PDrSwgZWxpbWluYXIhJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbGFyJyxcclxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24nXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVPdXRVcCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJQb3N0KGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG15LTIgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgcHktMiBib3JkZXItYmx1ZS01MDAgXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG1yLTUgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvZGV0YWxsZXMucG5nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBkZXRhbGxlc1Bvc3QoaWQpIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXItNSBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9lZGl0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBlZGl0YXJQb3N0KGlkKSB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2VsaW1pbmFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eygpID0+IGVsaW1pbmFyKCkgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybWFyRWxpbWluYXJQb3N0KGlkKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=
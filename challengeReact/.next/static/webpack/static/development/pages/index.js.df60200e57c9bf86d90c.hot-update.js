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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJvYnRlbmVyUG9zdCIsInBvc3RBY3R1YWwiLCJlbGltaW5hclBvc3QiLCJpZCIsInRpdGxlIiwiZGV0YWxsZXNQb3N0IiwicHVzaCIsImVkaXRhclBvc3QiLCJjb25maXJtYXJFbGltaW5hclBvc3QiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0Iiwid2lkdGgiLCJzaG93Q2xhc3MiLCJwb3B1cCIsImhpZGVDbGFzcyIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRXZCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUh1QixDQUt2Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQS9CO0FBTnVCLE1BT2ZDLFdBUGUsR0FPMkJILFlBUDNCLENBT2ZHLFdBUGU7QUFBQSxNQU9GQyxVQVBFLEdBTzJCSixZQVAzQixDQU9GSSxVQVBFO0FBQUEsTUFPVUMsWUFQVixHQU8yQkwsWUFQM0IsQ0FPVUssWUFQVjtBQUFBLE1BU2ZDLEVBVGUsR0FTRFQsSUFUQyxDQVNmUyxFQVRlO0FBQUEsTUFTWEMsS0FUVyxHQVNEVixJQVRDLENBU1hVLEtBVFc7O0FBV3ZCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFGLEVBQUUsRUFBSTtBQUN2QkgsZUFBVyxDQUFDRyxFQUFELENBQVg7QUFDQVIsVUFBTSxDQUFDVyxJQUFQLENBQVksVUFBWjtBQUNILEdBSEQ7O0FBS0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQWIsSUFBSSxFQUFJO0FBQ3ZCTyxjQUFVLENBQUNQLElBQUQsQ0FBVjtBQUNBQyxVQUFNLENBQUNXLElBQVAsQ0FBWSxhQUFaO0FBQ0gsR0FIRCxDQWhCdUIsQ0FxQnZCOzs7QUFDQSxNQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUFMLEVBQUUsRUFBSTtBQUNoQztBQUNBTSxzREFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTk4sV0FBSyxFQUFFLGVBREQ7QUFFTk8sVUFBSSxFQUFFLDhDQUZBO0FBR05DLFVBQUksRUFBRSxTQUhBO0FBSU5DLHNCQUFnQixFQUFFLElBSlo7QUFLTkMsd0JBQWtCLEVBQUUsU0FMZDtBQU1OQyx1QkFBaUIsRUFBRSxTQU5iO0FBT05DLHVCQUFpQixFQUFFLGVBUGI7QUFRTkMsc0JBQWdCLEVBQUUsVUFSWjtBQVNOQyxXQUFLLEVBQUUsR0FURDtBQVVOQyxlQUFTLEVBQUU7QUFDUEMsYUFBSyxFQUFFO0FBREEsT0FWTDtBQWFOQyxlQUFTLEVBQUU7QUFDUEQsYUFBSyxFQUFFO0FBREE7QUFiTCxLQUFWLEVBaUJHRSxJQWpCSCxDQWlCUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCdEIsb0JBQVksQ0FBQ0MsRUFBRCxDQUFaO0FBQ0g7QUFDSixLQXJCRDtBQXNCSCxHQXhCRDs7QUEwQkEsU0FDSTtBQUFLLGFBQVMsRUFBQyxtRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsNkJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0Q0MsS0FBNUMsQ0FESixFQUdJO0FBQ0ksYUFBUyxFQUFDLHlCQURkO0FBQ3dDLE9BQUcsRUFBQyxlQUQ1QztBQUVJLFdBQU8sRUFBRztBQUFBLGFBQU1DLFlBQVksQ0FBQ0YsRUFBRCxDQUFsQjtBQUFBLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBUUk7QUFDSSxhQUFTLEVBQUMseUJBRGQ7QUFDd0MsT0FBRyxFQUFDLGFBRDVDO0FBRUksV0FBTyxFQUFHO0FBQUEsYUFBTUksVUFBVSxDQUFDSixFQUFELENBQWhCO0FBQUEsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFhSTtBQUNJLGFBQVMsRUFBQyxvQkFEZDtBQUNtQyxPQUFHLEVBQUMsZUFEdkMsQ0FFSTtBQUZKO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTUsscUJBQXFCLENBQUNMLEVBQUQsQ0FBM0I7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixDQURKO0FBc0JILENBdEVEOztHQUFNVixJO1VBR2FHLHFEOzs7S0FIYkgsSTtBQXdFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRmNjAyMDBlNTdjOWJmODZkOTBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXLCoH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuaW1wb3J0IHBvc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcG9zdHMvcG9zdENvbnRleHQnO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG5cclxuICAgIC8vIE5leHQgcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBvYnRlbmVyIGxhIGZ1bmNpw7NuIGRlbCBjb250ZXh0IGRlIHBvc3RzXHJcbiAgICBjb25zdCBwb3N0c0NvbnRleHQgPSB1c2VDb250ZXh0KHBvc3RDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgb2J0ZW5lclBvc3QsIHBvc3RBY3R1YWwsIGVsaW1pbmFyUG9zdCB9ID0gcG9zdHNDb250ZXh0O1xyXG5cclxuICAgIGNvbnN0IHsgaWQsIHRpdGxlIH0gPSBwb3N0O1xyXG4gXHJcbiAgICBjb25zdCBkZXRhbGxlc1Bvc3QgPSBpZCA9PiB7XHJcbiAgICAgICAgb2J0ZW5lclBvc3QoaWQpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGV0YWxsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRhclBvc3QgPSBwb3N0ID0+IHtcclxuICAgICAgICBwb3N0QWN0dWFsKHBvc3QpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZWRpdGFycG9zdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbmZpcm1hciBzaSBkZXNlYSBlbGltaW5hcmxvXHJcbiAgICBjb25zdCBjb25maXJtYXJFbGltaW5hclBvc3QgPSBpZCA9PiB7XHJcbiAgICAgICAgLy8gcHJlZ3VudGFyIGFsIHVzdWFyaW9cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VzdMOhcyBzZWd1cm8/JyxcclxuICAgICAgICAgICAgdGV4dDogXCJVbiBwb3N0IHF1ZSBzZSBlbGltaW5hIG5vIHNlIHB1ZWRlIHJlY3VwZXJhclwiLFxyXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyM2MEE1RkEnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1PDrSwgZWxpbWluYXIhJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbGFyJyxcclxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbkRvd24nXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGlkZUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cDogJ2FuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVPdXRVcCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgZWxpbWluYXJQb3N0KGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG15LTIgaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgcHktMiBib3JkZXItYmx1ZS01MDAgXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG1yLTUgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvZGV0YWxsZXMucG5nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBkZXRhbGxlc1Bvc3QoaWQpIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXItNSBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9lZGl0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBlZGl0YXJQb3N0KGlkKSB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2VsaW1pbmFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvL29uQ2xpY2s9eygpID0+IGVsaW1pbmFyKCkgfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uZmlybWFyRWxpbWluYXJQb3N0KGlkKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=
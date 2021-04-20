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
      body = post.body; // funcion que redirige de forma programada

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
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "flex-1 text-sm lg:text-base",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 56,
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
      lineNumber: 61,
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
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJlbGltaW5hclBvc3QiLCJwb3N0QWN0dWFsIiwidXNlcklkIiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJlZGl0YXJQb3N0IiwicHVzaCIsImNvbmZpcm1hckVsaW1pbmFyUG9zdCIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ3aWR0aCIsInNob3dDbGFzcyIsInBvcHVwIiwiaGlkZUNsYXNzIiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiZGV0YWxsZXNQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFdkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSHVCLENBS3ZCOztBQUNBLE1BQU1DLFlBQVksR0FBR0Msd0RBQVUsQ0FBQ0Msa0VBQUQsQ0FBL0I7QUFOdUIsTUFPZkMsWUFQZSxHQU9lSCxZQVBmLENBT2ZHLFlBUGU7QUFBQSxNQU9EQyxVQVBDLEdBT2VKLFlBUGYsQ0FPREksVUFQQztBQUFBLE1BU2ZDLE1BVGUsR0FTYVIsSUFUYixDQVNmUSxNQVRlO0FBQUEsTUFTUEMsRUFUTyxHQVNhVCxJQVRiLENBU1BTLEVBVE87QUFBQSxNQVNIQyxLQVRHLEdBU2FWLElBVGIsQ0FTSFUsS0FURztBQUFBLE1BU0lDLElBVEosR0FTYVgsSUFUYixDQVNJVyxJQVRKLEVBV3ZCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFaLElBQUksRUFBSTtBQUN2Qk8sY0FBVSxDQUFDUCxJQUFELENBQVY7QUFDQUMsVUFBTSxDQUFDWSxJQUFQLENBQVksYUFBWjtBQUNILEdBSEQsQ0FadUIsQ0FpQnZCOzs7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUFMLEVBQUUsRUFBSTtBQUNoQztBQUNBTSxzREFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTk4sV0FBSyxFQUFFLGVBREQ7QUFFTk8sVUFBSSxFQUFFLDhDQUZBO0FBR05DLFVBQUksRUFBRSxTQUhBO0FBSU5DLHNCQUFnQixFQUFFLElBSlo7QUFLTkMsd0JBQWtCLEVBQUUsU0FMZDtBQU1OQyx1QkFBaUIsRUFBRSxTQU5iO0FBT05DLHVCQUFpQixFQUFFLGVBUGI7QUFRTkMsc0JBQWdCLEVBQUUsVUFSWjtBQVNOQyxXQUFLLEVBQUUsR0FURDtBQVVOQyxlQUFTLEVBQUU7QUFDUEMsYUFBSyxFQUFFO0FBREEsT0FWTDtBQWFOQyxlQUFTLEVBQUU7QUFDUEQsYUFBSyxFQUFFO0FBREE7QUFiTCxLQUFWLEVBaUJHRSxJQWpCSCxDQWlCUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCeEIsb0JBQVksQ0FBQ0csRUFBRCxDQUFaO0FBQ0g7QUFDSixLQXJCRDtBQXNCSCxHQXhCRDs7QUEwQkEsU0FDSTtBQUFLLGFBQVMsRUFBQyxtRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsNkJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0Q0MsS0FBNUMsQ0FESixFQUdJO0FBQ0ksYUFBUyxFQUFDLHlCQURkO0FBQ3dDLE9BQUcsRUFBQyxlQUQ1QztBQUVJLFdBQU8sRUFBRztBQUFBLGFBQU1xQixZQUFZLENBQUN0QixFQUFELENBQWxCO0FBQUEsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFRSTtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUN3QyxPQUFHLEVBQUMsYUFENUM7QUFFSSxXQUFPLEVBQUc7QUFBQSxhQUFNRyxVQUFVLENBQUNILEVBQUQsQ0FBaEI7QUFBQSxLQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQWFJO0FBQ0ksYUFBUyxFQUFDLG9CQURkO0FBQ21DLE9BQUcsRUFBQyxlQUR2QyxDQUVJO0FBRko7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNSyxxQkFBcUIsQ0FBQ0wsRUFBRCxDQUEzQjtBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJKLENBREo7QUFzQkgsQ0FsRUQ7O0dBQU1WLEk7VUFHYUcscUQ7OztLQUhiSCxJO0FBb0VTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjFkZTlhZWI5YjEyYjY1YTFiMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlcsKgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9wb3N0cy9wb3N0Q29udGV4dCc7XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcblxyXG4gICAgLy8gTmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIG9idGVuZXIgbGEgZnVuY2nDs24gZGVsIGNvbnRleHQgZGUgcG9zdHNcclxuICAgIGNvbnN0IHBvc3RzQ29udGV4dCA9IHVzZUNvbnRleHQocG9zdENvbnRleHQpO1xyXG4gICAgY29uc3QgeyBlbGltaW5hclBvc3QsIHBvc3RBY3R1YWwsIH0gPSBwb3N0c0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3QgeyB1c2VySWQsIGlkLCB0aXRsZSwgYm9keSB9ID0gcG9zdDtcclxuIFxyXG4gICAgLy8gZnVuY2lvbiBxdWUgcmVkaXJpZ2UgZGUgZm9ybWEgcHJvZ3JhbWFkYVxyXG4gICAgY29uc3QgZWRpdGFyUG9zdCA9IHBvc3QgPT4ge1xyXG4gICAgICAgIHBvc3RBY3R1YWwocG9zdCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9lZGl0YXJwb3N0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uZmlybWFyIHNpIGRlc2VhIGVsaW1pbmFybG9cclxuICAgIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyUG9zdCA9IGlkID0+IHtcclxuICAgICAgICAvLyBwcmVndW50YXIgYWwgdXN1YXJpb1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRXN0w6FzIHNlZ3Vybz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlVuIHBvc3QgcXVlIHNlIGVsaW1pbmEgbm8gc2UgcHVlZGUgcmVjdXBlcmFyXCIsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzYwQTVGQScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnU8OtLCBlbGltaW5hciEnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93bidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZU91dFVwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGltaW5hclBvc3QoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXktMiBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBweS0yIGJvcmRlci1ibHVlLTUwMCBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtc20gbGc6dGV4dC1iYXNlXCI+e3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgbXItNSBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9kZXRhbGxlcy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGRldGFsbGVzUG9zdChpZCkgfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBtci01IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2VkaXRhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IGVkaXRhclBvc3QoaWQpIH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvZWxpbWluYXIucG5nXCJcclxuICAgICAgICAgICAgICAgIC8vb25DbGljaz17KCkgPT4gZWxpbWluYXIoKSB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjb25maXJtYXJFbGltaW5hclBvc3QoaWQpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==
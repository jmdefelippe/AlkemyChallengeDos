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
  }; //const idNo = 99999;


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
      return editarPost(id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QuanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJvYnRlbmVyUG9zdCIsInBvc3RBY3R1YWwiLCJlbGltaW5hclBvc3QiLCJpZCIsInRpdGxlIiwiZGV0YWxsZXNQb3N0IiwicHVzaCIsImVkaXRhclBvc3QiLCJjb25maXJtYXJFbGltaW5hclBvc3QiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0Iiwid2lkdGgiLCJzaG93Q2xhc3MiLCJwb3B1cCIsImhpZGVDbGFzcyIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRXZCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUh1QixDQUt2Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQS9CO0FBTnVCLE1BT2ZDLFdBUGUsR0FPMkJILFlBUDNCLENBT2ZHLFdBUGU7QUFBQSxNQU9GQyxVQVBFLEdBTzJCSixZQVAzQixDQU9GSSxVQVBFO0FBQUEsTUFPVUMsWUFQVixHQU8yQkwsWUFQM0IsQ0FPVUssWUFQVjtBQUFBLE1BU2ZDLEVBVGUsR0FTRFQsSUFUQyxDQVNmUyxFQVRlO0FBQUEsTUFTWEMsS0FUVyxHQVNEVixJQVRDLENBU1hVLEtBVFc7O0FBV3ZCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFGLEVBQUUsRUFBSTtBQUN2QkgsZUFBVyxDQUFDRyxFQUFELENBQVg7QUFDQVIsVUFBTSxDQUFDVyxJQUFQLENBQVksVUFBWjtBQUNILEdBSEQ7O0FBS0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQWIsSUFBSSxFQUFJO0FBQ3ZCTyxjQUFVLENBQUNQLElBQUQsQ0FBVjtBQUNBQyxVQUFNLENBQUNXLElBQVAsQ0FBWSxhQUFaO0FBQ0gsR0FIRCxDQWhCdUIsQ0FxQnZCOzs7QUFDQSxNQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUFMLEVBQUUsRUFBSTtBQUNoQztBQUNBTSxzREFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTk4sV0FBSyxFQUFFLGVBREQ7QUFFTk8sVUFBSSxFQUFFLDhDQUZBO0FBR05DLFVBQUksRUFBRSxTQUhBO0FBSU5DLHNCQUFnQixFQUFFLElBSlo7QUFLTkMsd0JBQWtCLEVBQUUsU0FMZDtBQU1OQyx1QkFBaUIsRUFBRSxTQU5iO0FBT05DLHVCQUFpQixFQUFFLGVBUGI7QUFRTkMsc0JBQWdCLEVBQUUsVUFSWjtBQVNOQyxXQUFLLEVBQUUsR0FURDtBQVVOQyxlQUFTLEVBQUU7QUFDUEMsYUFBSyxFQUFFO0FBREEsT0FWTDtBQWFOQyxlQUFTLEVBQUU7QUFDUEQsYUFBSyxFQUFFO0FBREE7QUFiTCxLQUFWLEVBaUJHRSxJQWpCSCxDQWlCUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO0FBQ3BCdEIsb0JBQVksQ0FBQ0MsRUFBRCxDQUFaO0FBQ0g7QUFDSixLQXJCRDtBQXNCSCxHQXhCRCxDQXRCdUIsQ0FnRDNCOzs7QUFFSSxTQUNJO0FBQUssYUFBUyxFQUFDLG1FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyw2QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDQyxLQUE1QyxDQURKLEVBR0k7QUFDSSxhQUFTLEVBQUMseUJBRGQ7QUFDd0MsT0FBRyxFQUFDLGVBRDVDO0FBRUksV0FBTyxFQUFHO0FBQUEsYUFBTUMsWUFBWSxDQUFDRixFQUFELENBQWxCO0FBQUEsS0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFRSTtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUN3QyxPQUFHLEVBQUMsYUFENUM7QUFFSSxXQUFPLEVBQUc7QUFBQSxhQUFNSSxVQUFVLENBQUNKLEVBQUQsQ0FBaEI7QUFBQSxLQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQWFJO0FBQ0ksYUFBUyxFQUFDLG9CQURkO0FBQ21DLE9BQUcsRUFBQyxlQUR2QyxDQUVJO0FBRko7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNSyxxQkFBcUIsQ0FBQ0wsRUFBRCxDQUEzQjtBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJKLENBREo7QUFzQkgsQ0F4RUQ7O0dBQU1WLEk7VUFHYUcscUQ7OztLQUhiSCxJO0FBMEVTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZGU0MmY0ZTRhMmQ1MjI4MGFhZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlcsKgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9wb3N0cy9wb3N0Q29udGV4dCc7XHJcblxyXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcblxyXG4gICAgLy8gTmV4dCByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIG9idGVuZXIgbGEgZnVuY2nDs24gZGVsIGNvbnRleHQgZGUgcG9zdHNcclxuICAgIGNvbnN0IHBvc3RzQ29udGV4dCA9IHVzZUNvbnRleHQocG9zdENvbnRleHQpO1xyXG4gICAgY29uc3QgeyBvYnRlbmVyUG9zdCwgcG9zdEFjdHVhbCwgZWxpbWluYXJQb3N0IH0gPSBwb3N0c0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3QgeyBpZCwgdGl0bGUgfSA9IHBvc3Q7XHJcbiBcclxuICAgIGNvbnN0IGRldGFsbGVzUG9zdCA9IGlkID0+IHtcclxuICAgICAgICBvYnRlbmVyUG9zdChpZCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9kZXRhbGxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdGFyUG9zdCA9IHBvc3QgPT4ge1xyXG4gICAgICAgIHBvc3RBY3R1YWwocG9zdCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9lZGl0YXJwb3N0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uZmlybWFyIHNpIGRlc2VhIGVsaW1pbmFybG9cclxuICAgIGNvbnN0IGNvbmZpcm1hckVsaW1pbmFyUG9zdCA9IGlkID0+IHtcclxuICAgICAgICAvLyBwcmVndW50YXIgYWwgdXN1YXJpb1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRXN0w6FzIHNlZ3Vybz8nLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlVuIHBvc3QgcXVlIHNlIGVsaW1pbmEgbm8gc2UgcHVlZGUgcmVjdXBlcmFyXCIsXHJcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzYwQTVGQScsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnU8OtLCBlbGltaW5hciEnLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsYXInLFxyXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICBzaG93Q2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluRG93bidcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoaWRlQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwOiAnYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZU91dFVwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGltaW5hclBvc3QoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbi8vY29uc3QgaWRObyA9IDk5OTk5O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBteS0yIGl0ZW1zLWNlbnRlciBib3JkZXItYi0yIHB5LTIgYm9yZGVyLWJsdWUtNTAwIFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1zbSBsZzp0ZXh0LWJhc2VcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBtci01IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2RldGFsbGVzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gZGV0YWxsZXNQb3N0KGlkKSB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IG1yLTUgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvZWRpdGFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gZWRpdGFyUG9zdChpZCkgfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9lbGltaW5hci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgLy9vbkNsaWNrPXsoKSA9PiBlbGltaW5hcigpIH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbmZpcm1hckVsaW1pbmFyUG9zdChpZCl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate("static\\development\\pages\\crearpost.js",{

/***/ "./pages/crearpost.js":
/*!****************************!*\
  !*** ./pages/crearpost.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Alerta */ "./components/Alerta.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _context_posts_postContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/posts/postContext */ "./context/posts/postContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\pages\\crearpost.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var CrearPost = function CrearPost() {
  _s();

  // Next router
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var PostContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_posts_postContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var mensaje = PostContext.mensaje,
      agregarPost = PostContext.agregarPost;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mensaje.categoria === 'alerta-ok') {
      router.push('/');
    } // eslint-disable-next-line

  }, [mensaje]); // Formulario y validación con formik y Yup

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      title: '',
      body: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
      title: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El title es obligatorio'),
      body: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El body es obligatorio')
    }),
    onSubmit: function onSubmit(valores) {
      agregarPost(valores);
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Crear Post"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 27
    }
  }, "Title"), __jsx("input", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "title",
    placeholder: "Title",
    value: formik.values.title,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 27
    }
  }), formik.touched.title && formik.errors.title ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, formik.errors.title, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }
  }, "Body"), __jsx("input", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "body",
    placeholder: "Body",
    value: formik.values.body,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 27
    }
  }), formik.touched.body && formik.errors.body ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, formik.errors.body, " ")) : null), __jsx("input", {
    type: "submit",
    className: "bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold",
    value: "Crear Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  }), mensaje.categoria === 'alerta-error' && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_5__["default"], {
    msg: mensaje.msg,
    categoria: mensaje.categoria,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 67
    }
  }))))));
};

_s(CrearPost, "FSp2luqTDxp7XiTgztMdMXgTz00=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
});

_c = CrearPost;
/* harmony default export */ __webpack_exports__["default"] = (CrearPost);

var _c;

$RefreshReg$(_c, "CrearPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhcnBvc3QuanMiXSwibmFtZXMiOlsiQ3JlYXJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiUG9zdENvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJtZW5zYWplIiwiYWdyZWdhclBvc3QiLCJ1c2VFZmZlY3QiLCJjYXRlZ29yaWEiLCJwdXNoIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInRpdGxlIiwiYm9keSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsb3JlcyIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsInRvdWNoZWQiLCJlcnJvcnMiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUV0QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQTlCO0FBTHNCLE1BTWRDLE9BTmMsR0FNV0gsV0FOWCxDQU1kRyxPQU5jO0FBQUEsTUFNTEMsV0FOSyxHQU1XSixXQU5YLENBTUxJLFdBTks7QUFRdEJDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUlGLE9BQU8sQ0FBQ0csU0FBUixLQUFzQixXQUExQixFQUF1QztBQUNyQ1IsWUFBTSxDQUFDUyxJQUFQLENBQVksR0FBWjtBQUNELEtBSmEsQ0FNZDs7QUFDRCxHQVBRLEVBT04sQ0FBQ0osT0FBRCxDQVBNLENBQVQsQ0FSc0IsQ0FpQnRCOztBQUNBLE1BQU1LLE1BQU0sR0FBR0Msd0RBQVMsQ0FBQztBQUNyQkMsaUJBQWEsRUFBRTtBQUNiQyxXQUFLLEVBQUUsRUFETTtBQUVi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YjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlKLE1BQU0sQ0FBQ2MsTUFBUCxDQUFjVixJQUFsQixNQUZKLENBREEsR0FLRSxJQW5CUixDQTFCSixFQWlESTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLHlFQUZaO0FBR0UsU0FBSyxFQUFDLFlBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpESixFQXVET1QsT0FBTyxDQUFDRyxTQUFSLEtBQXNCLGNBQXZCLElBQTBDLE1BQUMsMERBQUQ7QUFBUSxPQUFHLEVBQUVILE9BQU8sQ0FBQ29CLEdBQXJCO0FBQTBCLGFBQVMsRUFBRXBCLE9BQU8sQ0FBQ0csU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZEaEQsQ0FESixDQURKLENBSEYsQ0FESixDQURGO0FBc0VELENBekdEOztHQUFNVCxTO1VBR1dFLHFELEVBZUFVLGdEOzs7S0FsQlhaLFM7QUEyR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjcmVhcnBvc3QuanMuM2QyYzY3ZWU0NTJmMDc3NjAyZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlcsKgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcblxyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuaW1wb3J0IHBvc3RDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvcG9zdHMvcG9zdENvbnRleHQnO1xyXG5cclxuY29uc3QgQ3JlYXJQb3N0ID0gKCkgPT4ge1xyXG4gIFxyXG4gIC8vIE5leHQgcm91dGVyXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFBvc3RDb250ZXh0ID0gdXNlQ29udGV4dChwb3N0Q29udGV4dCk7XHJcbiAgY29uc3QgeyBtZW5zYWplLCBhZ3JlZ2FyUG9zdCB9ID0gUG9zdENvbnRleHQ7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgIFxyXG4gICAgaWYgKG1lbnNhamUuY2F0ZWdvcmlhID09PSAnYWxlcnRhLW9rJykge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIH0sIFttZW5zYWplXSk7XHJcblxyXG4gIC8vIEZvcm11bGFyaW8geSB2YWxpZGFjacOzbiBjb24gZm9ybWlrIHkgWXVwXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBib2R5OiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCB0aXRsZSBlcyBvYmxpZ2F0b3JpbycpLFxyXG4gICAgICAgICAgICBib2R5OiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgYm9keSBlcyBvYmxpZ2F0b3JpbycpXHJcbiAgICAgIH0pLFxyXG4gICAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XHJcbiAgICAgICAgICBhZ3JlZ2FyUG9zdCh2YWxvcmVzKTtcclxuICAgICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTQvNSB4bDp3LTMvNSBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtYmxhY2stNTAwIHRleHQtY2VudGVyIG15LTRcIj5DcmVhciBQb3N0PC9oMj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbWQgcHgtOCBwdC02IHBiLTggbWItMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC50aXRsZSAmJiBmb3JtaWsuZXJyb3JzLnRpdGxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLnRpdGxlfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5Cb2R5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmJvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuYm9keSAmJiBmb3JtaWsuZXJyb3JzLmJvZHkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuYm9keX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBob3ZlcjpiZy1ncmF5LTkwMCB3LWZ1bGwgcC0yIHRleHQtd2hpdGUgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQ3JlYXIgUG9zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHsgKG1lbnNhamUuY2F0ZWdvcmlhID09PSAnYWxlcnRhLWVycm9yJykgJiYgPEFsZXJ0YSBtc2c9e21lbnNhamUubXNnfSBjYXRlZ29yaWE9e21lbnNhamUuY2F0ZWdvcmlhfSAvPiB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXJQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=
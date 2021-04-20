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
      title: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Title required'),
      body: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Body required')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhcnBvc3QuanMiXSwibmFtZXMiOlsiQ3JlYXJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiUG9zdENvbnRleHQiLCJ1c2VDb250ZXh0IiwicG9zdENvbnRleHQiLCJtZW5zYWplIiwiYWdyZWdhclBvc3QiLCJ1c2VFZmZlY3QiLCJjYXRlZ29yaWEiLCJwdXNoIiwiZm9ybWlrIiwidXNlRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInRpdGxlIiwiYm9keSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsb3JlcyIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsInRvdWNoZWQiLCJlcnJvcnMiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUV0QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQTlCO0FBTHNCLE1BTWRDLE9BTmMsR0FNV0gsV0FOWCxDQU1kRyxPQU5jO0FBQUEsTUFNTEMsV0FOSyxHQU1XSixXQU5YLENBTUxJLFdBTks7QUFRdEJDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUlGLE9BQU8sQ0FBQ0csU0FBUixLQUFzQixXQUExQixFQUF1QztBQUNyQ1IsWUFBTSxDQUFDUyxJQUFQLENBQVksR0FBWjtBQUNELEtBSmEsQ0FNZDs7QUFDRCxHQVBRLEVBT04sQ0FBQ0osT0FBRCxDQVBNLENBQVQsQ0FSc0IsQ0FpQnRCOztBQUNBLE1BQU1LLE1BQU0sR0FBR0Msd0RBQVMsQ0FBQztBQUNyQkMsaUJBQWEsRUFBRTtBQUNiQyxXQUFLLEVBQUUsRUFETTtBQUVi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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUosTUFBTSxDQUFDYyxNQUFQLENBQWNWLElBQWxCLE1BRkosQ0FEQSxHQUtFLElBbkJSLENBMUJKLEVBaURJO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUMseUVBRlo7QUFHRSxTQUFLLEVBQUMsWUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakRKLEVBdURPVCxPQUFPLENBQUNHLFNBQVIsS0FBc0IsY0FBdkIsSUFBMEMsTUFBQywwREFBRDtBQUFRLE9BQUcsRUFBRUgsT0FBTyxDQUFDb0IsR0FBckI7QUFBMEIsYUFBUyxFQUFFcEIsT0FBTyxDQUFDRyxTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkRoRCxDQURKLENBREosQ0FIRixDQURKLENBREY7QUFzRUQsQ0F6R0Q7O0dBQU1ULFM7VUFHV0UscUQsRUFlQVUsZ0Q7OztLQWxCWFosUztBQTJHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNyZWFycG9zdC5qcy44ODNlZjljYzc1MjdkOTAwOTFkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVywqB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5pbXBvcnQgQWxlcnRhIGZyb20gJy4uL2NvbXBvbmVudHMvQWxlcnRhJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9wb3N0cy9wb3N0Q29udGV4dCc7XHJcblxyXG5jb25zdCBDcmVhclBvc3QgPSAoKSA9PiB7XHJcbiAgXHJcbiAgLy8gTmV4dCByb3V0ZXJcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgUG9zdENvbnRleHQgPSB1c2VDb250ZXh0KHBvc3RDb250ZXh0KTtcclxuICBjb25zdCB7IG1lbnNhamUsIGFncmVnYXJQb3N0IH0gPSBQb3N0Q29udGV4dDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgXHJcbiAgICBpZiAobWVuc2FqZS5jYXRlZ29yaWEgPT09ICdhbGVydGEtb2snKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgfSwgW21lbnNhamVdKTtcclxuXHJcbiAgLy8gRm9ybXVsYXJpbyB5IHZhbGlkYWNpw7NuIGNvbiBmb3JtaWsgeSBZdXBcclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGJvZHk6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ1RpdGxlIHJlcXVpcmVkJyksXHJcbiAgICAgICAgICAgIGJvZHk6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdCb2R5IHJlcXVpcmVkJylcclxuICAgICAgfSksXHJcbiAgICAgIG9uU3VibWl0OiB2YWxvcmVzID0+IHtcclxuICAgICAgICAgIGFncmVnYXJQb3N0KHZhbG9yZXMpO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctMy81IG14LWF1dG9cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibGFjay01MDAgdGV4dC1jZW50ZXIgbXktNFwiPkNyZWFyIFBvc3Q8L2gyPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZCBweC04IHB0LTYgcGItOCBtYi0yMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLnRpdGxlICYmIGZvcm1pay5lcnJvcnMudGl0bGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMudGl0bGV9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPkJvZHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJib2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuYm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5ib2R5ICYmIGZvcm1pay5lcnJvcnMuYm9keSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5ib2R5fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIGhvdmVyOmJnLWdyYXktOTAwIHctZnVsbCBwLTIgdGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhciBQb3N0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgeyAobWVuc2FqZS5jYXRlZ29yaWEgPT09ICdhbGVydGEtZXJyb3InKSAmJiA8QWxlcnRhIG1zZz17bWVuc2FqZS5tc2d9IGNhdGVnb3JpYT17bWVuc2FqZS5jYXRlZ29yaWF9IC8+IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBDcmVhclBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate("static\\development\\pages\\editarpost.js",{

/***/ "./pages/editarpost.js":
/*!*****************************!*\
  !*** ./pages/editarpost.js ***!
  \*****************************/
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
/* harmony import */ var _components_Alerta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Alerta */ "./components/Alerta.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_posts_postContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/posts/postContext */ "./context/posts/postContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joan\\Desktop\\AlkemyChallengeDos\\challengeReact\\pages\\editarpost.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var editarPost = function editarPost() {
  _s();

  // Next router
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var PostContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_posts_postContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var mensaje = PostContext.mensaje,
      post = PostContext.post,
      actualizarPost = PostContext.actualizarPost; //post = post || [{}];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mensaje.categoria === 'alerta-ok' || post[0].id === undefined) {
      router.push('/');
    } // eslint-disable-next-line

  }, [mensaje, post]); // Formulario y validación con formik y Yup

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      id: post[0].id,
      title: post[0].title,
      body: post[0].body
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
      concepto: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El concepto es obligatorio'),
      monto: yup__WEBPACK_IMPORTED_MODULE_3__["number"]().required('El monto es obligatorio'),
      fecha: yup__WEBPACK_IMPORTED_MODULE_3__["date"]().required('La fecha es obligatoria'),
      tipo: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('El tipo es obligatorio'),
      categoria: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('La categoría es obligatoria')
    }),
    onSubmit: function onSubmit(valores) {
      actualizarPost(valores);
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Editar Operaci\xF3n"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "concepto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 27
    }
  }, "Concepto"), __jsx("input", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "concepto",
    placeholder: "Concepto",
    value: formik.values.concepto,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 27
    }
  }), formik.touched.concepto && formik.errors.concepto ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, formik.errors.concepto, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "monto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 27
    }
  }, "Monto"), __jsx("input", {
    type: "number",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "monto",
    placeholder: "Monto",
    value: formik.values.monto,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 27
    }
  }), formik.touched.monto && formik.errors.monto ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, formik.errors.monto, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "fecha",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 27
    }
  }, "Fecha"), __jsx("input", {
    type: "date",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "fecha",
    placeholder: "Fecha",
    value: formik.values.fecha,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 27
    }
  }), formik.touched.fecha && formik.errors.fecha ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, formik.errors.fecha, " ")) : null), post[0].tipo === 'Ingreso' ? __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 31
    }
  }, "Categoria"), __jsx("select", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "categoria",
    placeholder: "Categoria",
    value: formik.values.categoria,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 31
    }
  }, __jsx("option", {
    value: "",
    defaultValue: true,
    disabled: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 37
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Regalo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }, "Regalo"), __jsx("option", {
    value: "Sueldo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 37
    }
  }, "Sueldo"), __jsx("option", {
    value: "Pr\xE9stamo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 37
    }
  }, "Pr\xE9stamo")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 37
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 37
    }
  }, formik.errors.categoria, " ")) : null) : __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 31
    }
  }, "Categoria"), __jsx("select", {
    type: "text",
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "categoria",
    placeholder: "Categoria",
    value: formik.values.categoria,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 31
    }
  }, __jsx("option", {
    value: "",
    defaultValue: true,
    disabled: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 37
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Alimentos y bebidas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 37
    }
  }, "Alimentos y bebidas"), __jsx("option", {
    value: "Art\xEDculos de limpieza",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 37
    }
  }, "Art\xEDculos de limpieza"), __jsx("option", {
    value: "Esparcimiento",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 37
    }
  }, "Esparcimiento"), __jsx("option", {
    value: "Servicios",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 37
    }
  }, "Servicios"), __jsx("option", {
    value: "Perfumer\xEDa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 37
    }
  }, "Perfumer\xEDa"), __jsx("option", {
    value: "Transporte",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 37
    }
  }, "Transporte"), __jsx("option", {
    value: "Vestimenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 37
    }
  }, "Vestimenta")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 37
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 37
    }
  }, formik.errors.categoria, " ")) : null), __jsx("input", {
    type: "submit",
    className: "bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold",
    value: "Editar Operaci\xF3n",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 23
    }
  }), mensaje.categoria === 'alerta-error' && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    msg: mensaje.msg,
    categoria: mensaje.categoria,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 67
    }
  }))))));
};

_s(editarPost, "FSp2luqTDxp7XiTgztMdMXgTz00=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"]];
});

/* harmony default export */ __webpack_exports__["default"] = (editarPost);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0YXJwb3N0LmpzIl0sIm5hbWVzIjpbImVkaXRhclBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJQb3N0Q29udGV4dCIsInVzZUNvbnRleHQiLCJwb3N0Q29udGV4dCIsIm1lbnNhamUiLCJwb3N0IiwiYWN0dWFsaXphclBvc3QiLCJ1c2VFZmZlY3QiLCJjYXRlZ29yaWEiLCJpZCIsInVuZGVmaW5lZCIsInB1c2giLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidGl0bGUiLCJib2R5IiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsImNvbmNlcHRvIiwicmVxdWlyZWQiLCJtb250byIsImZlY2hhIiwidGlwbyIsIm9uU3VibWl0IiwidmFsb3JlcyIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsInRvdWNoZWQiLCJlcnJvcnMiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUV2QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLGtFQUFELENBQTlCO0FBTHVCLE1BTWpCQyxPQU5pQixHQU1pQkgsV0FOakIsQ0FNakJHLE9BTmlCO0FBQUEsTUFNUkMsSUFOUSxHQU1pQkosV0FOakIsQ0FNUkksSUFOUTtBQUFBLE1BTUZDLGNBTkUsR0FNaUJMLFdBTmpCLENBTUZLLGNBTkUsRUFRdkI7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUtILE9BQU8sQ0FBQ0ksU0FBUixLQUFzQixXQUF2QixJQUF5Q0gsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRSSxFQUFSLEtBQWVDLFNBQTVELEVBQTBFO0FBQ3hFWCxZ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QUE7QUFBQSxJQXpJSixFQStJT0osT0FBTyxDQUFDSSxTQUFSLEtBQXNCLGNBQXZCLElBQTBDLE1BQUMsMERBQUQ7QUFBUSxPQUFHLEVBQUVKLE9BQU8sQ0FBQzJCLEdBQXJCO0FBQTBCLGFBQVMsRUFBRTNCLE9BQU8sQ0FBQ0ksU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9JaEQsQ0FESixDQURKLENBSEYsQ0FERixDQURKO0FBOEpELENBek1EOztHQUFNVixVO1VBR1dFLHFELEVBaUJBYSxnRDs7O0FBdUxGZix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZWRpdGFycG9zdC5qcy4yN2Q3MTU4YjQ0MmMxNzY4MDc3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVywqB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5cclxuaW1wb3J0IEFsZXJ0YSBmcm9tICcuLi9jb21wb25lbnRzL0FsZXJ0YSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5pbXBvcnQgcG9zdENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9wb3N0cy9wb3N0Q29udGV4dCc7XHJcblxyXG5jb25zdCBlZGl0YXJQb3N0ID0gKCkgPT4ge1xyXG4gIFxyXG4gIC8vIE5leHQgcm91dGVyXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFBvc3RDb250ZXh0ID0gdXNlQ29udGV4dChwb3N0Q29udGV4dCk7XHJcbiAgbGV0IHsgbWVuc2FqZSwgcG9zdCwgYWN0dWFsaXphclBvc3QgfSA9IFBvc3RDb250ZXh0O1xyXG5cclxuICAvL3Bvc3QgPSBwb3N0IHx8IFt7fV07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiBcclxuICAgIGlmICgobWVuc2FqZS5jYXRlZ29yaWEgPT09ICdhbGVydGEtb2snKSB8fCAoIHBvc3RbMF0uaWQgPT09IHVuZGVmaW5lZCApICkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgfSwgW21lbnNhamUsIHBvc3RdKTtcclxuXHJcbiAgLy8gRm9ybXVsYXJpbyB5IHZhbGlkYWNpw7NuIGNvbiBmb3JtaWsgeSBZdXBcclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgaWQ6IHBvc3RbMF0uaWQsXHJcbiAgICAgICAgdGl0bGU6IHBvc3RbMF0udGl0bGUsXHJcbiAgICAgICAgYm9keTogcG9zdFswXS5ib2R5XHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgICBjb25jZXB0bzogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIGNvbmNlcHRvIGVzIG9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgICAgIG1vbnRvOiBZdXAubnVtYmVyKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnRWwgbW9udG8gZXMgb2JsaWdhdG9yaW8nKSxcclxuICAgICAgICAgICAgZmVjaGE6IFl1cC5kYXRlKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnTGEgZmVjaGEgZXMgb2JsaWdhdG9yaWEnKSxcclxuICAgICAgICAgICAgdGlwbzogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIHRpcG8gZXMgb2JsaWdhdG9yaW8nKSxcclxuICAgICAgICAgICAgY2F0ZWdvcmlhOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgnTGEgY2F0ZWdvcsOtYSBlcyBvYmxpZ2F0b3JpYScpXHJcbiAgICAgIH0pLFxyXG4gICAgICBvblN1Ym1pdDogdmFsb3JlcyA9PiB7XHJcbiAgICAgICAgICBhY3R1YWxpemFyUG9zdCh2YWxvcmVzKTtcclxuICAgICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy00LzUgeGw6dy0zLzUgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgbGc6dGV4dC0zeGwgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LWJsYWNrLTUwMCB0ZXh0LWNlbnRlciBteS00XCI+RWRpdGFyIE9wZXJhY2nDs248L2gyPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1tZCBweC04IHB0LTYgcGItOCBtYi0yMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29uY2VwdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5Db25jZXB0bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmNlcHRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25jZXB0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmNvbmNlcHRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmNvbmNlcHRvICYmIGZvcm1pay5lcnJvcnMuY29uY2VwdG8gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuY29uY2VwdG99IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibW9udG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5Nb250bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibW9udG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubW9udG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQubW9udG8gJiYgZm9ybWlrLmVycm9ycy5tb250byA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5tb250b30gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJmZWNoYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPkZlY2hhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmVjaGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZlY2hhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZmVjaGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuZmVjaGEgJiYgZm9ybWlrLmVycm9ycy5mZWNoYSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5mZWNoYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgeyAocG9zdFswXS50aXBvID09PSAnSW5ncmVzbycpID8gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DYXRlZ29yaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXRlZ29yaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGVmYXVsdFZhbHVlIGRpc2FibGVkIGhpZGRlbj5DYXRlZ29yw61hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSZWdhbG9cIj5SZWdhbG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN1ZWxkb1wiPlN1ZWxkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHLDqXN0YW1vXCI+UHLDqXN0YW1vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuY2F0ZWdvcmlhICYmIGZvcm1pay5lcnJvcnMuY2F0ZWdvcmlhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DYXRlZ29yaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3JpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jYXRlZ29yaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGVmYXVsdFZhbHVlIGRpc2FibGVkIGhpZGRlbj5DYXRlZ29yw61hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxpbWVudG9zIHkgYmViaWRhc1wiPkFsaW1lbnRvcyB5IGJlYmlkYXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFydMOtY3Vsb3MgZGUgbGltcGllemFcIj5BcnTDrWN1bG9zIGRlIGxpbXBpZXphPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFc3BhcmNpbWllbnRvXCI+RXNwYXJjaW1pZW50bzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VydmljaW9zXCI+U2VydmljaW9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQZXJmdW1lcsOtYVwiPlBlcmZ1bWVyw61hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUcmFuc3BvcnRlXCI+VHJhbnNwb3J0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVmVzdGltZW50YVwiPlZlc3RpbWVudGE8L29wdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5jYXRlZ29yaWEgJiYgZm9ybWlrLmVycm9ycy5jYXRlZ29yaWEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FcnJvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuY2F0ZWdvcmlhfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICApIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBob3ZlcjpiZy1ncmF5LTkwMCB3LWZ1bGwgcC0yIHRleHQtd2hpdGUgdXBwZXJjYXNlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiRWRpdGFyIE9wZXJhY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IChtZW5zYWplLmNhdGVnb3JpYSA9PT0gJ2FsZXJ0YS1lcnJvcicpICYmIDxBbGVydGEgbXNnPXttZW5zYWplLm1zZ30gY2F0ZWdvcmlhPXttZW5zYWplLmNhdGVnb3JpYX0gLz4gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBlZGl0YXJQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=
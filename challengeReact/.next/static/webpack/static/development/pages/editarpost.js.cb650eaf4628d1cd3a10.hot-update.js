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
      _id: post[0]._id,
      concepto: post[0].concepto,
      monto: post[0].monto,
      fecha: post[0].fecha,
      tipo: post[0].tipo,
      categoria: post[0].categoria,
      usuario: post[0].usuario
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
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "md:w-4/5 xl:w-3/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Editar Operaci\xF3n"), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-full max-w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("form", {
    className: "bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20",
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "concepto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 76,
      columnNumber: 27
    }
  }), formik.touched.concepto && formik.errors.concepto ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, formik.errors.concepto, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "monto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 98,
      columnNumber: 27
    }
  }), formik.touched.monto && formik.errors.monto ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, formik.errors.monto, " ")) : null), __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "fecha",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 120,
      columnNumber: 27
    }
  }), formik.touched.fecha && formik.errors.fecha ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, formik.errors.fecha, " ")) : null), post[0].tipo === 'Ingreso' ? __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 144,
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
      lineNumber: 152,
      columnNumber: 37
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Regalo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }, "Regalo"), __jsx("option", {
    value: "Sueldo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }, "Sueldo"), __jsx("option", {
    value: "Pr\xE9stamo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 37
    }
  }, "Pr\xE9stamo")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 37
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 37
    }
  }, formik.errors.categoria, " ")) : null) : __jsx("div", {
    className: "mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 27
    }
  }, __jsx("label", {
    className: "block text-black text-sm font-bold mb-2",
    htmlFor: "categoria",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
      lineNumber: 174,
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
      lineNumber: 182,
      columnNumber: 37
    }
  }, "Categor\xEDa"), __jsx("option", {
    value: "Alimentos y bebidas",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 37
    }
  }, "Alimentos y bebidas"), __jsx("option", {
    value: "Art\xEDculos de limpieza",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 37
    }
  }, "Art\xEDculos de limpieza"), __jsx("option", {
    value: "Esparcimiento",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 37
    }
  }, "Esparcimiento"), __jsx("option", {
    value: "Servicios",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 37
    }
  }, "Servicios"), __jsx("option", {
    value: "Perfumer\xEDa",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 37
    }
  }, "Perfumer\xEDa"), __jsx("option", {
    value: "Transporte",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 37
    }
  }, "Transporte"), __jsx("option", {
    value: "Vestimenta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 37
    }
  }, "Vestimenta")), formik.touched.categoria && formik.errors.categoria ? __jsx("div", {
    className: "my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 37
    }
  }, "Error"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 37
    }
  }, formik.errors.categoria, " ")) : null), __jsx("input", {
    type: "submit",
    className: "bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold",
    value: "Editar Operaci\xF3n",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 23
    }
  }), mensaje.categoria === 'alerta-error' && __jsx(_components_Alerta__WEBPACK_IMPORTED_MODULE_4__["default"], {
    msg: mensaje.msg,
    categoria: mensaje.categoria,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0YXJwb3N0LmpzIl0sIm5hbWVzIjpbImVkaXRhclBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJQb3N0Q29udGV4dCIsInVzZUNvbnRleHQiLCJwb3N0Q29udGV4dCIsIm1lbnNhamUiLCJwb3N0IiwiYWN0dWFsaXphclBvc3QiLCJ1c2VFZmZlY3QiLCJjYXRlZ29yaWEiLCJpZCIsInVuZGVmaW5lZCIsInB1c2giLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiX2lkIiwiY29uY2VwdG8iLCJtb250byIsImZlY2hhIiwidGlwbyIsInVzdWFyaW8iLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInZhbG9yZXMiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJ0b3VjaGVkIiwiZXJyb3JzIiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFFdkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUE5QjtBQUx1QixNQU1qQkMsT0FOaUIsR0FNaUJILFdBTmpCLENBTWpCRyxPQU5pQjtBQUFBLE1BTVJDLElBTlEsR0FNaUJKLFdBTmpCLENBTVJJLElBTlE7QUFBQSxNQU1GQyxjQU5FLEdBTWlCTCxXQU5qQixDQU1GSyxjQU5FLEVBUXZCOztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFLSCxPQUFPLENBQUNJLFNBQVIsS0FBc0IsV0FBdkIsSUFBeUNILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUksRUFBUixLQUFlQyxTQUE1RCxFQUEwRTtBQUN4RVgs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUksTUFBTSxDQUFDa0IsTUFBUCxDQUFjdEIsU0FBbEIsTUFGSixDQURBLEdBS0UsSUE5QlIsQ0F0R1IsRUF5SUk7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyx5RUFGWjtBQUdFLFNBQUssRUFBQyxxQkFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeklKLEVBK0lPSixPQUFPLENBQUNJLFNBQVIsS0FBc0IsY0FBdkIsSUFBMEMsTUFBQywwREFBRDtBQUFRLE9BQUcsRUFBRUosT0FBTyxDQUFDMkIsR0FBckI7QUFBMEIsYUFBUyxFQUFFM0IsT0FBTyxDQUFDSSxTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0loRCxDQURKLENBREosQ0FIRixDQURGLENBREo7QUE4SkQsQ0E3TUQ7O0dBQU1WLFU7VUFHV0UscUQsRUFpQkFhLGdEOzs7QUEyTEZmLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxlZGl0YXJwb3N0LmpzLmNiNjUwZWFmNDYyOGQxY2QzYTEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXLCoH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5cclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcblxyXG5pbXBvcnQgQWxlcnRhIGZyb20gJy4uL2NvbXBvbmVudHMvQWxlcnRhJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmltcG9ydCBwb3N0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L3Bvc3RzL3Bvc3RDb250ZXh0JztcclxuXHJcbmNvbnN0IGVkaXRhclBvc3QgPSAoKSA9PiB7XHJcbiAgXHJcbiAgLy8gTmV4dCByb3V0ZXJcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgUG9zdENvbnRleHQgPSB1c2VDb250ZXh0KHBvc3RDb250ZXh0KTtcclxuICBsZXQgeyBtZW5zYWplLCBwb3N0LCBhY3R1YWxpemFyUG9zdCB9ID0gUG9zdENvbnRleHQ7XHJcblxyXG4gIC8vcG9zdCA9IHBvc3QgfHwgW3t9XTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuIFxyXG4gICAgaWYgKChtZW5zYWplLmNhdGVnb3JpYSA9PT0gJ2FsZXJ0YS1vaycpIHx8ICggcG9zdFswXS5pZCA9PT0gdW5kZWZpbmVkICkgKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICB9LCBbbWVuc2FqZSwgcG9zdF0pO1xyXG5cclxuICAvLyBGb3JtdWxhcmlvIHkgdmFsaWRhY2nDs24gY29uIGZvcm1payB5IFl1cFxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICBfaWQ6IHBvc3RbMF0uX2lkLFxyXG4gICAgICAgIGNvbmNlcHRvOiBwb3N0WzBdLmNvbmNlcHRvLFxyXG4gICAgICAgIG1vbnRvOiBwb3N0WzBdLm1vbnRvLFxyXG4gICAgICAgIGZlY2hhOiBwb3N0WzBdLmZlY2hhLFxyXG4gICAgICAgIHRpcG86IHBvc3RbMF0udGlwbyxcclxuICAgICAgICBjYXRlZ29yaWE6IHBvc3RbMF0uY2F0ZWdvcmlhLFxyXG4gICAgICAgIHVzdWFyaW86IHBvc3RbMF0udXN1YXJpb1xyXG4gICAgICB9LFxyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgY29uY2VwdG86IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCBjb25jZXB0byBlcyBvYmxpZ2F0b3JpbycpLFxyXG4gICAgICAgICAgICBtb250bzogWXVwLm51bWJlcigpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0VsIG1vbnRvIGVzIG9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgICAgIGZlY2hhOiBZdXAuZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0xhIGZlY2hhIGVzIG9ibGlnYXRvcmlhJyksXHJcbiAgICAgICAgICAgIHRpcG86IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKCdFbCB0aXBvIGVzIG9ibGlnYXRvcmlvJyksXHJcbiAgICAgICAgICAgIGNhdGVnb3JpYTogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0xhIGNhdGVnb3LDrWEgZXMgb2JsaWdhdG9yaWEnKVxyXG4gICAgICB9KSxcclxuICAgICAgb25TdWJtaXQ6IHZhbG9yZXMgPT4ge1xyXG4gICAgICAgICAgYWN0dWFsaXphclBvc3QodmFsb3Jlcyk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctNC81IHhsOnctMy81IG14LWF1dG9cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1ibGFjay01MDAgdGV4dC1jZW50ZXIgbXktNFwiPkVkaXRhciBPcGVyYWNpw7NuPC9oMj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbWQgcHgtOCBwdC02IHBiLTggbWItMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNvbmNlcHRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+Q29uY2VwdG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25jZXB0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uY2VwdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5jb25jZXB0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBmb3JtaWsudG91Y2hlZC5jb25jZXB0byAmJiBmb3JtaWsuZXJyb3JzLmNvbmNlcHRvID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIGJnLWdyYXktMjAwIGJvcmRlci1sLTQgYm9yZGVyLXJlZC01MDAgdGV4dC1yZWQtNzAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLmNvbmNlcHRvfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm1vbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+TW9udG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1vbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb250b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1vbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLm1vbnRvICYmIGZvcm1pay5lcnJvcnMubW9udG8gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMubW9udG99IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmVjaGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5GZWNoYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZlY2hhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGZWNoYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmZlY2hhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmZlY2hhICYmIGZvcm1pay5lcnJvcnMuZmVjaGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1pay5lcnJvcnMuZmVjaGF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHsgKHBvc3RbMF0udGlwbyA9PT0gJ0luZ3Jlc28nKSA/IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q2F0ZWdvcmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY2F0ZWdvcmlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRlZmF1bHRWYWx1ZSBkaXNhYmxlZCBoaWRkZW4+Q2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUmVnYWxvXCI+UmVnYWxvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdWVsZG9cIj5TdWVsZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlByw6lzdGFtb1wiPlByw6lzdGFtbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGZvcm1pay50b3VjaGVkLmNhdGVnb3JpYSAmJiBmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgYmctZ3JheS0yMDAgYm9yZGVyLWwtNCBib3JkZXItcmVkLTUwMCB0ZXh0LXJlZC03MDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zm9ybWlrLmVycm9ycy5jYXRlZ29yaWF9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q2F0ZWdvcmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY2F0ZWdvcmlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRlZmF1bHRWYWx1ZSBkaXNhYmxlZCBoaWRkZW4+Q2F0ZWdvcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsaW1lbnRvcyB5IGJlYmlkYXNcIj5BbGltZW50b3MgeSBiZWJpZGFzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcnTDrWN1bG9zIGRlIGxpbXBpZXphXCI+QXJ0w61jdWxvcyBkZSBsaW1waWV6YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRXNwYXJjaW1pZW50b1wiPkVzcGFyY2ltaWVudG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlcnZpY2lvc1wiPlNlcnZpY2lvczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUGVyZnVtZXLDrWFcIj5QZXJmdW1lcsOtYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0ZVwiPlRyYW5zcG9ydGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZlc3RpbWVudGFcIj5WZXN0aW1lbnRhPC9vcHRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9ybWlrLnRvdWNoZWQuY2F0ZWdvcmlhICYmIGZvcm1pay5lcnJvcnMuY2F0ZWdvcmlhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBiZy1ncmF5LTIwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RXJyb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntmb3JtaWsuZXJyb3JzLmNhdGVnb3JpYX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgKSB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaG92ZXI6YmctZ3JheS05MDAgdy1mdWxsIHAtMiB0ZXh0LXdoaXRlIHVwcGVyY2FzZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkVkaXRhciBPcGVyYWNpw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgeyAobWVuc2FqZS5jYXRlZ29yaWEgPT09ICdhbGVydGEtZXJyb3InKSAmJiA8QWxlcnRhIG1zZz17bWVuc2FqZS5tc2d9IGNhdGVnb3JpYT17bWVuc2FqZS5jYXRlZ29yaWF9IC8+IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgZWRpdGFyUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9
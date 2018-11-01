(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/sec009a_components/sec009a_CLS_add_expense_page.jsx":
/*!*****************************************************************!*\
  !*** ./src/sec009a_components/sec009a_CLS_add_expense_page.jsx ***!
  \*****************************************************************/
/*! exports provided: CLS_add_expense_page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLS_add_expense_page", function() { return CLS_add_expense_page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _sec011a_L105_expense_form_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sec011a_L105_expense_form.jsx */ "./src/sec009a_components/sec011a_L105_expense_form.jsx");
/* harmony import */ var _sec011a_L099_actions_sec011a_L099_ACTN_expenses_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx */ "./src/sec011a_L099_actions/sec011a_L099_ACTN_expenses.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  sec009a_CLS_add_expense_page.jsx

import { CLS_add_expense_page } from '../../sec009a_components/sec009a_CLS_add_expense_page.jsx';

 */




var CLS_add_expense_page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CLS_add_expense_page, _React$Component);

  function CLS_add_expense_page(P_props) {
    var _this;

    _classCallCheck(this, CLS_add_expense_page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CLS_add_expense_page).call(this, P_props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onExpenseSubmit", function (P_expense) {
      _this.props.add_expense(P_expense);

      _this.props.history.push('/');
    });

    return _this;
  }

  _createClass(CLS_add_expense_page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "This is from my add expense component."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Add Expense"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sec011a_L105_expense_form_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onExpenseSubmit: this.onExpenseSubmit,
        buttonLabel: 'ADD EXPENSE'
      }));
    }
  }]);

  return CLS_add_expense_page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var GC_mapDispatchToProps = function GC_mapDispatchToProps(P_dispatch) {
  return {
    add_expense: function add_expense(P_expense) {
      return P_dispatch(Object(_sec011a_L099_actions_sec011a_L099_ACTN_expenses_jsx__WEBPACK_IMPORTED_MODULE_3__["MP_startAddExpense"])(P_expense));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(undefined, GC_mapDispatchToProps)(CLS_add_expense_page));

/***/ }),

/***/ "./src/sec009a_components/sec011a_L105_expense_form.jsx":
/*!**************************************************************!*\
  !*** ./src/sec009a_components/sec011a_L105_expense_form.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CLS_expense_form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities_01_Loadable_Handlers_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities_01/Loadable_Handlers.jsx */ "./src/Utilities_01/Loadable_Handlers.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/***************************************************************************

sec011a_L105_expense_form.jsx

 ***************************************************************************/



 // const moment = Loadable({
//   loader: () => import('moment'),
//   loading: MP_common_loading_handler,
//   timeout: 3000, // 3 seconds
// });

 // const SingleDatePicker = Loadable({
//   loader: () => import('react-dates'),
//   loading: MP_common_loading_handler,
//   timeout: 3000, // 3 seconds
// });

var now = moment__WEBPACK_IMPORTED_MODULE_3___default()();

var CLS_expense_form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CLS_expense_form, _React$Component);

  function CLS_expense_form(P_props) {
    var _this;

    _classCallCheck(this, CLS_expense_form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CLS_expense_form).call(this, P_props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDescriptionChange", function (e) {
      var description = e.target.value;

      _this.setState(function () {
        return {
          description: description
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNoteChange", function (e) {
      var note = e.target.value;

      _this.setState(function () {
        return {
          note: note
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAmountChange", function (e) {
      var amount = e.target.value;
      if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) _this.setState(function () {
        return {
          amount: amount
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDateChange", function (createdAt) {
      if (createdAt) _this.setState(function () {
        return {
          createdAt: createdAt
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocusChange", function (_ref) {
      var focused = _ref.focused;

      _this.setState(function () {
        return {
          calenderFocused: focused
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onExpenseSubmit", function (e) {
      e.preventDefault();
      if (_this.XPNF_check_errors()) _this.props.onExpenseSubmit({
        description: _this.state.description,
        amount: parseFloat(_this.state.amount, 10) * 100,
        createdAt: _this.state.createdAt.valueOf(),
        note: _this.state.note
      });
    });

    _this.state = {
      description: P_props.expense ? P_props.expense.description : '',
      note: P_props.expense ? P_props.expense.note : '',
      amount: P_props.expense ? (P_props.expense.amount / 100).toString() : '',
      createdAt: P_props.expense && P_props.expense.createdAt > 0 ? moment__WEBPACK_IMPORTED_MODULE_3___default()(P_props.expense.createdAt) : moment__WEBPACK_IMPORTED_MODULE_3___default()(),
      date: {},
      calenderFocused: false,
      buttonLabel: P_props.buttonLabel,
      error_conditions: {
        description_mssg: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null),
        amount_mssg: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
      }
    };
    return _this;
  }

  _createClass(CLS_expense_form, [{
    key: "XPNF_check_errors",
    //======================================================================
    value: function XPNF_check_errors() {
      var description_mssg = !this.state.description ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, '   *** Please provide description') : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      var amount_mssg = !this.state.amount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, '   *** Please provide amount') : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          error_conditions: {
            description_mssg: description_mssg,
            amount_mssg: amount_mssg
          }
        });
      }); //console.log ("P_outer_this.amount " + this.state.amount);

      return this.state.description && this.state.amount;
    } //======================================================================

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.error_conditions.description_mssg, this.state.error_conditions.amount_mssg, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Expense Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        action: "",
        onSubmit: this.onExpenseSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        autoFocus: true,
        type: "text",
        placeholder: "Description",
        id: "Description",
        value: this.state.description,
        onChange: this.onDescriptionChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Amount",
        id: "Amount",
        value: this.state.amount,
        onChange: this.onAmountChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_4__["SingleDatePicker"], {
        date: this.state.createdAt,
        onDateChange: this.onDateChange,
        focused: this.state.calenderFocused,
        onFocusChange: this.onFocusChange,
        id: "createdAt_DatePicker",
        readOnly: true,
        numberOfMonths: 1,
        isOutsideRange: function isOutsideRange() {
          return false;
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        placeholder: "Add a note for your expense (optional)",
        id: "Note",
        value: this.state.note,
        onChange: this.onNoteChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, this.state.buttonLabel)));
    }
  }]);

  return CLS_expense_form;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjMDA5YV9jb21wb25lbnRzL3NlYzAwOWFfQ0xTX2FkZF9leHBlbnNlX3BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9zZWMwMDlhX2NvbXBvbmVudHMvc2VjMDExYV9MMTA1X2V4cGVuc2VfZm9ybS5qc3giXSwibmFtZXMiOlsiQ0xTX2FkZF9leHBlbnNlX3BhZ2UiLCJQX3Byb3BzIiwiUF9leHBlbnNlIiwicHJvcHMiLCJhZGRfZXhwZW5zZSIsImhpc3RvcnkiLCJwdXNoIiwib25FeHBlbnNlU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJHQ19tYXBEaXNwYXRjaFRvUHJvcHMiLCJQX2Rpc3BhdGNoIiwiTVBfc3RhcnRBZGRFeHBlbnNlIiwiY29ubmVjdCIsInVuZGVmaW5lZCIsIm5vdyIsIm1vbWVudCIsIkNMU19leHBlbnNlX2Zvcm0iLCJlIiwiZGVzY3JpcHRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwibm90ZSIsImFtb3VudCIsIm1hdGNoIiwiY3JlYXRlZEF0IiwiZm9jdXNlZCIsImNhbGVuZGVyRm9jdXNlZCIsInByZXZlbnREZWZhdWx0IiwiWFBORl9jaGVja19lcnJvcnMiLCJzdGF0ZSIsInBhcnNlRmxvYXQiLCJ2YWx1ZU9mIiwiZXhwZW5zZSIsInRvU3RyaW5nIiwiZGF0ZSIsImJ1dHRvbkxhYmVsIiwiZXJyb3JfY29uZGl0aW9ucyIsImRlc2NyaXB0aW9uX21zc2ciLCJhbW91bnRfbXNzZyIsInByZXZTdGF0ZSIsIm9uRGVzY3JpcHRpb25DaGFuZ2UiLCJvbkFtb3VudENoYW5nZSIsIm9uRGF0ZUNoYW5nZSIsIm9uRm9jdXNDaGFuZ2UiLCJvbk5vdGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFHTyxJQUFNQSxvQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFFSSxnQ0FB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dEI7QUFJRSxxQkFBYSxFQUFFLEtBQUtpQixhQUp0QjtBQUtFLFVBQUUsRUFBQyxzQkFMTDtBQU1FLGdCQUFRLEVBQUUsSUFOWjtBQU9FLHNCQUFjLEVBQUUsQ0FQbEI7QUFRRSxzQkFBYyxFQUFHO0FBQUEsaUJBQU0sS0FBTjtBQUFBO0FBUm5CLFFBbkJGLEVBOEJFO0FBQVUsbUJBQVcsRUFBQyx3Q0FBdEI7QUFDRSxVQUFFLEVBQUMsTUFETDtBQUVFLGFBQUssRUFBRSxLQUFLZCxLQUFMLENBQVdSLElBRnBCO0FBR0UsZ0JBQVEsRUFBRSxLQUFLdUI7QUFIakIsUUE5QkYsRUFvQ0UsMkVBQ0csS0FBS2YsS0FBTCxDQUFXTSxXQURkLENBcENGLENBTEosQ0FEUjtBQWdESDs7OztFQXhJeUM3Qiw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6IjIuY2QxNmY1MzI1ZTFlZDEyYjhmM2IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypcclxuICBzZWMwMDlhX0NMU19hZGRfZXhwZW5zZV9wYWdlLmpzeFxyXG5cclxuaW1wb3J0IHsgQ0xTX2FkZF9leHBlbnNlX3BhZ2UgfSBmcm9tICcuLi8uLi9zZWMwMDlhX2NvbXBvbmVudHMvc2VjMDA5YV9DTFNfYWRkX2V4cGVuc2VfcGFnZS5qc3gnO1xyXG5cclxuICovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IENMU19leHBlbnNlX2Zvcm0gZnJvbSBcIi4vc2VjMDExYV9MMTA1X2V4cGVuc2VfZm9ybS5qc3hcIjtcclxuaW1wb3J0IHsgTVBfc3RhcnRBZGRFeHBlbnNlIH0gZnJvbSBcIi4uL3NlYzAxMWFfTDA5OV9hY3Rpb25zL3NlYzAxMWFfTDA5OV9BQ1ROX2V4cGVuc2VzLmpzeFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDTFNfYWRkX2V4cGVuc2VfcGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciAoUF9wcm9wcylcclxuICAgIHtcclxuICAgICAgc3VwZXIoUF9wcm9wcyk7XHJcbiAgICB9XHJcbiAgICBvbkV4cGVuc2VTdWJtaXQgPSAoUF9leHBlbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRfZXhwZW5zZSAoUF9leHBlbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCAoJy8nKTtcclxuICAgIH07XHJcblxyXG5cclxuICByZW5kZXIgKCkgIHtcclxuICAgIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICAgICAgPGRpdj5UaGlzIGlzIGZyb20gbXkgYWRkIGV4cGVuc2UgY29tcG9uZW50LjwvZGl2PlxyXG4gICAgICA8aDE+QWRkIEV4cGVuc2U8L2gxPlxyXG4gICAgICA8Q0xTX2V4cGVuc2VfZm9ybVxyXG4gICAgICAgIG9uRXhwZW5zZVN1Ym1pdD17dGhpcy5vbkV4cGVuc2VTdWJtaXR9XHJcbiAgICAgICAgYnV0dG9uTGFiZWw9eydBREQgRVhQRU5TRSd9XHJcbiAgICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBHQ19tYXBEaXNwYXRjaFRvUHJvcHMgPSAoUF9kaXNwYXRjaCkgPT4gKCB7XHJcbiAgICBhZGRfZXhwZW5zZTogKFBfZXhwZW5zZSkgPT4gUF9kaXNwYXRjaChNUF9zdGFydEFkZEV4cGVuc2UoUF9leHBlbnNlKSlcclxufSApO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHVuZGVmaW5lZCwgR0NfbWFwRGlzcGF0Y2hUb1Byb3BzKSAoQ0xTX2FkZF9leHBlbnNlX3BhZ2UpO1xyXG4iLCJcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuc2VjMDExYV9MMTA1X2V4cGVuc2VfZm9ybS5qc3hcclxuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcclxuXHJcbmltcG9ydCB7IE1QX2NvbW1vbl9sb2FkaW5nX2hhbmRsZXIgfSBmcm9tIFwiLi4vVXRpbGl0aWVzXzAxL0xvYWRhYmxlX0hhbmRsZXJzLmpzeFwiO1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuLy8gY29uc3QgbW9tZW50ID0gTG9hZGFibGUoe1xyXG4vLyAgIGxvYWRlcjogKCkgPT4gaW1wb3J0KCdtb21lbnQnKSxcclxuLy8gICBsb2FkaW5nOiBNUF9jb21tb25fbG9hZGluZ19oYW5kbGVyLFxyXG4vLyAgIHRpbWVvdXQ6IDMwMDAsIC8vIDMgc2Vjb25kc1xyXG4vLyB9KTtcclxuXHJcbmltcG9ydCB7IFNpbmdsZURhdGVQaWNrZXIgfSBmcm9tICdyZWFjdC1kYXRlcyc7XHJcblxyXG4vLyBjb25zdCBTaW5nbGVEYXRlUGlja2VyID0gTG9hZGFibGUoe1xyXG4vLyAgIGxvYWRlcjogKCkgPT4gaW1wb3J0KCdyZWFjdC1kYXRlcycpLFxyXG4vLyAgIGxvYWRpbmc6IE1QX2NvbW1vbl9sb2FkaW5nX2hhbmRsZXIsXHJcbi8vICAgdGltZW91dDogMzAwMCwgLy8gMyBzZWNvbmRzXHJcbi8vIH0pO1xyXG5cclxuY29uc3Qgbm93ID0gbW9tZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDTFNfZXhwZW5zZV9mb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XHJcbntcclxuICAgIGNvbnN0cnVjdG9yIChQX3Byb3BzKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyIChQX3Byb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFBfcHJvcHMuZXhwZW5zZSA/IFBfcHJvcHMuZXhwZW5zZS5kZXNjcmlwdGlvbiA6ICcnLFxyXG4gICAgICAgICAgICBub3RlOiAgUF9wcm9wcy5leHBlbnNlID8gUF9wcm9wcy5leHBlbnNlLm5vdGUgOiAnJyxcclxuICAgICAgICAgICAgYW1vdW50OiAgUF9wcm9wcy5leHBlbnNlID8gKFBfcHJvcHMuZXhwZW5zZS5hbW91bnQgLyAxMDApLnRvU3RyaW5nICgpIDogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogIFBfcHJvcHMuZXhwZW5zZSAmJiBQX3Byb3BzLmV4cGVuc2UuY3JlYXRlZEF0ID4gMCA/IG1vbWVudCAoUF9wcm9wcy5leHBlbnNlLmNyZWF0ZWRBdCkgOiBtb21lbnQoKSxcclxuICAgICAgICAgICAgZGF0ZToge30sXHJcbiAgICAgICAgICAgIGNhbGVuZGVyRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJ1dHRvbkxhYmVsOiBQX3Byb3BzLmJ1dHRvbkxhYmVsLFxyXG5cclxuICAgICAgICAgICAgZXJyb3JfY29uZGl0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25fbXNzZzogPGRpdj48L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICBhbW91bnRfbXNzZzogPGRpdj48L2Rpdj4sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzY3JpcHRpb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoICgpID0+ICh7IGRlc2NyaXB0aW9uIH0pICk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uTm90ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgKCAoKSA9PiAoeyBub3RlIH0pICk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uQW1vdW50Q2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBhbW91bnQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBpZiAoICEgYW1vdW50IHx8IGFtb3VudC5tYXRjaCgvXlxcZCsoXFwuXFxkezAsMn0pPyQvKSApXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlICggKCkgPT4gKHsgYW1vdW50IH0pICk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uRGF0ZUNoYW5nZSA9IChjcmVhdGVkQXQpID0+IHtcclxuICAgICAgICBpZiAoY3JlYXRlZEF0KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKCAoKSA9PiAoeyBjcmVhdGVkQXQgfSkgKTtcclxuICAgIH07XHJcblxyXG4gICAgb25Gb2N1c0NoYW5nZSA9ICh7IGZvY3VzZWQgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoICgpID0+ICh7IGNhbGVuZGVyRm9jdXNlZDogZm9jdXNlZCB9KSApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBYUE5GX2NoZWNrX2Vycm9ycyAoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uX21zc2cgPSAoICEgdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbiApID9cclxuICAgICAgICAgICAgPGRpdj57JyAgICoqKiBQbGVhc2UgcHJvdmlkZSBkZXNjcmlwdGlvbid9PC9kaXY+IDogPGRpdj48L2Rpdj47XHJcbiAgICAgICAgY29uc3QgYW1vdW50X21zc2cgPSAoICEgdGhpcy5zdGF0ZS5hbW91bnQgKSA/XHJcbiAgICAgICAgICAgIDxkaXY+eycgICAqKiogUGxlYXNlIHByb3ZpZGUgYW1vdW50J308L2Rpdj4gOiA8ZGl2PjwvZGl2PjtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT5cclxuICAgICAgICAgICAgKCB7XHJcbiAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcl9jb25kaXRpb25zOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uX21zc2csXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50X21zc2dcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2cgKFwiUF9vdXRlcl90aGlzLmFtb3VudCBcIiArIHRoaXMuc3RhdGUuYW1vdW50KTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24gJiYgdGhpcy5zdGF0ZS5hbW91bnQgKTtcclxuICAgIH1cclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIG9uRXhwZW5zZVN1Ym1pdCA9IChlKSA9PiAge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0ICgpO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuWFBORl9jaGVja19lcnJvcnMgKCkgKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRXhwZW5zZVN1Ym1pdCAoIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0ICh0aGlzLnN0YXRlLmFtb3VudCwgMTApICogMTAwLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB0aGlzLnN0YXRlLmNyZWF0ZWRBdC52YWx1ZU9mKCksXHJcbiAgICAgICAgICAgICAgICBub3RlOiB0aGlzLnN0YXRlLm5vdGVcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ICB0aGlzLnN0YXRlLmVycm9yX2NvbmRpdGlvbnMuZGVzY3JpcHRpb25fbXNzZyB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyAgdGhpcy5zdGF0ZS5lcnJvcl9jb25kaXRpb25zLmFtb3VudF9tc3NnIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5FeHBlbnNlIEZvcm08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBvblN1Ym1pdD17dGhpcy5vbkV4cGVuc2VTdWJtaXR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRlc2NyaXB0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNpbmdsZURhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17dGhpcy5zdGF0ZS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF0ZUNoYW5nZT17dGhpcy5vbkRhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWQ9e3RoaXMuc3RhdGUuY2FsZW5kZXJGb2N1c2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzQ2hhbmdlPXt0aGlzLm9uRm9jdXNDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3JlYXRlZEF0X0RhdGVQaWNrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3V0c2lkZVJhbmdlPXsgKCkgPT4gZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJBZGQgYSBub3RlIGZvciB5b3VyIGV4cGVuc2UgKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiTm90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTm90ZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idXR0b25MYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
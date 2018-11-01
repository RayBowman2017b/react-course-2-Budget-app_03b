(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/sec009a_components/sec009a_CLS_edit_expense_page.jsx":
/*!******************************************************************!*\
  !*** ./src/sec009a_components/sec009a_CLS_edit_expense_page.jsx ***!
  \******************************************************************/
/*! exports provided: CLS_edit_expense_page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLS_edit_expense_page", function() { return CLS_edit_expense_page; });
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
  sec009a_CLS_edit_expense_page.jsx

import { CLS_edit_expense_page } from '../../sec009a_components/sec009a_CLS_edit_expense_page.jsx';

 */





var xxxGC_edit_expense_page = function xxxGC_edit_expense_page(P_props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "This is from my edit expense component.");
};

var CLS_edit_expense_page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CLS_edit_expense_page, _React$Component);

  function CLS_edit_expense_page(P_props) {
    var _this;

    _classCallCheck(this, CLS_edit_expense_page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CLS_edit_expense_page).call(this, P_props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "log_props", function (P_expense) {
      console.log('updated', P_expense);
      if (_this.props.expense) console.log('this.props.expense', _this.props.expense);else console.log('this.props.expense  xxxxxxx');
      console.log('this.props', _this.props);
      console.log('this.props.state_expenses', _this.props.state_expenses);
      console.log('updated', P_expense);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onExpenseSubmit", function (P_expense) {
      _this.props.edit_expense(_this.props.expense.id, P_expense);

      _this.props.history.push('/');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickRemoveExpense", function (e) {
      _this.props.remove_expense({
        id: _this.props.expense.id
      });

      _this.props.history.push('/');
    });

    return _this;
  }

  _createClass(CLS_edit_expense_page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Editing the expense with an id of ", this.props.match.params.id, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sec011a_L105_expense_form_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        expense: this.props.expense,
        onExpenseSubmit: this.onExpenseSubmit,
        buttonLabel: 'EDIT EXPENSE'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "BTN_remove_expense",
        onClick: this.onClickRemoveExpense
      }, "REMOVE"));
    }
  }]);

  return CLS_edit_expense_page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var match_props = function match_props(P_expense, P_props) {
  console.log('P_props.match.params', P_props.match.params);
  console.log('P_expense', P_expense);
  return P_expense.id === P_props.match.params.id;
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    expense: state.expenses.find(function (P_expense) {
      return P_expense.id === props.match.params.id;
    })
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    edit_expense: function edit_expense(id, expense) {
      return dispatch(Object(_sec011a_L099_actions_sec011a_L099_ACTN_expenses_jsx__WEBPACK_IMPORTED_MODULE_3__["MP_startEditExpense"])(id, expense));
    },
    remove_expense: function remove_expense(expense_id_obj) {
      return dispatch(Object(_sec011a_L099_actions_sec011a_L099_ACTN_expenses_jsx__WEBPACK_IMPORTED_MODULE_3__["MP_startRemoveExpense"])(expense_id_obj));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CLS_edit_expense_page));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjMDA5YV9jb21wb25lbnRzL3NlYzAwOWFfQ0xTX2VkaXRfZXhwZW5zZV9wYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjMDA5YV9jb21wb25lbnRzL3NlYzAxMWFfTDEwNV9leHBlbnNlX2Zvcm0uanN4Il0sIm5hbWVzIjpbInh4eEdDX2VkaXRfZXhwZW5zZV9wYWdlIiwiUF9wcm9wcyIsIkNMU19lZGl0X2V4cGVuc2VfcGFnZSIsIlBfZXhwZW5zZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImV4cGVuc2UiLCJzdGF0ZV9leHBlbnNlcyIsImVkaXRfZXhwZW5zZSIsImlkIiwiaGlzdG9yeSIsInB1c2giLCJlIiwicmVtb3ZlX2V4cGVuc2UiLCJtYXRjaCIsInBhcmFtcyIsIm9uRXhwZW5zZVN1Ym1pdCIsIm9uQ2xpY2tSZW1vdmVFeHBlbnNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXRjaF9wcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZXhwZW5zZXMiLCJmaW5kIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJNUF9zdGFydEVkaXRFeHBlbnNlIiwiZXhwZW5zZV9pZF9vYmoiLCJNUF9zdGFydFJlbW92ZUV4cGVuc2UiLCJjb25uZWN0Iiwibm93IiwibW9tZW50IiwiQ0xTX2V4cGVuc2VfZm9ybSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsIm5vdGUiLCJhbW91bnQiLCJjcmVhdGVkQXQiLCJmb2N1c2VkIiwiY2FsZW5kZXJGb2N1c2VkIiwicHJldmVudERlZmF1bHQiLCJYUE5GX2NoZWNrX2Vycm9ycyIsInBhcnNlRmxvYXQiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJkYXRlIiwiYnV0dG9uTGFiZWwiLCJlcnJvcl9jb25kaXRpb25zIiwiZGVzY3JpcHRpb25fbXNzZyIsImFtb3VudF9tc3NnIiwicHJldlN0YXRlIiwib25EZXNjcmlwdGlvbkNoYW5nZSIsIm9uQW1vdW50Q2hhbmdlIiwib25EYXRlQ2hhbmdlIiwib25Gb2N1c0NoYW5nZSIsIm9uTm90ZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7QUFPQTtBQUVBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLE9BQUQ7QUFBQSxTQUU5QixrSEFGOEI7QUFBQSxDQUFoQzs7QUFLTyxJQUFNQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFFSSxpQ0FBYUQsT0FBYixFQUNBO0FBQUE7O0FBQUE7O0FBQ0UsK0ZBQU1BLE9BQU47O0FBREYsd0ZBSVksVUFBQ0UsU0FBRCxFQUFnQjtBQUNwQkMsYUFBTyxDQUFDQyxHQUFSLENBQWEsU0FBYixFQUF3QkYsU0FBeEI7QUFDQSxVQUFJLE1BQUtHLEtBQUwsQ0FBV0MsT0FBZixFQUNFSCxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBYixFQUFtQyxNQUFLQyxLQUFMLENBQVdDLE9BQTlDLEVBREYsS0FHRUgsT0FBTyxDQUFDQyxHQUFSLENBQWEsNkJBQWI7QUFDRkQsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixNQUFLQyxLQUEvQjtBQUNBRixhQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUF5QyxNQUFLQyxLQUFMLENBQVdFLGNBQXBEO0FBQ0FKLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLFNBQWIsRUFBd0JGLFNBQXhCO0FBQ1AsS0FiRDs7QUFBQSw4RkFla0IsVUFBQ0EsU0FBRCxFQUFnQjtBQUU5QixZQUFLRyxLQUFMLENBQVdHLFlBQVgsQ0FBeUIsTUFBS0gsS0FBTCxDQUFXQyxPQUFYLENBQW1CRyxFQUE1QyxFQUFnRFAsU0FBaEQ7O0FBRUEsWUFBS0csS0FBTCxDQUFXSyxPQUFYLENBQW1CQyxJQUFuQixDQUF5QixHQUF6QjtBQUNILEtBcEJEOztBQUFBLG1HQXNCdUIsVUFBQ0MsQ0FBRCxFQUFRO0FBRTNCLFlB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QUFHO0FBQUEsaUJBQU0sS0FBTjtBQUFBO0FBUm5CLFFBbkJGLEVBOEJFO0FBQVUsbUJBQVcsRUFBQyx3Q0FBdEI7QUFDRSxVQUFFLEVBQUMsTUFETDtBQUVFLGFBQUssRUFBRSxLQUFLbkMsS0FBTCxDQUFXZ0IsSUFGcEI7QUFHRSxnQkFBUSxFQUFFLEtBQUtvQjtBQUhqQixRQTlCRixFQW9DRSwyRUFDRyxLQUFLcEMsS0FBTCxDQUFXMkIsV0FEZCxDQXBDRixDQUxKLENBRFI7QUFnREg7Ozs7RUF4SXlDL0IsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIzLmNkMTZmNTMyNWUxZWQxMmI4ZjNiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAgc2VjMDA5YV9DTFNfZWRpdF9leHBlbnNlX3BhZ2UuanN4XHJcblxyXG5pbXBvcnQgeyBDTFNfZWRpdF9leHBlbnNlX3BhZ2UgfSBmcm9tICcuLi8uLi9zZWMwMDlhX2NvbXBvbmVudHMvc2VjMDA5YV9DTFNfZWRpdF9leHBlbnNlX3BhZ2UuanN4JztcclxuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBDTFNfZXhwZW5zZV9mb3JtIGZyb20gXCIuL3NlYzAxMWFfTDEwNV9leHBlbnNlX2Zvcm0uanN4XCI7XHJcblxyXG5pbXBvcnQgeyBNUF9zdGFydEVkaXRFeHBlbnNlLCBNUF9zdGFydFJlbW92ZUV4cGVuc2UgfVxyXG4gIGZyb20gXCIuLi9zZWMwMTFhX0wwOTlfYWN0aW9ucy9zZWMwMTFhX0wwOTlfQUNUTl9leHBlbnNlcy5qc3hcIjtcclxuXHJcbmNvbnN0IHh4eEdDX2VkaXRfZXhwZW5zZV9wYWdlID0gKFBfcHJvcHMpID0+XHJcbihcclxuICA8ZGl2PlRoaXMgaXMgZnJvbSBteSBlZGl0IGV4cGVuc2UgY29tcG9uZW50LjwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGNsYXNzIENMU19lZGl0X2V4cGVuc2VfcGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciAoUF9wcm9wcylcclxuICAgIHtcclxuICAgICAgc3VwZXIoUF9wcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nX3Byb3BzID0gKFBfZXhwZW5zZSkgPT4gIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKCd1cGRhdGVkJywgUF9leHBlbnNlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZXhwZW5zZSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoJ3RoaXMucHJvcHMuZXhwZW5zZScsIHRoaXMucHJvcHMuZXhwZW5zZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoJ3RoaXMucHJvcHMuZXhwZW5zZSAgeHh4eHh4eCcgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMucHJvcHMnLCB0aGlzLnByb3BzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMucHJvcHMuc3RhdGVfZXhwZW5zZXMnLCB0aGlzLnByb3BzLnN0YXRlX2V4cGVuc2VzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKCd1cGRhdGVkJywgUF9leHBlbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4cGVuc2VTdWJtaXQgPSAoUF9leHBlbnNlKSA9PiAge1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmVkaXRfZXhwZW5zZSAodGhpcy5wcm9wcy5leHBlbnNlLmlkLCBQX2V4cGVuc2UpO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCAoJy8nKTtcclxuICAgIH07XHJcblxyXG4gICAgb25DbGlja1JlbW92ZUV4cGVuc2UgPSAoZSkgPT4gIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVfZXhwZW5zZSAoeyBpZDogdGhpcy5wcm9wcy5leHBlbnNlLmlkIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoICgnLycpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmVuZGVyICgpXHJcbiAgICB7XHJcbiAgICByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgICA8YnIvPlxyXG4gICAgPGRpdj5FZGl0aW5nIHRoZSBleHBlbnNlIHdpdGggYW4gaWQgb2Yge3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkfS48L2Rpdj5cclxuICAgIDxici8+XHJcbiAgICA8Q0xTX2V4cGVuc2VfZm9ybVxyXG4gICAgICAgIGV4cGVuc2U9e3RoaXMucHJvcHMuZXhwZW5zZX1cclxuICAgICAgICBvbkV4cGVuc2VTdWJtaXQ9e3RoaXMub25FeHBlbnNlU3VibWl0fVxyXG4gICAgICAgIGJ1dHRvbkxhYmVsPXsnRURJVCBFWFBFTlNFJ31cclxuICAgIC8+XHJcblxyXG4gICAgICA8YnV0dG9uIGlkPSdCVE5fcmVtb3ZlX2V4cGVuc2UnIG9uQ2xpY2s9e3RoaXMub25DbGlja1JlbW92ZUV4cGVuc2V9XHJcbiAgICAgID5SRU1PVkU8L2J1dHRvbj5cclxuXHJcbiAgPC9kaXY+XHJcbiAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWF0Y2hfcHJvcHMgPSAoUF9leHBlbnNlLCBQX3Byb3BzKSA9PiAge1xyXG4gIGNvbnNvbGUubG9nKCdQX3Byb3BzLm1hdGNoLnBhcmFtcycsIFBfcHJvcHMubWF0Y2gucGFyYW1zKTtcclxuICBjb25zb2xlLmxvZygnUF9leHBlbnNlJywgUF9leHBlbnNlKTtcclxuICByZXR1cm4gUF9leHBlbnNlLmlkID09PSBQX3Byb3BzLm1hdGNoLnBhcmFtcy5pZDtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAge1xyXG4gICAgICAgICAgZXhwZW5zZTogc3RhdGUuZXhwZW5zZXMuZmluZCAoXHJcbiAgICAgICAgICAgIChQX2V4cGVuc2UpID0+IFBfZXhwZW5zZS5pZCA9PT0gcHJvcHMubWF0Y2gucGFyYW1zLmlkXHJcbiAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgIH0gICAgICApO1xyXG4gICAgfTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gIHtcclxuICByZXR1cm4gKFxyXG4gIHtcclxuICAgIGVkaXRfZXhwZW5zZTogKGlkLCBleHBlbnNlKSA9PiBkaXNwYXRjaChNUF9zdGFydEVkaXRFeHBlbnNlKGlkLCBleHBlbnNlKSksXHJcbiAgICByZW1vdmVfZXhwZW5zZTogKGV4cGVuc2VfaWRfb2JqKSA9PiBkaXNwYXRjaChNUF9zdGFydFJlbW92ZUV4cGVuc2UoZXhwZW5zZV9pZF9vYmopKVxyXG4gIH0gICAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuICAgICAgICAgICAgICAgICAoQ0xTX2VkaXRfZXhwZW5zZV9wYWdlKTtcclxuIiwiXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbnNlYzAxMWFfTDEwNV9leHBlbnNlX2Zvcm0uanN4XHJcblxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XHJcblxyXG5pbXBvcnQgeyBNUF9jb21tb25fbG9hZGluZ19oYW5kbGVyIH0gZnJvbSBcIi4uL1V0aWxpdGllc18wMS9Mb2FkYWJsZV9IYW5kbGVycy5qc3hcIjtcclxuXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbi8vIGNvbnN0IG1vbWVudCA9IExvYWRhYmxlKHtcclxuLy8gICBsb2FkZXI6ICgpID0+IGltcG9ydCgnbW9tZW50JyksXHJcbi8vICAgbG9hZGluZzogTVBfY29tbW9uX2xvYWRpbmdfaGFuZGxlcixcclxuLy8gICB0aW1lb3V0OiAzMDAwLCAvLyAzIHNlY29uZHNcclxuLy8gfSk7XHJcblxyXG5pbXBvcnQgeyBTaW5nbGVEYXRlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZXMnO1xyXG5cclxuLy8gY29uc3QgU2luZ2xlRGF0ZVBpY2tlciA9IExvYWRhYmxlKHtcclxuLy8gICBsb2FkZXI6ICgpID0+IGltcG9ydCgncmVhY3QtZGF0ZXMnKSxcclxuLy8gICBsb2FkaW5nOiBNUF9jb21tb25fbG9hZGluZ19oYW5kbGVyLFxyXG4vLyAgIHRpbWVvdXQ6IDMwMDAsIC8vIDMgc2Vjb25kc1xyXG4vLyB9KTtcclxuXHJcbmNvbnN0IG5vdyA9IG1vbWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ0xTX2V4cGVuc2VfZm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciAoUF9wcm9wcylcclxuICAgIHtcclxuICAgICAgICBzdXBlciAoUF9wcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBQX3Byb3BzLmV4cGVuc2UgPyBQX3Byb3BzLmV4cGVuc2UuZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgbm90ZTogIFBfcHJvcHMuZXhwZW5zZSA/IFBfcHJvcHMuZXhwZW5zZS5ub3RlIDogJycsXHJcbiAgICAgICAgICAgIGFtb3VudDogIFBfcHJvcHMuZXhwZW5zZSA/IChQX3Byb3BzLmV4cGVuc2UuYW1vdW50IC8gMTAwKS50b1N0cmluZyAoKSA6ICcnLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6ICBQX3Byb3BzLmV4cGVuc2UgJiYgUF9wcm9wcy5leHBlbnNlLmNyZWF0ZWRBdCA+IDAgPyBtb21lbnQgKFBfcHJvcHMuZXhwZW5zZS5jcmVhdGVkQXQpIDogbW9tZW50KCksXHJcbiAgICAgICAgICAgIGRhdGU6IHt9LFxyXG4gICAgICAgICAgICBjYWxlbmRlckZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBidXR0b25MYWJlbDogUF9wcm9wcy5idXR0b25MYWJlbCxcclxuXHJcbiAgICAgICAgICAgIGVycm9yX2NvbmRpdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uX21zc2c6IDxkaXY+PC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgYW1vdW50X21zc2c6IDxkaXY+PC9kaXY+LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc2NyaXB0aW9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgKCAoKSA9PiAoeyBkZXNjcmlwdGlvbiB9KSApO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbk5vdGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlICggKCkgPT4gKHsgbm90ZSB9KSApO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkFtb3VudENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW1vdW50ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgaWYgKCAhIGFtb3VudCB8fCBhbW91bnQubWF0Y2goL15cXGQrKFxcLlxcZHswLDJ9KT8kLykgKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoICgpID0+ICh7IGFtb3VudCB9KSApO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkRhdGVDaGFuZ2UgPSAoY3JlYXRlZEF0KSA9PiB7XHJcbiAgICAgICAgaWYgKGNyZWF0ZWRBdClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSggKCkgPT4gKHsgY3JlYXRlZEF0IH0pICk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uRm9jdXNDaGFuZ2UgPSAoeyBmb2N1c2VkIH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCAoKSA9PiAoeyBjYWxlbmRlckZvY3VzZWQ6IGZvY3VzZWQgfSkgKTtcclxuICAgIH07XHJcblxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgWFBORl9jaGVja19lcnJvcnMgKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbl9tc3NnID0gKCAhIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24gKSA/XHJcbiAgICAgICAgICAgIDxkaXY+eycgICAqKiogUGxlYXNlIHByb3ZpZGUgZGVzY3JpcHRpb24nfTwvZGl2PiA6IDxkaXY+PC9kaXY+O1xyXG4gICAgICAgIGNvbnN0IGFtb3VudF9tc3NnID0gKCAhIHRoaXMuc3RhdGUuYW1vdW50ICkgP1xyXG4gICAgICAgICAgICA8ZGl2PnsnICAgKioqIFBsZWFzZSBwcm92aWRlIGFtb3VudCd9PC9kaXY+IDogPGRpdj48L2Rpdj47XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+XHJcbiAgICAgICAgICAgICgge1xyXG4gICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JfY29uZGl0aW9uczpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbl9tc3NnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudF9tc3NnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nIChcIlBfb3V0ZXJfdGhpcy5hbW91bnQgXCIgKyB0aGlzLnN0YXRlLmFtb3VudCk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKCB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uICYmIHRoaXMuc3RhdGUuYW1vdW50ICk7XHJcbiAgICB9XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBvbkV4cGVuc2VTdWJtaXQgPSAoZSkgPT4gIHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCAoKTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLlhQTkZfY2hlY2tfZXJyb3JzICgpIClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkV4cGVuc2VTdWJtaXQgKCB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdCAodGhpcy5zdGF0ZS5hbW91bnQsIDEwKSAqIDEwMCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogdGhpcy5zdGF0ZS5jcmVhdGVkQXQudmFsdWVPZigpLFxyXG4gICAgICAgICAgICAgICAgbm90ZTogdGhpcy5zdGF0ZS5ub3RlXHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyAgdGhpcy5zdGF0ZS5lcnJvcl9jb25kaXRpb25zLmRlc2NyaXB0aW9uX21zc2cgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgIHRoaXMuc3RhdGUuZXJyb3JfY29uZGl0aW9ucy5hbW91bnRfbXNzZyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RXhwZW5zZSBGb3JtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e3RoaXMub25FeHBlbnNlU3VibWl0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25EZXNjcmlwdGlvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTaW5nbGVEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3RoaXMuc3RhdGUuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRhdGVDaGFuZ2U9e3RoaXMub25EYXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkPXt0aGlzLnN0YXRlLmNhbGVuZGVyRm9jdXNlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1c0NoYW5nZT17dGhpcy5vbkZvY3VzQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNyZWF0ZWRBdF9EYXRlUGlja2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc091dHNpZGVSYW5nZT17ICgpID0+IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiQWRkIGEgbm90ZSBmb3IgeW91ciBleHBlbnNlIChvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIk5vdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk5vdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnV0dG9uTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
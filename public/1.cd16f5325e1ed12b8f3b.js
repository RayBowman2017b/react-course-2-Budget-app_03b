(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/Utilities_01/Error_Boundaries.jsx":
/*!***********************************************!*\
  !*** ./src/Utilities_01/Error_Boundaries.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CLS_ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**************************************************************

//  Error_Boundaries.jsx

https://reactjs.org/docs/error-boundaries.html

https://codepen.io/gaearon/pen/wqvxGa?editors=0010

import CLS_ErrorBoundary from "../Utilities_01/Error_Boundaries.jsx";

 **************************************************************/



var CLS_ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CLS_ErrorBoundary, _React$Component);

  function CLS_ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, CLS_ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CLS_ErrorBoundary).call(this, props));
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }

  _createClass(CLS_ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      }); // You can also log error messages to an error reporting service here
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.errorInfo) {
        // Error path
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Something went wrong."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
          style: {
            whiteSpace: 'pre-wrap'
          }
        }, this.state.error && this.state.error.toString(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.state.errorInfo.componentStack));
      } // Normally, just render children


      return this.props.children;
    }
  }]);

  return CLS_ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/sec009a_components/sec009a_SFC_expense_dashboard_page.jsx":
/*!***********************************************************************!*\
  !*** ./src/sec009a_components/sec009a_SFC_expense_dashboard_page.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sec011a_L101_expense_list_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sec011a_L101_expense_list.jsx */ "./src/sec009a_components/sec011a_L101_expense_list.jsx");
/* harmony import */ var _sec011a_L103_expense_list_filters_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sec011a_L103_expense_list_filters.jsx */ "./src/sec009a_components/sec011a_L103_expense_list_filters.jsx");
/* harmony import */ var _sec013a_L140_expenses_summary_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sec013a_L140_expenses_summary.jsx */ "./src/sec009a_components/sec013a_L140_expenses_summary.jsx");
/* harmony import */ var _Utilities_01_Error_Boundaries_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utilities_01/Error_Boundaries.jsx */ "./src/Utilities_01/Error_Boundaries.jsx");
/*
  sec009a_SFC_expense_dashboard_page.jsx

import GC_expense_dashboard_page from "../../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx";

 */


 //import CLS_expense_list_filters from "./sec011a_L103_expense_list_filters.jsx";



 //<CLS_ErrorBoundary><CLS_expense_list_filters /></CLS_ErrorBoundary>

var GC_style = {
  padding: 1 + "rem"
};

var GC_expense_dashboard_page = function GC_expense_dashboard_page() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: GC_style
  }, "This is from my dashboard component."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: GC_style
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()().format('LLLL')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sec013a_L140_expenses_summary_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utilities_01_Error_Boundaries_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sec011a_L103_expense_list_filters_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sec011a_L101_expense_list_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (GC_expense_dashboard_page);

/***/ }),

/***/ "./src/sec009a_components/sec011a_L101_expense_list.jsx":
/*!**************************************************************!*\
  !*** ./src/sec009a_components/sec011a_L101_expense_list.jsx ***!
  \**************************************************************/
/*! exports provided: SFC_expense_list, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SFC_expense_list", function() { return SFC_expense_list; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _sec011a_L102_expense_list_item_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sec011a_L102_expense_list_item.jsx */ "./src/sec009a_components/sec011a_L102_expense_list_item.jsx");
/* harmony import */ var _Utilities_01_Error_Boundaries_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities_01/Error_Boundaries.jsx */ "./src/Utilities_01/Error_Boundaries.jsx");
/* harmony import */ var _sec011a_L099_selectors_sec011a_L099_SLCT_expenses_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx */ "./src/sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*

sec011a_L101_expense_list.jsx

 */





var cnt = 0;
var SFC_expense_list = function SFC_expense_list(P_props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Expense List"), P_props.expenses.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No Expenses") : P_props.expenses.map(function (P_expense) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sec011a_L102_expense_list_item_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: cnt++
    }, P_expense));
  }));
}; //              <SFC_expense_list_item key={P_expense.id} {...P_expense} />
//           <CLS_ErrorBoundary>
//              <SFC_expense_list_item key={P_expense.id} {...P_expense} />
//           </CLS_ErrorBoundary>

var GC_map_state_to_props = function GC_map_state_to_props(P_state) {
  return {
    expenses: Object(_sec011a_L099_selectors_sec011a_L099_SLCT_expenses_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(P_state.expenses, P_state.filters)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(GC_map_state_to_props)(SFC_expense_list));

/***/ }),

/***/ "./src/sec009a_components/sec011a_L102_expense_list_item.jsx":
/*!*******************************************************************!*\
  !*** ./src/sec009a_components/sec011a_L102_expense_list_item.jsx ***!
  \*******************************************************************/
/*! exports provided: SFC_expense_list_item, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SFC_expense_list_item", function() { return SFC_expense_list_item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);
/*

sec011a_L102_expense_list_item.jsx

*/

 //  SEC_013 --- 138. New Feature Workflow 12:32

 //  SEC_013 --- 138. New Feature Workflow 12:32



var out = function out(P_id) {
  return console.log(P_id);
};

var GC_link_with_children = function GC_link_with_children(P_props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: P_props.route,
    activeClassName: "is-active",
    exact: true
  }, P_props.children));
}; //      <p> {amount} - {createdAt}</p>
// <div style={{paddingLeft: "6rem"}}>


var SFC_expense_list_item = function SFC_expense_list_item(_ref) {
  var id = _ref.id,
      description = _ref.description,
      amount = _ref.amount,
      createdAt = _ref.createdAt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GC_link_with_children, {
    route: "/edit/" + id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "TO > ".concat(description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, numeral__WEBPACK_IMPORTED_MODULE_3___default()(amount / 100).format("$0,0.00"), " --- ", moment__WEBPACK_IMPORTED_MODULE_2___default()(createdAt).format("MMMM Do, YYYY"))));
};
/* harmony default export */ __webpack_exports__["default"] = (SFC_expense_list_item);

/***/ }),

/***/ "./src/sec009a_components/sec011a_L103_expense_list_filters.jsx":
/*!**********************************************************************!*\
  !*** ./src/sec009a_components/sec011a_L103_expense_list_filters.jsx ***!
  \**********************************************************************/
/*! exports provided: ExpenseListFilters, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseListFilters", function() { return ExpenseListFilters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utilities_01_Loadable_Handlers_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utilities_01/Loadable_Handlers.jsx */ "./src/Utilities_01/Loadable_Handlers.jsx");
/* harmony import */ var _sec011a_L099_actions_sec011a_L099_ACTN_filters_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx */ "./src/sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx");
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
  sec011a_L103_expense_list_filters.jsx

 */




 // const DateRangePicker = Loadable({
//   loader: () => import('react-dates'),
//   loading: MP_common_loading_handler,
//   timeout: 3000, // 3 seconds
// });

 //export class CLS_expense_list_filters extends React.Component

var ExpenseListFilters =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpenseListFilters, _React$Component);

  function ExpenseListFilters(P_props) {
    var _this;

    _classCallCheck(this, ExpenseListFilters);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpenseListFilters).call(this, P_props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      calendarFocused: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onExpenseDatesChange", function (_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;

      //onDatesChange = ( { startDate, endDate } ) => {
      _this.props.MDTP_setStartDate(startDate); //this.props.MP_setStartDate(startDate);
      //this.props.setStartDate(startDate);


      _this.props.MDTP_setEndDate(endDate); //this.props.MP_setEndDate (endDate);
      //this.props.setEndDate (endDate);

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onExpenseFocusChange", function (calendarFocused) {
      //onFocusChange = (calendarFocused) => {
      _this.setState(function () {
        return {
          calendarFocused: calendarFocused
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "TXBX_filters_change", function (P_event) {
      _this.props.MDTP_setTextFilter(P_event.target.value); //this.props.MP_setTextFilter (P_event.target.value);
      //this.props.setTextFilter (P_event.target.value);

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "SLCT_sort_item_change", function (P_event) {
      //this.props.MDTP_sortBy (P_event.target.value);
      if (P_event.target.value === 'date') _this.props.MDTP_sortByDate();else if (P_event.target.value === 'amount') _this.props.MDTP_sortByAmount();
    });

    return _this;
  }

  _createClass(ExpenseListFilters, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "TBX_filters",
        value: this.props.filters.text,
        onChange: this.TXBX_filters_change
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        value: this.props.filters.sortBy,
        onChange: this.SLCT_sort_item_change
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "date"
      }, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "amount"
      }, "Amount")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_2__["DateRangePicker"], {
        startDate: this.props.filters.startDate // momentPropTypes.momentObj or null,
        ,
        startDateId: "your_unique_start_date_id" // PropTypes.string.isRequired,
        ,
        endDate: this.props.filters.endDate // momentPropTypes.momentObj or null,
        ,
        endDateId: "your_unique_end_date_id" // PropTypes.string.isRequired,
        ,
        onDatesChange: this.onExpenseDatesChange //onDatesChange={ this.onDatesChange }
        ,
        focusedInput: this.state.calendarFocused // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        ,
        onFocusChange: this.onExpenseFocusChange // PropTypes.func.isRequired,
        //onFocusChange={ this.onFocusChange } // PropTypes.func.isRequired,
        ,
        showClearDates: true,
        readOnly: false,
        numberOfMonths: 1,
        isOutsideRange: function isOutsideRange() {
          return false;
        }
      }));
    }
  }]);

  return ExpenseListFilters;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/******************************************************
<DateRangePicker
  startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={ this.onExpenseDatesChange }
  focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={ this.onExpenseFocusChange } // PropTypes.func.isRequired,
  showClearDates={true}
  readOnly={false}
  numberOfMonths={1}
  isOutsideRange={ () => false }

/>
 ******************************************************/

var GC_map_state_to_props = function GC_map_state_to_props(P_state) {
  return {
    filters: P_state.filters
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    MDTP_setTextFilter: function MDTP_setTextFilter(P_TBX_filter_text) {
      return (//setTextFilter: (P_TBX_filter_text) =>
        dispatch(Object(_sec011a_L099_actions_sec011a_L099_ACTN_filters_jsx__WEBPACK_IMPORTED_MODULE_5__["MP_setTextFilter"])(P_TBX_filter_text))
      );
    },
    //dispatch(setTextFilter(P_TBX_filter_text)),
    MDTP_sortBy: function MDTP_sortBy(P_sort_by_item) {
      return (//sortBy: (P_sort_by_item) =>
        dispatch(P_sort_by_item === 'date' ? Object(_sec011a_L099_actions_sec011a_L099_ACTN_filters_jsx__WEBPACK_IMPORTED_MODULE_5__["MP_sortByDate"])() //P_sort_by_item === 'date' ? sortByDate ()
        : P_sort_by_item === 'amount' ? Object(_sec011a_L099_actions_sec011a_L099_ACTN_filters_jsx__WEBPACK_IMPORTED_MODULE_5__["MP_sortByAmount"])() //: P_sort_by_item === 'amount' ? sortByAmount ()
        : undefined)
      );
    },
    //MDTP_sortByDate: () => dispatch(sortByDate ()),
    MDTP_sortByDate: function MDTP_sortByDate() {
      return dispatch(Object(_sec011a_L099_actions_sec011a_L099_ACTN_filters_jsx__WEBPACK_IMPORTED_MODULE_5__["MP_sortByDate"])());
    },
    //MDTP_sortByAmount: () => dispatch(sortByAmount ()),
    MDTP_sortByAmount: function MDTP_sortByAmount() {
      return dispatch(Object(_sec011a_L099_actions_sec011a_L099_ACTN_filters_jsx__WEBPACK_IMPORTED_MODULE_5__["MP_sortByAmount"])());
    },
    MDTP_setStartDate: function MDTP_setStartDate(P_start_date) {
      return (//setStartDate: (P_start_date) =>
        dispatch(Object(_sec011a_L099_actions_sec011a_L099_ACTN_filters_jsx__WEBPACK_IMPORTED_MODULE_5__["MP_setStartDate"])(P_start_date))
      );
    },
    //dispatch (setStartDate(P_start_date) ),
    MDTP_setEndDate: function MDTP_setEndDate(P_end_date) {
      return (//setEndDate: (P_end_date) =>
        dispatch(Object(_sec011a_L099_actions_sec011a_L099_ACTN_filters_jsx__WEBPACK_IMPORTED_MODULE_5__["MP_setEndDate"])(P_end_date))
      );
    } //dispatch (setEndDate(P_end_date) )

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(GC_map_state_to_props, mapDispatchToProps) //(CLS_expense_list_filters);
(ExpenseListFilters));

/***/ }),

/***/ "./src/sec009a_components/sec013a_L140_expenses_summary.jsx":
/*!******************************************************************!*\
  !*** ./src/sec009a_components/sec013a_L140_expenses_summary.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sec011a_L099_selectors_sec011a_L099_SLCT_expenses_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx */ "./src/sec011a_L099_selectors/sec011a_L099_SLCT_expenses.jsx");
/* harmony import */ var _sec011a_L099_selectors_sec013a_L139_SLCT_total_expenses_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx */ "./src/sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx");
/***************************************************************************

sec013a_L140_expenses_summary.jsx

K:\A01_Udemy\C023_Complete_React_Web_Dev\Budget-app\
src\sec009a_components\sec013a_L140_expenses_summary.jsx

import { SFC_expenses_summary } from '../../sec009a_components/sec013a_L140_expenses_summary.jsx';
          //[S07251667|sec009a_SFC_expense_dashboard_page.jsx::sec013a_L140_expenses_summary import-1;]

//  SEC_013 --- 140. Build It: Adding Summary Component 18:39

 ***************************************************************************/




 //==========================================================================

var SFC_expenses_summary = function SFC_expenses_summary(_ref) {
  var total_expense_count = _ref.total_expense_count,
      total_expense_amount = _ref.total_expense_amount;
  var expense_word = total_expense_count > 1 ? "expenses" : "expense";
  var total_expense_amount_formatted = numeral__WEBPACK_IMPORTED_MODULE_2___default()(total_expense_amount / 100).format("$0,0.00");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, total_expense_count === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "No Expenses Selected") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Viewing ", total_expense_count, " ", expense_word, "totalling ", total_expense_amount_formatted));
}; //==========================================================================


var GF_map_state_to_props = function GF_map_state_to_props(P_state) {
  var expenses = Object(_sec011a_L099_selectors_sec011a_L099_SLCT_expenses_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(P_state.expenses, P_state.filters);
  var total_expense_amount = Object(_sec011a_L099_selectors_sec013a_L139_SLCT_total_expenses_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(expenses);
  var total_expense_count = expenses.length;
  return {
    total_expense_count: total_expense_count,
    total_expense_amount: total_expense_amount
  };
}; //==========================================================================


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(GF_map_state_to_props)(SFC_expenses_summary));

/***/ }),

/***/ "./src/sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx":
/*!*************************************************************************!*\
  !*** ./src/sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/***************************************************************************

sec013a_L139_SLCT_total_expenses.jsx

K:\A01_Udemy\Budget-app_03\src\sec011a_L099_selectors\sec013a_L139_SLCT_total_expenses.jsx

//  SEC_013 --- 139. Build It: Adding Total Selector 17:25

import MP_selectExpensesTotal from "../../sec011a_L099_selectors/sec013a_L139_SLCT_total_expenses.jsx";

 ***************************************************************************/
/* harmony default export */ __webpack_exports__["default"] = (function (P_expenses) {
  if (!P_expenses) throw new Error("   *** passed parameter is null/undefined");
  if (!Array.isArray(P_expenses)) throw new Error("   *** passed parameter is not an array");
  if (P_expenses.length === 1 && typeof P_expenses[0].amount !== "number") throw new Error("   *** There is no object with an expense element.");

  var LF_get_amount = function LF_get_amount(P_expense) {
    return typeof P_expense.amount === 'number' ? P_expense.amount : 0;
  };

  return P_expenses.reduce(function (acum, expense) {
    return acum + LF_get_amount(expense);
  }, 0);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzXzAxL0Vycm9yX0JvdW5kYXJpZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zZWMwMDlhX2NvbXBvbmVudHMvc2VjMDA5YV9TRkNfZXhwZW5zZV9kYXNoYm9hcmRfcGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlYzAwOWFfY29tcG9uZW50cy9zZWMwMTFhX0wxMDFfZXhwZW5zZV9saXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjMDA5YV9jb21wb25lbnRzL3NlYzAxMWFfTDEwMl9leHBlbnNlX2xpc3RfaXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlYzAwOWFfY29tcG9uZW50cy9zZWMwMTFhX0wxMDNfZXhwZW5zZV9saXN0X2ZpbHRlcnMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zZWMwMDlhX2NvbXBvbmVudHMvc2VjMDEzYV9MMTQwX2V4cGVuc2VzX3N1bW1hcnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9zZWMwMTFhX0wwOTlfc2VsZWN0b3JzL3NlYzAxM2FfTDEzOV9TTENUX3RvdGFsX2V4cGVuc2VzLmpzeCJdLCJuYW1lcyI6WyJDTFNfRXJyb3JCb3VuZGFyeSIsInByb3BzIiwic3RhdGUiLCJlcnJvciIsImVycm9ySW5mbyIsInNldFN0YXRlIiwid2hpdGVTcGFjZSIsInRvU3RyaW5nIiwiY29tcG9uZW50U3RhY2siLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiR0Nfc3R5bGUiLCJwYWRkaW5nIiwiR0NfZXhwZW5zZV9kYXNoYm9hcmRfcGFnZSIsIm1vbWVudCIsImZvcm1hdCIsImNudCIsIlNGQ19leHBlbnNlX2xpc3QiLCJQX3Byb3BzIiwiZXhwZW5zZXMiLCJsZW5ndGgiLCJtYXAiLCJQX2V4cGVuc2UiLCJHQ19tYXBfc3RhdGVfdG9fcHJvcHMiLCJQX3N0YXRlIiwiTVBfU0xDVF9nZXRWaXNpYmxlRXhwZW5zZXMiLCJmaWx0ZXJzIiwiY29ubmVjdCIsIm91dCIsIlBfaWQiLCJjb25zb2xlIiwibG9nIiwiR0NfbGlua193aXRoX2NoaWxkcmVuIiwicm91dGUiLCJTRkNfZXhwZW5zZV9saXN0X2l0ZW0iLCJpZCIsImRlc2NyaXB0aW9uIiwiYW1vdW50IiwiY3JlYXRlZEF0IiwibnVtZXJhbCIsIkV4cGVuc2VMaXN0RmlsdGVycyIsImNhbGVuZGFyRm9jdXNlZCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJNRFRQX3NldFN0YXJ0RGF0ZSIsIk1EVFBfc2V0RW5kRGF0ZSIsIlBfZXZlbnQiLCJNRFRQX3NldFRleHRGaWx0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk1EVFBfc29ydEJ5RGF0ZSIsIk1EVFBfc29ydEJ5QW1vdW50IiwidGV4dCIsIlRYQlhfZmlsdGVyc19jaGFuZ2UiLCJzb3J0QnkiLCJTTENUX3NvcnRfaXRlbV9jaGFuZ2UiLCJvbkV4cGVuc2VEYXRlc0NoYW5nZSIsIm9uRXhwZW5zZUZvY3VzQ2hhbmdlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJQX1RCWF9maWx0ZXJfdGV4dCIsIk1QX3NldFRleHRGaWx0ZXIiLCJNRFRQX3NvcnRCeSIsIlBfc29ydF9ieV9pdGVtIiwiTVBfc29ydEJ5RGF0ZSIsIk1QX3NvcnRCeUFtb3VudCIsInVuZGVmaW5lZCIsIlBfc3RhcnRfZGF0ZSIsIk1QX3NldFN0YXJ0RGF0ZSIsIlBfZW5kX2RhdGUiLCJNUF9zZXRFbmREYXRlIiwiU0ZDX2V4cGVuc2VzX3N1bW1hcnkiLCJ0b3RhbF9leHBlbnNlX2NvdW50IiwidG90YWxfZXhwZW5zZV9hbW91bnQiLCJleHBlbnNlX3dvcmQiLCJ0b3RhbF9leHBlbnNlX2Ftb3VudF9mb3JtYXR0ZWQiLCJHRl9tYXBfc3RhdGVfdG9fcHJvcHMiLCJNUF9zZWxlY3RFeHBlbnNlc1RvdGFsIiwiUF9leHBlbnNlcyIsIkVycm9yIiwiQXJyYXkiLCJpc0FycmF5IiwiTEZfZ2V0X2Ftb3VudCIsInJlZHVjZSIsImFjdW0iLCJleHBlbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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c0IsQ0FBdkIsSUFBOEIsT0FBTzBELFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY3pDLE1BQXJCLEtBQWdDLFFBQW5FLEVBQ0ksTUFBTSxJQUFJMEMsS0FBSixDQUFXLG9EQUFYLENBQU47O0FBRUosTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDNUQsU0FBRDtBQUFBLFdBQWdCLE9BQU9BLFNBQVMsQ0FBQ2UsTUFBakIsS0FBNEIsUUFBN0IsR0FBeUNmLFNBQVMsQ0FBQ2UsTUFBbkQsR0FBNEQsQ0FBM0U7QUFBQSxHQUF0Qjs7QUFDQSxTQUFPeUMsVUFBVSxDQUFDSyxNQUFYLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsT0FBUDtBQUFBLFdBQW1CRCxJQUFJLEdBQUdGLGFBQWEsQ0FBQ0csT0FBRCxDQUF2QztBQUFBLEdBQW5CLEVBQXFFLENBQXJFLENBQVA7QUFDSCxDQVRELEUiLCJmaWxlIjoiMS5jZDE2ZjUzMjVlMWVkMTJiOGYzYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vICBFcnJvcl9Cb3VuZGFyaWVzLmpzeFxyXG5cclxuaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWJvdW5kYXJpZXMuaHRtbFxyXG5cclxuaHR0cHM6Ly9jb2RlcGVuLmlvL2dhZWFyb24vcGVuL3dxdnhHYT9lZGl0b3JzPTAwMTBcclxuXHJcbmltcG9ydCBDTFNfRXJyb3JCb3VuZGFyeSBmcm9tIFwiLi4vVXRpbGl0aWVzXzAxL0Vycm9yX0JvdW5kYXJpZXMuanN4XCI7XHJcblxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENMU19FcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgZXJyb3I6IG51bGwsIGVycm9ySW5mbzogbnVsbCB9O1xyXG4gIH1cclxuICBcclxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XHJcbiAgICAvLyBDYXRjaCBlcnJvcnMgaW4gYW55IGNvbXBvbmVudHMgYmVsb3cgYW5kIHJlLXJlbmRlciB3aXRoIGVycm9yIG1lc3NhZ2VcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlcnJvcjogZXJyb3IsXHJcbiAgICAgIGVycm9ySW5mbzogZXJyb3JJbmZvXHJcbiAgICB9KVxyXG4gICAgLy8gWW91IGNhbiBhbHNvIGxvZyBlcnJvciBtZXNzYWdlcyB0byBhbiBlcnJvciByZXBvcnRpbmcgc2VydmljZSBoZXJlXHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmVycm9ySW5mbykge1xyXG4gICAgICAvLyBFcnJvciBwYXRoXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5Tb21ldGhpbmcgd2VudCB3cm9uZy48L2gyPlxyXG4gICAgICAgICAgPGRldGFpbHMgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyB9fT5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgdGhpcy5zdGF0ZS5lcnJvci50b1N0cmluZygpfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JJbmZvLmNvbXBvbmVudFN0YWNrfVxyXG4gICAgICAgICAgPC9kZXRhaWxzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gTm9ybWFsbHksIGp1c3QgcmVuZGVyIGNoaWxkcmVuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICB9ICBcclxufVxyXG5cclxuIiwiXHJcbi8qXHJcbiAgc2VjMDA5YV9TRkNfZXhwZW5zZV9kYXNoYm9hcmRfcGFnZS5qc3hcclxuXHJcbmltcG9ydCBHQ19leHBlbnNlX2Rhc2hib2FyZF9wYWdlIGZyb20gXCIuLi8uLi9zZWMwMDlhX2NvbXBvbmVudHMvc2VjMDA5YV9TRkNfZXhwZW5zZV9kYXNoYm9hcmRfcGFnZS5qc3hcIjtcclxuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCBTRkNfZXhwZW5zZV9saXN0IGZyb20gXCIuL3NlYzAxMWFfTDEwMV9leHBlbnNlX2xpc3QuanN4XCI7XHJcblxyXG4vL2ltcG9ydCBDTFNfZXhwZW5zZV9saXN0X2ZpbHRlcnMgZnJvbSBcIi4vc2VjMDExYV9MMTAzX2V4cGVuc2VfbGlzdF9maWx0ZXJzLmpzeFwiO1xyXG5pbXBvcnQgRXhwZW5zZUxpc3RGaWx0ZXJzIGZyb20gXCIuL3NlYzAxMWFfTDEwM19leHBlbnNlX2xpc3RfZmlsdGVycy5qc3hcIjtcclxuXHJcbmltcG9ydCBTRkNfZXhwZW5zZXNfc3VtbWFyeSBmcm9tICcuL3NlYzAxM2FfTDE0MF9leHBlbnNlc19zdW1tYXJ5LmpzeCc7XHJcblxyXG5pbXBvcnQgQ0xTX0Vycm9yQm91bmRhcnkgZnJvbSBcIi4uL1V0aWxpdGllc18wMS9FcnJvcl9Cb3VuZGFyaWVzLmpzeFwiO1xyXG5cclxuICAgIC8vPENMU19FcnJvckJvdW5kYXJ5PjxDTFNfZXhwZW5zZV9saXN0X2ZpbHRlcnMgLz48L0NMU19FcnJvckJvdW5kYXJ5PlxyXG5cclxuY29uc3QgR0Nfc3R5bGU9e1xyXG4gICAgcGFkZGluZzogMSArIFwicmVtXCIsXHJcbiAgICB9O1xyXG5cclxuY29uc3QgR0NfZXhwZW5zZV9kYXNoYm9hcmRfcGFnZSA9ICgpID0+XHJcbihcclxuICA8ZGl2PlxyXG4gICAgPHNwYW4gc3R5bGU9e0dDX3N0eWxlfT5UaGlzIGlzIGZyb20gbXkgZGFzaGJvYXJkIGNvbXBvbmVudC48L3NwYW4+XHJcbiAgICA8ZGl2ICBzdHlsZT17R0Nfc3R5bGV9PnsgbW9tZW50KCkuZm9ybWF0KCdMTExMJykgfTwvZGl2PlxyXG4gICAgPFNGQ19leHBlbnNlc19zdW1tYXJ5IC8+XHJcbiAgICA8Q0xTX0Vycm9yQm91bmRhcnk+PEV4cGVuc2VMaXN0RmlsdGVycyAvPjwvQ0xTX0Vycm9yQm91bmRhcnk+XHJcbiAgICA8U0ZDX2V4cGVuc2VfbGlzdCAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdDX2V4cGVuc2VfZGFzaGJvYXJkX3BhZ2U7XHJcbiIsIlxyXG4vKlxyXG5cclxuc2VjMDExYV9MMTAxX2V4cGVuc2VfbGlzdC5qc3hcclxuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFNGQ19leHBlbnNlX2xpc3RfaXRlbSBmcm9tIFwiLi9zZWMwMTFhX0wxMDJfZXhwZW5zZV9saXN0X2l0ZW0uanN4XCI7XHJcblxyXG5pbXBvcnQgQ0xTX0Vycm9yQm91bmRhcnkgZnJvbSBcIi4uL1V0aWxpdGllc18wMS9FcnJvcl9Cb3VuZGFyaWVzLmpzeFwiO1xyXG5cclxuaW1wb3J0IE1QX1NMQ1RfZ2V0VmlzaWJsZUV4cGVuc2VzIGZyb20gXCIuLi9zZWMwMTFhX0wwOTlfc2VsZWN0b3JzL3NlYzAxMWFfTDA5OV9TTENUX2V4cGVuc2VzLmpzeFwiO1xyXG5cclxubGV0IGNudCA9IDA7XHJcblxyXG5leHBvcnQgY29uc3QgU0ZDX2V4cGVuc2VfbGlzdCA9IChQX3Byb3BzKSA9PiAoXHJcbjxkaXY+XHJcbiAgPGgxPkV4cGVuc2UgTGlzdDwvaDE+XHJcbiAge1xyXG4gICAgUF9wcm9wcy5leHBlbnNlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPHA+Tm8gRXhwZW5zZXM8L3A+XHJcbiAgICApIDogKFxyXG4gICAgICAgIFBfcHJvcHMuZXhwZW5zZXMubWFwICggKFBfZXhwZW5zZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTRkNfZXhwZW5zZV9saXN0X2l0ZW0ga2V5PXtjbnQrK30gey4uLlBfZXhwZW5zZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICApXHJcbiAgfVxyXG48L2Rpdj5cclxuICAgICk7XHJcblxyXG4vLyAgICAgICAgICAgICAgPFNGQ19leHBlbnNlX2xpc3RfaXRlbSBrZXk9e1BfZXhwZW5zZS5pZH0gey4uLlBfZXhwZW5zZX0gLz5cclxuLy8gICAgICAgICAgIDxDTFNfRXJyb3JCb3VuZGFyeT5cclxuLy8gICAgICAgICAgICAgIDxTRkNfZXhwZW5zZV9saXN0X2l0ZW0ga2V5PXtQX2V4cGVuc2UuaWR9IHsuLi5QX2V4cGVuc2V9IC8+XHJcbi8vICAgICAgICAgICA8L0NMU19FcnJvckJvdW5kYXJ5PlxyXG5cclxuY29uc3QgR0NfbWFwX3N0YXRlX3RvX3Byb3BzID0gKFBfc3RhdGUpID0+ICB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBleHBlbnNlczogTVBfU0xDVF9nZXRWaXNpYmxlRXhwZW5zZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChQX3N0YXRlLmV4cGVuc2VzLCBQX3N0YXRlLmZpbHRlcnMpXHJcbiAgICAgICAgICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QgKEdDX21hcF9zdGF0ZV90b19wcm9wcykoU0ZDX2V4cGVuc2VfbGlzdCk7XHJcbiIsIlxyXG4vKlxyXG5cclxuc2VjMDExYV9MMTAyX2V4cGVuc2VfbGlzdF9pdGVtLmpzeFxyXG5cclxuKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rLCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5cclxuLy8gIFNFQ18wMTMgLS0tIDEzOC4gTmV3IEZlYXR1cmUgV29ya2Zsb3cgMTI6MzJcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuLy8gIFNFQ18wMTMgLS0tIDEzOC4gTmV3IEZlYXR1cmUgV29ya2Zsb3cgMTI6MzJcclxuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCc7XHJcblxyXG5cclxuY29uc3Qgb3V0ID0gKFBfaWQpID0+IGNvbnNvbGUubG9nIChQX2lkKTtcclxuXHJcblxyXG5jb25zdCBHQ19saW5rX3dpdGhfY2hpbGRyZW4gPSAoUF9wcm9wcykgPT5cclxuKFxyXG4gIDxkaXY+XHJcbiAgICA8TmF2TGlua1xyXG4gICAgICB0bz17UF9wcm9wcy5yb3V0ZX1cclxuICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCJcclxuICAgICAgZXhhY3Q9e3RydWV9XHJcbiAgICA+e1BfcHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L05hdkxpbms+XHJcbiAgPC9kaXY+XHJcbik7XHJcbi8vICAgICAgPHA+IHthbW91bnR9IC0ge2NyZWF0ZWRBdH08L3A+XHJcbiAgICAvLyA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiNnJlbVwifX0+XHJcblxyXG5leHBvcnQgY29uc3QgU0ZDX2V4cGVuc2VfbGlzdF9pdGVtID0gKHsgaWQsIGRlc2NyaXB0aW9uLCBhbW91bnQsIGNyZWF0ZWRBdCB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R0NfbGlua193aXRoX2NoaWxkcmVuIHJvdXRlPXtcIi9lZGl0L1wiICsgaWR9PlxyXG4gICAgICAgICAgPGgzPntgVE8gPiAke2Rlc2NyaXB0aW9ufWB9PC9oMz5cclxuICAgICAgPC9HQ19saW5rX3dpdGhfY2hpbGRyZW4+XHJcbiAgICA8ZGl2ID5cclxuICAgICAgPHA+XHJcbiAgICAgICAge251bWVyYWwoYW1vdW50IC8gMTAwKS5mb3JtYXQoXCIkMCwwLjAwXCIpfSAtLS0ge21vbWVudChjcmVhdGVkQXQpLmZvcm1hdCAoXCJNTU1NIERvLCBZWVlZXCIpfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU0ZDX2V4cGVuc2VfbGlzdF9pdGVtO1xyXG4iLCJcclxuLypcclxuICBzZWMwMTFhX0wxMDNfZXhwZW5zZV9saXN0X2ZpbHRlcnMuanN4XHJcblxyXG4gKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuICBpbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICdyZWFjdC1kYXRlcyc7XHJcblxyXG5pbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xyXG5cclxuaW1wb3J0IHsgTVBfY29tbW9uX2xvYWRpbmdfaGFuZGxlciB9IGZyb20gXCIuLi9VdGlsaXRpZXNfMDEvTG9hZGFibGVfSGFuZGxlcnMuanN4XCI7XHJcblxyXG4vLyBjb25zdCBEYXRlUmFuZ2VQaWNrZXIgPSBMb2FkYWJsZSh7XHJcbi8vICAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJ3JlYWN0LWRhdGVzJyksXHJcbi8vICAgbG9hZGluZzogTVBfY29tbW9uX2xvYWRpbmdfaGFuZGxlcixcclxuLy8gICB0aW1lb3V0OiAzMDAwLCAvLyAzIHNlY29uZHNcclxuLy8gfSk7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IE1QX3NldFRleHRGaWx0ZXIsIE1QX3NvcnRCeURhdGUsIE1QX3NvcnRCeUFtb3VudCwgTVBfc2V0U3RhcnREYXRlLCBNUF9zZXRFbmREYXRlICB9XHJcbi8vaW1wb3J0IHsgc2V0VGV4dEZpbHRlciwgc29ydEJ5RGF0ZSwgc29ydEJ5QW1vdW50LCBzZXRTdGFydERhdGUsIHNldEVuZERhdGUgIH1cclxuICBmcm9tIFwiLi4vc2VjMDExYV9MMDk5X2FjdGlvbnMvc2VjMDExYV9MMDk5X0FDVE5fZmlsdGVycy5qc3hcIjtcclxuXHJcbi8vZXhwb3J0IGNsYXNzIENMU19leHBlbnNlX2xpc3RfZmlsdGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZUxpc3RGaWx0ZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XHJcbntcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBjYWxlbmRhckZvY3VzZWQ6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFBfcHJvcHMpXHJcbiAgICB7XHJcbiAgICAgIHN1cGVyIChQX3Byb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4cGVuc2VEYXRlc0NoYW5nZSA9ICggeyBzdGFydERhdGUsIGVuZERhdGUgfSApID0+IHtcclxuICAgIC8vb25EYXRlc0NoYW5nZSA9ICggeyBzdGFydERhdGUsIGVuZERhdGUgfSApID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5NRFRQX3NldFN0YXJ0RGF0ZShzdGFydERhdGUpO1xyXG4gICAgICAvL3RoaXMucHJvcHMuTVBfc2V0U3RhcnREYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgICAgIC8vdGhpcy5wcm9wcy5zZXRTdGFydERhdGUoc3RhcnREYXRlKTtcclxuXHJcbiAgICAgIHRoaXMucHJvcHMuTURUUF9zZXRFbmREYXRlIChlbmREYXRlKTtcclxuICAgICAgLy90aGlzLnByb3BzLk1QX3NldEVuZERhdGUgKGVuZERhdGUpO1xyXG4gICAgICAvL3RoaXMucHJvcHMuc2V0RW5kRGF0ZSAoZW5kRGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uRXhwZW5zZUZvY3VzQ2hhbmdlID0gKGNhbGVuZGFyRm9jdXNlZCkgPT4ge1xyXG4gICAgLy9vbkZvY3VzQ2hhbmdlID0gKGNhbGVuZGFyRm9jdXNlZCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlICggKCkgPT4gKCB7IGNhbGVuZGFyRm9jdXNlZCB9ICkgKTtcclxuICAgIH07XHJcblxyXG4gICAgVFhCWF9maWx0ZXJzX2NoYW5nZSA9IChQX2V2ZW50KSA9PiAge1xyXG4gICAgICB0aGlzLnByb3BzLk1EVFBfc2V0VGV4dEZpbHRlciAoUF9ldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAvL3RoaXMucHJvcHMuTVBfc2V0VGV4dEZpbHRlciAoUF9ldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAvL3RoaXMucHJvcHMuc2V0VGV4dEZpbHRlciAoUF9ldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBTTENUX3NvcnRfaXRlbV9jaGFuZ2UgPSAoUF9ldmVudCkgPT4gIHtcclxuICAgICAgLy90aGlzLnByb3BzLk1EVFBfc29ydEJ5IChQX2V2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGlmIChQX2V2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2RhdGUnKVxyXG4gICAgICAgIHRoaXMucHJvcHMuTURUUF9zb3J0QnlEYXRlICgpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIGlmIChQX2V2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2Ftb3VudCcpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5NRFRQX3NvcnRCeUFtb3VudCAoKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJUQlhfZmlsdGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmlsdGVycy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLlRYQlhfZmlsdGVyc19jaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmlsdGVycy5zb3J0Qnl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuU0xDVF9zb3J0X2l0ZW1fY2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhdGVcIj5EYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFtb3VudFwiPkFtb3VudDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcblxyXG48RGF0ZVJhbmdlUGlja2VyXHJcbiAgc3RhcnREYXRlPXt0aGlzLnByb3BzLmZpbHRlcnMuc3RhcnREYXRlfSAvLyBtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqIG9yIG51bGwsXHJcbiAgc3RhcnREYXRlSWQ9XCJ5b3VyX3VuaXF1ZV9zdGFydF9kYXRlX2lkXCIgLy8gUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVuZERhdGU9e3RoaXMucHJvcHMuZmlsdGVycy5lbmREYXRlfSAvLyBtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqIG9yIG51bGwsXHJcbiAgZW5kRGF0ZUlkPVwieW91cl91bmlxdWVfZW5kX2RhdGVfaWRcIiAvLyBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgb25EYXRlc0NoYW5nZT17IHRoaXMub25FeHBlbnNlRGF0ZXNDaGFuZ2UgfVxyXG4gIC8vb25EYXRlc0NoYW5nZT17IHRoaXMub25EYXRlc0NoYW5nZSB9XHJcbiAgZm9jdXNlZElucHV0PXt0aGlzLnN0YXRlLmNhbGVuZGFyRm9jdXNlZH0gLy8gUHJvcFR5cGVzLm9uZU9mKFtTVEFSVF9EQVRFLCBFTkRfREFURV0pIG9yIG51bGwsXHJcbiAgb25Gb2N1c0NoYW5nZT17IHRoaXMub25FeHBlbnNlRm9jdXNDaGFuZ2UgfSAvLyBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIC8vb25Gb2N1c0NoYW5nZT17IHRoaXMub25Gb2N1c0NoYW5nZSB9IC8vIFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgc2hvd0NsZWFyRGF0ZXM9e3RydWV9XHJcbiAgcmVhZE9ubHk9e2ZhbHNlfVxyXG4gIG51bWJlck9mTW9udGhzPXsxfVxyXG4gIGlzT3V0c2lkZVJhbmdlPXsgKCkgPT4gZmFsc2UgfVxyXG5cclxuLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcblxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG48RGF0ZVJhbmdlUGlja2VyXHJcbiAgc3RhcnREYXRlPXt0aGlzLnByb3BzLmZpbHRlcnMuc3RhcnREYXRlfSAvLyBtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqIG9yIG51bGwsXHJcbiAgc3RhcnREYXRlSWQ9XCJ5b3VyX3VuaXF1ZV9zdGFydF9kYXRlX2lkXCIgLy8gUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVuZERhdGU9e3RoaXMucHJvcHMuZmlsdGVycy5lbmREYXRlfSAvLyBtb21lbnRQcm9wVHlwZXMubW9tZW50T2JqIG9yIG51bGwsXHJcbiAgZW5kRGF0ZUlkPVwieW91cl91bmlxdWVfZW5kX2RhdGVfaWRcIiAvLyBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgb25EYXRlc0NoYW5nZT17IHRoaXMub25FeHBlbnNlRGF0ZXNDaGFuZ2UgfVxyXG4gIGZvY3VzZWRJbnB1dD17dGhpcy5zdGF0ZS5jYWxlbmRhckZvY3VzZWR9IC8vIFByb3BUeXBlcy5vbmVPZihbU1RBUlRfREFURSwgRU5EX0RBVEVdKSBvciBudWxsLFxyXG4gIG9uRm9jdXNDaGFuZ2U9eyB0aGlzLm9uRXhwZW5zZUZvY3VzQ2hhbmdlIH0gLy8gUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBzaG93Q2xlYXJEYXRlcz17dHJ1ZX1cclxuICByZWFkT25seT17ZmFsc2V9XHJcbiAgbnVtYmVyT2ZNb250aHM9ezF9XHJcbiAgaXNPdXRzaWRlUmFuZ2U9eyAoKSA9PiBmYWxzZSB9XHJcblxyXG4vPlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuY29uc3QgR0NfbWFwX3N0YXRlX3RvX3Byb3BzID0gKFBfc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmlsdGVyczogUF9zdGF0ZS5maWx0ZXJzXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBwcm9wcykgPT4gIHtcclxuICByZXR1cm4gKFxyXG4gIHtcclxuICAgIE1EVFBfc2V0VGV4dEZpbHRlcjogKFBfVEJYX2ZpbHRlcl90ZXh0KSA9PlxyXG4gICAgLy9zZXRUZXh0RmlsdGVyOiAoUF9UQlhfZmlsdGVyX3RleHQpID0+XHJcbiAgICAgIGRpc3BhdGNoKE1QX3NldFRleHRGaWx0ZXIoUF9UQlhfZmlsdGVyX3RleHQpKSxcclxuICAgICAgLy9kaXNwYXRjaChzZXRUZXh0RmlsdGVyKFBfVEJYX2ZpbHRlcl90ZXh0KSksXHJcbiAgICBNRFRQX3NvcnRCeTogKFBfc29ydF9ieV9pdGVtKSA9PlxyXG4gICAgLy9zb3J0Qnk6IChQX3NvcnRfYnlfaXRlbSkgPT5cclxuICAgICAgZGlzcGF0Y2ggKCBcclxuICAgICAgICBQX3NvcnRfYnlfaXRlbSA9PT0gJ2RhdGUnID8gTVBfc29ydEJ5RGF0ZSAoKVxyXG4gICAgICAgIC8vUF9zb3J0X2J5X2l0ZW0gPT09ICdkYXRlJyA/IHNvcnRCeURhdGUgKClcclxuICAgICAgICAgIDogUF9zb3J0X2J5X2l0ZW0gPT09ICdhbW91bnQnID8gTVBfc29ydEJ5QW1vdW50ICgpXHJcbiAgICAgICAgICAvLzogUF9zb3J0X2J5X2l0ZW0gPT09ICdhbW91bnQnID8gc29ydEJ5QW1vdW50ICgpXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgIC8vTURUUF9zb3J0QnlEYXRlOiAoKSA9PiBkaXNwYXRjaChzb3J0QnlEYXRlICgpKSxcclxuICAgIE1EVFBfc29ydEJ5RGF0ZTogKCkgPT4gZGlzcGF0Y2goTVBfc29ydEJ5RGF0ZSAoKSksXHJcbiAgICAvL01EVFBfc29ydEJ5QW1vdW50OiAoKSA9PiBkaXNwYXRjaChzb3J0QnlBbW91bnQgKCkpLFxyXG4gICAgTURUUF9zb3J0QnlBbW91bnQ6ICgpID0+IGRpc3BhdGNoKE1QX3NvcnRCeUFtb3VudCAoKSksXHJcbiAgICBNRFRQX3NldFN0YXJ0RGF0ZTogKFBfc3RhcnRfZGF0ZSkgPT5cclxuICAgIC8vc2V0U3RhcnREYXRlOiAoUF9zdGFydF9kYXRlKSA9PlxyXG4gICAgICBkaXNwYXRjaCAoTVBfc2V0U3RhcnREYXRlKFBfc3RhcnRfZGF0ZSkgKSxcclxuICAgICAgLy9kaXNwYXRjaCAoc2V0U3RhcnREYXRlKFBfc3RhcnRfZGF0ZSkgKSxcclxuICAgIE1EVFBfc2V0RW5kRGF0ZTogKFBfZW5kX2RhdGUpID0+XHJcbiAgICAvL3NldEVuZERhdGU6IChQX2VuZF9kYXRlKSA9PlxyXG4gICAgICBkaXNwYXRjaCAoTVBfc2V0RW5kRGF0ZShQX2VuZF9kYXRlKSApXHJcbiAgICAgIC8vZGlzcGF0Y2ggKHNldEVuZERhdGUoUF9lbmRfZGF0ZSkgKVxyXG4gIH0gICAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoR0NfbWFwX3N0YXRlX3RvX3Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vKENMU19leHBlbnNlX2xpc3RfZmlsdGVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChFeHBlbnNlTGlzdEZpbHRlcnMpO1xyXG4iLCJcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbnNlYzAxM2FfTDE0MF9leHBlbnNlc19zdW1tYXJ5LmpzeFxyXG5cclxuSzpcXEEwMV9VZGVteVxcQzAyM19Db21wbGV0ZV9SZWFjdF9XZWJfRGV2XFxCdWRnZXQtYXBwXFxcclxuc3JjXFxzZWMwMDlhX2NvbXBvbmVudHNcXHNlYzAxM2FfTDE0MF9leHBlbnNlc19zdW1tYXJ5LmpzeFxyXG5cclxuaW1wb3J0IHsgU0ZDX2V4cGVuc2VzX3N1bW1hcnkgfSBmcm9tICcuLi8uLi9zZWMwMDlhX2NvbXBvbmVudHMvc2VjMDEzYV9MMTQwX2V4cGVuc2VzX3N1bW1hcnkuanN4JztcclxuICAgICAgICAgIC8vW1MwNzI1MTY2N3xzZWMwMDlhX1NGQ19leHBlbnNlX2Rhc2hib2FyZF9wYWdlLmpzeDo6c2VjMDEzYV9MMTQwX2V4cGVuc2VzX3N1bW1hcnkgaW1wb3J0LTE7XVxyXG5cclxuLy8gIFNFQ18wMTMgLS0tIDE0MC4gQnVpbGQgSXQ6IEFkZGluZyBTdW1tYXJ5IENvbXBvbmVudCAxODozOVxyXG5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCc7XHJcblxyXG5pbXBvcnQgTVBfU0xDVF9nZXRWaXNpYmxlRXhwZW5zZXMgZnJvbSBcIi4uL3NlYzAxMWFfTDA5OV9zZWxlY3RvcnMvc2VjMDExYV9MMDk5X1NMQ1RfZXhwZW5zZXMuanN4XCI7XHJcbmltcG9ydCBNUF9zZWxlY3RFeHBlbnNlc1RvdGFsIGZyb20gXCIuLi9zZWMwMTFhX0wwOTlfc2VsZWN0b3JzL3NlYzAxM2FfTDEzOV9TTENUX3RvdGFsX2V4cGVuc2VzLmpzeFwiO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgU0ZDX2V4cGVuc2VzX3N1bW1hcnk9KHsgdG90YWxfZXhwZW5zZV9jb3VudCwgdG90YWxfZXhwZW5zZV9hbW91bnQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGV4cGVuc2Vfd29yZCA9IHRvdGFsX2V4cGVuc2VfY291bnQgPiAxID8gXCJleHBlbnNlc1wiIDogXCJleHBlbnNlXCI7XHJcbiAgICBjb25zdCB0b3RhbF9leHBlbnNlX2Ftb3VudF9mb3JtYXR0ZWQgPSBudW1lcmFsKHRvdGFsX2V4cGVuc2VfYW1vdW50IC8gMTAwKS5mb3JtYXQoXCIkMCwwLjAwXCIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvdGFsX2V4cGVuc2VfY291bnQgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDE+Tm8gRXhwZW5zZXMgU2VsZWN0ZWQ8L2gxPlxyXG4gICAgICAgICAgICApIDogPGgxPlZpZXdpbmcge3RvdGFsX2V4cGVuc2VfY291bnR9IHtleHBlbnNlX3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxsaW5nIHt0b3RhbF9leHBlbnNlX2Ftb3VudF9mb3JtYXR0ZWR9PC9oMT5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApXHJcbn07XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IEdGX21hcF9zdGF0ZV90b19wcm9wcyA9IChQX3N0YXRlKSA9PlxyXG57XHJcbiAgICBjb25zdCBleHBlbnNlcyA9IE1QX1NMQ1RfZ2V0VmlzaWJsZUV4cGVuc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoUF9zdGF0ZS5leHBlbnNlcywgUF9zdGF0ZS5maWx0ZXJzKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbF9leHBlbnNlX2Ftb3VudCA9IE1QX3NlbGVjdEV4cGVuc2VzVG90YWwgKGV4cGVuc2VzKTtcclxuXHJcbiAgICBjb25zdCB0b3RhbF9leHBlbnNlX2NvdW50ID0gZXhwZW5zZXMubGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiB7ICB0b3RhbF9leHBlbnNlX2NvdW50LCB0b3RhbF9leHBlbnNlX2Ftb3VudCB9O1xyXG59O1xyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0IChHRl9tYXBfc3RhdGVfdG9fcHJvcHMpIChTRkNfZXhwZW5zZXNfc3VtbWFyeSk7XHJcbiIsIlxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5zZWMwMTNhX0wxMzlfU0xDVF90b3RhbF9leHBlbnNlcy5qc3hcclxuXHJcbks6XFxBMDFfVWRlbXlcXEJ1ZGdldC1hcHBfMDNcXHNyY1xcc2VjMDExYV9MMDk5X3NlbGVjdG9yc1xcc2VjMDEzYV9MMTM5X1NMQ1RfdG90YWxfZXhwZW5zZXMuanN4XHJcblxyXG4vLyAgU0VDXzAxMyAtLS0gMTM5LiBCdWlsZCBJdDogQWRkaW5nIFRvdGFsIFNlbGVjdG9yIDE3OjI1XHJcblxyXG5pbXBvcnQgTVBfc2VsZWN0RXhwZW5zZXNUb3RhbCBmcm9tIFwiLi4vLi4vc2VjMDExYV9MMDk5X3NlbGVjdG9ycy9zZWMwMTNhX0wxMzlfU0xDVF90b3RhbF9leHBlbnNlcy5qc3hcIjtcclxuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoUF9leHBlbnNlcykgPT4ge1xyXG4gICAgaWYgKCAhIFBfZXhwZW5zZXMgKSB0aHJvdyBuZXcgRXJyb3IgKFwiICAgKioqIHBhc3NlZCBwYXJhbWV0ZXIgaXMgbnVsbC91bmRlZmluZWRcIik7XHJcbiAgICBpZiAoICEgQXJyYXkuaXNBcnJheSAoUF9leHBlbnNlcykgKSAgdGhyb3cgbmV3IEVycm9yIChcIiAgICoqKiBwYXNzZWQgcGFyYW1ldGVyIGlzIG5vdCBhbiBhcnJheVwiKTtcclxuXHJcbiAgICBpZiAoIChQX2V4cGVuc2VzLmxlbmd0aCA9PT0gMSkgJiYgKHR5cGVvZiBQX2V4cGVuc2VzWzBdLmFtb3VudCAhPT0gXCJudW1iZXJcIikgKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvciAoXCIgICAqKiogVGhlcmUgaXMgbm8gb2JqZWN0IHdpdGggYW4gZXhwZW5zZSBlbGVtZW50LlwiKTtcclxuXHJcbiAgICBjb25zdCBMRl9nZXRfYW1vdW50ID0gKFBfZXhwZW5zZSkgPT4gKHR5cGVvZiBQX2V4cGVuc2UuYW1vdW50ID09PSAnbnVtYmVyJykgPyBQX2V4cGVuc2UuYW1vdW50IDogMDtcclxuICAgIHJldHVybiBQX2V4cGVuc2VzLnJlZHVjZSggKGFjdW0sIGV4cGVuc2UpID0+IGFjdW0gKyBMRl9nZXRfYW1vdW50KGV4cGVuc2UpLCAwICk7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
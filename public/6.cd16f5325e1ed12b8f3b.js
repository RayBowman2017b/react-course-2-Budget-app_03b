(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/sec009a_components/sec016a_L162_login_page.jsx":
/*!************************************************************!*\
  !*** ./src/sec009a_components/sec016a_L162_login_page.jsx ***!
  \************************************************************/
/*! exports provided: SFC_login_page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SFC_login_page", function() { return SFC_login_page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _sec011a_L099_actions_sec016a_L162_ACTN_auth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx */ "./src/sec011a_L099_actions/sec016a_L162_ACTN_auth.jsx");
/***************************************************************************

sec016a_L162_login_page.jsx

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

import MP_SFC_login_page from '../../sec009a_components/sec016a_L162_login_page.jsx';

 ***************************************************************************/





var GC_button_style = {
  padding: 0.2 + "rem",
  margin: 1 + "rem",
  float: "left",
  clear: "left"
};
var GC_message_style = {
  padding: 0.2 + "rem",
  margin: 1 + "rem",
  top_margin: 7 + "rem",
  float: "left",
  clear: "right"
};
var GC_testbox01_style = {
  padding: 0.2 + "rem",
  margin: 1 + "rem",
  top_margin: 7 + "rem",
  float: "left"
};

var GC_link_with_children = function GC_link_with_children(P_props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: GC_button_style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: P_props.route,
    activeClassName: "is-active",
    exact: true
  }, P_props.children));
};

var SFC_login_page = function SFC_login_page(P_props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "_box-layout"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Expensify App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "It's time to get your expenses under control."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "USERNAME",
    id: "TXBX_username",
    style: GC_testbox01_style
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "PASSWORD",
    id: "TXBX_password",
    style: GC_testbox01_style
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: P_props.BTN_CLK_start_login,
    style: GC_button_style
  }, "LOGIN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GC_link_with_children, {
    route: "/dashboard/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, 'TO > dashboard'))));
};

var GF_map_dispatch_to_props = function GF_map_dispatch_to_props(P_dispatch) {
  return {
    BTN_CLK_start_login: function BTN_CLK_start_login(P_login_obj) {
      return P_dispatch(Object(_sec011a_L099_actions_sec016a_L162_ACTN_auth_jsx__WEBPACK_IMPORTED_MODULE_4__["MP_start_login"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(undefined, GF_map_dispatch_to_props)(SFC_login_page));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjMDA5YV9jb21wb25lbnRzL3NlYzAxNmFfTDE2Ml9sb2dpbl9wYWdlLmpzeCJdLCJuYW1lcyI6WyJHQ19idXR0b25fc3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luIiwiZmxvYXQiLCJjbGVhciIsIkdDX21lc3NhZ2Vfc3R5bGUiLCJ0b3BfbWFyZ2luIiwiR0NfdGVzdGJveDAxX3N0eWxlIiwiR0NfbGlua193aXRoX2NoaWxkcmVuIiwiUF9wcm9wcyIsInJvdXRlIiwiY2hpbGRyZW4iLCJTRkNfbG9naW5fcGFnZSIsIkJUTl9DTEtfc3RhcnRfbG9naW4iLCJHRl9tYXBfZGlzcGF0Y2hfdG9fcHJvcHMiLCJQX2Rpc3BhdGNoIiwiUF9sb2dpbl9vYmoiLCJNUF9zdGFydF9sb2dpbiIsImNvbm5lY3QiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FDckI7QUFBRUMsU0FBTyxFQUFFLE1BQU0sS0FBakI7QUFBd0JDLFFBQU0sRUFBRSxJQUFJLEtBQXBDO0FBQTJDQyxPQUFLLEVBQUUsTUFBbEQ7QUFBMERDLE9BQUssRUFBQztBQUFoRSxDQURBO0FBR0EsSUFBTUMsZ0JBQWdCLEdBQ3RCO0FBQUVKLFNBQU8sRUFBRSxNQUFNLEtBQWpCO0FBQXdCQyxRQUFNLEVBQUUsSUFBSSxLQUFwQztBQUEyQ0ksWUFBVSxFQUFFLElBQUksS0FBM0Q7QUFBa0VILE9BQUssRUFBRSxNQUF6RTtBQUFpRkMsT0FBSyxFQUFDO0FBQXZGLENBREE7QUFHQSxJQUFNRyxrQkFBa0IsR0FDeEI7QUFBRU4sU0FBTyxFQUFFLE1BQU0sS0FBakI7QUFBd0JDLFFBQU0sRUFBRSxJQUFJLEtBQXBDO0FBQTJDSSxZQUFVLEVBQUUsSUFBSSxLQUEzRDtBQUFrRUgsT0FBSyxFQUFFO0FBQXpFLENBREE7O0FBSUEsSUFBTUsscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxPQUFEO0FBQUEsU0FFMUI7QUFBUSxTQUFLLEVBQUVUO0FBQWYsS0FDQSwyREFBQyx3REFBRDtBQUNFLE1BQUUsRUFBRVMsT0FBTyxDQUFDQyxLQURkO0FBRUUsbUJBQWUsRUFBQyxXQUZsQjtBQUdFLFNBQUssRUFBRTtBQUhULEtBSUVELE9BQU8sQ0FBQ0UsUUFKVixDQURBLENBRjBCO0FBQUEsQ0FBOUI7O0FBWU8sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDSCxPQUFEO0FBQUEsU0FDNUI7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNGLHdFQUNFLHVGQURGLEVBRUUsc0hBRkYsRUFHSTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsZUFBVyxFQUFDLFVBRmQ7QUFHRSxNQUFFLEVBQUMsZUFITDtBQUlFLFNBQUssRUFBRUY7QUFKVCxJQUhKLEVBU0k7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGVBQVcsRUFBQyxVQUZkO0FBR0UsTUFBRSxFQUFDLGVBSEw7QUFJRSxTQUFLLEVBQUVBO0FBSlQsSUFUSixFQWVJO0FBQVEsV0FBTyxFQUFFRSxPQUFPLENBQUNJLG1CQUF6QjtBQUE4QyxTQUFLLEVBQUViO0FBQXJELGFBZkosRUFrQkksMkRBQUMscUJBQUQ7QUFBdUIsU0FBSyxFQUFFO0FBQTlCLEtBQ00sdUVBQUssZ0JBQUwsQ0FETixDQWxCSixDQURFLENBRDRCO0FBQUEsQ0FBdkI7O0FBNEJQLElBQU1jLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsVUFBRDtBQUFBLFNBQWtCO0FBQy9DRix1QkFBbUIsRUFBRSw2QkFBQ0csV0FBRDtBQUFBLGFBQWlCRCxVQUFVLENBQUNFLHVHQUFjLEVBQWYsQ0FBM0I7QUFBQTtBQUQwQixHQUFsQjtBQUFBLENBQWpDOztBQUllQywwSEFBTyxDQUFDQyxTQUFELEVBQVlMLHdCQUFaLENBQVAsQ0FBOENGLGNBQTlDLENBQWYsRSIsImZpbGUiOiI2LmNkMTZmNTMyNWUxZWQxMmI4ZjNiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbnNlYzAxNmFfTDE2Ml9sb2dpbl9wYWdlLmpzeFxyXG5cclxuLy8gIFNFQ18wMTYgLS0tIDE2Mi4gTG9naW4gUGFnZSBhbmQgR29vZ2xlIEF1dGhlbnRpY2F0aW9uIDE5OjI2XHJcblxyXG5pbXBvcnQgTVBfU0ZDX2xvZ2luX3BhZ2UgZnJvbSAnLi4vLi4vc2VjMDA5YV9jb21wb25lbnRzL3NlYzAxNmFfTDE2Ml9sb2dpbl9wYWdlLmpzeCc7XHJcblxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBNUF9zdGFydF9sb2dpbiB9IGZyb20gJy4uL3NlYzAxMWFfTDA5OV9hY3Rpb25zL3NlYzAxNmFfTDE2Ml9BQ1ROX2F1dGguanN4JztcclxuXHJcbmNvbnN0IEdDX2J1dHRvbl9zdHlsZSA9XHJcbnsgcGFkZGluZzogMC4yICsgXCJyZW1cIiwgbWFyZ2luOiAxICsgXCJyZW1cIiwgZmxvYXQ6IFwibGVmdFwiLCBjbGVhcjpcImxlZnRcIiB9O1xyXG5cclxuY29uc3QgR0NfbWVzc2FnZV9zdHlsZSA9XHJcbnsgcGFkZGluZzogMC4yICsgXCJyZW1cIiwgbWFyZ2luOiAxICsgXCJyZW1cIiwgdG9wX21hcmdpbjogNyArIFwicmVtXCIsIGZsb2F0OiBcImxlZnRcIiwgY2xlYXI6XCJyaWdodFwiIH07XHJcblxyXG5jb25zdCBHQ190ZXN0Ym94MDFfc3R5bGUgPVxyXG57IHBhZGRpbmc6IDAuMiArIFwicmVtXCIsIG1hcmdpbjogMSArIFwicmVtXCIsIHRvcF9tYXJnaW46IDcgKyBcInJlbVwiLCBmbG9hdDogXCJsZWZ0XCJ9O1xyXG5cclxuXHJcbmNvbnN0IEdDX2xpbmtfd2l0aF9jaGlsZHJlbiA9IChQX3Byb3BzKSA9PlxyXG4oXHJcbiAgICA8YnV0dG9uIHN0eWxlPXtHQ19idXR0b25fc3R5bGV9PlxyXG4gICAgPE5hdkxpbmtcclxuICAgICAgdG89e1BfcHJvcHMucm91dGV9XHJcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiXHJcbiAgICAgIGV4YWN0PXt0cnVlfVxyXG4gICAgPntQX3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9OYXZMaW5rPlxyXG4gIDwvYnV0dG9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNGQ19sb2dpbl9wYWdlID0gKFBfcHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIl9ib3gtbGF5b3V0XCI+XHJcbjxkaXY+XHJcbiAgPGgxPkV4cGVuc2lmeSBBcHA8L2gxPlxyXG4gIDxwPkl0J3MgdGltZSB0byBnZXQgeW91ciBleHBlbnNlcyB1bmRlciBjb250cm9sLjwvcD5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiVVNFUk5BTUVcIlxyXG4gICAgICBpZD1cIlRYQlhfdXNlcm5hbWVcIlxyXG4gICAgICBzdHlsZT17R0NfdGVzdGJveDAxX3N0eWxlfVxyXG4gICAgLz5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiUEFTU1dPUkRcIlxyXG4gICAgICBpZD1cIlRYQlhfcGFzc3dvcmRcIlxyXG4gICAgICBzdHlsZT17R0NfdGVzdGJveDAxX3N0eWxlfVxyXG4gICAgLz5cclxuICAgIDxidXR0b24gb25DbGljaz17UF9wcm9wcy5CVE5fQ0xLX3N0YXJ0X2xvZ2lufSBzdHlsZT17R0NfYnV0dG9uX3N0eWxlfT5cclxuICAgIExPR0lOXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxHQ19saW5rX3dpdGhfY2hpbGRyZW4gcm91dGU9e1wiL2Rhc2hib2FyZC9cIn0+XHJcbiAgICAgICAgICA8aDM+eydUTyA+IGRhc2hib2FyZCd9PC9oMz5cclxuICAgIDwvR0NfbGlua193aXRoX2NoaWxkcmVuPlxyXG4gIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxuY29uc3QgR0ZfbWFwX2Rpc3BhdGNoX3RvX3Byb3BzID0gKFBfZGlzcGF0Y2gpID0+ICgge1xyXG4gICAgQlROX0NMS19zdGFydF9sb2dpbjogKFBfbG9naW5fb2JqKSA9PiBQX2Rpc3BhdGNoKE1QX3N0YXJ0X2xvZ2luKCkpXHJcbn0gKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QodW5kZWZpbmVkLCBHRl9tYXBfZGlzcGF0Y2hfdG9fcHJvcHMpIChTRkNfbG9naW5fcGFnZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
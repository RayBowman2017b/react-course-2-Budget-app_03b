
/*
  sec009a_app_router.jsx

 */

import React from 'react';
//import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Loadable from 'react-loadable';
import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";
import MP_SFC_private_route from './sec016a_L166_private_app_router.jsx';
import MP_SFC_public_route from './sec016a_L167_public_app_router.jsx';

export const MP_history = createHistory();

/*************************************************************  /
import  CLS_add_expense_page  from  "../sec009a_components/sec009a_CLS_add_expense_page.jsx";
import  CLS_edit_expense_page  from  "../sec009a_components/sec009a_CLS_edit_expense_page.jsx";
import  SFC_expense_dashboard_page  from  "../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx";
import  SFC_header from  "../sec009a_components/sec009a_SFC_header.jsx";
import  SFC_help_page  from  "../sec009a_components/sec009a_SFC_help_page.jsx";
import  SFC_not_found_page  from  "../sec009a_components/sec009a_SFC_not_found_page.jsx";
 /*************************************************************/

 /*************************************************************/
const SFC_login_page = Loadable({
  loader: () => import('../sec009a_components/sec016a_L162_login_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const CLS_add_expense_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_CLS_add_expense_page.jsx'),
  loading: MP_common_loading_handler,
  //timeout: 10000, // 10 seconds
  timeout: 3000, // 3 seconds
});
const CLS_edit_expense_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_CLS_edit_expense_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const SFC_expense_dashboard_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const SFC_help_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_SFC_help_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});
const SFC_not_found_page = Loadable({
  loader: () => import('../sec009a_components/sec009a_SFC_not_found_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});


//import CLS_X_page from "./sec009a_components/z32_X_page.jsx";

const CLS_X_page = Loadable({
  loader: () => import('../sec009a_components/z32_X_page.jsx'),
  loading: MP_common_loading_handler,
  timeout: 3000, // 3 seconds
});

/*************************************************************/

console.log ('router called');

const GC_app_router = () => (
    <Router history={MP_history}>
  <div>
    <Switch>
        <MP_SFC_public_route path="/" component={SFC_login_page} exact={true} />
        <MP_SFC_private_route path="/dashboard" component={SFC_expense_dashboard_page} exact={true} />
        <MP_SFC_private_route path="/create" component={CLS_add_expense_page}  />
        <MP_SFC_private_route path="/edit/:id" component={CLS_edit_expense_page}  />
        <Route path="/help" component={SFC_help_page}  />
        <Route path="/xpr" component={CLS_X_page}  />
        <Route component={SFC_not_found_page}  />
    </Switch>
  </div>
    </Router>
  );

export default GC_app_router;

//#########################################################
//#########################################################


/*
  sec009a_app_router.jsx

 */


import React from 'react';

//  BrowserRouter will be used only once
//  Route will be used for each path
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";


/*************************************************************/
import  CLS_add_expense_page  from  "../sec009a_components/sec009a_CLS_add_expense_page.jsx";
import  CLS_edit_expense_page  from  "../sec009a_components/sec009a_CLS_edit_expense_page.jsx";
import  SFC_expense_dashboard_page  from  "../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx";
import  SFC_header from  "../sec009a_components/sec009a_SFC_header.jsx";
import  SFC_help_page  from  "../sec009a_components/sec009a_SFC_help_page.jsx";
import  SFC_not_found_page  from  "../sec009a_components/sec009a_SFC_not_found_page.jsx";
 /*************************************************************/

 /*************************************************************
const SFC_header = Loadable({
  loader: () => import('../sec009a_components/sec009a_SFC_header.jsx'),
  loading: MP_common_loading_handler,
  //timeout: 10000, // 10 seconds
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

 *************************************************************/

//  ----------------------------------------------------------------

console.log ('router called');

//  ----------------------------------------------------------------

const GC_app_router = () => (
    <BrowserRouter>
  <div>
    <SFC_header />

    <Switch>
        <Route path="/" component={SFC_expense_dashboard_page} exact={true} />
        <Route path="/create" component={CLS_add_expense_page}  />
        <Route path="/edit/:id" component={CLS_edit_expense_page}  />
        <Route path="/help" component={SFC_help_page}  />
        <Route component={SFC_not_found_page}  />
    </Switch>
  </div>
    </BrowserRouter>
  );

export default GC_app_router;

//#########################################################
//#########################################################

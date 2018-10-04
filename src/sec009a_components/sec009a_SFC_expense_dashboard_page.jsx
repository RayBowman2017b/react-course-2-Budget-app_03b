
/*

  sec009a_SFC_expense_dashboard_page.jsx

K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
SEC_012_Testing_Your_Application\proj_02\Budget-app\src\sec009a_components\
sec009a_SFC_expense_dashboard_page.jsx

//  SEC_009 --- 80. Organizing Our Routes 12:30

import GC_expense_dashboard_page from "../../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx";

 */

import React from 'react';

import SFC_expense_list from "./sec011a_L101_expense_list.jsx";

import CLS_expense_list_filters from "./sec011a_L103_expense_list_filters.jsx";

import CLS_ErrorBoundary from "../Utilities_01/Error_Boundaries.jsx";

const GC_expense_dashboard_page = () =>
(
  <div>
    <div>This is from my dashboard component.</div>
    <CLS_ErrorBoundary><CLS_expense_list_filters /></CLS_ErrorBoundary>
    <SFC_expense_list />
  </div>
);


export default GC_expense_dashboard_page;

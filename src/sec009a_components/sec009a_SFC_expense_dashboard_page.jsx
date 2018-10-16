
/*
  sec009a_SFC_expense_dashboard_page.jsx

import GC_expense_dashboard_page from "../../sec009a_components/sec009a_SFC_expense_dashboard_page.jsx";

 */

import React from 'react';

import SFC_expense_list from "./sec011a_L101_expense_list.jsx";

//import CLS_expense_list_filters from "./sec011a_L103_expense_list_filters.jsx";
import ExpenseListFilters from "./sec011a_L103_expense_list_filters.jsx";

import SFC_expenses_summary from './sec013a_L140_expenses_summary.jsx';

import CLS_ErrorBoundary from "../Utilities_01/Error_Boundaries.jsx";

    //<CLS_ErrorBoundary><CLS_expense_list_filters /></CLS_ErrorBoundary>

const GC_expense_dashboard_page = () =>
(
  <div>
    <span style={{padding: 1 + "rem"}}>This is from my dashboard component.</span>
    <SFC_expenses_summary />
    <CLS_ErrorBoundary><ExpenseListFilters /></CLS_ErrorBoundary>
    <SFC_expense_list />
  </div>
);


export default GC_expense_dashboard_page;

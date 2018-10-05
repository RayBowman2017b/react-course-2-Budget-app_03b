
/*

  sec009a_SFC_not_found_page.jsx

import GC_not_found_page from "../../sec009a_components/sec009a_SFC_not_found_page.jsx";

 */

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import React from 'react';

const GC_not_found_page = () =>
(
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);


export default GC_not_found_page;

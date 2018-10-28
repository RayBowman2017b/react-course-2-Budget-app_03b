
/*
  sec011a_L099_STR_configure_store.jsx

 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import MP_expensesReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_expenses.jsx";
import MP_filtersReducer from "../sec011a_L099_reducers/sec011a_L099_RDCR_filters.jsx";
import MP_authReducer from "../sec011a_L099_reducers/sec016a_L165_RDCR_auth.jsx";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

const L_store = createStore
        (
            combineReducers (
            {
                expenses: MP_expensesReducer,
                filters: MP_filtersReducer,
                auth: MP_authReducer
            }
                            ),
            //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            composeEnhancers(applyMiddleware(thunk))
        );

    return L_store;
}


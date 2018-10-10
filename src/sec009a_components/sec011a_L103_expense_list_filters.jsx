
/*
  sec011a_L103_expense_list_filters.jsx

 */

import React from 'react';

import { connect } from 'react-redux';

  import { DateRangePicker } from 'react-dates';

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";

// const DateRangePicker = Loadable({
//   loader: () => import('react-dates'),
//   loading: MP_common_loading_handler,
//   timeout: 3000, // 3 seconds
// });



//import { MP_setTextFilter, MP_sortByDate, MP_sortByAmount, MP_setStartDate, MP_setEndDate  }
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate  }
  from "../sec011a_L099_actions/sec011a_L099_ACTN_filters.jsx";

//export class CLS_expense_list_filters extends React.Component
export class ExpenseListFilters extends React.Component
{
    state = {
      calenderFocused: null
    };

    constructor (P_props)
    {
      super (P_props);
    }

    onExpenseDatesChange = ( { startDate, endDate } ) => {
      //this.props.MDTP_setStartDate(startDate);
      this.props.setStartDate(startDate);

      //this.props.MDTP_setEndDate (endDate);
      this.props.setEndDate (endDate);
    };

    onExpenseFocusChange = (calenderFocused) => {
      this.setState ( () => ( { calenderFocused } ) );
    };

    TXBX_filters_change = (P_event) =>  {
      //this.props.MDTP_setTextFilter (P_event.target.value);
      this.props.setTextFilter (P_event.target.value);
    };

    SLCT_sort_item_change = (P_event) =>  {
      //this.props.MDTP_sortBy (P_event.target.value);
      if (P_event.target.value === 'date')
        this.props.sortByDate ();
      else
      if (P_event.target.value === 'amount')
        this.props.sortByAmount ();
    };


    render () {
      return (
        <div>
            <input  type="text"
                    id="TBX_filters"
                    value={this.props.filters.text}
                    onChange={this.TXBX_filters_change}
            />

            <select
              value={this.props.filters.sortBy}
              onChange={this.SLCT_sort_item_change}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>


<DateRangePicker
  startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={ this.onExpenseDatesChange }
  focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={ this.onExpenseFocusChange } // PropTypes.func.isRequired,
  showClearDates={true}
  readOnly={false}
  numberOfMonths={1}
  isOutsideRange={ () => false }

/>

        </div>
      );

    };
}

const GC_map_state_to_props = (P_state) => {
    return {
        filters: P_state.filters
    };
};

const mapDispatchToProps = (dispatch, props) =>  {
  return (
  {
    //MDTP_setTextFilter: (P_TBX_filter_text) =>
    setTextFilter: (P_TBX_filter_text) =>
      //dispatch(MP_setTextFilter(P_TBX_filter_text)),
      dispatch(setTextFilter(P_TBX_filter_text)),
    //MDTP_sortBy: (P_sort_by_item) =>
    sortBy: (P_sort_by_item) =>
      dispatch ( 
        //P_sort_by_item === 'date' ? MP_sortByDate ()
        P_sort_by_item === 'date' ? sortByDate ()
          //: P_sort_by_item === 'amount' ? MP_sortByAmount ()
          : P_sort_by_item === 'amount' ? sortByAmount ()
            : undefined
                          ),
    sortByDate: () => dispatch(sortByDate ()),
    sortByAmount: () => dispatch(sortByAmount ()),
    //MDTP_setStartDate: (P_start_date) =>
    setStartDate: (P_start_date) =>
      //dispatch (MP_setStartDate(P_start_date) ),
      dispatch (setStartDate(P_start_date) ),
    //MDTP_setEndDate: (P_end_date) =>
    setEndDate: (P_end_date) =>
      //dispatch (MP_setEndDate(P_end_date) )
      dispatch (setEndDate(P_end_date) )
  }      );
};


export default connect(GC_map_state_to_props, mapDispatchToProps)
                        //(CLS_expense_list_filters);
                        (ExpenseListFilters);


/***************************************************************************

sec011a_L105_expense_form.jsx

 ***************************************************************************/


import React from "react";

import Loadable from 'react-loadable';

import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers.jsx";

import moment from 'moment';

// const moment = Loadable({
//   loader: () => import('moment'),
//   loading: MP_common_loading_handler,
//   timeout: 3000, // 3 seconds
// });

import { SingleDatePicker } from 'react-dates';

// const SingleDatePicker = Loadable({
//   loader: () => import('react-dates'),
//   loading: MP_common_loading_handler,
//   timeout: 3000, // 3 seconds
// });

const now = moment();

export default class CLS_expense_form extends React.Component
{
    constructor (P_props)
    {
        super (P_props);

        this.state = {
            description: P_props.expense ? P_props.expense.description : '',
            note:  P_props.expense ? P_props.expense.note : '',
            amount:  P_props.expense ? (P_props.expense.amount / 100).toString () : '',
            createdAt:  P_props.expense && P_props.expense.createdAt > 0 ? moment (P_props.expense.createdAt) : moment(),
            date: {},
            calenderFocused: false,
            buttonLabel: P_props.buttonLabel,

            error_conditions: {
                description_mssg: <div></div>,
                amount_mssg: <div></div>,
            }
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState ( () => ({ description }) );
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState ( () => ({ note }) );
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if ( ! amount || amount.match(/^\d+(\.\d{0,2})?$/) )
          this.setState ( () => ({ amount }) );
    };

    onDateChange = (createdAt) => {
        if (createdAt)
            this.setState( () => ({ createdAt }) );
    };

    onFocusChange = ({ focused }) => {
        this.setState( () => ({ calenderFocused: focused }) );
    };

    //======================================================================

    XPNF_check_errors ()
    {
        const description_mssg = ( ! this.state.description ) ?
            <div>{'   *** Please provide description'}</div> : <div></div>;
        const amount_mssg = ( ! this.state.amount ) ?
            <div>{'   *** Please provide amount'}</div> : <div></div>;
    
        this.setState((prevState) =>
            ( {
                ...prevState,
                error_conditions:
                {
                    description_mssg,
                    amount_mssg
                }
            } )
        );
    
        //console.log ("P_outer_this.amount " + this.state.amount);
    
        return ( this.state.description && this.state.amount );
    }
    //======================================================================

    onExpenseSubmit = (e) =>  {

        e.preventDefault ();

        if ( this.XPNF_check_errors () )
            this.props.onExpenseSubmit ( {
                description: this.state.description,
                amount: parseFloat (this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            } );
    };


    render () {
        return (
                <div>
                    {  this.state.error_conditions.description_mssg }
                    {  this.state.error_conditions.amount_mssg }

                    <div>Expense Form</div>
                    <form action="" onSubmit={this.onExpenseSubmit}>

                      <input
                        autoFocus
                        type="text"
                        placeholder="Description"
                        id="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                      />

                      <input
                        type="text"
                        placeholder="Amount"
                        id="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                      />

                      <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        id="createdAt_DatePicker"
                        readOnly={true}
                        numberOfMonths={1}
                        isOutsideRange={ () => false }
                      />

                      <textarea placeholder="Add a note for your expense (optional)"
                        id="Note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                      >
                      </textarea>
                      <button>
                        {this.state.buttonLabel}
                      </button>
                    </form>
                </div>
        );
    };
}


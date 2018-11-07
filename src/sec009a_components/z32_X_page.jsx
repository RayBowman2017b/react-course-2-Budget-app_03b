
/***************************************************************************

z32_X_page.jsx

K:\A01_Udemy\Budget-app_03\src\sec009a_components\z32_X_page.jsx

import CLS_X_page from "./sec009a_components/z32_X_page.jsx";


 ***************************************************************************/

import React from 'react';

import { connect } from 'react-redux';

// END: CLS_X_page

export default class CLS_X_page extends React.Component  {

    constructor (P_props) {

        super (P_props);

        this.state = {

            ST_stack : [],
            ST_ARY_fn : [],
            ST_cnt : 0
        }
    }
//=========================================================

    componentDidMount ()
    {
//        this.setState ( () => ({ count_persisted }) );
        this.set_ARY_fn ();
    }
//=========================================================

    CGM_div_01 ()  {
        return (
            <div>this is div 1</div>
        );
    }
//=========================================================

    CGM_div_02 ()  {
        return (
            <div>this is div 2</div>
        );
    }
//=========================================================
//=========================================================

    CGM_div_add ()  {
        return (
            <div id="target"></div>
        );
    }
//=========================================================
//=========================================================

    set_ARY_fn () {

        const L_ARY_vfn = [];
        L_ARY_vfn.push(this.CGM_div_01);
        L_ARY_vfn.push(this.CGM_div_02);
        L_ARY_vfn.push(this.CGM_div_add);

        this.setState ( () => ({ ST_ARY_fn : L_ARY_vfn }) );
    }
//=========================================================
//=========================================================

    render () {
        return (
            <div id="main">
              <form>
                <div id="heading">HEADING</div>
                <div id="root_01">
                </div>
              </form>
            </div>
        );
    }
//=========================================================
//=========================================================

}
// END: CLS_X_page

//=========================================================
//=========================================================

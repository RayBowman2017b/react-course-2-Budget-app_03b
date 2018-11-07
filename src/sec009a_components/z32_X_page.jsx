
/***************************************************************************

z32_X_page.jsx

K:\A01_Udemy\Budget-app_03\src\sec009a_components\z32_X_page.jsx

import CLS_X_page from "./sec009a_components/z32_X_page.jsx";


 ***************************************************************************/

import React from 'react';

import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

// END: CLS_X_page


const CGM_div_01 = () => {
        return (
            <div>this is div 1</div>
        );
    };


export default class CLS_X_page extends React.Component  {

    constructor (P_props) {

        super (P_props);
        this.main_ref = React.createRef ();
        this.heading_ref = React.createRef ();
        this.form_ref = React.createRef ();
        this.div1_ref = React.createRef ();
        this.div2_ref = React.createRef ();

        this.div1_obj = this.CGM_div_01 ();
        this.div2_obj = this.CGM_div_02 ();

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
//        this.set_ARY_fn ();
//        this.refs.ref_heading.text = "HEAAAAAAADING!!!";
//        this.refs.ref_root_01.append (this.CGM_div_01 ());
//        this.heading_ref.text = "++++++++++++++++";

        console.log ("this.form_ref");
        console.log (this.form_ref);

        if (this.heading_ref.current !== null) {

            console.log ("this.heading_ref.current");
            console.log (this.heading_ref.current);
            this.heading_ref.current.textContent = "+++++++++++++++++++++";
            //console.log (this.heading_ref.current);

            //  THIS blew up ... it blew up real good!
            //ReactDOM.render (this.div1_obj, this.heading_ref.current);
            //ReactDOM.render (this.div2_obj, this.div1_obj.current);

            const L_obj1 = this.CGM_div_01 ();
            const L_obj2 = this.CGM_div_02 ();
            //const L_obj2 = <L_obj1/>;

            //this.heading_ref.current.append (L_obj1);
            this.heading_ref.current.append (this.div1_obj);
            //  rendered as:
            //  +++++++++++++++++++++[object Object]

            console.log (this.heading_ref.current);
            console.log (this.div1_obj.current);
            console.log ("typeof this.div1_obj.current");
            console.log (typeof this.div1_obj.current);
            //this.heading_ref.current.append ( ReactDOM.render(this.CGM_div_01 (), this.heading_ref.current) );
        }
    }
//=========================================================

//=========================================================
//=========================================================

    CGM_div_01 () {
        return (
            <div id="div1" ref={this.div1_ref}>this is div 1</div>
        );
    }
//=========================================================

    CGM_div_02 ()  {
        return (
            <div id="div1.1">this is div 2</div>
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

//        this.refs.ref_root_01.append ( ReactDOM.render(this.CGM_div_01 ()));
    }
//=========================================================
//                <div id="heading" ref="ref_heading">HEADING</div>
//                <div id="root_01" ref="ref_root_01">
//                </div>
//                <div id="heading" ref={ heading => this.set_heading (this) }>HEADING</div>
//=========================================================
    set_heading (heading) {
        //heading.text = "xxxxxxxxxxxx";
        console.log(heading);
    }

    render () {
        return (
            <div id="main" ref={this.main_ref}>
              <form ref={this.form_ref}>
                <div id="heading" ref={ this.heading_ref }>HEADING</div>
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

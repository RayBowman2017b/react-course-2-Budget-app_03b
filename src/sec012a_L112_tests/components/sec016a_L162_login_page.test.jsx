
/*

sec016a_L162_login_page.test.jsx

//  SEC_016 --- 162. Login Page and Google Authentication 19:26

*/

import React from 'react';

import { shallow } from 'enzyme';

import { SFC_login_page } from '../../sec009a_components/sec016a_L162_login_page.jsx';

describe ("COMPONENT TEST FOR LOGIN PAGE", () =>  {

    test ('should render login page matching snapshot', () =>  {
        const L_wrapper = shallow(<SFC_login_page />);
        expect (L_wrapper).toMatchSnapshot();
    } );

} );



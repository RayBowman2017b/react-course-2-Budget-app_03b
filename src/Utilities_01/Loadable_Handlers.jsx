
import React from 'react';

//  import { MP_common_loading_handler } from "../Utilities_01/Loadable_Handlers";

export const MP_common_loading_handler = (P_props) =>
{
  if (P_props.error) {
    console.log (`P_props.error is ${P_props.error}`);
    return <div>Error! </div>;
  } else if (P_props.timedOut) {
    return <div>Taking a long time... </div>;
  } else if (P_props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}


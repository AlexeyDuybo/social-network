import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";

import withUserId from "../HOC/withUserId";

export default Component=> {
    const RedirectComponent = props=> {
        if (props.userId){
            return <Component {...props}/>
        } else {
            return <Redirect to="/login"/>
        }
    }
    return compose(withUserId)(RedirectComponent);
}

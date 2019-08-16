import React from "react";
import { connect } from "react-redux";

import { getUserId } from "../store/auth/reducer";

const mapStateToProps = state => (
    {
        userId: getUserId(state)
    }
)

export default Component => {
    const WrapperdComponent = connect(mapStateToProps)(Component);
    return (...props) => <WrapperdComponent {...props}/>
}
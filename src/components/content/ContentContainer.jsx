import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";


import withRedirect from "../../HOC/withRedirect";
import Content from "./Content";


class ContentContainer extends React.Component {

    render(){
        console.log(this.props.userId);
        return <Content/>
    }

}

export default compose(
    withRedirect,
    connect(null)
)(ContentContainer)

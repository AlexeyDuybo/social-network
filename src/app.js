import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ContentContainer from "./components/content/ContentContainer";

import store from "./store/store";


export default class App extends React.Component {

    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <ContentContainer test="123"/>
                </BrowserRouter>
            </Provider>
        )
    }

}
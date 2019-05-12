import React, { Fragment, ReactNode } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "../reducers";

import { Helmet } from "react-helmet";

interface IProps {
    children?: ReactNode,
    title?: string,
    description?: string,
    path?: string
}

export default function App ({ children, title, description, path }: IProps) {
    const store = createStore(
        reducers, { 
            auth: { authenticated: localStorage.getItem('user') } as any 
        }, applyMiddleware(reduxThunk)  
    );

    return (
        <Provider store={store}>
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{ title }</title>
                    <meta name="description" content={ description } />
                    <link rel="canonical" href={ path } />
                </Helmet>
                { children }
            </Fragment>
        </Provider>
    );
}

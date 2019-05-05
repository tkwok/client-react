import * as React from "react";
import { Fragment } from "react";

import { Helmet } from "react-helmet";

interface IProps {
    children?: React.ReactNode,
    title?: string,
    description?: string,
    path?: string
}

export default function App ({ children, title, description, path }: IProps) {
    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <link rel="canonical" href={ path } />
            </Helmet>
            { children }
        </Fragment>
    );
}

import * as React from "react";
import { Fragment } from "react";

import { Helmet } from "react-helmet";

interface IProps {
    children: React.ReactNode;
}

export default function App ({ children }: IProps) {
    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Client Home</title>
                <meta name="description" content={'something'} />
                <link rel="canonical" href={'something'} />
            </Helmet>
            { children }
        </Fragment>
    );
}

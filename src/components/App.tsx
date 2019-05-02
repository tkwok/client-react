import * as React from "react";
import { Fragment } from "react";

interface IProps {
    children: React.ReactNode;
}

export default function App ({ children }: IProps) {
    return (
        <Fragment>
            { children }
        </Fragment>
    );
}

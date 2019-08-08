import React from "react";
import { Component, Fragment } from "react";
interface IProps {
  compiler: string;
  framework: string;
  bundler: string;
}
export class Hello extends Component<IProps, {}> {
  render() {
    return (
      <Fragment>
        <h1>
          This is a {this.props.framework} application using{" "}
          {this.props.compiler} with {this.props.bundler}
        </h1>
      </Fragment>
    );
  }
}

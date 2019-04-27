import React, { Component } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal"
};

interface IProps {
  page?: string;
}

interface IState {
  class?: string;
}

export default class Link extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL
    };
  }

  _onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  _onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || "#"}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

interface IProps {
    auth: object;
    history: any;
  }

export default (ChildComponent: any) => {
    class ComposedComponent extends Component<IProps> {

        // our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // anytime component receive new props
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            (!this.props.auth) ? this.props.history.push('/') : null;
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps (state) {
        return { auth: state.auth.authenticated };
    }

    return connect(mapStateToProps)(ComposedComponent);
};

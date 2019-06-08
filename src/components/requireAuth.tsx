import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { AuthType } from '../actions/types';
import { RootReducerType } from "../reducers";

interface IProps {
    auth: AuthType;
    history: any;
}

export default (ChildComponent: typeof Component ) => {

    const ComposedComponent = (props: IProps) => {
        useEffect(() => {
            (!props.auth) ? props.history.push('/') : null;
        });

        return <ChildComponent {...props} />;        
    }

    /**
     * mapStateToProps
     * 
     * @param {RootReducerType} state 
     * @returns 
     */
    function mapStateToProps (state: RootReducerType) {
        return { auth: state.auth.authenticated };
    }

    return connect(mapStateToProps)(ComposedComponent);
};

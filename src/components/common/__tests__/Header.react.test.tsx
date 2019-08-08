import * as React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import { Button } from "reactstrap";

import Header from "../Header";
import reducers from "../../../reducers";

const store = createStore(
    reducers, { 
        auth: { authenticated: localStorage.getItem('user') } as any 
    }, applyMiddleware(reduxThunk)  
);

describe("header component", () => {
    const wrapper = shallow<typeof Header>(
        <Provider store={store}>
            <Header></Header>
        </Provider>);

    test("header renders properly on screen", () => {
        expect(wrapper.exists()).toBe(true);
    });

    test("header should show sign up link", () => {
        expect(wrapper.children(Button).length).toEqual(0);
    });
});

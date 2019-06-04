import * as React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import Header from "../Header";
import reducers from "../../../reducers";

const store = createStore(
    reducers, { 
        auth: { authenticated: localStorage.getItem('user') } as any 
    }, applyMiddleware(reduxThunk)  
);

describe("header component", () => {
    test("header renders properly on screen", () => {
        const wrapper = shallow<typeof Header>(
            <Provider store={store}>
                <Header></Header>
            </Provider>);
        expect(wrapper.exists()).toBe(true);
    });
});

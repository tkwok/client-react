import * as React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("header component", () => {
    test("header renders properly", () => {
        const wrapper = shallow<typeof Header>(<Header></Header>);
        expect(wrapper.exists()).toBe(true);
    });
});

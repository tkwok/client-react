import React from "react";
import Header from "../Header";
import { shallow } from "enzyme";
test("Link changes the class when hovered", () => {
    const checkbox = shallow(<Header></Header>);
});

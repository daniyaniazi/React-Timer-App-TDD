import React from 'react'
import { shallow } from "enzyme";
import Timer from "./Timer"

describe('Timer Component renders', () => {
    let container = shallow(<Timer />);
    //Expected at least one div in our App Component
    it('should render a div', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    });

    it("should render instances of the TimerButton component", () => {
        expect(container.find("TimerButton").length).toBeGreaterThanOrEqual(1)
    })

});

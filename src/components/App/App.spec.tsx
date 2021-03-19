import React from 'react'
import { shallow } from "enzyme";
import App from "./App";
import Timer from "../Timer/Timer"

describe('App Component renders', () => {
    let container = shallow(<App />);
    //Expected at least one div in our App Component
    it('should render a div', () => {
        expect(container.find('div').length).toEqual(1)
    });

    it('should render a Timer Component', () => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true)
    });

});

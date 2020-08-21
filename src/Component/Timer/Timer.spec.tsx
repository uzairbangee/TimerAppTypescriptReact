import React from 'react';
import {shallow, mount} from "enzyme";
import Timer from "./Timer.component";
import Button from "./../Button/Button.component"

describe("Timer" , () => {
    let mainDiv : any;
    beforeEach(() => mainDiv = shallow(<Timer/>))

    it("Timer divs render", () => {
        expect(mainDiv.find('div').length).toBeGreaterThanOrEqual(1);
    })

    it("Render all buttons", () => {
        expect(mainDiv.find('Button').length).toEqual(3);
    })
    
})

describe("Mounted Timer", () => {
    let component : any;
    // const setActive: jest.Mock<any, any> = jest.fn();
    // const useStateSpy: jest.SpyInstance<[unknown, React.Dispatch<unknown>], []> = jest.spyOn(React, 'useState')
    // useStateSpy.mockImplementation((active) => [active, setActive]);   
    
    beforeEach(() => component = mount(<Timer/>));
    
    it("invoke Start Timer when button is clicked", () => {
        // const but = component.find(Button).first().props();
        // const spy = jest.spyOn(but, 'action');
        // component.update();
        // expect(spy).toHaveBeenCalledTimes(0);
        // component.find('.start-timer').first().simulate('click');
        // expect(spy).toHaveBeenCalledTimes(1);


    })

    it("invoke Stop Timer when button is clicked", () => {
        // const spy = jest.spyOn(component, "stopTimer");
        // expect(spy).toHaveBeenCalledTimes(0);
        // component.find('.stop-timer').first().simulate('click');
        // expect(spy).toHaveBeenCalledTimes(1);
    })

    it("invoke Reset Timer when button is clicked", () => {
        // const spy = jest.spyOn(component, "resetTimer");
        // expect(spy).toHaveBeenCalledTimes(0);
        // component.find('.reset-timer').first().simulate('click');
        // expect(spy).toHaveBeenCalledTimes(1);
    })
})
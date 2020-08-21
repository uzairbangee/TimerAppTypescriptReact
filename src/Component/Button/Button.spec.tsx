import React from "react";
import { shallow, mount } from 'enzyme';
import Button from "./Button.component";

describe('Button' , () => {

    it('render button', () => {
        const button = shallow(
            <Button
            className={""}
            action={jest.fn()}
            value={""}
            />
        );
        expect(button.find('button').length).toEqual(1);
    })
})

describe("Button Action" , () => {
    it('check the rendered Start button action', () => {
        const clickAction = jest.fn();
        const button = mount(
            <Button
            className={"start-timer"}
            action={clickAction}
            value={"Start"}
            />
        );
        button.find('#start-timer').simulate('click');
        expect(clickAction).toHaveBeenCalled();
    })
})

describe("Button Action" , () => {
    it('check the rendered Stop button action', () => {
        const clickAction = jest.fn();
        const button = mount(
            <Button
            className={"stop-timer"}
            action={clickAction}
            value={"Stop"}
            />
        );
        button.find('#stop-timer').simulate('click');
        expect(clickAction).toHaveBeenCalled();
    })
})

describe("Button Action" , () => {
    it('check the rendered Reset button action', () => {
        const clickAction = jest.fn();
        const button = mount(
            <Button
            className={"reset-timer"}
            action={clickAction}
            value={"Reset"}
            />
        );
        button.find('#reset-timer').simulate('click');
        expect(clickAction).toHaveBeenCalled();
    })
})
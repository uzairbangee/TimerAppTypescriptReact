import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from './Component/Timer/Timer.component'
describe("App", () => {
  let container : any;

  beforeEach(() => container = shallow(<App/>));

  it("Div Rendering", () => {
    expect(container.find('div').length).toEqual(1);
  })

  it("Timer Component Rendering", () => {
    expect(container.containsMatchingElement(<Timer/>)).toEqual(true);
  })
})

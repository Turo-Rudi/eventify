import React from 'react';
import { shallow } from 'enzyme';
import NumberOfevents from '../NumberOfEvents';

describe('<NumberOfevents/> component', () => {
  let NumberOfeventsWrapper;
  beforeAll(() => {
    NumberOfeventsWrapper = shallow(<NumberOfevents />);
  });

  test('render 32 event', () => {
    expect(NumberOfeventsWrapper.find(".eventNumber").prop("value")).toEqual("32");
  });
  test('render text imput', () => {
    expect(NumberOfeventsWrapper.find(".eventNumber")).toHaveLength(1);
  });
  test('render text imput correctly', () => {
    const eventToShow = NumberOfeventsWrapper.state("eventToShow");
    expect(NumberOfeventsWrapper.find(".eventNumber").prop("value")).toBe(eventToShow);
  });
  test('change state when text input changes', () => {
    NumberOfeventsWrapper.setState({ eventToShow: "32" });
    const eventObject = { target: { value: "10" } };
    NumberOfeventsWrapper.find(".eventNumber").simulate("change", eventObject);
    expect(NumberOfeventsWrapper.state("eventToShow")).toBe("10");
  });
});
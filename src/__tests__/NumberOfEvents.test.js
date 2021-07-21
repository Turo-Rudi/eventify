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
    const eventsToShow = NumberOfeventsWrapper.state("eventsToShow");
    expect(NumberOfeventsWrapper.find(".eventNumber").prop("value")).toBe(eventsToShow);
  });
});
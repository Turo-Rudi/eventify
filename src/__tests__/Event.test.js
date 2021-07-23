import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event/> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test('render the name of the event', () => {
    expect(EventWrapper.find(".eventName")).toHaveLength(1);
  });
  test('render date and timezone of the event', () => {
    expect(EventWrapper.find(".eventDate")).toHaveLength(2);
  });
  test('render the location of the event', () => {
    expect(EventWrapper.find(".eventLocation")).toHaveLength(1);
  });
  test('render show details button', () => {
    expect(EventWrapper.find(".showDetailsButton")).toHaveLength(1);
  });
  test('render event description on click', () => {
    EventWrapper.setState({ showHideDetails: false });
    EventWrapper.find(".showDetailsButton").simulate("click");
    expect(EventWrapper.find(".eventDetails")).toHaveLength(1);
  });
  test('hide event description on click', () => {
    EventWrapper.setState({ showHideDetails: true });
    EventWrapper.find(".hideDetailsButton").simulate("click");
    expect(EventWrapper.find(".eventDetails")).toHaveLength(0);
  });
})
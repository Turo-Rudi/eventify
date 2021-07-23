import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let EventListWrapper;
  let EventWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('user haven’t clicked on the “Show details” yet', () => {
      AppWrapper = mount(<App />);
    });

    then('then event details are not shown', () => {
      expect(EventWrapper.find('.eventDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('user clicks on “Show details” button for an event', () => {
      EventWrapper.find('.showDetailsButton').simulate('click');
    });

    then('the event element will be expanded to show the event details', () => {
      expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the list of events has been loaded and the user has already clicked on the “Show details” button', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find('.showDetailsButton').simulate('click');
      EventWrapper.find('.eventDetails');
    });

    when('user clicks on “Hide details” button', () => {
      EventWrapper.find('.hideDetailsButton').simulate('click');
    });

    then('the event details should collapse', () => {
      expect(EventWrapper.find('.eventDetails')).toHaveLength(0);
    });
  });
});
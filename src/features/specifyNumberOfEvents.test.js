import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventsWrapper;
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    when('user hasn’t set otherwise', () => {
      AppWrapper = mount(<App />);
    });

    then('default number of events should be shown', () => {
      expect(AppWrapper.state('events').length).toBe(mockData.length);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('user set the number of events to be shown to their liking', () => {
      AppWrapper.find('.eventNumber').simulate('change', { target: { value: 10 } });
    });

    then('that number of events should be shown', () => {
      AppWrapper.update();
      expect(AppWrapper.state('events').length).toBe(10);
    });
  });
});
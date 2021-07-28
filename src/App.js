import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './App.css';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventsToShow: "32",
    currentCity: "all",
    warningText: "",
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
        // if (!navigator.onLine) {
        //   this.setState({
        //     warningText: 'Looks like you are offline. The list of events are being loaded from the cache.'
        //   });
        // } else {
        //   this.setState({
        //     warningText: ''
        //   });
        // }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  }

  updateEvents = (location, eventsToShow) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events.slice(0, eventsToShow)
        : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventsToShow),
          currentCity: location
        });
      }
    });
  }

  updateNumberOfEvents(eventNumber) {
    this.setState({ NumberOfEvents: eventNumber });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, eventNumber);
  }

  render() {
    // if (this.state.showWelcomeScreen === undefined)
    //   return <div className="App" />
    const { locations, events, numberOfEvents } = this.state;
    return (
      <div className="App">
        <h1>Eventify your life!</h1>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} numberOfEvents={numberOfEvents} />
        <WarningAlert text={this.state.warningText} />

        <h4>Events in each city</h4>

        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

        <EventList events={events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;

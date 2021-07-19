import React, { Component } from 'react';

class Event extends Component {
  state = {
    showHideDetails: false
  };

  handleButton = () => {
    this.setState((prevState) => ({ showHideDetails: !prevState.showHideDetails }));
  };

  render() {
    const { event } = this.props;
    return (
      <div className="Event">
        <h1 className="eventName">{event.summary}</h1>
        <p className="eventLocation">{event.location}</p>
        <p className="eventDate">{event.start.dateTime}, {event.start.timeZone}</p>
        {this.state.showHideDetails === true && (
          <p className="eventDetails">{event.description}</p>
        )};
        {this.state.showHideDetails === false && (
          <button className="showDetailsButton" onClick={() => this.handleButton()}>Show details</button>
        )};
        {this.state.showHideDetails === true && (
          <button className="hideDetailsButton" onClick={() => this.handleButton()}>Hide details</button>
        )};
      </div>
    );
  }
}

export default Event;
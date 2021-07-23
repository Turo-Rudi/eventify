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
      <div className="event">
        <h1 className="eventName">{event.summary}</h1>
        <p className="eventLocation"><strong>Location: </strong>{event.location}</p>
        <p className="eventZone"><strong>Timezone: </strong>{event.start.timeZone}</p>
        <p className="eventDate"><strong>Start: </strong>{event.start.dateTime}</p>
        <p className="eventDate"><strong>End: </strong>{event.end.dateTime}</p>
        {this.state.showHideDetails === true && (
          <p className="eventDetails">{event.description}</p>
        )}
        {this.state.showHideDetails === false && (
          <button className="showDetailsButton" onClick={() => this.handleButton()}>Show details</button>
        )}
        {this.state.showHideDetails === true && (
          <button className="hideDetailsButton" onClick={() => this.handleButton()}>Hide details</button>
        )}
      </div>
    );
  }
}

export default Event;
import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventsToShow: "32",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      eventsToShow: value,
    });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <p>Number of events</p>
        <input type="text" className="eventNumber" value={this.state.eventsToShow} onChange={this.handleInputChanged} />
      </div>
    );
  }
}

export default NumberOfEvents;
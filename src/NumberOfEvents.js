import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventToShow: "32",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      eventToShow: value,
    });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input type="text" className="eventNumber" value={this.state.eventToShow} onChange={this.handleInputChanged} />
      </div>
    );
  }
}

export default NumberOfEvents;
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
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    const eventsToShow = this.state.eventsToShow;
    return (
      <div className="NumberOfEvents">
        <p>Number of events</p>
        <input type="text" className="eventNumber" value={eventsToShow} onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}

export default NumberOfEvents;
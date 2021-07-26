import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventsToShow: "32",
    infoText: ''
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventsToShow: value });

    if (value < 1) {
      return this.setState({
        eventsToShow: value,
        errorText: 'The number should be between 1 and 32.',
      });
    } if (value > 32) {
      return this.setState({
        eventsToShow: value,
        errorText: 'The number should be between 1 and 32.',
      })
    } else {
      return this.setState({
        eventsToShow: value,
        errorText: ''
      });
      this.props.updateNumberOfEvents(event.target.value);
    }
  };

  render() {
    const eventsToShow = this.state.eventsToShow;
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <p>Number of events</p>
        <input type="text" className="eventNumber" value={eventsToShow} onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}

export default NumberOfEvents;
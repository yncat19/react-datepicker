// @flow
import React from "react";

export default class AccessibilityHelper extends React.Component {
  triggerSpeech = text => {
    this.setState({ text: text });
  };

  constructor(props) {
    super(props);
    this.state = {
      text: "accessibilityHelper"
    };
    this.triggerSpeech = this.triggerSpeech.bind(this);
  }

  render() {
    return (
      <div display="none" aria-live="assertive">
        {this.state.text}
      </div>
    );
  }
}

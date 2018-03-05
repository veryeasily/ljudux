import React, { Component } from "react";
import { connect } from "react-redux";
import { turnOnSound, turnOffSound } from "../actions";
import SimpleOscillator from "./SimpleOscillator";
import SampleElt from "./SampleElt";
import audioWav from "../../audio/main.mp3";

const mapStateToProps = state => {
  return { soundPlaying: state.soundPlaying };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSound: (targetState) => {
      return targetState ? dispatch(turnOnSound()) : dispatch(turnOffSound());
    }
  };
};

class ConnectedSoundButton extends Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.toggleSound(!this.props.soundPlaying);
  }

  getButtonText() {
    return !this.props.soundPlaying ? "Start" : "Stop";
  }

  maybeGetSampleElt() {
    return this.props.soundPlaying ? (<SampleElt url={audioWav} />) : null;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.getButtonText()}</button>
        { this.maybeGetSampleElt() }
      </div>
    );
  };
};

ConnectedSoundButton.defaultProps = {
  soundPlaying: false
};

const SoundButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedSoundButton);

export default SoundButton;

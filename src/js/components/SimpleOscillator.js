import React, { Component } from "react";
import { connect } from "react-redux";
import { Oscillator } from "tone";
import jStat from "jstat";
import uuidv1 from "uuid";

window.jStat = jStat;

class ConnectedSimpleOscillator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freq: props.freq || jStat.lognormal.sample(Math.log(440), 1),
      _id: uuidv1()
    };
    this.osc = new Oscillator(this.state.freq, 'triangle').toMaster();
    window.oscs = window.oscs || {};
    window.oscs[this.state._id] =  this.osc;
  }

  componentDidMount() {
    this.osc.start();
    this.state.timer = window.setInterval(() => {
      this.setState({ freq: jStat.lognormal.sample(Math.log(440), 1) });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearTimeout(window.oscs[this.state._id]);
    delete window.oscs[this.state._id];
    this.osc.stop();
  }

  render() {
    this.osc.frequency.value = this.state.freq;
    return null;
  }
}

const SimpleOscillator = connect(null, null)(ConnectedSimpleOscillator);
export default SimpleOscillator 

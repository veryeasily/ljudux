import React, { Component } from "react";
import { connect } from "react-redux";
import { Player } from "tone";
import jStat from "jstat";
import uuidv1 from "uuid";

window.players = window.players || {};

class ConnectedSampleElt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: uuidv1()
    };
    this.player = new Player(this.props.url).toMaster();
    this.player.autostart = true;
    window.players[this.state._id] = this.player;
  }

  componentDidMount() {
    this.player.autostart = true;
  }

  componentWillUnmount() {
    this.player.stop();
    delete window.players[this.state._id];
  }

  render() {
    return null;
  }
}

const SampleElt = connect(null, null)(ConnectedSampleElt);
export default SampleElt;

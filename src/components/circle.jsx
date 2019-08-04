import React, { Component } from "react";
// import ReactDOM from "react-dom";
import posed from "react-pose";
import styles from "./circle.module.scss";
import data from "../data/data";
// import { red } from "ansi-colors";

const CirclePose = posed.div({
  exhale: {
    opacity: 0.4,
    scale: 0.5,
    transition: ({ exhaleDuration, inhaleHoldDelay }) => ({
      duration: exhaleDuration,
      delay: inhaleHoldDelay
    })
  },
  inhale: {
    opacity: 0.7,
    scale: 1,
    // left: "50%",
    // backgroundColor: "#b9abf9",
    transition: ({ inhaleDuration, exhaleHoldDelay }) => ({
      duration: inhaleDuration,
      delay: exhaleHoldDelay
    })
  }
});

class CircleContainer extends Component {
  state = { isInhaled: false, isClicked: false };

  breathingText = this.state.isInhaled
    ? console.log("Breath Out")
    : console.log("Breath In");

  clickCircle = () => {
    setInterval(() => {
      this.setState({
        isInhaled: !this.state.isInhaled
      });
    }, 8000);
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    const { isInhaled } = this.state;
    return (
      <section>
        <CirclePose
          className={styles.circlePose}
          pose={isInhaled ? "inhale" : "exhale"}
          inhaleDuration={data[0].inhale}
          inhaleHoldDelay={data[0].inhaleHold}
          exhaleDuration={data[0].exhale}
          exhaleHoldDelay={data[0].exhaleHold}
          onClick={this.clickCircle}
        >
          <h1>{data[0].name}</h1>
        </CirclePose>
        <CirclePose
          className={styles.circlePose}
          pose={isInhaled ? "inhale" : "exhale"}
          inhaleDuration={data[1].inhale}
          inhaleHoldDelay={data[1].inhaleHold}
          exhaleDuration={data[1].exhale}
          exhaleHoldDelay={data[1].exhaleHold}
          onClick={this.clickCircle}
        >
          <h1>{data[1].name}</h1>
        </CirclePose>
        <CirclePose
          className={styles.circlePose}
          pose={isInhaled ? "inhale" : "exhale"}
          inhaleDuration={data[1].inhale}
          inhaleHoldDelay={data[1].inhaleHold}
          exhaleDuration={data[1].exhale}
          exhaleHoldDelay={data[1].exhaleHold}
          onClick={this.clickCircle}
        />
      </section>
    );
  }
}

export default CircleContainer;

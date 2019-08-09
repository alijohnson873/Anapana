///////////////// To do list//////////////////

// Push To New Repo

// Execute delay with interval

// cancel interval on click

//move to center on click

//put text in middle of pose div

//change text in middle of pose div

//read about keyframes

//What do I want////////////////

//props

//Inhale
//In Hold
//Exhale
//Ex Hold

import React, { Component } from "react";
// import ReactDOM from "react-dom";
import posed from "react-pose";
import styles from "./Circle.module.scss";

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
    transition: ({ inhaleDuration, exhaleHoldDelay }) => ({
      duration: inhaleDuration,
      delay: exhaleHoldDelay
    })
  }
});

class Circle extends Component {
  state = { isInhaled: false, isClicked: false };

  clickCircle = delay => {
    this.triggerInterval(delay);
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  triggerInterval = delay => {
    setInterval(() => {
      this.setState({
        isInhaled: !this.state.isInhaled
      });
    }, delay);
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
          onClick={() => this.clickCircle(8000)}
        >
          <h1>{data[0].name}</h1>
        </CirclePose>
        <p>{this.state.displayedText}</p>
        <CirclePose
          className={styles.circlePose}
          pose={isInhaled ? "inhale" : "exhale"}
          inhaleDuration={data[1].inhale}
          inhaleHoldDelay={data[1].inhaleHold}
          exhaleDuration={data[1].exhale}
          exhaleHoldDelay={data[1].exhaleHold}
          onClick={() => this.clickCircle(8000)}
        >
          <h1>{data[1].name}</h1>
        </CirclePose>

        <CirclePose
          className={styles.circlePose}
          pose={isInhaled ? "inhale" : "exhale"}
          inhaleDuration={data[2].inhale}
          inhaleHoldDelay={data[2].inhaleHold}
          exhaleDuration={data[2].exhale}
          exhaleHoldDelay={data[2].exhaleHold}
          onClick={() => this.clickCircle(8000)}
        >
          <h1>{data[2].name}</h1>
        </CirclePose>
      </section>
    );
  }
}

export default Circle;


import React, { Component } from "react";
// import ReactDOM from "react-dom";
import posed from "react-pose";
import styles from "./circle.module.scss";
import data from "../data/data";
// import { red } from "ansi-colors";

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
    // left: "50%",
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

  clickCircle = () => {
    setInterval(() => {
      console.log("I clicked the circle");
      this.setState({
        isInhaled: !this.state.isInhaled
      });
    }, 4000);
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
          inhaleDuration={data[1].inhale}
          inhaleHoldDelay={data[1].inhaleHold}
          exhaleDuration={data[1].exhale}
          exhaleHoldDelay={data[1].exhaleHold}
          onClick={this.clickCircle}
        >
          <h1>Test</h1>
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


const CirclePose = posed.div({
  exhale: {
    opacity: 0.4,
    scale: 0.5,
    // left: "10%",
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

class Circle extends Component {
  state = { hasInhaled: false, isClicked: false };

  clickCircle = () => {
    setInterval(() => {
      console.log("I clicked the circle");
      this.setState({
        hasInhaled: !this.state.hasInhaled
      });
    }, 8000);
    this.setState({
      isClicked: !this.state.activePosition
    });
  };

  render() {
    const { hasInhaled } = this.state;
    return (
      <section>
        <CirclePose
          className={styles.circlePose}
          pose={hasInhaled ? "inhale" : "exhale"}
          inhaleDuration={data[0].inhale}
          inhaleHoldDelay={data[0].inhaleHold}
          exhaleDuration={data[0].exhale}
          exhaleHoldDelay={data[0].exhaleHold}
          onClick={this.clickCircle}
        />
      </section>
    );
  }
}

export default Circle;

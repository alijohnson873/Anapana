import React, { Component } from "react";
// import ReactDOM from "react-dom";
import posed from "react-pose";
import styles from "./Circle.module.scss";

// import { red } from "ansi-colors";

const CirclePose = posed.div({
  exhale: {
    opacity: 0.4,
    scale: 0.5,
    transition: ({ exhaleDuration }) => ({
      duration: exhaleDuration
    })
  },
  inhale: {
    // opacity: 0.7,
    scale: 1,
    transition: ({ inhaleDuration }) => ({
      duration: inhaleDuration
    })
  }
});

const Label = posed.span({
  exhale: {
    scale: 0.9,
    opacity: 1,
    transition: ({ exhaleDuration }) => ({
      duration: exhaleDuration
    })
  },
  inhale: {
    scale: 1.4,
    opacity: 1,
    transition: ({ inhaleDuration }) => ({
      duration: inhaleDuration
    })
  }
});

class Circle extends Component {
  state = { isInhaled: false, isClicked: false };

  inhaleOnFirstClick = () => {
    this.setState({
      isInhaled: !this.state.isInhaled
    });
  };

  //click to start breathing
  clickCircle = delay => {
    this.turnOffClick();
    this.inhaleOnFirstClick();
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

  //click to turn off circle breathing
  turnOffClick = () => {
    if (this.state.isClicked === true) {
      console.log("is Clicked is true");
      clearInterval(this.triggerInterval());
    }
  };

  render() {
    const { isInhaled } = this.state;
    const breathLabel = isInhaled ? "Breathe In" : "Breathe Out ";
    const firstClickRemoveName = this.state.isClicked ? (
      breathLabel
    ) : (
      <h1>{this.props.data.name}</h1>
    );
    const delayTime = this.props.data.inhale + this.props.data.inhaleHold;
    return (
      <section>
        <CirclePose
          className={styles.circlePose}
          pose={isInhaled ? "inhale" : "exhale"}
          inhaleDuration={this.props.data.inhale}
          inhaleHoldDelay={this.props.data.inhaleHold}
          exhaleDuration={this.props.data.exhale}
          exhaleHoldDelay={this.props.data.exhaleHold}
          onClick={() => this.clickCircle(delayTime)}
        >
          <Label
            inhaleDuration={this.props.data.inhale}
            inhaleHoldDelay={this.props.data.inhaleHold}
            exhaleDuration={this.props.data.exhale}
            exhaleHoldDelay={this.props.data.exhaleHold}
            pose={isInhaled ? "inhale" : "exhale"}
          >
            <h1>{firstClickRemoveName}</h1>
          </Label>
        </CirclePose>
      </section>
    );
  }
}

export default Circle;

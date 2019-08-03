import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";
import styles from "./circle.module.scss";
// import { red } from "ansi-colors";

const CirclePose = posed.div({
  hidden: {
    opacity: 0.2,
    scale: 0.3,
    // left: "10%",
    transition: { duration: 4000 }
  },
  visible: {
    opacity: 0.6,
    scale: 1,
    // left: "50%",
    // backgroundColor: "red",
    transition: {
      duration: 4000
      // delay: 4000
    }
  }
});

class Circle extends Component {
  state = { isVisible: false };

  clickCircle = () => {
    setInterval(() => {
      console.log("I clicked the circle");
      this.setState({ isVisible: !this.state.isVisible });
    }, 4000);
  };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ isVisible: !this.state.isVisible });
  //   }, 8000);
  // }

  render() {
    const { isVisible } = this.state;
    return (
      <section>
        <CirclePose
          className={styles.circlePose}
          pose={isVisible ? "visible" : "hidden"}
          onClick={this.clickCircle}
        />
      </section>
    );
  }
}

export default Circle;

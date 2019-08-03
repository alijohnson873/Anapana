import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";
// import styles from "./circle.module.scss";
// import style from "react-syntax-highlighter/dist/styles/hljs/solarized-light";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class BoxWrap extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return <Box className="box" pose={isVisible ? "visible" : "hidden"} />;
  }
}
export default BoxWrap;

import React from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";
import "./styles.css";

const Box = posed.div({
  hidden: {
    opacity: 0.3,
    scale: 0.1,
    transition: { duration: 4000 }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 4000
    }
  }
});

class Example extends React.Component {
  state = { isVisible: true };

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({ isVisible: !this.state.isVisible });
  //     }, 4000);
  //   }

  mountOnce() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { isVisible } = this.state;
    return <Box className="box" pose={isVisible ? "visible" : "hidden"} />;
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));

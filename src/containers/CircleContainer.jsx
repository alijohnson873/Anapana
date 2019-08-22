import React, { Component } from "react";
import styles from "./CircleContainer.module.scss";
import data from "../data/data";
import Circle from "../components/Circle";

class CircleContainer extends Component {
  state = { isInhaled: false, isClicked: false };

  render() {
    return (
      <section className={styles.flexWrap}>
        {data.map((breathType, index) => (
          <Circle data={breathType} key={index} />
        ))}
      </section>
    );
  }
}

export default CircleContainer;

import React from "react";
import "./container.css";

const styles = {
  containerStyle: {
    direction: "row"
  }
};

function GameContainer(props) {
  return (
    <div style={styles.containerStyle} className="game_container">
      {props.children}
    </div>
  );
}

export default GameContainer;

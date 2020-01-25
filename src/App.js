import React, { Component } from "react";
import GameContainer from "./components/container/GameContainer";
import Card from "./components/cards/cards.js";
import examples from "./examples.json";

class App extends Component {
  state = {
    examples: examples,
    click_array: [],
    score: 0
  };

  shuffleArray = () => {
    const tempArray = this.state.examples;
    for (let i = tempArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    this.setState({ examples: tempArray });
  };

  clickPicture = id => {
    if (this.state.click_array.includes(id)) {
      this.setState({ click_array: [], score: 0 });
      alert("game over");
      this.shuffleArray();
    } else {
      var click = this.state.click_array.concat(id);
      this.setState({ click_array: click, score: this.state.score + 1 });
      this.shuffleArray();

      console.log(this.state.click_array);
    }
  };

  render() {
    return (
      <div>
        <div>Score: {this.state.score}</div>
        <GameContainer>
          {this.state.examples.map(image => (
            <Card
              src={image.image}
              name={image.name}
              id={image.id}
              clickPicture={this.clickPicture}
            />
          ))}
        </GameContainer>
        ;
      </div>
    );
  }
}

export default App;

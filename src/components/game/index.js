import { Component } from "preact";
import { Router } from "preact-router";
import style from "./style.css";
// Code-splitting is automated for `routes` directory

const defaultLetters = [",", ".", "?", "!", " "];

export default class Game extends Component {
  constructor() {
    super();
    this.state = { puzzleId: 0, revealedLetters: [...defaultLetters] };
  }

  componentDidMount() {
    this.setState((prev) => {
      const puzzle = this.props.puzzles[prev.puzzleId];
      const puzzleLetters = puzzle.split("");
      prev.revealedLetters.push(puzzleLetters[0]);
      prev.revealedLetters.push(puzzleLetters[puzzleLetters.length - 1]);
      return prev;
    });
  }

  nextPuzzle() {
    this.setState((prev) => {
      let newState = Object.assign({}, prev);
      newState.puzzleId = prev.puzzleId + 1;

      const puzzle = this.props.puzzles[newState.puzzleId];
      const puzzleLetters = puzzle.split("");
      newState.revealedLetters = [...defaultLetters];
      newState.revealedLetters.push(puzzleLetters[0]);
      newState.revealedLetters.push(puzzleLetters[puzzleLetters.length - 1]);
      return newState;
    });
  }

  revealRandomLetter() {
    this.setState((prev) => {
      const puzzle = this.props.puzzles[prev.puzzleId];
      const puzzleLetters = puzzle.split("");
      const revealedLetters = prev.revealedLetters;
      let notRevealedLetters = [];
      puzzleLetters.forEach((letter) => {
        if (revealedLetters.indexOf(letter) == -1) {
          if (notRevealedLetters.indexOf(letter) == -1) {
            notRevealedLetters.push(letter);
          }
        }
      });

      const randomNotRevealedLetter =
        notRevealedLetters[
          Math.floor(Math.random() * notRevealedLetters.length)
        ];

      prev.revealedLetters.push(randomNotRevealedLetter);
      return prev;
    });
  }

  renderPuzzle(props, state) {
    let result = [];
    let puzzle = props.puzzles[state.puzzleId];
    let revealedLetters = state.revealedLetters;

    puzzle.split("").forEach((letter) => {
      if (letter == " ") {
        result.push(<b class={style.space}> </b>);
      } else if (revealedLetters.indexOf(letter) != -1) {
        result.push(<b class={style.known}>{letter}</b>);
      } else {
        result.push(<b class={style.unknown}>☐</b>);
      }
    });
    return <p>{result}</p>;
  }

  render(props, state) {
    return (
      <div id="game">
        <div class={style.puzzle}>{this.renderPuzzle(props, state)}</div>
        <div id="controls">
          <button
            onClick={() => {
              this.revealRandomLetter();
            }}
          >
            Poka literkę
          </button>

          <button
            onClick={() => {
              this.nextPuzzle();
            }}
          >
            Następne hasło
          </button>
        </div>
      </div>
    );
  }
}

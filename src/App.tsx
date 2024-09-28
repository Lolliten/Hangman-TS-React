import { useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  /* filter method will return a new array containing only those letters from guessedLetters that are not present in wordToGuess */
  const incorrectLetters = guessedLetters.filter(
    //array method that creates a new array with all elements that pass the test implemented by the provided function.
    (letter) => !wordToGuess.includes(letter) //This is a callback function used in the filter method.
  );

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Lose Win
      </div>
      <HangmanDrawing />
      {/* <HangmanWord />
       <div style={{ alignSelf = "stretch" }}>
        <Keyboard />
      </div> */}
    </div>
  );
}

export default App;

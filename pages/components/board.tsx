import { useEffect, useState } from "react";
import Row from "./row";

const Board: React.FC = () => {
  const [currentRow, setCurrentRow] = useState(0);
  const [rowTexts, setRowTexts] = useState(["", "", "", "", "", ""]);
  const [rowScores, setRowScores] = useState<(number[] | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [dictionary, setDictionary] = useState<string[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/dictionary")
      .then((response) => response.json())
      .then((json) => setDictionary(json));
  }, []);

  const updateCurrentRow = (e: KeyboardEvent) => {
    const allowedCharacters = /^[abcdefghijklmnopqrstuvwxyzåäö]$/;
    let newString = rowTexts[currentRow];
    switch (e.code) {
      case "Backspace":
      case "Delete":
      case "ArrowLeft":
        newString = rowTexts[currentRow].slice(0, -1);
        break;
      case "Enter":
        if (newString.length === 5) {
          if (dictionary.includes(newString)) {
            console.log("Its a word, Mario");
            fetch(`http://localhost:8080/${newString}`)
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                // Deal with scoring
                // Move to next row
                const rowScoresCopy = [...rowScores];
                rowScoresCopy[currentRow] = json.score;
                setRowScores(rowScoresCopy);
                setCurrentRow(currentRow + 1);
              });
          } else {
            // shake effect
          }
        }
      default:
        if (allowedCharacters.test(e.key) && newString.length < 5) {
          newString += e.key;
        }
    }
    console.log(e);
    const copy = [...rowTexts];
    copy[currentRow] = newString;
    setRowTexts(copy);
  };

  return (
    <div>
      {rowTexts.map((word, i) => (
        <Row key={i} word={word} score={rowScores[i]} />
      ))}
      <input
          maxLength={5}
          autoFocus
          // @ts-ignore
          onKeyDown={updateCurrentRow}
          onChange={() => {}}
          value={""}
        />
    </div>
  );
};

export default Board;

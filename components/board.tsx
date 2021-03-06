import { useEffect, useState } from "react";
import Keyboard from "./keyboard";
import Row from "./row";

const Board: React.FC = () => {
  const [currentRow, setCurrentRow] = useState(0);
  const [rowTexts, setRowTexts] = useState(["", "", "", "", "", ""]);
  const [doesWordExist, setDoesWordExist] = useState(true);
  const [rowScores, setRowScores] = useState<(number[] | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [dictionary, setDictionary] = useState<string[]>([]);
  useEffect(() => {
    fetch("/api/dictionary")
      .then((response) => response.json())
      .then((json) => setDictionary(json));
  }, []);

  const updateCurrentRow = (key: string) => {
    const allowedCharacters = /^[abcdefghijklmnopqrstuvwxyzåäö]$/;
    let newString = rowTexts[currentRow];
    switch (key) {
      case "Backspace":
      case "Delete":
      case "ArrowLeft":
        newString = rowTexts[currentRow].slice(0, -1);
        setDoesWordExist(true); // Well not really... but
        break;
      case "Enter":
        if (newString.length === 5) {
          if (dictionary.includes(newString)) {
            console.log("Its a word, Mario");
            fetch(`/api/w?${newString}`)
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
            setDoesWordExist(false);
          }
        }
      default:
        if (allowedCharacters.test(key) && newString.length < 5) {
          newString += key;
        }
    }

    const copy = [...rowTexts];
    copy[currentRow] = newString;
    setRowTexts(copy);
  };

  const getUsedKeys = () => {
    const keyScores: { [key: string]: number } = {};
    rowTexts
      .filter((text, i) => i < currentRow)
      .map((word) => [word[0], word[1], word[2], word[3], word[4]])
      .forEach((letters, i) =>
        letters.forEach((letter, j) => {
          const score = rowScores[i]?.[j] ?? 0;
          if (keyScores[letter] === undefined || keyScores[letter] < score) {
            keyScores[letter] = score;
          }
        })
      );
    return keyScores;
  };

  return (
    <>
      {rowTexts.map((word, i) => (
        <Row
          key={i}
          word={word}
          score={rowScores[i]}
          shake={currentRow === i && !doesWordExist}
        />
      ))}
      <br />
      <br />
      <Keyboard onKeyPress={updateCurrentRow} usedKeys={getUsedKeys()} />
    </>
  );
};

export default Board;

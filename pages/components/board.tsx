import { useEffect, useState } from "react";
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

  const updateCurrentRow = (e: KeyboardEvent) => {
    const allowedCharacters = /^[abcdefghijklmnopqrstuvwxyzåäö]$/;
    let newString = rowTexts[currentRow];
    switch (e.code) {
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
        if (allowedCharacters.test(e.key) && newString.length < 5) {
          newString += e.key;
        }
    }

    const copy = [...rowTexts];
    copy[currentRow] = newString;
    setRowTexts(copy);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {rowTexts.map((word, i) => (
        <Row key={i} word={word} score={rowScores[i]} shake={currentRow === i && !doesWordExist} />
      ))}
      <input
        style={{
          fontSize: 16,
        }}
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

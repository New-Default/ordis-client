import getDailyWord from "./getDailyWord";
export enum LetterResult {
  Incorrect,
  DifferentPosition,
  Correct,
}

const correctWord = getDailyWord();

export default function score(guessWord: string) {
  const results = [
    LetterResult.Incorrect,
    LetterResult.Incorrect,
    LetterResult.Incorrect,
    LetterResult.Incorrect,
    LetterResult.Incorrect,
  ];
  const correctWordAvailablePoints = [true, true, true, true, true];
  if (guessWord.length !== 5) {
    throw Error("The word is too long or too short");
  }
  // Scores for correct position
  for (let i = 0; i < guessWord.length; i++) {
    if (guessWord[i] === correctWord[i]) {
      results[i] = LetterResult.Correct;
      correctWordAvailablePoints[i] = false;
    }
  }
  // Scan for same letter other places
  for (let i = 0; i < guessWord.length; i++) {
    for (let j = 0; j < guessWord.length; j++) {
      const isSamePosition = j === i;
      const isSameCharacter = guessWord[i] === correctWord[j];
      const isPointAvailable = correctWordAvailablePoints[j];
      if (!isSamePosition && isSameCharacter && isPointAvailable) {
        // Todo check for dupes
        results[i] = LetterResult.DifferentPosition;
        correctWordAvailablePoints[j] = false;
      }
    }
  }
  return results;
}

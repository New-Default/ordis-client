import scoreWord, { LetterResult } from "./score";
import isValid from "./isValid";
import existsWord from "./exists";

type WordResponse = {
  guessWord: string;
  exists: boolean;
  valid: boolean;
  score: LetterResult[] | null;
};

export default function getWordResponse(guessWord: string): WordResponse {
  const valid = isValid(guessWord);
  const exists = valid && existsWord(guessWord);
  const score = exists ? scoreWord(guessWord) : null;
  return {
    guessWord,
    exists,
    valid,
    score,
  };
}

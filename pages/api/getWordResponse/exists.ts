import words from "../saol5lowercase.json";

export default function exists(wordGuess: string) {
  return words.includes(wordGuess);
}

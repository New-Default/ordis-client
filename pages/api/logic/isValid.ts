const validLettersAndLength = /^[abcdefghijklmnopqrstuvwxyzåäö]{5}$/;

export default function isValid(wordGuess: string) {
  return validLettersAndLength.test(wordGuess);
}

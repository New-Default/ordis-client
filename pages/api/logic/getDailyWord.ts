import words from "./saol5lowercase.json";

const plannedWords = [
  // January
  [],
  // February
  ['','','','','tobak','kompis', 'öglad', 'jämka', 'dängt', 'lakan', 'gemål', 'snark'],
  // March
  [],
  // April
  [],
];
const getDailyWord = () => {
  const d = new Date();
  const month = d.getUTCMonth();
  const day = d.getUTCDate();
  const plannedWord =
  plannedWords[month] && plannedWords[month][day]
      ? plannedWords[month][day]
      : words[999 * month * day % words.length];

  return plannedWord;
};

export default getDailyWord;

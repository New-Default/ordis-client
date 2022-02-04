import React from "react";

interface Props {
  character?: string;
  score?: number;
  index: number;
}

const Letter: React.FC<Props> = ({ character = "", score, index }) => {
  const backgroundColors = ["#333", "#cc0", "green"];

  return (
    <div
      style={{
        width: 50,
        height: 50,
        marginRight: 5,
        backgroundColor: typeof score === 'number' ? backgroundColors[score] : '#000',
        fontSize: 38,
        color: "#fff",
        textAlign: "center",
        transition: "1s",
        transitionDelay: `${index * 3}00ms`,
      }}
    >
      {character.toUpperCase()}
    </div>
  );
};

export default Letter;

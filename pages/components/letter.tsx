import React from "react";

interface Props {
  character?: string;
  score?: number;
  index: number;
}

const Letter: React.FC<Props> = ({ character = "", score = 0, index }) => {
  const backgroundColors = ["#000", "#cc0", "green"];

  return (
    <div
      style={{
        width: 50,
        height: 50,
        marginRight: 5,
        backgroundColor: backgroundColors[score],
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

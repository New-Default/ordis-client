import React from "react";

interface Props {
  character?: string;
  score?: number;
}

const Letter: React.FC<Props> = ({character = '', score = 0}) => {
  const backgroundColors = ['#000', '#cc0', 'green'];

  return (
    <div
      style={{
        width: 100,
        height: 100,
        marginRight: 10,
        border: '10px white',
        backgroundColor: backgroundColors[score],
        fontSize: 75,
        color: "#fff",
        textAlign: "center",
      }}
    >
      {character.toUpperCase()}
    </div>
  );
};

export default Letter;

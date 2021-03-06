import React from "react";

interface Props {
  onKeyPress: (key: string) => void;
  keys: string[];
  usedKeys: {[key: string]: number};
}

const Keyrow: React.FC<Props> = (props) => {
  const backgroundColors = ["#333", "#cc0", "green"];
  return (
    <div style={{ display: "flex" }}>
      {props.keys.map((keyName) =>
        keyName === "pad" ? (
          <div
            key={keyName}
            style={{
              width: 15,
              height: 30,
              margin: 2,
              padding: 5,
              fontSize: 20,
              userSelect: "none",
            }}
          ></div>
        ) : (
          <div
            key={keyName}
            onClick={() => props.onKeyPress(keyName)}
            style={{
              color: '#fff',
              minWidth: 30,
              height: 30,
              margin: 2,
              padding: 5,
              fontSize: 20,
              background: typeof props.usedKeys[keyName] === 'number' ? backgroundColors[props.usedKeys[keyName]] : '#000',
              textAlign: "center",
              userSelect: "none",
              cursor: 'pointer',
              textTransform: keyName.length === 1 ? 'uppercase' : 'none',
            }}
          >
            {keyName}
          </div>
        )
      )}
    </div>
  );
};

export default Keyrow;

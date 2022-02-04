import React from "react";
import Keyrow from "./keyrow";
interface Props {
  onKeyPress: (key: string) => void;
  usedKeys: {[key: string]: number};
}

const Keyboard: React.FC<Props> = (props) => {
  return (
    <div>
      <Keyrow
        onKeyPress={props.onKeyPress}
        keys={["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å"]}
        usedKeys={props.usedKeys}
      />
      <Keyrow
        onKeyPress={props.onKeyPress}
        keys={["pad", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"]}
        usedKeys={props.usedKeys}
      />
      <Keyrow
        onKeyPress={props.onKeyPress}
        keys={["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"]}
        usedKeys={props.usedKeys}
      />
    </div>
  );
};

export default Keyboard;

import { useState } from "react";

export default function ButtonGroup({ setAnswer }) {
  const [selected, setSelected] = useState();

  const selectedStyle = {
    backgroundColor: "white",
    color: "#745E5E",
    fontWeight: "bold",
  };

  const buttonText = ["$2k", "$5k", "No Limit"];

  return (
    <div className="button-group">
      {buttonText.map((text, index) => (
        <button
          style={selected === index ? selectedStyle : {}}
          onClick={() => {
            setSelected(index);
            setAnswer(text);
          }}
          key={text}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

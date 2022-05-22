import React from "react";
import "./styles.css";
import LeftContainer from "./LeftContainer";
import RightImage from "./RightImage";

function App() {
  const [stage, setStage] = React.useState(0);
  const [answers, setAnswers] = React.useState({
    0: "",
    1: "",
    2: "",
  });

  if (stage === 3) {
    alert("Form Data: " + JSON.stringify(answers));
  }

  return (
    <div className="stage">
      <LeftContainer
        stage={stage}
        setStage={setStage}
        answers={answers}
        setAnswers={setAnswers}
      />
      <RightImage stage={stage} />
    </div>
  );
}

export default App;

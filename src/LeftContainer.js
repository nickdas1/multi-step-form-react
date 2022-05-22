import { useState } from "react";
import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";

const HEADER = [
  "Apply to work with our agency",
  "What's your budget?",
  "Anything else we should know?",
  "Thank you!",
];

export default function LeftContainer({ stage, setStage, answers, setAnswers }) {
  const [answer, setAnswer] = useState('');

  return (
    <div className="left-container">
      <div className="inner-left-container">
        <h2>{HEADER[stage]}</h2>
        {stage % 2 === 0 ? <TextInput stage={stage} setAnswer={setAnswer} /> : null}
        {stage === 1 ? <ButtonGroup setAnswer={setAnswer} /> : null}
        {stage !== 3 && (
          <button
            onClick={() => {
              setStage(stage + 1);
              setAnswers({...answers, [stage]: answer})
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

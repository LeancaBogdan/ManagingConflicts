import React, { useState } from "react";

import classes from './MultipleAnswerQuestion.module.css';

const MultipleAnswerQuestion = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className={classes.QuestionAnswers}>
    {props.options.map((option) => (
        <div className={classes.QuestionAnswer}>
          <input
            checked={option === selectedOption}
            type="checkbox"
            value={option}
            onChange={() => setSelectedOption(option)}
          />
          <text>{option}</text>
        </div>
      ))}
    </div>
  );
}

export default MultipleAnswerQuestion;
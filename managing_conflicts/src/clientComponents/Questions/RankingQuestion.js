import React, { useState } from "react";

import classes from './RankingQuestion.module.css';

const RankingQuestion = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className={classes.QuestionAnswers}>
    {props.options.map((option, index) => (
        <div className={classes.QuestionAnswer}>
          <div style={{height: '1em'}}>{option}</div>
          <input
            checked={index === selectedOption}
            type="checkbox"
            value={index}
            onChange={() => setSelectedOption(index)}
          />
          <text>{index+1}</text>
        </div>
      ))}
    </div>
  );
}

export default RankingQuestion;
import React, { useState } from "react";

import classes from './RankingQuestion.module.css';

function GetMaxWidth(options) {
  var maxWidth = 0;

  for (let index=0; index < options.length; index++)
  {
    if (options[index].length >= maxWidth)
    {
      maxWidth = options[index].length;
    } 
  }
  return maxWidth;
}

const RankingQuestion = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className={classes.QuestionAnswers}>
    {props.options.map((option, index) => (
        <div className={classes.QuestionAnswer} style={{paddingRight: GetMaxWidth(props.options) * 2}}>
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
import React from "react";

import classes from './TextQuestion.module.css';

const TextQuestion = (props) => {
  // const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className={classes.QuestionAnswers}>
    <textarea className={classes.Text}/>
    </div>
  );
}

export default TextQuestion;

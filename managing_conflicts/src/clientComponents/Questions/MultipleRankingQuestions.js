import React from "react";

import RankingQuestion from "./RankingQuestion"

import classes from './MultipleRankingQuestions.module.css';

const MultipleRankingQuestions = (props) => {
  return (
    <div className={classes.Questions}>
    {props.options.map((option, index) => (
        <div className={classes.Question}>
        <header className={classes.QuestionHeader}>
        <h3> {props.count}{String.fromCharCode(97+index)}. {option.description} </h3>
        </header>
        <RankingQuestion count={props.count + index + "a"} description={option.description} options={option.options}/>
        </div>
      ))}
    </div>
  );
};

export default MultipleRankingQuestions
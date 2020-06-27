import React from "react";
import MultipleAnswerQuestion from "./MultipleAnswerQuestion";
import RankingQuestion from "./RankingQuestion"
import TextQuestion from "./TextQuestion"
import MultipleRankingQuestions from "./MultipleRankingQuestions"

import classes from './MultipleAnswerQuestion.module.css';

const Question = (props) => {
  return (
    <div className={classes.Question}>
    <header className={classes.QuestionHeader}>
    <h4><i> {props.count}. {props.description} </i></h4>
    </header>
        {
        {
            "binary": <MultipleAnswerQuestion count={props.count} description={props.description} options={props.options}/>,
            "likert" : <RankingQuestion count={props.count} description={props.description} options={props.options}/>,
            "free-answer" : <TextQuestion count={props.count} description={props.description} options={props.options}/>,
            "multiple_ranking": <MultipleRankingQuestions count={props.count} description={props.description} options={props.options}/>,
        }[props.type]
        }
    </div>
  );
};

export default Question
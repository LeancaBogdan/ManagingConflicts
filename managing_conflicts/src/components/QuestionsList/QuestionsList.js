import React from 'react';

import Question from './Question/Question';

const questionsList = (props) => {
  const questions = props.questions.map( (question, i) => {
    return <Question 
      key={i}
      index={i+1}
      question={question.question}
      edit={() => props.editQuestion(i)}
      remove={() => props.removeQuestion(i)}/>
  });

  return (
    <div>
      {questions}
    </div>
  );
}

export default questionsList;
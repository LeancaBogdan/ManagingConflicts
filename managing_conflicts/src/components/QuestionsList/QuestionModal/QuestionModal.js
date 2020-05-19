import React from 'react';

import classes from './QuestionModal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import BinaryAnswer from './BinaryAnswer/BinaryAnswer'

const questionModal = (props) => {
  const title = props.action === "create" ? "Creează o întrebare nouă" : "Editează aceasta întrebare"

  let answers = null

  if (props.questionType === "binary"){
    answers = <BinaryAnswer />
  }

  return (
    <Auxiliary>
      <h3 className={classes.ModalTitle}>{title}</h3>
      <div className={classes.Question}>
        <label>Întrebare:</label>
        <input onChange={props.questionChanged} />
      </div>
      <div className={classes.Type}>
        <label>Tipul întrebării</label>
        <select onChange={props.typeChanged}>
          <option value="free-answer">Întrebare cu răspuns liber</option>
          <option value="binary">Întrebare cu răspuns binar</option>
          <option value="likert">Întrebare cu răspuns Likert</option>
        </select>
      </div>
      <div>
        {answers}
      </div>
      <div className={classes.Button}>
        <Button
          btnType="Danger"
          clicked={props.canceled}>Anulare</Button>
        <Button
          btnType="Success"
          clicked={props.saved}>Salvează</Button>
      </div>
      
    </Auxiliary>
  );
}

export default questionModal;
import React from 'react';

import classes from './QuestionModal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import OptionsList from './OptionsList/OptionsList';

const questionModal = (props) => {
  const title = props.action === "create" ? "Creează o întrebare nouă" : "Editează aceasta întrebare"
  const confirmButton = props.action === "create" ? <Button btnType="Success" clicked={props.saved}>Salvează</Button> : <Button btnType="Success" clicked={() => props.edited(props.currentQuestion.id)}>Editează</Button> 
  let options = null
  if (props.currentQuestion.type === "binary" || props.currentQuestion.type === "likert") {
    options = <div className={classes.Options}>
                <label>Variante de răspuns:</label>
                <OptionsList
                  type={props.currentQuestion.type} 
                  options={props.currentQuestion.options}
                  plusClicked={props.plusClicked}
                  minusClicked={props.minusClicked}
                  edited={props.optionEdited}/>
              </div>
  }

  return (
    <Auxiliary>
      <h3 className={classes.ModalTitle}>{title}</h3>
      <div className={classes.Question}>
        <label>Întrebare:</label>
        <input 
          value={props.currentQuestion.question} onChange={props.questionChanged}/>
      </div>
      <div className={classes.Type}>
        <label>Tipul întrebării:</label>
        <select value={props.currentQuestion.type} onChange={props.typeChanged}>
          <option value="free-answer">Întrebare cu răspuns liber</option>
          <option value="binary">Întrebare cu răspuns binar</option>
          <option value="likert">Întrebare cu răspuns Likert</option>
        </select>
      </div>
      {options}
      <div className={classes.Button}>
        <Button
          btnType="Danger"
          clicked={props.canceled}>Anulare</Button>
        {confirmButton} 
      </div>
      
    </Auxiliary>
  );
}

export default questionModal;
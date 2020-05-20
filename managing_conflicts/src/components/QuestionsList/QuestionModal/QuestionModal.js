import React from 'react';

import classes from './QuestionModal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import OptionsList from './OptionsList/OptionsList';

const questionModal = (props) => {
  const title = props.action === "create" ? "Creează o întrebare nouă" : "Editează aceasta întrebare"

  let options = null
  if (props.questionType === "binary" || props.questionType === "likert") {
    options = <div className={classes.Options}>
                <label>Variante de răspuns:</label>
                <OptionsList
                  type={props.questionType} 
                  options={props.options}
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
          onChange={props.questionChanged}/>
      </div>
      <div className={classes.Type}>
        <label>Tipul întrebării:</label>
        <select onChange={props.typeChanged}>
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
        <Button
          btnType="Success"
          clicked={props.saved}>Salvează</Button>
      </div>
      
    </Auxiliary>
  );
}

export default questionModal;
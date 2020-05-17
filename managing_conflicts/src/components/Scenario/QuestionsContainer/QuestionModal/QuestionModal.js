import React from 'react';

import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';
import classes from './QuestionModal.module.css';

const questionModal = (props) => {
  return (
    <Auxiliary>
      <h3 className={classes.ModalTitle}>Creează o întrebare nouă</h3>
      <div className={classes.Question}>
        <p>Întrebarea: </p>
        <input></input>
      </div>
      <div className={classes.Type}>
        <p>Tipul întrebării: </p>
        <select>
          <option value="binary">Răspuns binar</option>
          <option value="free_answer">Răspuns liber</option>
        </select>
      </div>
    </Auxiliary>
  );
}

export default questionModal;
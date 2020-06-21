import React from 'react'

import classes from './BrochureModal.module.css'
import Button from '../../../components/UI/Button/Button'
import Add from '../../../components/UI/Add/Add'


const brochureModal = (props) => {
  const options = [].map( scenario => {
    return <option value={scenario.id}>{scenario.name}</option>
  })

  const saveButton = props.selectedId !== "" ? <Button btnType="Success" clicked={props.saved}>Salvează</Button> : null

  return (
    <div>
      <h3 className={classes.ModalTitle}>Adăugați un scenariu nou</h3>
      <div className={classes.ScenarioSelector}>
        <label>Alege un scenariu existent</label>
        <select onChange={props.selected}>
          <option value="">Alege un scenariu</option>
          {options}
        </select>
      </div>
      <div>
        <Add>Creează un scenariu nou</Add> 
      </div>
      <div className={classes.Button}>
        <Button
          btnType="Danger"
          clicked={props.canceled}>Anulare</Button>
        {saveButton}
      </div>
    </div>
  )
}

export default brochureModal
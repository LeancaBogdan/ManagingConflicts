import React from 'react'

import classes from './BrochureModal.module.css'
import Button from '../../../components/UI/Button/Button'
import Add from '../../../components/UI/Add/Add'

const sceanrios_dummy = [
  {
    id: 1,
    name: "Scenario B",
    description: "This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it. This is scenario A. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1 
  },
  {
    id: 2,
    name: "Scenario C",
    description: "This is scenario B. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1
  },
  {
    id: 3,
    name: "Scenario D",
    description: "This is scenario C. All you have to do is to complete this scenario and then submit it.",
    brochure_id: 1
  },
]

const brochureModal = (props) => {
  const options = sceanrios_dummy.map( scenario => {
    return <option>{scenario.name}</option>
  })

  return (
    <div>
      <h3 className={classes.ModalTitle}>Adăugați un scenariu nou</h3>
      <div className={classes.ScenarioSelector}>
        <label>Alege un scenariu existent</label>
        <select>
          <option>Alege un scenariu</option>
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
        <Button
          btnType="Success"
          clicked={props.saved}>Salvează</Button>
      </div>
    </div>
  )
}

export default brochureModal
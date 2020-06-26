import React from 'react';

import classes from './OptionsList.module.css';
import Option from './Option/Option'


const optionsList = (props) => {
  const options = Object.keys(props.options)
    .map( key => {
      const displayPlus = parseInt(key) === Object.keys(props.options).length - 1 && props.type === "likert"
      const displayMinus = displayPlus && Object.keys(props.options).length > 2 
      return <Option 
        key={key}
        index={key}
        optionValue={props.options[key]}
        minus={displayMinus}
        minusClicked={props.minusClicked}
        plus={displayPlus}
        plusClicked={props.plusClicked}
        edited={props.edited}/>
    })

  return (
    <div className={classes.OptionsList}>
      {options}
    </div>
  );
}

export default optionsList
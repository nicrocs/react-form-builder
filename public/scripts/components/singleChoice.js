import React from 'react';
import Choice from './Choice.js';
function SingleChoice(props) {
  var choiceNodes = props.choices.map(choice => (
      <Choice key={choice.id} type="radio" text={choice.text}>
      </Choice>
    )
  );
  return (
    <div className="question">
      <fieldset>
        <legend className="questionLabel">
          {props.label}
        </legend>
        {choiceNodes}
      </fieldset>
      { props.id &&
      <button type="button" onClick={props.removeQuestion} className="remove">x</button>
      }
    </div>
  );

};

export default SingleChoice;

import React from 'react';
function LongAnswer(props) {
  return(
    <div className="question">
      <label className="questionLabel">
        {props.label}
      </label>
      <textarea></textarea>
      { props.id &&
      <button type="button" onClick={props.removeQuestion} className="remove">x</button>
      }
    </div>
  );

};

export default LongAnswer;

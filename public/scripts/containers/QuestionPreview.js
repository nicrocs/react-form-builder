import React from 'react';
import Question from './Question.js';
function QuestionPreview(props) {
  return (
    <div style={divStyle}>
      <h4>Question Preview</h4>
      <Question
        type={props.question.type}
        label={props.question.label}
        text={props.question.text}
        choices={props.question.choices}>
      </Question>
    </div>
  );
}

export default QuestionPreview;

var divStyle = {
  marginTop: 20,
  padding:10,
  border: "1px dashed #333"
};

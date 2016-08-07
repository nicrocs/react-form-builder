import React from 'react';
import Question from './Question.js';

class QuestionList extends React.Component{
  constructor(props){
    super(props);
    this.removeQuestion = this.removeQuestion.bind(this);
  }
  removeQuestion(event, id) {
    this.props.removeQuestion(id);
  }
  render() {
    const questionNodes = this.props.data.map(question =>
     (<Question
        type={question.type}
        label={question.label}
        key={question.id}
        id={question.id}
        choices={question.choices}
        removeQuestion={(e) => this.removeQuestion(e, question.id)}
      >
      </Question>));
    return (
      <div className="questionList">
        {questionNodes}
      </div>
    );
  }
};

export default QuestionList;

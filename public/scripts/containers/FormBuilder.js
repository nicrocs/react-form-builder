import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { postQuestionIfNeeded, fetchQuestionsIfNeeded, deleteQuestionIfNeeded } from '../actions';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

class FormBuilder extends React.Component{
  constructor(props) {
    super(props);
    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchQuestionsIfNeeded(this.props.url))
  }
  handleQuestionSubmit(question) {
    console.log(question, "handle submit");
    //give the question an id
    question.id = Date.now();
    this.props.dispatch(postQuestionIfNeeded(question, this.props.url));
  }
  removeQuestion(id) {
    var self = this;
    if(confirm('Are you sure you want to delete this question?')) {
      this.props.dispatch(deleteQuestionIfNeeded(id, this.props.url));
    }
  }
  render() {
    return (
      <div className="questionBox">
        <div className="questionFormColumn">
          <QuestionForm
            QuestionSubmit={ this.handleQuestionSubmit }
          />
        </div>
        <div className="questionListColumn">
          <h1>Questions</h1>
          <QuestionList data={ this.props.items } removeQuestion={ this.removeQuestion }/>
        </div>
      </div>
    );
  }
};

FormBuilder.propTypes = {
  url: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps({questions}) {
  return {
    items: questions.items,
    isFetching: questions.isFetching,
    lastUpdated: questions.lastUpdated
  }
}

export default connect(mapStateToProps)(FormBuilder);

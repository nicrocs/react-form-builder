import React from 'react';
import ChoiceInput from './ChoiceInput';
import QuestionPreview from './QuestionPreview';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
    }
    this.handleLabelChange = this.handleLabelChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleChoices = this.handleChoices.bind(this);
    this.addChoice = this.addChoice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLabelChange(event) {
    this.state.question.label = event.target.value;
    this.setState({question: this.state.question});
  }
  handleTypeChange(e) {
    this.state.question.type = e.target.value;
    if (e.target.value === "single_choice" || e.target.value === "multiple_choice") {
      this.state.question.choices = [{
        id:0,
        text:""
      }]
    }

    this.setState({question:this.state.question});
  }
  handleChoices(choiceValue, id) {
    const choices = this.state.question.choices.map(choice => {
      if (choice.id === id) {
        return {id: id, text:choiceValue};
      } else {
        return choice
      }
    });
    this.state.question.choices = choices;
    this.setState({question: this.state.question});
  }
  addChoice() {
    const choiceId = this.state.question.choices.length;
    this.state.question.choices.push({
      id:choiceId,
      text:""
    });
    this.setState({question: this.state.question});
  }
  removeChoice(id) {
    const choices = this.state.question.choices.filter(choice =>
      choice.id !== id
    );
    this.state.question.choices = choices;
    this.setState({question: this.state.question});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.QuestionSubmit(this.state.question);
    e.target.reset();
    this.setState({question:{}});
  }
  render() {
    const choices = (this.state.question.type === "single_choice" || this.state.question.type === "multiple_choice");
    return (
      <form className="questionForm" onSubmit={this.handleSubmit}>
        <select onChange={this.handleTypeChange} value={this.props.type}>
          <option value="">Select a question type</option>
          <option value="short_answer">Short Answer</option>
          <option value="long_answer">Long Answer</option>
          <option value="single_choice">Single Choice</option>
          <option value="multiple_choice">Multiple Choice</option>
        </select>
        <input
          type="text"
          placeholder="Question Label"
          value={this.props.label}
          onChange={this.handleLabelChange}
        />
        {choices &&
          <ChoiceInput
            type={this.state.question.type}
            choiceTextChange={this.handleChoices}
            choices={this.state.question.choices}
            addChoice={this.addChoice}
            removeChoice={this.removeChoice}
          />
        }
        <button type="submit">Save</button>
        <QuestionPreview question={this.state.question} />
      </form>
    );
  }
};

export default QuestionForm;

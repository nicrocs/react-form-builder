import React from 'react';

class ChoiceInput extends React.Component{
  constructor(props) {
    super(props);
    this.addChoiceInput = this.addChoiceInput.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.removeChoice = this.removeChoice.bind(this);
  }
  addChoiceInput() {
    this.props.addChoice();
  }
  handleTextChange(e, key) {
    this.props.choiceTextChange(e.target.value, key);
  }
  removeChoice(e, key) {
    this.props.removeChoice(key);
  }
  render() {
      const choices = this.props.choices.map((choice) =>
        (<div key={choice.id} className="question">
          <input
            type="text"
            placeholder="Question Choice Text"
            defaultValue={choice.text}
            onChange={(e) => this.handleTextChange(e, choice.id)}
          />
          <button type="button" onClick={(e) => this.removeChoice(e, choice.id)} className="remove">x</button>
        </div>)
      );
    return (
      <div>
        {choices}
        <button type="button" onClick={this.addChoiceInput}>Add Choice</button>
      </div>
    );
  }
};

export default ChoiceInput;

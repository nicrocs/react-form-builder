import React from 'react';
import ShortAnswer from '../components/ShortAnswer.js';
import LongAnswer from '../components/LongAnswer.js';
import MultipleChoice from '../components/MultipleChoice.js';
import SingleChoice from '../components/singleChoice.js';

var Question = React.createClass({
  render: function() {
    var answerTypes = {
      short_answer: ShortAnswer,
      long_answer: LongAnswer,
      single_choice: SingleChoice,
      multiple_choice: MultipleChoice
    };
    if (this.props.type) {
      return answerTypes[this.props.type](this.props);
    } else {
      return answerTypes['short_answer'](this.props);
    }

  }
});

export default Question;

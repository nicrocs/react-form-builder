import React from 'react';
import ShortAnswer from '../components/ShortAnswer.js';
import LongAnswer from '../components/LongAnswer.js';
import MultipleChoice from '../components/MultipleChoice.js';
import SingleChoice from '../components/singleChoice.js';

function Question(props){
  const answerTypes = {
    short_answer: ShortAnswer,
    long_answer: LongAnswer,
    single_choice: SingleChoice,
    multiple_choice: MultipleChoice
  };
  if (props.type) {
    return answerTypes[props.type](props);
  } else {
    return answerTypes['short_answer'](props);
  }
};

export default Question;

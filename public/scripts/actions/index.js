import fetch from 'isomorphic-fetch'

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const POST_QUESTION = 'POST_QUESTION'
export const DELETE_QUESTION = 'DELETE_QUESTION'

function postQuestion() {
  return {
    type: POST_QUESTION
  }
}

function postAndReceiveQuestion(question, url) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const data = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(question)
  }
  return dispatch => {
    dispatch(postQuestion());
    return fetch(url, data)
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)))
  }
}

function shouldPostQuestion(state) {
  const questions = state.questions;
  if (!questions.isPosting) {
    return true
  } else {
    return questions.didInvalidate
  }
}

export function postQuestionIfNeeded(question, url) {
  return (dispatch, getState) => {
    if (shouldPostQuestion(getState())) {
      return dispatch(postAndReceiveQuestion(question, url))
    }
  }
}

function deleteQuestion() {
  return {
    type: DELETE_QUESTION,
  }
}

function shouldDeleteQuestion(state) {
  const questions = state.questions;
  if (!questions.isDeleting) {
    return true
  } else {
    return questions.didInvalidate
  }
}

function deleteAndReceiveQuestion(id, url) {
  return dispatch => {
    dispatch(deleteQuestion());
    return fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)))
  }
}

export function deleteQuestionIfNeeded(id, url) {
  return (dispatch, getState) => {
    if (shouldDeleteQuestion(getState())) {
      return dispatch(deleteAndReceiveQuestion(id, url))
    }
  }
}

function requestQuestions(url) {
  return {
    type: REQUEST_QUESTIONS,
    url
  }
}

function receiveQuestions(json) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: json,
    receivedAt: Date.now()
  }
}

function fetchQuestions(url) {
  return dispatch => {
    dispatch(requestQuestions(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)))
  }
}

function shouldFetchQuestions(state) {
  const questions = state.questions;
  if (!questions.items.length) {
    return true
  } else if (questions.isFetching) {
    return false
  } else {
    return questions.didInvalidate
  }
}

export function fetchQuestionsIfNeeded(url) {
  return (dispatch, getState) => {
    if (shouldFetchQuestions(getState())) {
      return dispatch(fetchQuestions(url))
    }
  }
}

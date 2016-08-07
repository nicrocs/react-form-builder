import { combineReducers } from 'redux'
import {
  DELETE_QUESTION, POST_QUESTION,
  REQUEST_QUESTIONS, RECEIVE_QUESTIONS
} from '../actions/index.js'

function questions(state = {
  isFetching: false,
  isPosting: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        isPosting: false,
        isDeleting: false,
        didInvalidate: false,
        items: action.questions,
        lastUpdated: action.receivedAt
      })
    case POST_QUESTION:
      return Object.assign({}, state, {
        isPosting: true,
        didInvalidate: false,
      })
    case DELETE_QUESTION:
    return Object.assign({}, state, {
      isDeleting: true,
      didInvalidate: false,
    })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  questions
})

export default rootReducer

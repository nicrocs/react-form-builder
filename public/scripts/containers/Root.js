import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import FormBuilder from './FormBuilder';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <FormBuilder url="/api/questions" />
      </Provider>
    )
  }
}

/*global alert, confirm, console, Debug, opera, prompt, WSH */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './app/index';
import store from './app/redux/store';
// const reducer = (state = initialState, action) => {
//   if (action.type === 'IS_SHOW_FORM') {
//     return { ...state, isShowForm: !state.isShowForm };
//   }
//   if (action.type === 'IS_ADD_PERSONNEL') {
//     return {
//       ...state,
//       personnel: [{
//         id: state.personnel.length + 1,
//         first_name: action.name,
//         last_name: 'add',
//         email: action.email,
//         gender: 'Female',
//         ip_address: '123'
//       }].concat(state.personnel)
//     };
//   }
//   return state;
// };
export default class App extends Component<{}> {
  render() {
    console.log('*********All state of redux store*********: ', store.getState());
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

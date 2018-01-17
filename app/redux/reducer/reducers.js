import { combineReducers } from 'redux';

import addNewPersonnelReducer from './addNewPersonnelReducer';
import showFormReducer from './showFormReducer';

const reducer = combineReducers({
  addNewPersonnel: addNewPersonnelReducer,
  showForm: showFormReducer
});

export default reducer;

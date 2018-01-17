const showFormReducer = (state = false, action) => {
  if (action.type === 'IS_SHOW_FORM') return !state;
  return state;
};

export default showFormReducer;

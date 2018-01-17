import personnelArr from './../../assets/dataPersonal';

const addNewPersonnelReducer = (state = personnelArr, action) => {
 if (action.type === 'IS_ADD_PERSONNEL') {
   return [{
     id: state.length + 1,
     first_name: action.name,
     last_name: 'add',
     email: action.email,
     gender: 'Female',
     ip_address: '123'
   }].concat(state);
 }
 return state;
};

export default addNewPersonnelReducer;

export function isShowForm() {
  return { type: 'IS_SHOW_FORM' };
}

export function isAddPorsonnel(name, email) {
  return { type: 'IS_ADD_PERSONNEL', name, email };
}

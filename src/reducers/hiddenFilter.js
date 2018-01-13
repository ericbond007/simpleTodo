const hiddenFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_HIDDEN_FILTER':
      return action.filter
    default:
      return state
  }
}

export default hiddenFilter

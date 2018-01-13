import { combineReducers } from 'redux';
import todos from './todos';
import hiddenFilter from './hiddenFilter';

const todoApp = combineReducers({
  todos,
  hiddenFilter
})

export default todoApp

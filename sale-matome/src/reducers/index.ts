import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import books from './books'

export default combineReducers({
  books,
  visibilityFilter,
})

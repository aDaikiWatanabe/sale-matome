import { Type, VisibilityFilterAction } from '../actions/visibilityFilter'
import { VisibilityFilter } from '../models/VisibilityFilter'

const initVisibilityFilter: VisibilityFilter = {
  siteFilter: 'all',
  searchFilter: '',
}

const visibilityFilter = (state: VisibilityFilter = initVisibilityFilter, action: VisibilityFilterAction) => {
  switch (action.type) {
    case Type.SET_SEARCH_FILTER:
      return { ...state, searchFilter: action.payload.searchFilter }
    case Type.SET_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter

import { Type, VisibilityFilterAction } from '../actions/visibilityFilter'
import { VisibilityFilter } from '../models/VisibilityFilter'

const initVisibilityFilter: VisibilityFilter = {
  siteFilter: 'all',
  searchFilter: '',
  searchAuthorFilter: '',
  sortValue: 'default',
  sortOrder: 1,
  tagFilter: new Set<string>(),
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const visibilityFilter = (state: VisibilityFilter = initVisibilityFilter, action: VisibilityFilterAction) => {
  switch (action.type) {
    case Type.SET_SEARCH_FILTER:
      return { ...state, searchFilter: action.payload }
    case Type.SET_SITE_FILTER:
      return { ...state, siteFilter: action.payload }
    case Type.SET_SORT_VALUE:
      return { ...state, sortValue: action.payload }
    case Type.SET_SORT_ORDER:
      return { ...state, sortOrder: action.payload }
    case Type.ADD_TAG_FILTER:
      state.tagFilter.add(action.payload as string)
      return { ...state }
    case Type.REMOVE_TAG_FILTER:
      state.tagFilter.delete(action.payload as string)
      return { ...state }
    default:
      return state
  }
}

export default visibilityFilter

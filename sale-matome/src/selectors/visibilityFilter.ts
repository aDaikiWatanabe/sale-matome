import { VisibilityFilter } from '../models/VisibilityFilter'
import { RootState } from '../store'

export const getVisibilityFilter = (state: RootState) => {
  return state.visibilityFilter as VisibilityFilter
}

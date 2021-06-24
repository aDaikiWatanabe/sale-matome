import { VisibilityFilter } from '../models/VisibilityFilter'
import { RootState } from '../store'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getVisibilityFilter = (state: RootState) => {
  return state.visibilityFilter as VisibilityFilter
}

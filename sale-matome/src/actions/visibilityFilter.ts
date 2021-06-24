export const Type = {
  SET_SEARCH_FILTER: 'SET_SEARCH_FILTER',
  SET_FILTER: 'SET_FILTER',
} as const

export const setFilter = (filter: string) => ({
  type: Type.SET_FILTER,
  payload: { filter },
})

export const setSearchFilter = (searchFilter: string) => ({
  type: Type.SET_SEARCH_FILTER,
  payload: { searchFilter },
})

export type VisibilityFilterAction = ReturnType<typeof setFilter> | ReturnType<typeof setSearchFilter>

import { siteFilterType } from '../models/VisibilityFilter'

export const Type = {
  SET_SEARCH_FILTER: 'SET_SEARCH_FILTER',
  SET_SITE_FILTER: 'SET_SITE_FILTER',
  SET_FILTER: 'SET_FILTER',
} as const

type ActionCreate<TP> = (payload: TP) => { type: string; payload: TP }

export const setFilter: ActionCreate<string> = (filter: string) => ({
  type: Type.SET_FILTER,
  payload: filter,
})

export const setSearchFilter: ActionCreate<string> = (searchFilter: string) => ({
  type: Type.SET_SEARCH_FILTER,
  payload: searchFilter,
})

export const setSiteFilter: ActionCreate<siteFilterType> = (siteFilter: siteFilterType) => ({
  type: Type.SET_SITE_FILTER,
  payload: siteFilter,
})

export type VisibilityFilterAction = ReturnType<typeof setFilter> | ReturnType<typeof setSearchFilter>

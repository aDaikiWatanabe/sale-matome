import { siteFilterType, sortValueType, sortOrderType } from '../models/VisibilityFilter'

export const Type = {
  SET_SEARCH_FILTER: 'SET_SEARCH_FILTER',
  SET_SITE_FILTER: 'SET_SITE_FILTER',
  SET_SORT_VALUE: 'SET_SORT_VALUE',
  SET_SORT_ORDER: 'SET_SORT_ORDER',
} as const

type ActionCreate<TP> = (payload: TP) => { type: string; payload: TP }

export const setSearchFilter: ActionCreate<string> = (searchFilter: string) => ({
  type: Type.SET_SEARCH_FILTER,
  payload: searchFilter,
})

export const setSiteFilter: ActionCreate<siteFilterType> = (siteFilter: siteFilterType) => ({
  type: Type.SET_SITE_FILTER,
  payload: siteFilter,
})

export const setSortValue: ActionCreate<sortValueType> = (sortValue: sortValueType) => ({
  type: Type.SET_SORT_VALUE,
  payload: sortValue,
})

export const setSortOrder: ActionCreate<sortOrderType> = (sortOrder: sortOrderType) => ({
  type: Type.SET_SORT_ORDER,
  payload: sortOrder,
})

export type VisibilityFilterAction =
  | ReturnType<typeof setSearchFilter>
  | ReturnType<typeof setSortValue>
  | ReturnType<typeof setSortOrder>

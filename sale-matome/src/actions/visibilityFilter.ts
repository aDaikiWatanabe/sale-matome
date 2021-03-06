import { siteFilterType, sortValueType, sortOrderType } from '../models/VisibilityFilter'

export const Type = {
  SET_SEARCH_FILTER: 'SET_SEARCH_FILTER',
  SET_AUTHOR_FILTER: 'SET_AUTHOR_FILTER',
  SET_SITE_FILTER: 'SET_SITE_FILTER',
  SET_SORT_VALUE: 'SET_SORT_VALUE',
  SET_SORT_ORDER: 'SET_SORT_ORDER',
  ADD_TAG_FILTER: 'ADD_TAG_FILTER',
  REMOVE_TAG_FILTER: 'REMOVE_TAG_FILTER',
} as const

type ActionCreate<TP> = (payload: TP) => { type: string; payload: TP }

export const setSearchFilter: ActionCreate<string> = (searchFilter: string) => ({
  type: Type.SET_SEARCH_FILTER,
  payload: searchFilter,
})

export const setAuthorFilter: ActionCreate<string> = (searchAuthorFilter: string) => ({
  type: Type.SET_AUTHOR_FILTER,
  payload: searchAuthorFilter,
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

export const addTagFilter: ActionCreate<string> = (tag: string) => ({
  type: Type.ADD_TAG_FILTER,
  payload: tag,
})

export const removeTagFilter: ActionCreate<string> = (tag: string) => ({
  type: Type.REMOVE_TAG_FILTER,
  payload: tag,
})

export type VisibilityFilterAction =
  | ReturnType<typeof setSearchFilter>
  | ReturnType<typeof setAuthorFilter>
  | ReturnType<typeof setSortValue>
  | ReturnType<typeof setSortOrder>
  | ReturnType<typeof addTagFilter>
  | ReturnType<typeof removeTagFilter>

import { siteType } from './siteType'

export type siteFilterType = 'all' | siteType
export type sortValueType = 'default' | 'title' | 'price' | 'author'
export type sortOrderType = -1 | 1

export interface VisibilityFilter {
  siteFilter: siteFilterType
  searchFilter: string
  sortValue: sortValueType
  sortOrder: sortOrderType
}

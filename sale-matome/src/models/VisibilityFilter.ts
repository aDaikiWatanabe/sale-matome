import { siteType } from './siteType'

export type siteFilterType = 'all' | siteType

export interface VisibilityFilter {
  siteFilter: siteFilterType
  searchFilter: string
}

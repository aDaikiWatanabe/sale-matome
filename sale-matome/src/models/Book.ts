import { siteType } from './siteType'

export interface Book {
  id: string
  title: string
  authors: string[]
  tag: string[]
  purchaseLink: string
  site: siteType
  price: number
}

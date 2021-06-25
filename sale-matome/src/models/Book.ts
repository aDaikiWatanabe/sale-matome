import { siteType } from './siteType'

export interface Book {
  id: string
  title: string
  author: string
  tag: string[]
  purchaseLink: string
  site: siteType
  price: number
}

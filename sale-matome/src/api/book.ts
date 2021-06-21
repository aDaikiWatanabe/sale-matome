import { resolve } from 'dns'

export type Book = {
  Author: string
  Title: string
  PurchaseLink: string
  Price: number
  Tag: string[]
}

export const getBookList = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('ok')
  })
}

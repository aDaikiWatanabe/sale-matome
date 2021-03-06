import { Book } from '../models/Book'
import { VisibilityFilter } from '../models/VisibilityFilter'
import { RootState } from '../store'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getBooks = (state: RootState) => {
  return state.books as Book[]
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getBooksByVisibilityFilter = (state: RootState) => {
  const allBooks = getBooks(state)
  const filter = state.visibilityFilter as VisibilityFilter
  return allBooks
    .filter(
      (book: Book) =>
        book.title.includes(filter.searchFilter) &&
        book.authors.some(author => author.includes(filter.searchAuthorFilter)) &&
        (filter.siteFilter === 'all' ? true : book.site === filter.siteFilter) &&
        (filter.tagFilter.size === 0 ? true : book.tag.some(tag => Array.from(filter.tagFilter).includes(tag)))
    )
    .sort((a: Book, b: Book) => {
      switch (filter.sortValue as string) {
        case 'default':
          return 1 * filter.sortOrder
        case 'title':
          if (a.title < b.title) {
            return -1 * filter.sortOrder
          }
          if (a.title > b.title) {
            return 1 * filter.sortOrder
          }
          return 0
        case 'author':
          if (a.authors < b.authors) {
            return -1 * filter.sortOrder
          }
          if (a.authors > b.authors) {
            return 1 * filter.sortOrder
          }
          return 0
        case 'price':
          if (a.price < b.price) {
            return -1 * filter.sortOrder
          }
          if (a.price > b.price) {
            return 1 * filter.sortOrder
          }
          return 0
        default:
          return 0
      }
    })
}

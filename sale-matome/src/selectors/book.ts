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
  if (filter.siteFilter === 'all') {
    return allBooks.filter((book: Book) => book.title.includes(filter.searchFilter))
  } else {
    return allBooks.filter((book: Book) => book.title.includes(filter.searchFilter) && book.site === filter.siteFilter)
  }
}

import { Book } from '../models/Book'
import { VisibilityFilter } from '../models/VisibilityFilter'
import { RootState } from '../store'

export const getBooks = (state: RootState) => {
  return state.books as Book[]
}

export const getBooksByVisibilityFilter = (state: RootState) => {
  const allBooks = getBooks(state)
  return allBooks.filter((book: Book) => book.title.includes((state.visibilityFilter as VisibilityFilter).searchFilter))
}

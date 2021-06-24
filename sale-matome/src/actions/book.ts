import { Book } from '../models/Book'

export const Type = {
  UPDATE_BOOK: 'UPDATE_BOOK',
  SET_BOOKS: 'SET_BOOKS',
} as const

export const updateBook = () => ({
  type: Type.UPDATE_BOOK,
})

export const setBooks = (books: Book[]) => ({
  type: Type.SET_BOOKS,
  payload: { books },
})

export type BookAction = ReturnType<typeof updateBook> | ReturnType<typeof setBooks>

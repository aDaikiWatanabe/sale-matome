import { Book } from '../models/Book'

export const Type = {
  SET_BOOKS: 'SET_BOOKS',
} as const

type ActionCreate<TP> = (payload: TP) => { type: string; payload: TP }

export const setBooks: ActionCreate<Book[]> = (books: Book[]) => ({
  type: Type.SET_BOOKS,
  payload: books,
})

export type BookAction = ReturnType<typeof setBooks>

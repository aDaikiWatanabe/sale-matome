import { Book } from '../models/Book'
import { Type, BookAction } from '../actions/book'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const books = (state: Book[] = [], action: BookAction) => {
  switch (action.type) {
    case Type.SET_BOOKS: {
      const books = action.payload
      return books
    }
  }
  return state
}

export default books

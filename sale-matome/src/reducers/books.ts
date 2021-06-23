import { Book } from '../models/Book'
import { Type, BookAction } from '../actions/book'

const books = (state: Book[] = [], action: BookAction) => {
  switch (action.type) {
    case Type.SET_BOOKS: {
      const { books } = action.payload
      return books
    }
  }
  return state
}

export default books

import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksByVisibilityFilter } from '../selectors/book'
import Book from './Book'
import { setBooks } from '../actions/book'

const BookList: React.FC = () => {
  const filteredBooks = useSelector(getBooksByVisibilityFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/book`)
      .then(response => dispatch(setBooks(response.data.map((x: any) => x.data))))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      {filteredBooks.map(book => (
        // TODO: keyの追加。データに入ってるユニークな値を使いたい。今はダミーからのレスポンスにそれが入ってない。
        <Book book={book} />
      ))}
    </>
  )
}

export default BookList

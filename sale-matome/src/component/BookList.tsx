import axios from 'axios'
import { useEffect, useState } from 'react'
import Book, { BookType } from './Book'

// type Props = {
// 	filter: string,
// 	sort: number,
// 	search: string
// }

const BookList: React.FC = () => {
  const [bookList, setBookList] = useState<BookType[]>([])
  // 最初だけ更新する
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/book`)
      .then(response => setBookList(response.data.map((x: any) => x.data)))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      {bookList.map(book => (
        // TODO: keyの追加。データに入ってるユニークな値を使いたい。今はダミーからのレスポンスにそれが入ってない。
        <Book book={book} />
      ))}
    </>
  )
}

export default BookList

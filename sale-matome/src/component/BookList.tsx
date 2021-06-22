import axios from 'axios'
import { useEffect, useState } from 'react'
import Book, { BookType } from './Book'

// type Props = {
// 	filter: string,
// 	sort: number,
// 	search: string
// }

let fullBookList: BookType[] = []
axios
  .get(`${process.env.REACT_APP_API_SERVER}/book`)
  .then(response => (fullBookList = response.data.map((x: any) => x.data)))
  .catch(error => console.log(error))

const BookList: React.FC = () => {
  const [currentBookList, setCurrentBookList] = useState<BookType[]>([])
  useEffect(() => {
    setCurrentBookList(fullBookList)
  }, [])

  return (
    <>
      {currentBookList.map(book => (
        // TODO: keyの追加。データに入ってるユニークな値を使いたい。今はダミーからのレスポンスにそれが入ってない。
        <Book book={book} />
      ))}
    </>
  )
}

export default BookList

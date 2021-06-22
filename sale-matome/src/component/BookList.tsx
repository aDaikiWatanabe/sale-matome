import axios from 'axios'
import { useEffect, useState } from 'react'
import Book, { BookType } from './Book'

// type Props = {
// 	filter: string,
// 	sort: number,
// 	search: string
// }

const BookList: React.FC = () => {
  const [fullBookList, setFullBookList] = useState<BookType[]>([])
  const [currentBookList, setCurrentBookList] = useState<BookType[]>(fullBookList)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/book`)
      .then(response => setFullBookList(response.data.map((x: any) => x.data)))
      .catch(error => console.log(error))
  }, [])
  useEffect(() => {
    setCurrentBookList(fullBookList)
  }, [fullBookList])

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

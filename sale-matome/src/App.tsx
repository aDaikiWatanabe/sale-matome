import './App.css'
import Header from './component/Header'
import Book, { BookType } from './component/Book'
import BookList from './component/BookList'
import { Box } from '@material-ui/core'

const book: BookType = {
  title: 'バカとテストと召喚獣',
  author: '高橋',
  price: 200,
  purchaseLink: 'http://example.com',
  tag: ['SF', 'ホラー'],
}

const App: React.FC = () => {
  return (
    <Box className="App">
      <Header />
      <Box className="Body" mt="8rem" mx="auto">
        <BookList></BookList>
        <Book book={book} />
      </Box>
    </Box>
  )
}
export default App
